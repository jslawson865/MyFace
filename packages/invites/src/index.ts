import { randomBytes, createHash } from "node:crypto";

export function generateInviteCode(bytes = 18): string {
  return randomBytes(bytes).toString("base64url");
}

export function hashInviteCode(code: string): string {
  return createHash("sha256").update(code, "utf8").digest("hex");
}

export type InviteAdmissionState = {
  inviteId: string;
  sponsorUserId: string;
  nodeId: string;
  stateNonce: string;
  expiresAt: Date;
};
