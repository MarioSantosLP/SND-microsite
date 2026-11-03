---
title: GDPR
sidebar_position: 1
---

The table below summarises the personal data processed by SND, the purpose of each item and the measures planned to comply with the General Data Protection Regulation (GDPR).

| Data collected | Reason / Purpose | Anonymisation / Pseudonymisation | Right to be forgotten | Privacy Policy | Security Measures |
|----------------|------------------|----------------------------------|-----------------------|----------------|-------------------|
| Username | Identifying and displaying the user. | Data is linked through internal identifiers, avoiding unnecessary use of directly personal identifiers. | Deleted when the account is deleted. | No sharing with external third parties is planned. | Access control, HTTPS and restricted access to PostgreSQL. |
| Email and access profile | Identifying the account, enabling authentication and distinguishing users from administrators. | Internal identifiers are used in processes that do not need the email. | Deleted when the account is deleted. | No external sharing is planned. In the future, authentication may be done through the institutional LDAP. | HTTPS and access control based on profiles and permissions. |
| Password (hash) | Enabling authentication through secure verification of credentials. | No additional technique is planned. The hash protects the password, but it is not the same as anonymisation. | Deleted when the account is deleted. | Not sent to third parties or to the AI agents. LDAP integration may remove the need to store passwords locally. | Argon2id, passwords of at least 8 characters and a limit on login attempts. |
| History of interactions with the system | Letting users view previous requests, continue interactions (conversations) and refine configurations. | Linked through `user_id`, and the personal data sent to the AI agents is minimised. | Users can delete conversations and the history linked to their account. | Only the content needed for processing may be sent to the institutional AI model server; no other external sharing is planned. | Per-user access control, HTTPS and minimisation of the data sent to the models. |
| NetworkSpec and 5G configurations | Saving, viewing, editing, deploying and reusing network configurations. | Linked through internal identifiers, avoiding unnecessary personal data. | Users can delete saved configurations; temporary data is deleted when the network is stopped. | No external sharing is planned; the necessary data is sent to the deployment infrastructure. | Access control and isolation between users. |
| System logs | Identifying failures, diagnosing problems, ensuring security and allowing operations to be audited. | Internal identifiers are used where possible, and unnecessary personal data is excluded. | Deleted after the retention period (to be defined). | Access limited to those authorised to administer the system. | Passwords and full tokens are not logged; access control and defined retention periods. |
