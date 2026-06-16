import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { USER_ZERO_PROFILE } from "@myface/identity";

const app = new Hono();

app.get("/health", (c) => c.json({ ok: true, service: "myface-api" }));

app.get("/user-zero", (c) => c.json(USER_ZERO_PROFILE));

app.get("/.well-known/myface-node.json", (c) => {
  return c.json({
    protocol: "myface",
    version: "0.2.0",
    nodeId: process.env.MYFACE_NODE_ID ?? "node_local_jakeroot",
    name: process.env.MYFACE_NODE_NAME ?? "JakeRoot",
    domain: process.env.MYFACE_NODE_DOMAIN ?? "localhost",
    publicKey: "dev-placeholder-public-key",
    owner: {
      userId: USER_ZERO_PROFILE.id,
      handle: USER_ZERO_PROFILE.handle,
      displayName: USER_ZERO_PROFILE.displayName
    },
    visibility: process.env.MYFACE_NODE_VISIBILITY ?? "local_only",
    federationMode: process.env.FEDERATION_ENABLED === "true" ? "allowlist" : "disabled",
    discoveryTier: 0,
    createdAt: new Date(0).toISOString()
  });
});

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT ?? 8787)
});
