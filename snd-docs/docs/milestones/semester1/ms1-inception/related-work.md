---
title: Related Work
sidebar_position: 4
---

SND (Self Network Deployer) targets the growing complexity of managing 5G Standalone (SA) and cloud-native compute infrastructures. Instead of relying on rigid configuration scripts, it uses an AI agent that interprets natural language requests, enforces operational constraints and executes deployments through network and compute APIs. To place this approach in context, we reviewed recent literature along three dimensions: natural language intent processing, neuro-symbolic guardrails, and closed-loop testbed validation.

## Natural Language Intent Processing

Intent-Based Networking (IBN) has gained momentum with the adoption of Large Language Models (LLMs) [1][2]. Recent studies show that LLMs can translate unstructured operator goals, such as "instantiate a low-latency 5G Core slice for high-throughput streaming", into structured API parameters [2][3]. Since model weights are fixed after training, Retrieval-Augmented Generation (RAG) has become the standard way to bring in technical documentation, 3GPP specifications and OpenAPI definitions [3][4]. With RAG, the agent can query API schemas and retrieve accurate configuration templates before executing anything [4].

## Neuro-Symbolic Guardrails

Applying raw LLM output directly to an operational environment is risky, since the model may hallucinate parameters or produce invalid syntax [5][6]. The literature therefore points to neuro-symbolic guardrails and domain invariants as a necessary safeguard [6][7]. Frameworks such as G-SPEC use deterministic schema validators (e.g. Pydantic models) to enforce hard rules, like preventing IP subnet overlaps, limiting 3GPP radio bandwidth allocations and ensuring valid identifiers [7]. When a rule is broken, a reflection mechanism feeds the validation error back into the model's context, so the agent can correct its parameters on its own [6][7].

## Closed-Loop Testbed Validation

Validating generated configurations requires an automated, closed-loop testbed [8][9]. Research testbeds typically pair an open-source 5G Core, such as Open5GS, with a simulated RAN, such as UERANSIM, to create a sandboxed execution loop [9][10]. Telemetry and active traffic tests, such as end-to-end ICMP latency and throughput measurements, give the control loop immediate feedback [10]. Successful runs are recorded in structured logs, building a dataset that supports auditing and later model fine-tuning (e.g. QLoRA) [11][12].

## Summary

The literature agrees that future networks need intent-driven control backed by strict validation [2][7]. SND puts these ideas into practice by combining RAG-based knowledge retrieval, Pydantic invariant checks and closed-loop testing with Open5GS and UERANSIM in a single three-layer architecture [3][7][9].

## Existing Solutions

Traditional network automation relies on declarative frameworks, static data models and transactional engines. These industrial platforms are strong at low-level infrastructure execution, but none of them offer natural language understanding, RAG-based documentation retrieval or automated AI self-correction.

- **Nephio (Linux Foundation) [13]:** uses the Kubernetes Resource Model (KRM) and GitOps controllers to manage cloud-native 5G network functions. It provides powerful declarative automation across distributed clusters, but engineers still have to write complex YAML/kpt packages by hand, with no natural language interface or LLM-driven correction.
- **Cisco NSO (Network Services Orchestrator) [14]:** uses YANG data models and a transactional Configuration Database (CDB) for multi-vendor network management. It offers strong ACID transactional guarantees and dry-run support, but depends on static service packages written manually by developers, with no generative AI capabilities.
- **ETSI OSM and ONAP [15]:** standardised NFV orchestration platforms that provide end-to-end 5G slicing and closed-loop telemetry. They require significant datacenter resources and manual service design through graphical tools or TOSCA templates, and cannot quickly translate natural language intents.

## References

1. M. Anisetti, C. A. Ardagna, F. Berto, and A. D. Bruna, "ML Assurance in 6G-Enabled Edge-Cloud Continuum Workflows," in *IEEE Wireless Communications and Networking Conference (WCNC)*, 2025.
2. A. Tiwari, S. Das, A. Kumar, and S. Srivastava, "NWDAF in 5G: Architecture, Use Cases, and Evolution Across 3GPP Releases," in *IEEE National Conference on Communications (NCC)*, 2025.
3. D. Corujo et al., "SND: Self Network Deployer — Intent-Driven Autonomous ICT Infrastructure Creation," Instituto de Telecomunicações (IT Aveiro) / Universidade de Aveiro, Official Specification, 2026.
4. X. He, Z. Yang, Y. Xiang, and S. Qian, "NWDAF in 3GPP 5G Advanced: A Survey," in *IEEE International Conference on Electronic Information and Communication Sciences (EIECS)*, 2023.
5. S. Marinova, Y. Tian, and A. Leon-Garcia, "E2E Network Slice Assurance for B5G/6G: Closed-Loop Control and MLOps," *IEEE Open Journal of the Communications Society (OJ-COMS)*, vol. 6, 2025.
6. N. Toumi and T. Dimitrovski, "AI-Native Architecture for 6G Networks and Services," in *IEEE European Conference on Networks and Communications & 6G Summit (EuCNC/6G Summit)*, 2024.
7. C. Benzaïd et al., "Neuro-Symbolic Guardrails and Policy Enforcement for LLM-Based 5G Core Management," in *IEEE Wireless Communications and Networking Conference (WCNC)*, 2025.
8. C. Silva, V. A. Cunha, J. P. Barraca, and P. Salvador, "Privacy-Based Deployments: DevPrivOps in 6G Networks," *IEEE Communications Magazine*, vol. 62, no. 6, 2024.
9. Open5GS Project, "Cloud-Native Open Source 5G Core Implementation," Documentation and Repository, 2024.
10. H. Zafar, U. Fattore, F. Cirillo, and C. J. Bernardos, "Privacy-Enhanced Network Analytics in Private 5G Networks," *IEEE Open Journal of the Communications Society (OJ-COMS)*, vol. 6, 2025.
11. G. Samaras et al., "QMP: A Cloud-Native MLOps Automation Platform for 5G Systems," in *IEEE International Mediterranean Conference on Communications and Networking (MeditCom)*, 2022.
12. B. Acir, E. Onur, and R. Boutaba, "User Abnormal Behavior Detection in 5G Networks," in *IEEE International Black Sea Conference on Communications and Networking (BlackSeaCom)*, 2023.
13. Linux Foundation Networking, "Nephio: Kubernetes-Native Telecom Network Automation," docs.nephio.org, 2024.
14. Cisco Systems, "Cisco Network Services Orchestrator (NSO) Architecture Guide," nso-docs.cisco.com, 2024.
15. ETSI, "Open Source MANO (OSM) & ONAP: End-to-End 5G Slicing Specification," osm.etsi.org, 2024.
