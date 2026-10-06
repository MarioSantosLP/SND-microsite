---
title: Domain Model
sidebar_position: 2
---

The domain model shows the main concepts SND works with and how they relate to each other.

A **User** talks to SND through a **Conversation** made of **Messages**. When a message asks for a new network or a change, it becomes a **NetworkRequest**, which produces a **NetworkSpec**: the structured plan of the network. The plan lists the 5G core functions (AMF, SMF, UPF), the slices, the antenna (gNB) and the phones (UEs). Each time the user refines the plan, a new version of it is created, linked to the previous one.

From an approved NetworkSpec, SND can generate **ConfigurationFiles** or create a **Deployment**. A deployment runs on one to three **VirtualMachines** and records each **DeploymentStep**, so the user can follow its progress. A user can also keep a plan as a **SavedNetwork** to reuse it later. An **Admin** is a user who can also upload **KnowledgeDocuments**, the documentation SND reads when planning networks.

![Domain model](/img/ms2-elaboration/domain-model.png)
