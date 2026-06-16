import { USER_ZERO_ID, USER_ZERO_PROFILE, OLYMPUS_CIRCLE } from "@myface/identity";

export async function seedUserZero() {
  const localNodeId = process.env.MYFACE_NODE_ID ?? "node_local_jakeroot";

  // Wire this plan into concrete Drizzle insert/upsert calls once the DB connection layer is finalized.
  const seedPlan = {
    node: {
      id: localNodeId,
      name: process.env.MYFACE_NODE_NAME ?? "JakeRoot",
      slug: "jakeroot",
      domain: process.env.MYFACE_NODE_DOMAIN ?? "localhost",
      ownerUserId: USER_ZERO_ID,
      flavor: process.env.MYFACE_NODE_FLAVOR ?? "dev_collective",
      visibility: process.env.MYFACE_NODE_VISIBILITY ?? "local_only"
    },
    user: {
      id: USER_ZERO_ID,
      nodeId: localNodeId,
      legacyNumericId: USER_ZERO_PROFILE.legacyNumericId,
      handle: USER_ZERO_PROFILE.handle,
      displayName: USER_ZERO_PROFILE.displayName,
      email: USER_ZERO_PROFILE.email,
      accountKind: USER_ZERO_PROFILE.accountKind,
      accountStatus: "active",
      isDefaultFriend: true,
      isPlatformGuide: true
    },
    profile: {
      userId: USER_ZERO_ID,
      tagline: USER_ZERO_PROFILE.tagline,
      bio: USER_ZERO_PROFILE.bio,
      mood: USER_ZERO_PROFILE.mood,
      profileTheme: USER_ZERO_PROFILE.profileTheme,
      visibility: USER_ZERO_PROFILE.visibility
    },
    reputation: {
      userId: USER_ZERO_ID,
      karma: 1000,
      trust: 100,
      risk: 0,
      renown: 1000,
      inviteScore: 100,
      tier: "founder_circle"
    },
    olympusCircle: {
      id: "circle_olympus",
      nodeId: localNodeId,
      slug: OLYMPUS_CIRCLE.slug,
      name: OLYMPUS_CIRCLE.name,
      description: OLYMPUS_CIRCLE.description,
      visibility: OLYMPUS_CIRCLE.visibility,
      membershipMode: OLYMPUS_CIRCLE.membershipMode,
      createdByUserId: USER_ZERO_ID
    }
  };

  console.log(JSON.stringify(seedPlan, null, 2));
  return seedPlan;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await seedUserZero();
}
