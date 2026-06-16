# Security Policy

MyFace is invite-gated and reputation-aware. Bugs in admission, ownership checks, permissions, moderation, or federation may directly affect user safety.

## Priority security boundaries

- No account creation without backend-enforced invite admission.
- OAuth state must be random, signed or server-stored, single-use, and bound to the admission attempt.
- Users may only delete or modify content they own unless granted explicit moderation permission.
- Visibility settings must be enforced server-side.
- Public search must not leak private user fields such as email addresses.
- Reputation and node health calculations must be auditable and reversible.
- Federation payloads must be signed and minimal.

## Reporting

Until a formal security contact is published, open a private issue or contact the repository owner directly.
