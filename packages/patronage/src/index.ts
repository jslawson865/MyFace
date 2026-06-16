export type SponsorEdgeStatus = "active" | "severed" | "revoked" | "transferred";

export type SponsorImpact = {
  directSponsorDelta: number;
  grandSponsorDelta: number;
  reason: string;
};

export function calculateBoundedSponsorImpact(input: {
  inviteeRiskDelta: number;
  inviteeTrustDelta: number;
  severity: "minor" | "moderate" | "severe";
}): SponsorImpact {
  const severityMultiplier = input.severity === "severe" ? 3 : input.severity === "moderate" ? 2 : 1;
  const raw = input.inviteeTrustDelta - input.inviteeRiskDelta * severityMultiplier;
  const directSponsorDelta = Math.max(-50, Math.min(25, Math.round(raw * 0.25)));
  const grandSponsorDelta = Math.max(-10, Math.min(5, Math.round(directSponsorDelta * 0.2)));

  return {
    directSponsorDelta,
    grandSponsorDelta,
    reason: "bounded_invitee_outcome_rollup"
  };
}
