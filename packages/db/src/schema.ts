import { boolean, int, json, mysqlEnum, mysqlTable, primaryKey, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/mysql-core";

export const nodes = mysqlTable("nodes", {
  id: varchar("id", { length: 64 }).primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  slug: varchar("slug", { length: 80 }).notNull(),
  domain: varchar("domain", { length: 255 }),
  ownerUserId: varchar("owner_user_id", { length: 64 }),
  publicKey: text("public_key"),
  flavor: varchar("flavor", { length: 80 }).notNull().default("friend_circle"),
  visibility: mysqlEnum("visibility", ["local_only", "private", "listed", "federated_public"]).notNull().default("local_only"),
  discoveryTier: int("discovery_tier").notNull().default(0),
  status: mysqlEnum("status", ["active", "probation", "quarantined", "defederated", "archived"]).notNull().default("active"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow().onUpdateNow()
}, (table) => ({ slugIdx: uniqueIndex("nodes_slug_idx").on(table.slug) }));

export const users = mysqlTable("users", {
  id: varchar("id", { length: 64 }).primaryKey(),
  nodeId: varchar("node_id", { length: 64 }).notNull(),
  legacyNumericId: int("legacy_numeric_id"),
  handle: varchar("handle", { length: 40 }).notNull(),
  displayName: varchar("display_name", { length: 120 }).notNull(),
  email: varchar("email", { length: 255 }),
  avatarUrl: text("avatar_url"),
  accountKind: mysqlEnum("account_kind", ["human", "bot", "system", "user_zero"]).notNull().default("human"),
  accountStatus: mysqlEnum("account_status", ["active", "probation", "restricted", "suspended", "banned"]).notNull().default("active"),
  isDefaultFriend: boolean("is_default_friend").notNull().default(false),
  isPlatformGuide: boolean("is_platform_guide").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow().onUpdateNow()
}, (table) => ({
  handleIdx: uniqueIndex("users_handle_idx").on(table.handle),
  emailIdx: uniqueIndex("users_email_idx").on(table.email)
}));

export const profiles = mysqlTable("profiles", {
  userId: varchar("user_id", { length: 64 }).primaryKey(),
  tagline: varchar("tagline", { length: 160 }),
  bio: text("bio"),
  mood: varchar("mood", { length: 80 }),
  profileSong: text("profile_song"),
  profileTheme: varchar("profile_theme", { length: 80 }),
  customHtml: text("custom_html"),
  customCss: text("custom_css"),
  visibility: mysqlEnum("visibility", ["public", "friends", "private"]).notNull().default("public"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow().onUpdateNow()
});

export const friendships = mysqlTable("friendships", {
  requesterId: varchar("requester_id", { length: 64 }).notNull(),
  addresseeId: varchar("addressee_id", { length: 64 }).notNull(),
  status: mysqlEnum("status", ["pending", "accepted", "blocked", "removed"]).notNull().default("pending"),
  source: mysqlEnum("source", ["manual", "default_user_zero", "import", "system"]).notNull().default("manual"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow().onUpdateNow()
}, (table) => ({ pk: primaryKey({ columns: [table.requesterId, table.addresseeId] }) }));

export const invites = mysqlTable("invites", {
  id: varchar("id", { length: 64 }).primaryKey(),
  nodeId: varchar("node_id", { length: 64 }).notNull(),
  codeHash: varchar("code_hash", { length: 128 }).notNull(),
  sponsorUserId: varchar("sponsor_user_id", { length: 64 }).notNull(),
  maxUses: int("max_uses").notNull().default(1),
  usedCount: int("used_count").notNull().default(0),
  status: mysqlEnum("status", ["active", "revoked", "exhausted", "expired"]).notNull().default("active"),
  expiresAt: timestamp("expires_at"),
  createdAt: timestamp("created_at").notNull().defaultNow()
}, (table) => ({ codeHashIdx: uniqueIndex("invites_code_hash_idx").on(table.codeHash) }));

export const inviteEdges = mysqlTable("invite_edges", {
  id: varchar("id", { length: 64 }).primaryKey(),
  nodeId: varchar("node_id", { length: 64 }).notNull(),
  inviteId: varchar("invite_id", { length: 64 }).notNull(),
  sponsorUserId: varchar("sponsor_user_id", { length: 64 }).notNull(),
  invitedUserId: varchar("invited_user_id", { length: 64 }).notNull(),
  status: mysqlEnum("status", ["active", "severed", "revoked", "transferred"]).notNull().default("active"),
  severReason: text("sever_reason"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  severedAt: timestamp("severed_at")
});

export const userReputation = mysqlTable("user_reputation", {
  userId: varchar("user_id", { length: 64 }).primaryKey(),
  karma: int("karma").notNull().default(0),
  trust: int("trust").notNull().default(50),
  risk: int("risk").notNull().default(0),
  renown: int("renown").notNull().default(0),
  inviteScore: int("invite_score").notNull().default(0),
  tier: varchar("tier", { length: 80 }).notNull().default("new_arrival"),
  updatedAt: timestamp("updated_at").notNull().defaultNow().onUpdateNow()
});

export const reputationEvents = mysqlTable("reputation_events", {
  id: varchar("id", { length: 64 }).primaryKey(),
  nodeId: varchar("node_id", { length: 64 }).notNull(),
  subjectUserId: varchar("subject_user_id", { length: 64 }).notNull(),
  actorUserId: varchar("actor_user_id", { length: 64 }),
  targetType: varchar("target_type", { length: 80 }),
  targetId: varchar("target_id", { length: 64 }),
  eventType: varchar("event_type", { length: 120 }).notNull(),
  karmaDelta: int("karma_delta").notNull().default(0),
  trustDelta: int("trust_delta").notNull().default(0),
  riskDelta: int("risk_delta").notNull().default(0),
  renownDelta: int("renown_delta").notNull().default(0),
  inviteScoreDelta: int("invite_score_delta").notNull().default(0),
  status: mysqlEnum("status", ["pending", "applied", "reversed", "moderated"]).notNull().default("applied"),
  reason: text("reason"),
  metadata: json("metadata"),
  createdAt: timestamp("created_at").notNull().defaultNow()
});
