export type NodeVisibility = "local_only" | "private" | "listed" | "federated_public";
export type FederationMode = "disabled" | "allowlist" | "open_discovery";

export type MyFaceNodeManifest = {
  protocol: "myface";
  version: string;
  nodeId: string;
  name: string;
  domain: string;
  publicKey: string;
  owner: {
    userId: string;
    handle: string;
    displayName: string;
  };
  parentNodeId?: string;
  parentSignature?: string;
  visibility: NodeVisibility;
  federationMode: FederationMode;
  discoveryTier: number;
  createdAt: string;
};

export const WELL_KNOWN_NODE_MANIFEST_PATH = "/.well-known/myface-node.json" as const;
