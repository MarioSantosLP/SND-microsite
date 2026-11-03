---
title: Sector-Specific Regulations and Standards
sidebar_label: Sector Regulations
sidebar_position: 3
---

The regulations and standards that apply to SND's domain, and how the project complies with or adapts to each of them. SND sits between private mobile networking and automated cloud orchestration, so three areas apply: telecommunications regulation, technical telecom standards, and AI governance.

## Telecommunications Regulation and Licensing Exemption (ANACOM)

Under the Portuguese Electronic Communications Law (Law no. 16/2022) and the framework set by ANACOM (National Communications Authority), public commercial operators that offer telecommunications services to the public must obtain formal authorisation, register as an operator and acquire rights of use for radio frequencies (spectrum licensing).

SND is exempt from these obligations:

- It is a deployment tool for private, non-commercial environments: academic research institutions, university laboratories and private R&D testbeds. It is being validated in the pilot environment of Instituto de Telecomunicações (IT) and Universidade de Aveiro.
- It runs only inside closed virtualised infrastructure (Docker containers, virtual machines) and uses software tools that simulate the radio network, such as UERANSIM and Open5GS.
- It does not transmit radio frequencies over the air in the public domain, and it does not provide commercial telecommunications services to public end users.

Because of this, SND does not need commercial operator registration, public telecommunications licences or spectrum usage fees under ANACOM.

## Technical Standards and Interoperability (3GPP and ETSI NFV)

Even though SND is exempt from operator obligations, the configurations it generates cannot be arbitrary. To be useful, repeatable and interoperable with standard 5G ecosystems, they follow official telecommunications standards.

**3GPP (Releases 15 to 17)**

- The network models and configuration blueprints SND generates (such as the NetworkSpec) follow the 3GPP Service-Based Architecture (SBA) for the 5G Core.
- The control and user plane network functions (AMF, SMF, UPF, NRF, UDM, among others) are configured following 3GPP data models and OpenAPI specifications.
- The identifiers reserved by 3GPP and the ITU (International Telecommunication Union) for test networks are used, such as PLMN 001-01 (MCC 001, MNC 01).

**ETSI NFV (Network Functions Virtualisation)**

- SND follows the ETSI NFV principles for Cloud-Native Network Functions (CNFs), separating the telecom software from the physical server hardware.
- Because network functions run as containers, configurations stay interoperable and forward-compatible. Researchers can connect to third-party testbeds without changing the configuration schema.

## Artificial Intelligence Governance (EU AI Act)

SND uses Large Language Models (LLMs) and automated agents to help users turn their requirements into deployment plans, so the EU Artificial Intelligence Act applies.

**Risk category**

Under the EU AI Act, SND is a **minimal-risk** AI system. It works as a technical copilot and planning assistant for engineers and researchers, not as an autonomous decision-maker in critical public infrastructure. It follows the applicable transparency guidelines.

**Human oversight (Article 14)**

Following the human oversight principle of Article 14 and a human-in-the-loop approach, SND prevents problems caused by model hallucinations or configuration drift:

- As defined in the [Terms and Conditions](./terms-and-conditions.md), no deployment, network teardown or automatic corrective action after a failure runs on its own.
- Every generated parameter and topology is shown to an authorised human operator, who must review and approve it before any change is applied to the infrastructure.
