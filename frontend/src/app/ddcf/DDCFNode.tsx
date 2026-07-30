"use client";

import {
  BrainCircuit,
  Cpu,
  Database,
  Sigma,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";
import type { DDCFItemId } from "./ddcfData";
import styles from "./page.module.css";

export type DDCFNodeData = {
  itemId: DDCFItemId;
  label: string;
  title: string;
  teaser: string;
  accent: "cyan" | "violet" | "blue" | "amber" | "rose";
  central?: boolean;
  onOpen: (id: DDCFItemId) => void;
};

export type DDCFFlowNode = Node<DDCFNodeData, "ddcfNode">;

const icons: Record<DDCFItemId, LucideIcon> = {
  ddcf: Sparkles,
  "constitutive-modeling": Database,
  "neural-operators": BrainCircuit,
  "gpu-acceleration": Cpu,
  "automatic-differentiation": Sigma,
};

export default function DDCFNode({ data }: NodeProps<DDCFFlowNode>) {
  const Icon = icons[data.itemId];

  return (
    <div
      className={`${styles.flowNode} ${
        data.central ? styles.centralNode : ""
      } ${styles[`accent${data.accent}`]}`}
    >
      <Handle
        type="target"
        position={Position.Top}
        className={styles.handle}
        isConnectable={false}
      />
      <button
        type="button"
        className={`${styles.nodeButton} nodrag nopan`}
        onClick={() => data.onOpen(data.itemId)}
        aria-label={`Open details for ${data.title}`}
      >
        <span className={styles.nodeTopline}>
          <span className={styles.nodeIcon} aria-hidden="true">
            <Icon size={data.central ? 24 : 20} strokeWidth={1.8} />
          </span>
          <span className={styles.nodeLabel}>{data.label}</span>
        </span>
        <strong className={styles.nodeTitle}>{data.title}</strong>
        <span className={styles.nodeTeaser}>{data.teaser}</span>
        <span className={styles.nodeAction}>
          Explore direction <span aria-hidden="true">↗</span>
        </span>
      </button>
      <Handle
        type="source"
        position={Position.Bottom}
        className={styles.handle}
        isConnectable={false}
      />
    </div>
  );
}
