---
title: Goals & Tasks
sidebar_position: 5
---

## Goals

- **AI-assisted infrastructure:** develop an AI agent that helps create, configure and operate network and computing infrastructure, reducing the need for manual configuration.
- **Natural language requests:** let users describe the infrastructure or scenario they want in plain language, and turn that request into the required configurations and actions.
- **Learning from documentation:** have the agent learn how to operate each system from manuals, technical and API documentation, configuration templates and examples, so it can adapt to different equipment and systems and professionals can focus on the network's requirements.
- **Validation and self-correction:** validate the generated configurations and actions against the infrastructure's dependencies and constraints, and feed any errors back to correct the process.

## Tasks

- **Integrate the existing LLM:** connect the language model to SND with structured requests and responses.
- **Build the Open5GS knowledge base and RAG system:** collect and index Open5GS and 5G documentation for the agent.
- **Implement the 5G network data model:** represent 5G functions, parameters and their relationships.
- **Implement network and deployment persistence:** save networks, configurations and deployment state so they can be reused.
- **Implement user intent processing:** turn natural language requests into structured 5G requirements.
- **Implement the 5G deployment planner:** turn requirements into a concrete plan with parameters, dependencies and execution order.
- **Implement the Open5GS configuration and deployment pipeline:** generate and apply configurations, and deploy or reconfigure the virtual 5G core.
- **Implement deployment validation:** check that network functions are running and the final state matches the request.
- **Implement feedback and error handling:** detect configuration or deployment failures and report them clearly.
- **Develop the API and user interface:** submit requests, browse previous networks, and view plans, status, results and errors.
- **Implement basic logging:** record requests, intents, deployment actions, errors, timestamps and affected components.
