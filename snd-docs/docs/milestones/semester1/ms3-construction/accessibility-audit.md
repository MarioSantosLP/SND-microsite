---
title: Accessibility Audit
sidebar_position: 3
---

The results of the audit described in [Accessibility Approach](./accessibility-approach.md): what already worked, what the automatic tools found, and the accessibility matrix with every problem found, screen by screen.

## What Was Already Good

- The whole main task could already be completed **with the keyboard only**, with visible focus.
- **No information depended only on colour.** Errors have text, and states have an icon and text. This passed the protanopia, deuteranopia and achromatopsia simulations.
- **Text contrast was good**, between 5.5:1 and 14.5:1.
- Forms had real labels, errors appeared next to the field and were linked with `aria-describedby`, and focus moved to the first error.
- **Errors were prevented:** the proposal is always reviewed before deploying, and deleting a network asks for confirmation.
- Icon-only buttons had accessible names, and modals used `<dialog>`, so focus stays inside and Esc closes them.

## Automatic Results Before the Fixes

axe found only **1 real WCAG violation**, repeated on 3 screens: white text on the purple buttons, at 4.23:1. It also reported **9 to 22 page-structure warnings per app screen**: no `<main>`, no `<h1>` in the chat and extra "banner" landmarks.

The automatic tools missed the most serious problems. These only showed up in the manual tests, especially the screen reader test.

## Accessibility Matrix

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

## Most Important Problems

1. **#1 and #2: for a blind user, SND was a chat that never replied.** The Orca test showed silence when the proposal arrived and during the whole deploy.
2. **#3: at 200% zoom the conversations disappeared.** Found with the zoom test.
3. **#4: the 5G jargon.** This is the most SND-specific problem. The proposal the user must confirm before deploying was full of acronyms that a student can't evaluate.
