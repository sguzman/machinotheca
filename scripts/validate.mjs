// Dependency-free structural and high-confidence public-release guard.
// This does NOT certify that arbitrary prose is suitable for publication.
// A semantic/editorial and rights review is still required for every import.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, relative, extname } from 'node:path';
const root = resolve(import.meta.dirname, '..');
const check = (condition, message) => { if (!condition) throw new Error(message); };
const load = p => JSON.parse(readFileSync(resolve(root, p), 'utf8'));
const exists = p => existsSync(resolve(root, p));
const required = [
  'README.md', 'MIGRATION.md', 'CONSTITUTION.md', 'AGENTS.md',
  'LICENSE', 'manifest.json', 'index.html',
  'ontology/README.md', 'ontology/ontology.json',
  'ontology/schema/specimen.schema.json',
  'gallery/README.md', 'gallery/index.json'
];
for (const p of required) check(exists(p), 'Missing required public file: '+p);
const project = load('manifest.json');
const onto = load('ontology/ontology.json');
const schema = load('ontology/schema/specimen.schema.json');
const gallery = load('gallery/index.json');
check(project.id === 'machinotheca', 'Project identity mismatch');
check(project.ontology.vocabulary === 'ontology/ontology.json', 'Vocabulary path mismatch');
check(project.ontology.specimen_schema === 'ontology/schema/specimen.schema.json',
  'Specimen schema path mismatch');
check(project.gallery.index === 'gallery/index.json', 'Gallery path mismatch');
check(onto.version === project.versions.ontology, 'Ontology version mismatch');
check(schema.$schema === 'https://json-schema.org/draft/2020-12/schema',
  'Unsupported specimen schema version');
check(Array.isArray(onto.classes) && onto.classes.length >= 20, 'Incomplete vocabulary');
check(Array.isArray(onto.relations) && onto.relations.length >= 15, 'Incomplete relation vocabulary');
check(Array.isArray(gallery.specimens), 'Gallery index must have an array');
check(project.publication.published_specimens === gallery.specimens.length,
  'Gallery manifest count mismatch');
const classIds = onto.classes.map(x => x.id);
check(new Set(classIds).size === classIds.length, 'Duplicate ontology classes');
const relations = onto.relations;
check(new Set(relations.map(x => x.id)).size === relations.length, 'Duplicate ontology relations');
for (const r of relations)
  for (const c of [...r.domain.split('|'), ...r.range.split('|')])
    check(classIds.includes(c), 'Unknown type '+c+' in relation '+r.id);
const ids = new Set(), slugs = new Set();
for (const e of gallery.specimens) {
  check(e.status === 'published', 'Gallery includes an unpublished item');
  check(typeof e.id === 'string' && !ids.has(e.id), 'Invalid/duplicate gallery ID');
  check(typeof e.slug === 'string' && !slugs.has(e.slug), 'Invalid/duplicate gallery slug');
  check(typeof e.manifest_path === 'string' && e.manifest_path.startsWith('specimens/'),
    'Gallery item lacks local specimen manifest');
  check(exists(e.manifest_path), 'Missing specimen manifest: '+e.manifest_path);
  const specimen = load(e.manifest_path);
  check(specimen.id === e.id && specimen.slug === e.slug &&
        specimen.status === 'published', 'Gallery/specimen identity mismatch');
  for (const file of [specimen.ontology.path, specimen.sources,
                      specimen.presentation.scene_path,
                      specimen.presentation.part_binding_path])
    check(typeof file === 'string' && file.length > 0 && exists(file),
      'Specimen public self-containment failure: '+String(file));
  ids.add(e.id); slugs.add(e.slug);
}
const ignore = new Set(['.git', 'node_modules', 'target', '.cache', 'test-results']);
const scannedExt = new Set(['.md','.json','.js','.mjs','.html','.css','.yml','.yaml','.toml','.txt','.svg']);
const highConfidence = [
  {name:'credential material', pattern:/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/},
  {name:'GitHub access token',pattern:/\b(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{30,}\b/},
  {name:'GitHub fine-grained token',pattern:/\bgithub_pat_[A-Za-z0-9_]{30,}\b/},
  {name:'literal dialogue transcript marker',pattern:/(?:^|\n)\s*(?:USER|ASSISTANT|SYSTEM):\s+\S/m},
  {name:'private workstation file link',pattern:/file:\/\/\/(?:home|Users)\/[^\s"'<>]+/}
];
const all = [];
function walk(directory) {
  for (const name of readdirSync(directory)) {
    if (ignore.has(name)) continue;
    const full = resolve(directory,name);
    if (statSync(full).isDirectory()) { walk(full); continue; }
    const file = relative(root,full);
    if (!scannedExt.has(extname(name))) continue;
    all.push(file);
    const value = readFileSync(full,'utf8');
    for(const rule of highConfidence)
      check(!rule.pattern.test(value), 'Potential unsafe public material ('+rule.name+') in '+file);
  }
}
walk(root);
console.log('PASS Machinotheca: '+all.length+' text files scanned; '+
            classIds.length+' classes, '+relations.length+' relations, '+
            gallery.specimens.length+' published exhibits.');
console.log('Note: automated checks are not a complete privacy, provenance or license audit.');
