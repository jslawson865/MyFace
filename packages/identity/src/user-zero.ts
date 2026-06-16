export const USER_ZERO_ID = "usr_00000000000000000000000000000000" as const;
export const USER_ZERO_LEGACY_NUMERIC_ID = 0 as const;
export const USER_ZERO_HANDLE = "jake" as const;

export const USER_ZERO_PROFILE = {
  id: USER_ZERO_ID,
  legacyNumericId: USER_ZERO_LEGACY_NUMERIC_ID,
  handle: USER_ZERO_HANDLE,
  username: "jake",
  displayName: 'Jason "Jake" Lawson',
  legalName: "Jason Lawson",
  preferredName: "Jake",
  email: "jslawson50@gmail.com",
  accountKind: "user_zero",
  visibility: "public",
  role: "owner",
  isDefaultFriend: true,
  isPlatformGuide: true,
  isOlympusFounder: true,
  tagline: "Your first friend on MyFace.",
  bio: [
    "Welcome to MyFace. I am Jake, User 0, your default first friend and guide through the platform.",
    "Think Tom from MySpace, but upgraded for an invite-gated trust graph: I help new users understand profiles, friends, patronage, reputation, nodes, and the Olympus circle.",
    "Build good experiences. Invite carefully. Your reputation should say something real about the world you help create."
  ].join("\n\n"),
  mood: "building the graph",
  profileSong: null,
  profileTheme: "olympus-retro-founder"
} as const;

export const OLYMPUS_CIRCLE = {
  slug: "olympus",
  name: "Olympus Social Circle",
  description:
    "A high-renown discoverable circle for users who consistently create positive experiences, help others, moderate responsibly, and strengthen the MyFace trust graph.",
  founderUserId: USER_ZERO_ID,
  visibility: "public",
  membershipMode: "earned_or_invited",
  minimumRenown: 750,
  minimumTrust: 80,
  maximumRisk: 20
} as const;
