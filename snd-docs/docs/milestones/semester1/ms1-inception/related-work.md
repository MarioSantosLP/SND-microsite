---
title: Related Work
sidebar_position: 4
---

SND (Self Network Deployer) targets the growing complexity of managing 5G Standalone (SA) and cloud-native compute infrastructures. Instead of relying on rigid configuration scripts, it uses an AI agent that interprets natural language requests, enforces operational constraints and executes deployments through network and compute APIs. To place this approach in context, we reviewed recent literature along three dimensions: natural language intent processing, neuro-symbolic guardrails, and closed-loop testbed validation.

## Natural Language Intent Processing

Intent-Based Networking (IBN) has gained momentum with the adoption of Large Language Models (LLMs). Recent studies show that LLMs can translate unstructured operator goals, such as "instantiate a low-latency 5G Core slice for high-throughput streaming", into structured API parameters. Since model weights are fixed after training, Retrieval-Augmented Generation (RAG) has become the standard way to bring in technical documentation, 3GPP specifications and OpenAPI definitions. With RAG, the agent can query API schemas and retrieve accurate configuration templates before executing anything.

## Neuro-Symbolic Guardrails

Applying raw LLM output directly to an operational environment is risky, since the model may hallucinate parameters or produce invalid syntax. The literature therefore points to neuro-symbolic guardrails and domain invariants as a necessary safeguard. Frameworks such as G-SPEC use deterministic schema validators (e.g. Pydantic models) to enforce hard rules, like preventing IP subnet overlaps, limiting 3GPP radio bandwidth allocations and ensuring valid identifiers. When a rule is broken, a reflection mechanism feeds the validation error back into the model's context, so the agent can correct its parameters on its own.

## Closed-Loop Testbed Validation

Validating generated configurations requires an automated, closed-loop testbed. Research testbeds typically pair an open-source 5G Core, such as Open5GS, with a simulated RAN, such as UERANSIM, to create a sandboxed execution loop. Telemetry and active traffic tests, such as end-to-end ICMP latency and throughput measurements, give the control loop immediate feedback. Successful runs are recorded in structured logs, building a dataset that supports auditing and later model fine-tuning (e.g. QLoRA).

## Summary

The literature agrees that future networks need intent-driven control backed by strict validation. SND puts these ideas into practice by combining RAG-based knowledge retrieval, Pydantic invariant checks and closed-loop testing with Open5GS and UERANSIM in a single three-layer architecture.

## Existing Solutions

Traditional network automation relies on declarative frameworks, static data models and transactional engines. These industrial platforms are strong at low-level infrastructure execution, but none of them offer natural language understanding, RAG-based documentation retrieval or automated AI self-correction.

- **Nephio (Linux Foundation):** uses the Kubernetes Resource Model (KRM) and GitOps controllers to manage cloud-native 5G network functions. It provides powerful declarative automation across distributed clusters, but engineers still have to write complex YAML/kpt packages by hand, with no natural language interface or LLM-driven correction.
- **Cisco NSO (Network Services Orchestrator):** uses YANG data models and a transactional Configuration Database (CDB) for multi-vendor network management. It offers strong ACID transactional guarantees and dry-run support, but depends on static service packages written manually by developers, with no generative AI capabilities.
- **ETSI OSM and ONAP:** standardised NFV orchestration platforms that provide end-to-end 5G slicing and closed-loop telemetry. They require significant datacenter resources and manual service design through graphical tools or TOSCA templates, and cannot quickly translate natural language intents.
