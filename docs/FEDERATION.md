# Federation Roadmap

## MVP posture

Federation is disabled by default. The local node should still have a node identity from day one.

## Node manifest

A future node publishes:

```txt
/.well-known/myface-node.json
```

The manifest includes:

- node id,
- domain,
- software version,
- public key,
- node owner,
- flavor,
- visibility,
- federation mode,
- parent/patron node,
- signatures.

## Federation stages

| Stage | Meaning |
|---|---|
| Local Only | no federation |
| Sponsored Private | known to parent/patron only |
| Listed Beta | discoverable in limited directories |
| Federated | public metadata exchange |
| Trusted Node | higher visibility and invite authority |
| Commons Node | highly trusted public node |

## Initial protocol objects

- NodeManifest
- NodeSponsorship
- NodeSeverance
- FederatedProfile
- FederatedGroup
- FederatedProject
- FederatedBulletin
- ReputationSummary
- ModerationNotice
- BlockNotice
