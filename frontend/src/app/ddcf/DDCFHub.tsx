"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Background,
  BackgroundVariant,
  Controls,
  MarkerType,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Edge,
  type NodeTypes,
} from "@xyflow/react";
import { ExternalLink, Move, MousePointer2 } from "lucide-react";
import DDCFDialog from "./DDCFDialog";
import DDCFNode, { type DDCFFlowNode } from "./DDCFNode";
import {
  ddcfItems,
  officialProjectUrl,
  peripheralItemIds,
  type DDCFItemId,
} from "./ddcfData";
import styles from "./page.module.css";

const nodeTypes: NodeTypes = { ddcfNode: DDCFNode };

const nodePositions: Record<DDCFItemId, { x: number; y: number }> = {
  ddcf: { x: 420, y: 275 },
  "constitutive-modeling": { x: 20, y: 20 },
  "neural-operators": { x: 850, y: 20 },
  "gpu-acceleration": { x: 20, y: 565 },
  "automatic-differentiation": { x: 850, y: 565 },
};

export default function DDCFHub() {
  const [activeItem, setActiveItem] = useState<DDCFItemId | null>(null);
  const reduceMotion = useReducedMotion();

  const openItem = useCallback((id: DDCFItemId) => {
    setActiveItem(id);
  }, []);

  const closeItem = useCallback(() => {
    setActiveItem(null);
  }, []);

  const initialNodes = useMemo<DDCFFlowNode[]>(
    () =>
      (Object.keys(ddcfItems) as DDCFItemId[]).map((id) => {
        const item = ddcfItems[id];
        return {
          id,
          type: "ddcfNode",
          position: nodePositions[id],
          data: {
            itemId: id,
            label: item.label,
            title: id === "ddcf" ? item.shortTitle : item.title,
            teaser: item.teaser,
            accent: item.accent,
            central: id === "ddcf",
            onOpen: openItem,
          },
        };
      }),
    [openItem],
  );

  const initialEdges = useMemo<Edge[]>(
    () =>
      peripheralItemIds.map((id) => ({
        id: `ddcf-${id}`,
        source: "ddcf",
        target: id,
        type: "smoothstep",
        animated: !reduceMotion,
        style: {
          stroke: "rgba(97, 220, 255, 0.54)",
          strokeWidth: 1.5,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "rgba(97, 220, 255, 0.7)",
          width: 14,
          height: 14,
        },
      })),
    [reduceMotion],
  );

  const [nodes, , onNodesChange] =
    useNodesState<DDCFFlowNode>(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <>
      <section className={styles.hubShell} aria-labelledby="hub-heading">
        <div className={styles.hubToolbar}>
          <div>
            <span className={styles.sectionIndex}>01 / Project system</span>
            <h2 id="hub-heading">Explore the DDCF research network</h2>
          </div>
          <div className={styles.interactionHint}>
            <Move size={16} aria-hidden="true" />
            <span>Drag nodes</span>
            <span className={styles.hintDivider} aria-hidden="true" />
            <MousePointer2 size={16} aria-hidden="true" />
            <span>Open details</span>
          </div>
        </div>

        <motion.div
          className={styles.flowCanvas}
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{ padding: 0.14, maxZoom: 1 }}
            minZoom={0.48}
            maxZoom={1.4}
            nodesConnectable={false}
            deleteKeyCode={null}
            panOnScroll
            zoomOnDoubleClick={false}
            aria-label="Interactive map of the DDCF project and its four research directions"
          >
            <Background
              variant={BackgroundVariant.Dots}
              gap={24}
              size={1.2}
              color="rgba(136, 202, 220, 0.18)"
            />
            <Controls
              position="bottom-right"
              showInteractive={false}
              className={styles.flowControls}
            />
          </ReactFlow>
          <div className={styles.canvasGlow} aria-hidden="true" />
        </motion.div>

        <div className={styles.mobileDirections} aria-label="Research directions">
          {peripheralItemIds.map((id, index) => {
            const item = ddcfItems[id];
            return (
              <button
                type="button"
                key={id}
                onClick={() => openItem(id)}
                className={styles.directionButton}
              >
                <span>0{index + 1}</span>
                <strong>{item.shortTitle}</strong>
                <span aria-hidden="true">↗</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className={styles.fundingStrip} aria-label="Project funding">
        <div className={styles.snsfLogoWrap}>
          <Image
            src="/images/SNF_logo_standard_web_color_neg_e.png"
            alt="Swiss National Science Foundation"
            width={213}
            height={50}
            className={styles.snsfLogo}
          />
        </div>
        <p>
          Funded by the Swiss National Science Foundation through an Ambizione
          grant, hosted at EPFL’s Laboratory for Computational Solid Mechanics.
        </p>
        <a href={officialProjectUrl} target="_blank" rel="noreferrer">
          Grant 216341
          <ExternalLink size={15} aria-hidden="true" />
        </a>
      </section>

      <DDCFDialog itemId={activeItem} onClose={closeItem} />
    </>
  );
}
