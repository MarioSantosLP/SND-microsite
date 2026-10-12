---
title: Domain Model
sidebar_position: 2
---

The domain model shows the main concepts SND works with and how they relate to each other.

A **User** talks to SND through a **Conversation** made of **Messages**. A conversation starts **Jobs**, each one a unit of work (for example, planning, deploying or diagnosing a network) tracked through its **JobSteps**. A job produces a **NetworkSpec**, the structured plan of the network, made of **Components** (5G core functions, slices, gNB, UEs). Each time the user refines the plan, a new version of the spec is created, revising the previous one. A user can keep a spec as a **SavedNetwork** to reuse it later.

To run a network, a job books a **Reservation** of resources on a **Host** and creates or changes a **Deployment**. A deployment has one or more **Nodes**, each with its **GeneratedConfig** files, and is validated by **CheckResults**. When something fails, a job may trigger a **Diagnosis**, which gathers **Evidence**, consults **Documents** and proposes **FixProposals** that the user approves.

Components use **Plugins**, which provide the **Templates** used to generate configs and the **Checks** used to validate deployments. An **Admin** is a user who also manages plugins and uploads the documents SND consults.

![Domain model](/img/ms2-elaboration/domain-model.png)
