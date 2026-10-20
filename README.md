# Machinotheca

A public, interactive collection of engineered artifacts and the technical models that explain how they work.

**A specimen is both an experience and a structured engineering object.** Visitors can explore the artifact in a 3D scene, inspect its systems and components, and follow any part to the model, evidence, assumptions, and unresolved questions behind it.

## What belongs here

Machinotheca covers mechanical, electromechanical, electronic, optical, and other engineered physical systems. Its domain includes assemblies, mechanisms, interfaces, energy and signal flow, kinematics, dynamics, materials, controls, tolerances, manufacturing, failure, service, and reconstruction.

The project is intentionally **one engineering-domain repository**: it owns a common ontology and its specimen presentations. It does not absorb unrelated applications or become the public governance hub.

## Project surfaces

- [Migration plan](MIGRATION.md): phases, acceptance criteria, public-source transition, and publication safeguards.
- [Engineering ontology](ontology/README.md) and [machine-readable vocabulary](ontology/ontology.json): definitions, evidence classes, relationships and semantics.
- [Specimen schema](ontology/schema/specimen.schema.json): the common machine-readable contract linking identity, models, evidence, and gallery scenes.
- [Gallery](gallery/README.md) and [machine-readable gallery index](gallery/index.json): navigable public experiences. **The local gallery is initially empty**; entries appear only when real, independently working scenes have been migrated.
- [Constitution](CONSTITUTION.md) and [contributor rules](AGENTS.md): public-information boundary and self-sufficient publication.

## First exhibition collection

Four real, existing publicly accessible demonstrations are migration candidates. Their current sites remain available until a working Machinotheca replacement passes its own verification:

| Artifact | Existing public experience |
| --- | --- |
| ETA / Unitas 6497-2 mechanical watch movement | [Interactive watch](https://sguzman.github.io/interactive-demos/watch/) |
| Original folding Polaroid SX-70 camera | [Interactive camera](https://sguzman.github.io/interactive-demos/sx70/) |
| Nintendo Game Boy DMG-01 | [Interactive Game Boy](https://sguzman.github.io/interactive-demos/game-boy-dmg-01/) |
| Original IBM Selectric Model 721 typewriter | [Interactive typewriter](https://sguzman.github.io/interactive-demos/ibm-selectric-721/) |

These are established examples, **not yet pages hosted by Machinotheca**. The migration also brings over the broader engineering workspace, including unfinished analyses, task queues, diagnostics and failed experiments. Those can live publicly in this repository without being featured on the site. The gallery itself shows only work the owner chooses to present.

## Evidence before appearance

Manufacturer information, direct measurement, derivation, secondary reports, reconstructed geometry, visual simplifications, and hypotheses are separate evidence classes. A working animation does not establish original factory geometry or validated real-world dynamics. Each public specimen must state its revision scope, source boundaries, assumptions, and limitations.

## Running the site

Machinotheca will itself host the replacement static, browser-based GitHub Pages exhibition for the engineering specimens. Core data, ontology, and viewer code will live in this repository or use documented public dependencies. No private services, internal directories, or proprietary user files may be required.

The top-level [index](index.html) is currently an accurate project introduction, not a simulated gallery. Setup, asset attribution, automated tests and actual scene instructions will be added as each working specimen lands.

## Public Tarium relationship

Machinotheca is an explicitly registered independent [public Tarium project](https://github.com/sguzman/tarium/blob/main/registry/projects.json). Its code, documentation, ontology and gallery live here. The Tarium registry links to Machinotheca but does not host or operate its exhibits. Registry membership does not imply that every planned exhibit has been migrated.

## License

The repository's existing [MIT license](LICENSE) covers original work distributed under it. Third-party source material, fonts, images, sound, models, manuals, and vendored libraries retain their own copyright and licensing terms and must be identified before redistribution.
