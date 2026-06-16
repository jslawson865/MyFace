export type Permission =
  | "admin:dashboard"
  | "auth:bootstrap_owner"
  | "invite:create"
  | "invite:revoke"
  | "content:delete_own"
  | "content:delete_any"
  | "profile:custom_css"
  | "report:review"
  | "reputation:adjust"
  | "node:manage"
  | "node:sponsor"
  | "federation:manage";

export type Capability =
  | "can_post_status"
  | "can_create_bulletin"
  | "can_comment"
  | "can_send_messages"
  | "can_upload_photos"
  | "can_customize_css"
  | "can_invite_users"
  | "can_create_groups"
  | "can_appear_on_leaderboards";

export type RoleName = "owner" | "admin" | "moderator" | "trusted_user" | "user" | "probationary_user" | "suspended_user";

export const ROLE_PERMISSIONS: Record<RoleName, Permission[]> = {
  owner: [
    "admin:dashboard",
    "auth:bootstrap_owner",
    "invite:create",
    "invite:revoke",
    "content:delete_own",
    "content:delete_any",
    "profile:custom_css",
    "report:review",
    "reputation:adjust",
    "node:manage",
    "node:sponsor",
    "federation:manage"
  ],
  admin: ["admin:dashboard", "invite:create", "invite:revoke", "content:delete_any", "report:review", "reputation:adjust"],
  moderator: ["content:delete_any", "report:review"],
  trusted_user: ["invite:create", "content:delete_own", "profile:custom_css"],
  user: ["content:delete_own"],
  probationary_user: [],
  suspended_user: []
};

export const TIER_CAPABILITIES: Record<string, Capability[]> = {
  new_arrival: ["can_post_status", "can_comment", "can_send_messages"],
  known_face: ["can_post_status", "can_create_bulletin", "can_comment", "can_send_messages", "can_upload_photos"],
  regular: ["can_post_status", "can_create_bulletin", "can_comment", "can_send_messages", "can_upload_photos", "can_invite_users"],
  trusted: ["can_post_status", "can_create_bulletin", "can_comment", "can_send_messages", "can_upload_photos", "can_invite_users", "can_customize_css", "can_create_groups", "can_appear_on_leaderboards"],
  founder_circle: ["can_post_status", "can_create_bulletin", "can_comment", "can_send_messages", "can_upload_photos", "can_invite_users", "can_customize_css", "can_create_groups", "can_appear_on_leaderboards"]
};
