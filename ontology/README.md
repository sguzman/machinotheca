# Machinotheca engineering ontology

**Ontology version:** 0.1.0. The vocabulary and common specimen schema are the initial public contract; real specimen records are introduced together with migrated and tested experiences.

- Machine-readable classes and relations: [ontology.json](ontology.json).
- A cross-linked public specimen contract: [schema/specimen.schema.json](schema/specimen.schema.json).

## Identity and scope

An *engineered system* is a manufactured, assembled or intentionally configured physical object with a bounded function. A specimen records a specific product, design, revision, representative configuration or measured example, not a vague umbrella brand identity.

An implementation or rendered revision is not automatically representative of every manufactured unit. Model family, hardware revision, applicable production interval and known configuration exceptions belong in the specimen record.

## What is modeled

The principal concepts are: system, specimen, assembly, component, interface, joint, constraint, energy/material/signal flow, control, mechanism, geometric datum, dimension, material, process, adjustment, failure mode, service intervention, observation, source, claim, derivation, model, state and interactive presentation.

Relationships distinguish part-of hierarchy, mechanical attachment, power transmission, control signals, material flows, constraint of motion, measured-at and evidenced-by provenance, reconstruction-of, and scene-to-part binding. The ontology is designed to represent physical and electrical/logical/temporal layers without treating them as one undifferentiated graph.

## Evidence tiers

| Tier | Meaning | Examples |
| --- | --- | --- |
| P0 | Authoritative/primary technical source | Manufacturer document, schematic or period patent with defined applicability |
| P1 | Direct measurement or observation | Dimensions from an identified artifact with method/uncertainty |
| P2 | Derived result | A reproducible ratio, kinematic relation or computation from identified inputs |
| P3 | Audited secondary claim | Technical account with evaluated but nonprimary provenance |
| P4 | Reconstruction parameter | Explicitly selected shape, dimension or behavior where original data is unavailable |
| P5 | Explanatory/presentation aid | Exploded offsets, slowed cycles, cutaway, highlighting or interaction simplification |
| P6 | Testable hypothesis | A provisional mechanism or geometry that has not been authenticated |

An animation passing browser tests is evidence that *the modeled software behaves as asserted*, not evidence of P0/P1 physical truth. Each claim may have multiple sources and a versioned evidence status; uncertainty must not disappear during publication.

## Specimen anatomy

Each public specimen will carry:

- Stable identifier, product/revision applicability, summary and model scope.
- Assemblies, components, materials, interfaces and cross-domain relationships with stable IDs.
- Geometry and units, degrees of freedom, constraints, operating states and flows.
- Relevant manufacturing, service, failure, controls and adjustment records.
- Evidence ledger including sources, rights, citations and uncertainty; explicit unresolved values.
- Models with assumptions, inputs, methods, output interpretation and verification class.
- Scene ID and machine-to-view bindings so selecting a component opens its technical record; inverse links return readers to the scene.
- Published guide and repeatable runtime/geometry QA.

Some engineering concepts may be inapplicable to a given specimen; **absence must be distinguishable from unknown**. Schemas preserve that difference.

## Lifecycle and versioning

Ontology revisions follow semantic versioning. A model revision must not silently mutate a historical source measurement or upgrade reconstructed values into originals. Specimen IDs remain stable across redesign of the gallery. Technical facts, model assumptions and viewer presentation are independently versioned where meaningful.

The ontology is part of this public repository and is usable without access to any nonpublic research environment.
