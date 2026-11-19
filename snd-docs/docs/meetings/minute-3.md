---
title: "Minute 3"
date: "2026-09-30"
authors:
  - Mario Santos
sidebar_position: 3
sidebar_custom_props:
  tag: "30 Sep 2026"
  desc: "Initial phase with ATNoG: 5G core deployment, personas, requirements and resources."
---

# Minute 3

| **Date** | **Time** | **Method** |
|:---------|:---------|:-----------|
| 2026-09-30 | 15:10 – 16:00 | In person |

## Participants

| **Name** | **Role** |
|:---------|:---------|
| Paulo Cunha | ATNoG |
| Tiago Barros | ATNoG |
| David Santos | ATNoG |
| Francisco Santos | Team member |
| João Morais | Team member |
| Mario Santos | Team member |
| Samuel Ramos | Team member |

### Supervisor
- Daniel Corujo

### ATNoG
- Paulo Cunha
- Tiago Barros
- David Santos

### Team members
- Filipe Nogueira
- Francisco Santos
- João Morais
- Mario Santos
- Samuel Ramos

## Topics discussed
- Work to be carried out in the initial phase of the project.
- Deploying and understanding 5G networks with **Open5GS** or **free5GC**.
- Possible system personas and how to gather the requirements.
- Discussion of Paulo Cunha's work on a graphical interface for running experiments on the testbed, which the project may interact with at a later stage.
- System architecture and resources available to the team.

## Key conclusions
- In this initial phase, the team should focus on deploying and understanding 5G networks using Open5GS or free5GC.
- The latest version of the chosen core should be used and kept fixed while building the first knowledge base (RAG).
- Two possible personas were identified:
  - **Inexperienced user**, who only describes the goal (e.g. "I want a low-latency 5G network").
  - **Experienced user**, who wants a fast deployment with concrete parameters (e.g. an Open5GS core with 10 UEs and 5 slices).
- For now, the only known requirement is natural-language interaction; the remaining requirements still have to be gathered.
- Networks will be instantiated on virtual machines, and the team will be given a small language model, probably with a dedicated GPU.

## TODO
- Deploy 5G networks with Open5GS or free5GC
- Define the personas and gather the requirements
- Define the system architecture
