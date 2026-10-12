---
title: Architecture
sidebar_position: 4
hide_table_of_contents: true
---

SND runs on a single **Management VM**, using Docker. The user reaches it through a **React website**, served by **Nginx**, which talks to a **FastAPI** backend. The backend stores users, conversations, jobs and saved networks in **PostgreSQL**, which also holds the documentation used for retrieval (RAG).

The **Worker** is the kernel of the system, written in Python. Its **Job runner** takes each request and tracks it until it is done. The **Resource manager** knows which infrastructure resources are free, and the **Plugin registry** loads the plugins and gives the catalog of what SND can build.

The **AI agents** run on the school's model server. The **Front desk** (NuExtract) reads the user's message and extracts what they are asking for. The **Planner** receives that request, together with the plugin catalog, the free resources and any validation feedback, and produces the NetworkSpec. The **Plan validator** checks it and sends errors back to the Planner until the plan is valid.

Once the user confirms the plan and its resources are booked, the **Executor** takes over. It asks a where-to-run plugin to create the VMs and assign their IPs, uses the **Config generator** to fill in the configuration templates, and installs and configures the software on the **Network VMs** with Ansible. The **Deployment validator** then runs checks on the running network. If a check fails, the **Diagnosis** agent investigates it with read-only **Diagnosis tools** and proposes a fix, which only reaches the Executor after the user approves it.

Everything that depends on a specific technology lives in **Plugins**, so new ones can be added without changing the Worker:

- **Where to run:** the platform the network is deployed on. Currently **proxmox-vm**, which creates VMs on **Proxmox**. VirtualBox/Docker and a hardware agent for the school's own hardware are planned for later.
- **What to run:** the software installed on the network, each with its own templates and checks. Currently **open5gs-core**, **ueransim** and **iperf3**, with a video server planned for later.

![Architecture](/img/ms2-elaboration/architecture.png)

<a href="https://viewer.diagrams.net/?nav=1&title=architecture.drawio#Uhttps%3A%2F%2Fmariosantoslp.github.io%2FSND-microsite%2Fdiagrams%2Farchitecture.drawio" style={{fontSize: '1.25rem', fontWeight: 600}}>Open in diagrams.net</a>
