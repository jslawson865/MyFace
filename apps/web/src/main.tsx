import React from "react";
import { createRoot } from "react-dom/client";
import { USER_ZERO_PROFILE, OLYMPUS_CIRCLE } from "@myface/identity";

function App() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1>MyFace</h1>
      <p>Invite-gated retro social, rebuilt around patronage, reputation, and sovereign nodes.</p>
      <section style={{ border: "1px solid #999", padding: 16, borderRadius: 8 }}>
        <h2>Your first friend: {USER_ZERO_PROFILE.displayName}</h2>
        <p><strong>@{USER_ZERO_PROFILE.handle}</strong> — {USER_ZERO_PROFILE.tagline}</p>
        <p>{USER_ZERO_PROFILE.bio}</p>
      </section>
      <section style={{ marginTop: 24 }}>
        <h2>{OLYMPUS_CIRCLE.name}</h2>
        <p>{OLYMPUS_CIRCLE.description}</p>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
