export type ReputationDimension = "karma" | "trust" | "risk" | "renown" | "inviteScore";

export type ReputationEventType =
  | "profile_completed"
  | "status_created"
  | "bulletin_created"
  | "comment_created"
  | "reaction_received_up"
  | "reaction_received_down"
  | "report_upheld"
  | "report_dismissed"
  | "invitee_positive_milestone"
  | "invitee_suspended"
  | "sponsor_disavowed"
  | "olympus_candidate_nominated"
  | "olympus_membership_granted";

export type ReputationDelta = {
  karmaDelta?: number;
  trustDelta?: number;
  riskDelta?: number;
  renownDelta?: number;
  inviteScoreDelta?: number;
};

export const REPUTATION_EVENT_DEFAULTS: Record<ReputationEventType, ReputationDelta> = {
  profile_completed: { karmaDelta: 10, trustDelta: 1 },
  status_created: { karmaDelta: 1 },
  bulletin_created: { karmaDelta: 2 },
  comment_created: { karmaDelta: 1 },
  reaction_received_up: { karmaDelta: 1 },
  reaction_received_down: { karmaDelta: -1 },
  report_upheld: { trustDelta: -5, riskDelta: 10 },
  report_dismissed: { trustDelta: 1, riskDelta: -1 },
  invitee_positive_milestone: { inviteScoreDelta: 5, renownDelta: 1 },
  invitee_suspended: { inviteScoreDelta: -15, riskDelta: 3 },
  sponsor_disavowed: { inviteScoreDelta: -5 },
  olympus_candidate_nominated: { renownDelta: 10 },
  olympus_membership_granted: { renownDelta: 100, trustDelta: 5 }
};

export function clampScore(value: number, min = 0, max = 1000): number {
  return Math.max(min, Math.min(max, value));
}

export function qualifiesForOlympus(input: { renown: number; trust: number; risk: number }): boolean {
  return input.renown >= 750 && input.trust >= 80 && input.risk <= 20;
}
