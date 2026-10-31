---
title: Accessibility Approach
sidebar_position: 2
---

## Approach

We audited every screen of the SND frontend against **WCAG 2.2 level AA**. We combined automatic tools with manual tests that simulate each user profile, and read the code to find the cause of each problem. Every problem went into an **accessibility matrix** with the screen and element, the affected profile, the problem, the WCAG criterion, the severity and the proposed fix. We then fixed 19 of the 20 problems in the frontend and ran the tests again.

The frontend is a React prototype with mocked responses. We audited its 7 screens:

| Screen | What the user does there |
|--------|--------------------------|
| Login | Logs in with email and password. |
| Signup | Creates an account. |
| App layout and sidebar | Navigates between the chat and saved networks, opens recent conversations, logs out. |
| Chat | Describes the network they want in natural language. |
| Deployment proposal | Reviews the proposed network and chooses Deploy, Configs only, Refine or Cancel. Includes the Refine form and the deploy progress. |
| Save/Edit network modal | Gives the network a name and a description. |
| Implementations | Lists the saved networks and opens the network details modal. |

A SUS evaluation with users is not part of this milestone. It will be done later.

## Users and Profiles

### Personas

| Persona | Who | Priority |
|---------|-----|----------|
| Researcher (ATNoG) | Network engineers and researchers who deploy 5G networks often and don't want to do it by hand every time. They know exactly what they want. | Primary |
| Student | Students in labs, as SND grows beyond ATNoG. They describe what they want in plain words and don't know 5G in depth. | Secondary (future) |
| Administrator | The development team, which updates the knowledge base (RAG index). | No screens. This is done through a script/CLI, so it is outside the audit. |

### Profiles

| Profile | Relevant? | Where it affects SND |
|---------|-----------|----------------------|
| Blind users (screen reader) | Yes | Chat replies that arrive dynamically, deploy progress, icon-only buttons, the proposal tables. |
| Low vision | Yes | Dark theme with small grey text; layout at 200% zoom. |
| Colour blindness | Yes | Deploy state and success (green), errors (red), the Deploy button. |
| Motor limitations | Yes | Everything must work with the keyboard only; small click targets. |
| Cognitive limitations / low digital literacy | Yes, the most SND-specific | 5G jargon (MCC, MNC, TAC, DNN, SST, gNB, UE) with no explanation, which is critical for the Student persona. |
| Deafness | Not applicable | SND has no audio, video or sound alerts. All information is already text. |

## Standards and Legislation

| Reference | Applies to SND? |
|-----------|-----------------|
| **WCAG 2.2, level AA** | **Yes, it is our target.** Every problem in the matrix points to a WCAG criterion. |
| **Decreto-Lei 83/2018** (accessibility of public-sector websites and apps in Portugal) | **Not directly today.** SND is an internal research tool developed within ATNoG. It would apply if SND were offered to students through the University of Aveiro, a public body. This is the planned scale-up, so we design for it from the start. |
| **European Accessibility Act** (mandatory since June 2025) | **No.** It covers consumer products and services (e-commerce, banking, transport, etc.). SND is a professional and academic tool. |

## How We Audited

| Test | Tool | What it checks |
|------|------|----------------|
| Colour contrast | Calculated from the CSS colour variables with the WCAG formula (the same one used by the WebAIM Contrast Checker) | Text ≥ 4.5:1, UI components (borders, icons) ≥ 3:1 |
| Automatic scan | axe DevTools (Firefox), on 8 screen states, with best practices enabled | Missing names and labels, contrast, landmarks, headings |
| Keyboard only | Mouse unplugged; Tab, Shift+Tab, Enter, Space, Esc | The main task: log in → request → refine → deploy → save → Implementations → details → log out |
| Colour blindness | Firefox Accessibility Inspector → Simulate (protanopia, deuteranopia, achromatopsia) | Whether information depends only on colour |
| Zoom | Browser zoom at 200% | Whether content is cut off or becomes unreachable |
| Screen reader | Orca + Firefox on Linux (the Linux equivalent of NVDA/VoiceOver) | One complete flow: login → request → proposal → deploy → save |
| Forms, language and target size | Code review | Instructions, validation, jargon, size of clickable targets |
