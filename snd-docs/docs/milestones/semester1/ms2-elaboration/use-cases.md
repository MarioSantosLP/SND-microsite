---
title: Use Cases
sidebar_position: 1
---

## Actors

| Actor | Description |
|-------|-------------|
| User | Anyone who uses SND to specify, generate, deploy, stop, save or reuse a 5G network. |
| Administrator | Person responsible for maintaining SND and its supported technical knowledge, such as the Open5GS documentation and RAG index. |

## Use Cases

| ID | Package | Use Case | Description |
|----|---------|----------|-------------|
| UC01 | Authentication | Create Account | A new visitor signs up with an email and a password. |
| UC02 | Authentication | Log In | A registered user or administrator enters their email and password to get into SND. |
| UC03 | Authentication | Log Out | The user leaves their account. |
| UC04 | Network Creation and Refinement | Create a Network from a Natural-Language Request | The user writes in plain words what mobile network they want, for example "a 5G network with 10 phones and low latency". SND turns that text into a structured plan of the network and checks it for mistakes. |
| UC05 | Network Creation and Refinement | Clarify a Network Request | If the request is missing something important, is ambiguous, or asks for something SND can't build, SND asks the user a question before continuing. |
| UC06 | Network Creation and Refinement | Review Generated Network | Before anything is built, SND shows a simple summary of the planned network: how many machines, phones and network slices it has. The user then decides to deploy it, download only the configuration files, ask for changes, or cancel. |
| UC07 | Network Creation and Refinement | Refine Generated Network | The user asks for changes in plain words, such as "make it 20 phones instead". SND updates the plan and shows what changed. |
| UC08 | Configuration and Deployment | Obtain Configuration Files Without Deployment | The user downloads the ready-made configuration files of the network (for Open5GS, the 5G core, and UERANSIM, the simulated antenna and phones) without SND building anything. |
| UC09 | Configuration and Deployment | Deploy Network | SND builds the network for real. It creates virtual machines, installs and starts the 5G software on them, and then tests that the simulated phones can connect and use the network. |
| UC10 | Running Network Management | View Network Status | The user follows each step while the network is being built and can see whether it is running, which machines it uses, and if any test failed. |
| UC11 | Running Network Management | Stop a Running Network | The user shuts the network down when they no longer need it. |
| UC12 | Saved Network Management | Save Network Plan | The user saves a network plan with a name, so it can be used again later without describing it again. |
| UC13 | Saved Network Management | Reopen Saved Network | The user opens one of their saved networks to look at it again, change it, or build it again. |
| UC14 | Saved Network Management | Redeploy Saved Network | The user builds a saved network again exactly as it was. SND reuses the saved plan instead of generating a new one, so the result is the same network as before. |
| UC15 | Knowledge Base Management | Update Knowledge Base | An administrator adds or updates the documentation SND reads when planning networks, for example after a new Open5GS version. |

## Use Case Diagram

<img
  src={require('@site/static/img/ms2-elaboration/use-cases.png').default}
  alt="Use Case Diagram"
  style={{display: 'block', margin: '0 auto', width: '100%', maxWidth: '810px'}}
/>
