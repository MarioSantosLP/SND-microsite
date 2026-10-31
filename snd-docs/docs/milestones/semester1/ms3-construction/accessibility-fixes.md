---
title: Accessibility Fixes
sidebar_position: 4
---

What we changed in the frontend for each problem in the [accessibility matrix](./accessibility-audit.md#accessibility-matrix), and the results of running the tests again.

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
