---
title: Usability and Accessibility
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

## Findings

### What was already good

- The whole main task could already be completed **with the keyboard only**, with visible focus.
- **No information depended only on colour.** Errors have text, and states have an icon and text. This passed the protanopia, deuteranopia and achromatopsia simulations.
- **Text contrast was good**, between 5.5:1 and 14.5:1.
- Forms had real labels, errors appeared next to the field and were linked with `aria-describedby`, and focus moved to the first error.
- **Errors were prevented:** the proposal is always reviewed before deploying, and deleting a network asks for confirmation.
- Icon-only buttons had accessible names, and modals used `<dialog>`, so focus stays inside and Esc closes them.

### Automatic results before the fixes

axe found only **1 real WCAG violation**, repeated on 3 screens: white text on the purple buttons, at 4.23:1. It also reported **9 to 22 page-structure warnings per app screen**: no `<main>`, no `<h1>` in the chat and extra "banner" landmarks.

The automatic tools missed the most serious problems. These only showed up in the manual tests, especially the screen reader test.

### Accessibility matrix

We found 20 problems: 3 High, 10 Medium and 7 Low.

| Severity | Meaning |
|----------|---------|
| High | Blocks the task. |
| Medium | Makes the task harder. |
| Low | Annoyance or best practice. |

| # | Screen · element | Profile | Problem | WCAG | Severity | Status |
|---|------------------|---------|---------|------|----------|--------|
| 1 | Chat · assistant reply | Blind | When the proposal arrived, the screen reader stayed **silent**, so the user didn't know SND had replied. | 4.1.3 Status Messages | High | Fixed |
| 2 | Chat · deploy progress and result | Blind | The deploy steps and "Network deployed successfully!" were **not announced**; the state of each step was only visual. | 4.1.3; 1.3.1 | High | Fixed |
| 3 | Sidebar · recent conversations at 200% zoom | Low vision | The conversation list **disappeared** (squeezed to 0 px, with no scroll) and the user card and Log out were cut off. | 1.4.4; 1.4.10 | High | Fixed |
| 4 | Proposal, Refine, Details · network parameters | Cognitive / low literacy (Student) | 5G acronyms with **no explanation**, on the screen the user must confirm before deploying. | 2.4.6; 3.3.2 (and 3.1.3/3.1.4, AAA) | Medium | Fixed |
| 5 | Forms · input borders | Low vision | Field borders were almost invisible: **1.5:1** (minimum 3:1). | 1.4.11 | Medium | Fixed (3.98:1) |
| 6 | Purple buttons (Log In, Create Account, Save Network, etc.) | Low vision | White on purple: **4.23:1** (minimum 4.5:1). | 1.4.3 | Medium | Fixed (5.06:1) |
| 7 | Sidebar · user menu → Log out | Motor, blind | Tab didn't reach "Log out" (only Shift+Tab did), and `role="menu"` announced arrow-key navigation that didn't exist. | 2.4.3; 4.1.2 | Medium | Fixed |
| 8 | Chat · headings | Blind | No `<h1>`; the proposal started at `<h3>`, and all proposals had the same title. | 1.3.1; 2.4.6 | Medium | Fixed |
| 9 | All app pages · structure | Blind, motor | No `<main>` and no "Skip to content" link. | 2.4.1 | Medium | Fixed |
| 10 | Chat · after saving a network | Blind, motor | "Saved as…" was not announced; the Save button disappeared and **focus was lost**. | 4.1.3; 2.4.3 | Medium | Fixed |
| 11 | Chat · "typing" indicator | Blind | Nothing was announced while the assistant was replying. | 4.1.3 | Medium | Fixed |
| 12 | Signup · password | Cognitive, low vision | The rule "at least 6 characters" was only in the placeholder and vanished when typing. | 3.3.2 | Medium | Fixed |
| 13 | Chat · Refine form | Cognitive / low literacy | Fields accepted anything (for example, MCC "abc"), with no format hint and no validation. | 3.3.2; 3.3.1 | Medium | Fixed |
| 14 | Chat · Refine +/– buttons | Motor | Buttons of 22×14 px, stacked. | 2.5.8 | Low | **Not fixed** (team decision) |
| 15 | Login, Signup · required fields | Cognitive, blind | All fields were required, but nothing said so. | 3.3.2 | Low | Fixed |
| 16 | Save/Edit modal · name and description | Cognitive | The 60 and 300 character limits only appeared after they were exceeded. | 3.3.2 | Low | Fixed |
| 17 | Navigation · terminology | Cognitive | The same thing had several names ("Implementations", "Saved configurations", "network plan"), and "Create Network" opened the chat. | 3.2.4 | Low | Fixed |
| 18 | All fields · placeholder | Low vision | 4.17:1 (minimum 4.5:1). | 1.4.3 | Low | Fixed (4.97:1) |
| 19 | Modals, Implementations · `<header>`/`<footer>` | Blind | Extra "banner" and "contentinfo" landmarks confused landmark navigation. | 1.3.1 | Low | Fixed |
| 20 | Proposal · Deploy button | Colour blindness | Without colour, the main (and irreversible) action looked like the others. The text identifies it, so it is not a 1.4.1 failure. | Best practice | Low | Fixed (bold text) |

### Most important problems

1. **#1 and #2: for a blind user, SND was a chat that never replied.** The Orca test showed silence when the proposal arrived and during the whole deploy.
2. **#3: at 200% zoom the conversations disappeared.** Found with the zoom test.
3. **#4: the 5G jargon.** This is the most SND-specific problem. The proposal the user must confirm before deploying was full of acronyms that a student can't evaluate.

## Fixes

| # | What we changed |
|---|-----------------|
| 1 | The message list is now a `role="log"` region, so screen readers announce each new message. |
| 2 | A hidden status line (`role="status"`) announces the name of each deploy step and then "Network deployed successfully." The visual step list is hidden from screen readers, so each step is heard only once. The total number of steps is deliberately not announced, because the AI will decide how many steps each deployment has. |
| 3 | The sidebar scrolls when it doesn't fit, and the conversation list keeps a minimum height. |
| 4 | Every parameter now has a plain-language explanation, always visible under its name: in the proposal, in the details modal, and under each Refine field, together with the expected format. The explanation travels with the proposal data (each row is name, value and explanation), so when the AI generates new parameters it can send their explanation too, without changes to the frontend. We first tried a "?" button and a clickable dotted term, and dropped both for design reasons. |
| 5, 6, 18 | A new, lighter border colour used only for inputs (3.98:1), a darker purple for buttons (5.06:1) and a lighter placeholder (4.97:1). |
| 7 | The dropdown now comes after its button in the HTML, so it follows the normal Tab order. `role="menu"` was removed, and Esc closes the menu and returns focus to the button. |
| 8 | A hidden `<h1>` with the conversation title. In the chat, the proposal is an `<h2>` that includes its state ("Current proposal" or "Previous proposal"). |
| 9 | A `<main>` landmark and a "Skip to content" link that appears on the first Tab. |
| 10 | "Saved as "name"." is announced, and focus moves to the "View in Implementations" link. |
| 11 | Hidden text "Assistant is typing…" inside the conversation. |
| 12 | The password rule is now fixed help text under the label, linked to the field. |
| 13 | Format hints and validation (MCC with 3 digits, MNC with 2–3 digits, subnet in CIDR format, whole numbers ≥ 1, etc.). Errors appear as text under the field, and focus moves to the first error. |
| 15 | A note "All fields are required." on Login and Signup. |
| 16 | Character counters in the save/edit modal. |
| 17 | Consistent terms: the page is "Implementations" and each item is a "network". "Create Network" became "New network request". |
| 19 | `<header>` and `<footer>` replaced by `<div>` in modals. |
| 20 | The Deploy text is now bold. |

**#14 was not fixed.** The team decided to keep the original +/– design. WCAG 2.5.8 allows it through the "equivalent" exception, because the number can also be typed in the field.

## Results

| Check | Before | After |
|-------|--------|-------|
| Accessibility matrix | 20 problems (3 High, 10 Medium, 7 Low) | 19 fixed: all High and Medium problems. One Low problem kept by team decision. |
| axe DevTools | 1 WCAG violation repeated on 3 screens, plus 9–22 structure warnings per app screen | 0 issues on all 8 screen states |
| Contrast | Input borders, purple buttons and placeholders below the minimum | All colour pairs pass |
| Screen reader (Orca) | Silent when the proposal arrived, during the deploy and after saving | The assistant's reply, each deploy step and the "Saved as…" confirmation are announced |
| Zoom at 200% | Conversation list and user menu cut off | All conversations and the user menu are reachable |

## Next Steps

- **Validation driven by the AI's data.** Like the explanations, each parameter should bring its own validation rules (pattern, minimum, maximum, error message) in the proposal, replacing the rules that are hardcoded today. This will be done once the format the AI sends is defined. The backend always validates again.
- **SUS evaluation** with real users in a later milestone.
