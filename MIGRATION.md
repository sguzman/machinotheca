# Machinotheca migration plan

**Status:** Plan approved for staged implementation; no specimen source tree is considered transferred by creating this plan.

**Objective:** Move substantially the entire engineering research workspace, including finished and unfinished technical work, and the full existing public engineering-demo showcase into Machinotheca. This repository hosts both the working GitHub Pages exhibition and the complete public engineering ontology. Preserve **technical depth, experimental history, internal work state, diagnostics and working presentation**. The owner selects what is prominently shown on the site; publication in Git does not imply a gallery feature.

The default is **migrate the technical material**, not curatorial exclusion. Completed, active, abandoned, unsuccessful and speculative engineering work; task queues, state logs, diagnostics, research methods and modeling code are all in scope. Do not suppress them just because they are unfinished. Copy safely attributable technical content faithfully where possible; remove or neutralize any embedded private conversation or personal phrasing. Re-author only content that needs cleansing, clarification or independence. Never transplant the private Git history.

## Finished-product contract

Every published specimen is required to have all of:

1. **Identity:** stable identifier, product family, manufacturer, exact revision or representative revision, operator-facing summary.
2. **Ontology:** component/assembly graph, systems and subsystems, interfaces, constraints, flows, kinematics or electrical/logical relationships as applicable, materials/controls/service, and models.
3. **Evidence:** stable source identifiers, applicability, confidence/provenance class, rights status, derivations, representative assumptions, contradictions and named unknowns.
4. **Interactive presentation:** locally served usable model, real controls, inspected part identity and several meaningful views; preserve the operating causal behavior, not screenshots alone.
5. **Reader connection:** from gallery card to specimen overview, any selected 3D part to its ontology entry and evidence, and from technical entry back to the relevant scene/view.
6. **Reproducible verification:** build/serve instructions, deterministic browser tests, asset audit, visual capture and an honest record of residual modeling limitations.

A featured gallery exhibit must connect its working scene and formal technical model. **A technical record can be publicly published in the repository before it has a working scene or the owner's permission to feature it.** The public research archive, queue and experiments are not the same thing as the curated gallery.

## Repository target layout

\`\`\`text
README.md                 entry point and release status
CONSTITUTION.md            publication/independence rules
AGENTS.md                  contributor rules
MIGRATION.md               phased transition plan
manifest.json              stable project metadata
ontology/
  README.md                human-readable domain contract
  ontology.json            classes, relations, evidence tiers, revisions
  schema/
    specimen.schema.json   specimen and presentation mapping contract
gallery/
  README.md                exhibition overview
  index.json               only actually published, QA-verified exhibits
  index.html               public gallery browser after first migration
specimens/
  eta-unitas-6497-2/
  polaroid-sx-70/
  nintendo-game-boy-dmg-01/
  ibm-selectric-721/
  (each specimen holds as much of its research, experiments, task
   state and diagnostics as can safely be published; featured exhibits
   also have manifest.json, ontology/, sources/, models/, guide/,
   scene/ and relevant tests)
shared/                    only common runtime and visualization utilities
tests/                     cross-specimen ontology, causal, visual and site QA
scripts/                   safe migration/validation utilities
.github/workflows/         CI, reproducible checks, GitHub Pages deployment
\`\`\`

These paths describe an architecture, not a license to manufacture empty exhibits. A specimen directory, index entry, or gallery card is added **with actual content**, never as a placeholder.

### Canonical ownership

Machinotheca owns both technical models and their public projections. There is no hidden external authoritative model required at runtime.

- \`ontology/ontology.json\` governs global concepts and relations.
- \`specimens/<slug>/manifest.json\` fixes the public specimen identity and version.
- \`specimens/<slug>/ontology/\` contains authoritative, versioned specimen data.
- \`specimens/<slug>/scene/\` renders that data and may contain explicitly identified explanatory approximations.
- \`gallery/index.json\` points only at released local specimen manifests and local routes.
- \`sources/\`, \`models/\`, and public technical guides preserve evidence, assumptions and meaningful detail instead of reducing the ontology to decorative cards.

**Cross-link invariant:** specimen IDs, part IDs and mechanism IDs are stable across machine data, guide text and UI selections. Selection should survive switching among physical, electrical, logical or temporal views when those views exist.

### Portability

All gallery navigation and scene resources must work under a configurable GitHub Pages project subpath, not assume deployment at a domain root. Vendor dependencies must have documented public redistribution rights; any public CDN fallback must be optional or explicitly described. Keep old public URLs working until equivalent new pages are deployed and verified.

## Migration phases

### M0 — Independent baseline and publication rules

**Create:** a professional README, project constitution, agent rules, versioned global ontology, JSON schema, manifest, honestly empty gallery index, and a real migration plan.

**Gate:** no private working-history imports, no unreviewed source copy, no inaccessible private dependency. The existing repository license is acknowledged without pretending it licenses third-party material.

### M1 — Technical ontology and evidence translation

Rebuild **all releasable engineering ontology**, including system identities, components, hierarchical assemblies, part interfaces, mechanical/electrical/signal/material flows, geometry and dimension constraints, derived quantities, motions, state machines, failure and maintenance, manufacturing, materials and tribology, provenance, model fidelity, comparative/revision applicability, and public projection semantics.

Do not merely transplant document names. Convert narrative concepts into machine-readable schema and populated specimen relations while preserving the full useful explanatory text.

**Include, subject to individual safety/rights review:** domain analyses, reference-grounded construction methods, mathematical derivations, geometry procedures, baseline/model results, reproducible diagnostics, technical tables and source ledgers.

**Do not expose:** private correspondence, conversations, personal venting, personal records, credentials, secrets, private-machine access details, unlicensed copied media or functioning dependencies on the private research environment. **Technical progress logs, task history, candidate queue entries, failed experiments and diagnostics are eligible public research content once private language and unsafe references are removed.**

**Gate:** full ontology is self-contained, schema validated, and every material historical claim has clear evidence or an explicit hypothesis label.

### M2 — First working exhibit: ETA / Unitas 6497-2

Bring over the existing publicly accessible watch runtime, including actual mechanism motion, winding, power transmission, gear train, escapement and regulating behavior, inspectable geometry, views, and explanatory interactions. Review sound/media provenance separately.

Attach the complete watch-specific public technical ontology and guide, with manufacturer/source/revision applicability and clear distinction between calibrated values, derivations and presentation choices.

**Gate:** original public behavior preserved, scene works directly from this repository, ontology links resolve, QA and asset rights pass, and gallery card becomes visible.

### M3 — Polaroid SX-70

Bring the working original manual-focus folding camera scene, folding/deployment and joint sequence, optics, reflex/light path, exposure controls, film transport and the relevant chemistry model. Preserve its historical variant boundary and the accepted residual geometric/visual limitations rather than claiming metrology that was never performed.

**Gate:** folding and causal cycle do not regress, technical model is independently available, and gallery links work bidirectionally.

### M4 — Nintendo Game Boy DMG-01

Preserve its genuinely different ontological views: mechanical assembly, electrical connectivity, memory/address interfaces, CPU/PPU/APU, display and audio, timing and controller states, cartridge/banking, failure/service and representative board revisions. Views must stay linked without confusing viewpoint state with powered-machine state.

No commercial game ROMs, proprietary firmware, keys, extracted game assets, or private save data.

**Gate:** deterministic runtime and multi-layer inspection pass; historical revisions and simulated behavior are clearly labeled.

### M5 — IBM Selectric Model 721

Port the public mechanical typewriter runtime and the broad technical research: power and clutch path, keylevers/interposers, tilt/rotate selection, print sleeve/type element/impact, escapement, carrier, ribbon, return, paper and platen, copy control, sources and geometry constraints. Preserve the bounded public-v1 completion level.

The optional fine-serration platen-variable P6 geometry is **synthetic** and must remain opt-in. It does not establish a manufacturer tooth count, spring-force equilibrium, original clutch tooth profile or complete physical interference certification.

This specimen has extensive reference geometry, dimensional diagnostics and model tests. Port the technical records, baselines, experiments (including unsuccessful/obsolete alternatives), working solvers, tests and reproducible diagnostics. Retain honest experimental status and distinguish data from unlicensed third-party source captures or sensitive environment-dependent artifacts.

**Gate:** full causal viewer, ordinary-mode isolation, optional clutch regression, reference views and source-bound fidelity disclosures pass within Machinotheca.

### M6 — Consolidate the showcase

Bring across **all four existing public engineering demos** with their associated public code, functionality, tests and technical guides; preserve legible UX, controls, keyboard support, visibility of mechanisms, explodable views, source notes and model variants. **Machinotheca itself hosts the replacement GitHub Pages site**; the engineering scenes must run at Machinotheca URLs rather than embedding or depending on the old site. Rework the former general-purpose gallery into a Machinotheca-only exhibition, with prominent entries chosen by the owner.

Deduplicate truly shared code **only after** all four imported scenes behave correctly. Avoid refactoring the running viewers during the first copy just to invent a common rendering abstraction.

**Gate:** all four local routes and their attached ontology/guide routes work independently of the old showcase and of all nonpublic sources. Links, assets and browser initialization must work at the deployed Pages subpath.

### M7 — Verification, public release and Tarium enrollment

Audit every path and file's contents, comments, metadata, scripts, assets, screenshots, workflow logs, generated output, dependency chain, commit text and history. Run static checks, machine-readable schema validation, Playwright causal tests, visual captures, link checks, content/privacy scans and asset/redistribution review.

Preserve old public URLs until migration passes. Record known unknowns, omissions and licensed third-party notices. Publish only cleared content; omit and replace unpublishable source artifacts with public bibliographic references.

Machinotheca was explicitly authorized and enrolled in the public Tarium registry during the foundation phase. At final exhibition release, verify that the registry's ontology and gallery paths still resolve. Tarium remains the registry, **not** a home for these models.

## Publication rules and excluded material

**Never publish:** nonpublic conversations, copied dialogue, private venting language, personal notes or records, identifying personal information, secrets or credentials, original private conversation prompts, and private Git *history* containing such material. Do not include paraphrases revealing private conversations. **Ordinary technical logs, research task records, source ledgers, failed experiments, unfinished studies and diagnostic results are publishable after targeted privacy, access and rights review.**

**Also protect rights:** third-party manuals, commercial photos, audio, model files and data can be referenced with attribution when redistribution is not established, but cannot silently be rehosted. An existing MIT license does not convert external media or copyrighted source text into MIT content.

**Default behavior:** preserve and migrate all genuinely public-safe technical work; if a particular file contains mixed technical content and private language, rewrite/split it rather than either publishing the private portion or discarding the research wholesale. When provenance or release rights cannot be established, leave the affected file out until resolved.

### Required before each migration commit

1. Identify the selected source files and upstream rights.
2. Inspect the **full content**, not just filenames or grep hits, for private wording, paths, metadata and personal context.
3. Re-author/sanitize mixed content, resolve all hidden dependencies, and rewrite source and asset references appropriately.
4. Check generated files and build/test artifacts, not only checked-in Markdown.
5. Validate JSON schemas, page routes, causal behavior and local/offline prerequisites.
6. Review the exact public commit and all newly reachable assets; stop if unsafe material is detected.

This review is a development responsibility, **not a requirement for the owner to manually inspect routine public commits**. Escalate only genuinely undecidable publication or third-party rights questions.

## Priority and stop conditions

Migrate **the engineering ontology, technical data, working state, queues, successful and unsuccessful experiments, source analyses and existing real interactive scenes**. Candidate queues may be public and visible in the repository without being promoted to the curated website. The owner decides which working specimens or experiments deserve an exhibit.

A scene's published v1 is complete when the declared scope works and its evidence limitations are explicit. Unknown factory measurements alone do not force endless synthetic refinement. Source accuracy improvements can be independent future versions.

**Migration completion:** the public-safe contents of the private Engineering workspace, including incomplete and historical technical research, have been transferred with any private personal/conversation language selectively removed; the four already-public engineering demos have been transferred to functioning local Machinotheca pages with attached ontology and guides; the Machinotheca Pages site is the authoritative engineering showcase; its curated exhibition reflects the owner's selected work; and no forbidden private content is published.
