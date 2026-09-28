---
title: Related Work
sidebar_position: 4
---

Our project, "SND: Self Network Deployer," aims to use Artificial Intelligence (AI) to deploy 5G core networks from plain-language requests. The user will describe what the network should do, and the system will write, validate and test the Open5GS configuration for them. We reviewed the main network automation platforms and recent research, and for each we list the key features that are relevant to our project.

Deploying a 5G core is hard. A 5G core is made of many network functions, such as the AMF, SMF, UPF and NRF, that must be configured to find and work with each other, and configuration inconsistencies between network functions can prevent the system from operating correctly. For this reason, the networking community has been moving towards Intent-Based Networking (IBN), where the operator says *what* the network should achieve and the system works out *how* to do it. RFC 9315 defines an intent as "a set of operational goals (that a network should meet) and outcomes (that a network is supposed to deliver) defined in a declarative manner without specifying how to achieve or implement them" [1].

Large Language Models (LLMs) are a natural fit for this idea, since they can read natural language. However, research shows that they cannot be trusted alone. Mondal et al. found that GPT-4 "works very badly by itself" when writing router configurations, but improves a lot when it is paired with a verifier that sends precise error feedback back to the model [2]. The NetConfEval benchmark also studied how LLMs can turn natural-language requirements into network configurations and make configuration more human-friendly [3].

Two techniques help make LLM output more reliable. The first is Retrieval-Augmented Generation (RAG), which combines a language model with an external document collection so that answers are grounded in real sources [4]. Bornea et al. showed that RAG can be adapted to telecommunications with Telco-RAG, an open-source framework built for the very technical language of 3GPP documents [5]. The second is splitting the work between several agents that generate, verify and deploy. Sarıdaş et al. proposed a RAG-driven multi-agent framework tested on OpenAirInterface, where a verification agent finds hallucinated parameters and asks for them to be regenerated; this reached a 94.4% configuration success rate, 22.7% higher than a single-pass approach [6].

In summary, the state of the art shows that networks are moving towards intent-driven, automated management, and that LLMs become substantially more reliable when their outputs are grounded in technical documentation and verified before deployment [2][6]. SND follows this direction and applies it to Open5GS, an open-source 5G core [7].

## Existing Solutions

Today, network automation in industry is done mainly by orchestration platforms. They are powerful and proven, and they work from formal, model-driven descriptions of services, such as YANG [8], TOSCA [9] or Kubernetes resources. We selected three of the best-known platforms as our reference points: Nephio, Cisco NSO and ONAP.

### Nephio [10][11]

Nephio is an open-source project hosted by the Linux Foundation (LF Networking). Its goal is "to deliver carrier-grade, simple, open, Kubernetes-based cloud native intent automation and common automation templates" for deploying network functions and the cloud infrastructure under them [10]. It uses the Kubernetes Resource Model (KRM) to capture intent and follows a "configuration as data" principle [11]. The current release uses free5GC and OpenAirInterface (OAI) for demonstration purposes [11].

Key features:

* Kubernetes-native automation with "active reconciliation", which keeps the running system matched to the declared intent [10].
* Configuration as data (KRM), designed to manage very large numbers of network functions and clusters [11].
* Multi-vendor support for cloud-native network functions [10].

### Cisco Crosswork Network Services Orchestrator (NSO) [12][13]

Cisco NSO is a commercial orchestration platform for multi-vendor physical and virtual networks [12]. All device and service configuration in NSO is described with YANG models, and Network Element Drivers (NEDs) translate this to each vendor's device [13]. Since NSO 6.7, an MCP server lets external AI assistants talk to NSO, but NSO does not provide the AI assistant itself [14].

Key features:

* Model-driven design: "YANG models describe all NSO configurations, including device configuration and service configuration" [13].
* Network-wide transactions: changes are applied to all devices at once and, on failure, "rolled back as a whole returning the entire network to the prior state" [13].
* Large multi-vendor device library through NEDs [12][13].

### ONAP (Open Network Automation Platform) [15][16]

ONAP is a Linux Foundation project described as "a collection of individual, semi-standalone network automation functions that provide design, orchestration, observability, and automation of network and edge services" [15]. Services are designed in the Service Design and Creation (SDC) tool, using models aligned with standards such as OASIS TOSCA, ETSI NFV and 3GPP [16].

Key features:

* Separate design time (SDC) and run time (Service Orchestrator) [16].
* Closed-loop automation, where analytics (DCAE) feed Policy, which triggers corrective actions [16].
* Orchestration of physical, virtual and cloud-native network functions, including an intent-based networking use case [15][16].

### How SND is different

Nephio, NSO and ONAP rely on formal, model-driven representations such as KRM, YANG and TOSCA service models, together with dedicated orchestration infrastructure. They automate the deployment of services that have already been described in these models. SND focuses on the step before traditional orchestration, with Open5GS as its first target. It will take a plain-language request, retrieve relevant Open5GS documentation through RAG, generate a configuration plan, validate it against deterministic technical constraints, and use validation feedback to correct invalid configurations. The planned workflow will then test generated configurations in an Open5GS + UERANSIM [17] environment before deployment. This design follows the RAG-driven generate-verify-deploy approach of Sarıdaş et al. [6], and the verifier-feedback loop shown by Mondal et al. [2].

## References

[1] A. Clemm, L. Ciavaglia, L. Z. Granville and J. Tantsura, "Intent-Based Networking - Concepts and Definitions," RFC 9315, IRTF, Oct. 2022. https://www.rfc-editor.org/rfc/rfc9315

[2] R. Mondal, A. Tang, R. Beckett, T. Millstein and G. Varghese, "What do LLMs need to Synthesize Correct Router Configurations?," in Proc. 22nd ACM Workshop on Hot Topics in Networks (HotNets '23), 2023, pp. 189-195. https://doi.org/10.1145/3626111.3628194

[3] C. Wang, M. Scazzariello, A. Farshin, S. Ferlin, D. Kostić and M. Chiesa, "NetConfEval: Can LLMs Facilitate Network Configuration?," Proceedings of the ACM on Networking (CoNEXT 2024), 2024. https://doi.org/10.1145/3656296

[4] P. Lewis, E. Perez, A. Piktus, F. Petroni, V. Karpukhin, N. Goyal, H. Küttler, M. Lewis, W. Yih, T. Rocktäschel, S. Riedel and D. Kiela, "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks," in Advances in Neural Information Processing Systems 33 (NeurIPS 2020), 2020, pp. 9459-9474. https://proceedings.neurips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html

[5] A.-L. Bornea, F. Ayed, A. De Domenico, N. Piovesan and A. Maatouk, "Telco-RAG: Navigating the Challenges of Retrieval Augmented Language Models for Telecommunications," in Proc. IEEE Global Communications Conference (GLOBECOM 2024), 2024. https://doi.org/10.1109/GLOBECOM52923.2024.10901158

[6] İ. E. Sarıdaş, O. Salan, A. Görçin, İ. Hökelek and H. A. Çırpan, "RAG-Driven Multi-Agent LLM Framework with Task Decomposition for Beyond 5G Auto-Configuration," in Proc. 32nd International Conference on Telecommunications (ICT), 2026. https://doi.org/10.1109/ICT70370.2026.11594648

[7] Open5GS, "Open5GS: Open Source implementation for 5G Core and EPC." https://open5gs.org/

[8] M. Bjorklund (Ed.), "The YANG 1.1 Data Modeling Language," RFC 7950, IETF, Aug. 2016. https://www.rfc-editor.org/rfc/rfc7950

[9] OASIS, "TOSCA Version 2.0," OASIS Standard, Jul. 2025. https://docs.oasis-open.org/tosca/TOSCA/v2.0/TOSCA-v2.0.html

[10] Nephio Project (Linux Foundation), "Nephio." https://nephio.org/

[11] Nephio Project, "Nephio Documentation." https://docs.nephio.org/docs/

[12] Cisco Systems, "Cisco Crosswork Network Services Orchestrator." https://www.cisco.com/c/en/us/products/cloud-systems-management/network-services-orchestrator/index.html

[13] Cisco Systems, "NSO at a Glance," Cisco Crosswork NSO Documentation. https://nso-docs.cisco.com/nso-basics/nso-at-a-glance

[14] Cisco Systems, "NSO MCP Server," Cisco Crosswork NSO Documentation. https://nso-docs.cisco.com/guides/development/core-concepts/northbound-apis/nso-mcp-server

[15] ONAP Project (Linux Foundation), "ONAP." https://www.onap.org/

[16] ONAP Project, "ONAP Architecture Overview," ONAP Documentation. https://docs.onap.org/en/latest/ecosystem/architecture/index.html

[17] UERANSIM, "UERANSIM: open source 5G UE and RAN (gNodeB) simulator," GitHub. https://github.com/aligungr/UERANSIM

*All links were checked on 28 September 2026. Every research paper cited is peer-reviewed and published (ACM, IEEE or NeurIPS); the other references are official standards and project documentation.*
