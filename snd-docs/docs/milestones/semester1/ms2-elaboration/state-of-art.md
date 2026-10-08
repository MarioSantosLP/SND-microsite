---
title: State of the Art
sidebar_position: 0
---

## Related Work
The literature reviewed in this work is structured around four complementary themes: **Intent-Based Networking (IBN)**, **LLM-based configuration generation**, **domain-specific knowledge grounding**, and **closed-loop verification**. In 5G Standalone (5G SA) networks, an operational core requires several interdependent Network Functions (NFs), such as the AMF, SMF, UPF, NRF, UDM and AUSF,as implemented by Open5GS [13], whose settings must stay consistent with each other and with the base stations and devices: the network identity (PLMN), tracking area, slices (S-NSSAI), data network names (DNN) and subscriber keys. IBN addresses this complexity with a declarative approach, in which operators state goals and expected outcomes instead of writing low-level device configurations, as described by the IRTF in RFC 9315 [1].

While Large Language Models (LLMs) offer natural-language interfaces for intent translation, they do not reliably produce correct configurations on their own. Mondal et al. [2] found that GPT-4, used alone to synthesize router configurations, produced drafts with errors in topology, syntax and semantics. Combining it with verifiers that return specific errors allowed most of these to be corrected automatically, although human input was still required. The NetConfEval benchmark [3] evaluates LLMs on four network configuration tasks: translating natural-language requirements into a formal specification, into API calls, into routing code, and into low-level device configurations. Based on its results, it proposes using LLMs to produce structured input for existing configuration tools rather than to configure devices directly.

Retrieval-Augmented Generation (RAG) [4] grounds a model's output in documents retrieved at query time. In telecommunications, Telco-RAG [5] applies it to 3GPP specifications, addressing domain terminology and retrieval over dense technical documents.

Sarıdaş et al. [6] split 5G configuration into generator agents (one per configuration part) that use RAG over example OpenAirInterface configurations, LLM-based verifier agents that send errors back for regeneration, and a deploy agent whose commands a human approves before they run. With a 120B model, 94.4% of the generated configurations deployed successfully and matched the request. However, its checks are performed by LLMs before deployment, and no feedback from the running network returns to the model.

## Existing Solutions
Nephio, Cisco NSO and ONAP are widely used model-driven orchestration platforms. They automate the deployment and management of virtualized and cloud-native network functions from structured models, such as YANG data models [7], TOSCA service templates [8] or Kubernetes Resource Model (KRM) resources [9]. Before describing them, we describe how small testbeds are usually deployed today.

### Manual and Scripted Deployment
In small testbeds, Open5GS and UERANSIM are usually deployed by hand: the user installs each component and edits its YAML configuration files, keeping values such as the PLMN, slices, IP addresses and subscriber keys consistent across the core, the gNodeB and the UEs [13], [14]. Community projects such as docker_open5gs [15] package these components in containers, but the user still has to understand and edit the configuration. A single mismatched value is enough to stop the UE from registering, and the error messages rarely point to its cause.

### Nephio
Nephio is an open-source, Kubernetes-based cloud-native automation project hosted by the Linux Foundation. It captures operational intent using the Kubernetes Resource Model (KRM) and applies a Configuration-as-Data paradigm to orchestrate cloud infrastructure and network functions across multi-cluster environments [9].
Key characteristics:
* Kubernetes-native reconciliation controllers that continuously drive running workloads toward declared target states [9].
* Configuration-as-Data principles using KRM to manage multi-vendor network functions across clusters [9].
* Demonstrated lifecycle management of open-source 5G workloads, including free5GC and OpenAirInterface-based testbeds, using GitOps workflows [9].

### Cisco Crosswork NSO
Cisco Network Services Orchestrator (NSO) is an enterprise, model-driven orchestration engine designed for multi-vendor physical and virtual networks [10]. It models device and service configurations using YANG (RFC 7950) [7] and translates them into vendor-specific commands through Network Element Drivers (NEDs) [10].
Key characteristics:
* Model-driven architecture based on YANG data models for service and device configuration [10].
* Transactional integrity with ACID guarantees, providing atomic state changes across network elements and automated rollback upon configuration rejection [10].
* Multi-vendor device abstraction through Network Element Drivers (NEDs), which translate the YANG models into vendor-specific commands [10].
* A Model Context Protocol (MCP) server, a standard interface that lets external AI assistants call NSO's APIs [11].

### ONAP
Open Network Automation Platform (ONAP) is an open-source framework hosted by the Linux Foundation that provides end-to-end service design, orchestration, and closed-loop control for telecommunications operators [12].
Key characteristics:
* Explicit architectural decoupling between design-time service modeling (SDC, using TOSCA-based service models) and runtime orchestration (Service Orchestrator) [12].
* Telemetry-driven closed-loop automation, where DCAE components collect metrics and trigger policy engines for automated remediation [12].
* Lifecycle management for physical, virtualized, and cloud-native network functions across distributed hybrid environments [12].

In short, all three platforms describe the target state in structured models, keep the network in that state (reconciliation in Nephio, transactional rollback in NSO, policy-driven closed loops in ONAP), and expect engineers to write those models.

![State of the Art Features Comparison](/img/ms2-elaboration/state-of-art-features.png)

## Differences & Research Gap
Mainstream orchestration platforms (Nephio, Cisco NSO, ONAP) operate downstream: they assume that network services and topology requirements have already been formally specified in structured models (KRM, YANG, TOSCA) by domain engineers. Recent additions such as the NSO MCP server [11] let AI assistants call these platforms, but the assistant still has to produce valid operations on the platform's models, and checking the result is left to the user. These platforms are designed for operator-scale networks, and learning and operating them is a large effort for a small laboratory testbed.

The **Self Network Deployer (SND)** aims to bridge the upstream intent-to-configuration gap for **small 5G laboratory testbeds** (Open5GS [13] and UERANSIM [14]):
* **Upstream Intent Translation:** Instead of requiring users to write low-level descriptors (such as YANG, TOSCA, or KRM packages), SND is designed to accept natural-language requests, ask the user when information is missing or unclear, and translate the request into a structured intermediate representation (`NetworkSpec` in JSON).
* **Domain Grounding via Dedicated Internal RAG:** While Telco-RAG [5] targets 3GPP standardization texts and Sarıdaş et al. [6] retrieve example configuration files, SND's RAG pipeline is designed to index the operational documentation of the Open5GS [13] and UERANSIM [14] versions it deploys. It is intended to help the model choose options and values these versions actually support and to ask the right clarification questions.
* **Deterministic Configuration Synthesis:** The language model is designed to produce only the structured `NetworkSpec`. The Open5GS and UERANSIM configuration files are generated from fixed templates and applied with Ansible, so the files are always syntactically valid and the model's output is never executed as commands. Errors in the plan itself are to be caught by the Plan Validator before deployment and by the runtime checks after it. This follows the design principle proposed in [3]. In contrast, in [6] the language model writes the configuration files and the shell commands itself, and its output is checked by other LLMs rather than by code.
* **Human Confirmation Before Deployment:** Unlike orchestration platforms, where engineers write the deployment descriptors themselves, SND creates the plan with a language model, so a person checks it before anything is built. The user reviews a plain summary of the validated `NetworkSpec` (VM count, UEs, slices) and no virtual machine is created until they confirm. A similar approval step appears in [6], but there the user approves generated shell commands, not a readable plan.
* **Protocol-Level Runtime Verification:** Instead of only checking that machines and services are running, SND is designed to test the deployed network itself in a simulated RAN provided by UERANSIM [14]. It will check that the Open5GS services are active, that the gNodeB completes NG Setup with the AMF (NGAP), that the UE registers (NAS) and establishes a PDU session, and that traffic reaches the core through the UE's tunnel interface (`uesimtun0`). If a check fails because of the plan, the error is sent back to the Planner for automatic repair, which [6] does not do.
* **Small, Locally Hosted Model:** Related work relies on large models, such as GPT-4 in [2] and a 120B model in [6]. SND is designed to run with a small language model hosted on a local GPU server, so no request leaves the institution. Because small models make more mistakes, SND moves validation and execution into code instead of relying on the model.

How well SND achieves these goals will be measured with an evaluation set of natural-language requests, reporting how many produce a valid plan, a successful deployment and a network that matches the request.

In the work reviewed, no system goes from a natural-language request to a deployed and tested Open5GS and UERANSIM network while keeping the model's role limited to a validated plan, checking it in code and repairing it automatically after deployment.

## Technologies
Orchestration platforms are built on large software stacks, such as Kubernetes clusters and operators in Nephio, a transactional engine with device drivers in Cisco NSO, and a set of microservices in ONAP. In contrast, SND targets experimental testbed agility, adopting a modular full-stack architecture:
* **Presentation Layer:** React-based Web UI for interactive intent submission and real-time deployment tracking.
* **Ingress & Security:** Nginx reverse proxy providing HTTPS termination and access control.
* **Application Core:** FastAPI backend providing REST APIs and JWT-based authentication.
* **Persistence & Semantic Store:** PostgreSQL with the `pgvector` extension, serving as the single source of truth for relational state, task queues, and the vectorized knowledge base for RAG.
* **Execution Engine:** Asynchronous Python Worker executing the decoupled planning, configuration, and deployment workflow.
* **Infrastructure Automation:** Ansible for automated, idempotent software configuration and service management within virtual machines.
* **Virtualization Layer:** Proxmox VE hypervisor managing lightweight KVM virtual machines in modular testbed layouts (1 to 3 VMs).
* **5G Software Suite:** Open5GS [13] implementing the 5G Core Service-Based Architecture and UERANSIM [14] emulating 5G-NR gNodeB and UE nodes.

![State of the Art Technologies Comparison](/img/ms2-elaboration/state-of-art-technologies.png)

## References
* **[1]** A. Clemm, L. Ciavaglia, L. Z. Granville and J. Tantsura, "Intent-Based Networking - Concepts and Definitions," RFC 9315, IRTF, Oct. 2022. https://www.rfc-editor.org/rfc/rfc9315
* **[2]** R. Mondal, A. Tang, R. Beckett, T. Millstein and G. Varghese, "What do LLMs need to Synthesize Correct Router Configurations?," in *Proc. 22nd ACM Workshop on Hot Topics in Networks (HotNets '23)*, 2023, pp. 189-195. https://doi.org/10.1145/3626111.3628194
* **[3]** C. Wang, M. Scazzariello, A. Farshin, S. Ferlin, D. Kostić and M. Chiesa, "NetConfEval: Can LLMs Facilitate Network Configuration?," *Proceedings of the ACM on Networking (CoNEXT 2024)*, 2024. https://doi.org/10.1145/3656296
* **[4]** P. Lewis, E. Perez, A. Piktus, F. Petroni, V. Karpukhin, N. Goyal, H. Küttler, M. Lewis, W. Yih, T. Rocktäschel, S. Riedel and D. Kiela, "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks," in *Advances in Neural Information Processing Systems 33 (NeurIPS 2020)*, 2020, pp. 9459-9474. https://proceedings.neurips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html
* **[5]** A.-L. Bornea, F. Ayed, A. De Domenico, N. Piovesan and A. Maatouk, "Telco-RAG: Navigating the Challenges of Retrieval Augmented Language Models for Telecommunications," in *Proc. IEEE Global Communications Conference (GLOBECOM 2024)*, 2024. https://doi.org/10.1109/GLOBECOM52923.2024.10901158
* **[6]** İ. E. Sarıdaş, O. Salan, A. Görçin, İ. Hökelek and H. A. Çırpan, "RAG-Driven Multi-Agent LLM Framework with Task Decomposition for Beyond 5G Auto-Configuration," in *Proc. 32nd International Conference on Telecommunications (ICT)*, 2026. https://doi.org/10.1109/ICT70370.2026.11594648
* **[7]** M. Bjorklund (Ed.), "The YANG 1.1 Data Modeling Language," RFC 7950, IETF, Aug. 2016. https://www.rfc-editor.org/rfc/rfc7950
* **[8]** OASIS, "TOSCA Version 2.0," OASIS Standard, Jul. 2025. https://docs.oasis-open.org/tosca/TOSCA/v2.0/TOSCA-v2.0.html
* **[9]** Nephio Project, "Nephio Documentation." https://docs.nephio.org/docs/
* **[10]** Cisco Systems, "NSO at a Glance," Cisco Crosswork NSO Documentation. https://nso-docs.cisco.com/nso-basics/nso-at-a-glance
* **[11]** Cisco Systems, "NSO MCP Server," Cisco Crosswork NSO Documentation. https://nso-docs.cisco.com/guides/development/core-concepts/northbound-apis/nso-mcp-server
* **[12]** ONAP Project, "ONAP Architecture Overview," ONAP Documentation. https://docs.onap.org/en/latest/ecosystem/architecture/index.html
* **[13]** Open5GS, "Open5GS: Open Source implementation for 5G Core and EPC." https://open5gs.org/
* **[14]** UERANSIM, "UERANSIM: open source 5G UE and RAN (gNodeB) simulator," GitHub. https://github.com/aligungr/UERANSIM
* **[15]** S. Herle, "docker_open5gs," GitHub. https://github.com/herlesupreeth/docker_open5gs