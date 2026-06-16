export type AuthProvider = "local_dev" | "github" | "google" | "email_magic_link" | "kimi";

export type ExternalIdentity = {
  provider: AuthProvider;
  providerUserId: string;
  email?: string;
  displayName?: string;
  avatarUrl?: string;
};

export type AdmissionResult = {
  allowed: boolean;
  reason?: "missing_invite" | "invalid_invite" | "expired_invite" | "exhausted_invite" | "node_closed";
  sponsorUserId?: string;
  nodeId?: string;
};

export function assertInviteBackedAdmission(result: AdmissionResult): asserts result is AdmissionResult & { allowed: true; sponsorUserId: string; nodeId: string } {
  if (!result.allowed || !result.sponsorUserId || !result.nodeId) {
    throw new Error(result.reason ?? "invite_admission_required");
  }
}
