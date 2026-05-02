"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const nodes = [
  {
    id: "technical",
    label: "Technical Systems",
    sublabels: ["model drift", "testing", "monitoring"],
    angle: -90,
    color: "oklch(0.55 0.22 250)",
  },
  {
    id: "makers",
    label: "The Makers",
    sublabels: ["developers", "vendors", "cloud"],
    angle: -18,
    color: "oklch(0.6 0.18 280)",
  },
  {
    id: "government",
    label: "Government & Legal",
    sublabels: ["law", "courts", "standards"],
    angle: 54,
    color: "oklch(0.5 0.18 220)",
  },
  {
    id: "people",
    label: "The People",
    sublabels: ["users", "workers", "patients"],
    angle: 126,
    color: "oklch(0.55 0.15 180)",
  },
  {
    id: "market",
    label: "Market Drivers",
    sublabels: ["profit", "trust", "competition"],
    angle: 198,
    color: "oklch(0.6 0.2 300)",
  },
]

const relationships = [
  {
    label: "Speed pressure",
    type: "conflict",
  },
  {
    label: "Legal and audit pressure",
    type: "conflict",
  },
  {
    label: "Shared need for trust",
    type: "convergence",
  },
]

function SystemNode({ 
  node, 
  index, 
  nodesProgress, 
  linesProgress, 
  sublabelsProgress 
}: { 
  node: typeof nodes[0]
  index: number
  nodesProgress: ReturnType<typeof useTransform>
  linesProgress: ReturnType<typeof useTransform>
  sublabelsProgress: ReturnType<typeof useTransform>
}) {
  const radius = 180
  const radians = (node.angle * Math.PI) / 180
  const x = Math.cos(radians) * radius
  const y = Math.sin(radians) * radius
  
  const nodeOpacity = useTransform(nodesProgress, [index * 0.15, Math.min(index * 0.15 + 0.3, 1)], [0, 1])
  const nodeScale = useTransform(nodesProgress, [index * 0.15, Math.min(index * 0.15 + 0.3, 1)], [0.5, 1])

  return (
    <motion.div
      style={{
        opacity: nodeOpacity,
        scale: nodeScale,
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
    >
      <div
        className="relative"
        style={{
          transform: `translate(${x}px, ${y}px)`,
        }}
      >
        {/* Connection Line */}
        <motion.svg
          style={{
            opacity: linesProgress,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
          viewBox="-192 -192 384 384"
        >
          <line
            x1={0}
            y1={0}
            x2={-x}
            y2={-y}
            stroke={node.color}
            strokeWidth="1"
            strokeOpacity="0.4"
            strokeDasharray="4 4"
          />
        </motion.svg>

        {/* Node */}
        <div className="relative group">
          <div
            className="absolute inset-0 rounded-xl blur-lg opacity-30"
            style={{ backgroundColor: node.color }}
          />
          <div
            className="relative w-36 md:w-40 glass rounded-xl p-4 border transition-all duration-300 hover:scale-105"
            style={{ borderColor: `${node.color}40` }}
          >
            <h3 className="text-sm md:text-base font-semibold text-foreground text-center mb-2">
              {node.label}
            </h3>
            
            {/* Sublabels */}
            <motion.div
              style={{ opacity: sublabelsProgress }}
              className="flex flex-wrap gap-1 justify-center"
            >
              {node.sublabels.map((sublabel) => (
                <span
                  key={sublabel}
                  className="text-[10px] px-1.5 py-0.5 rounded-full bg-secondary/50 text-muted-foreground"
                >
                  {sublabel}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function SystemMapSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const centerOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1])
  const centerScale = useTransform(scrollYProgress, [0.1, 0.2], [0.8, 1])
  const nodesProgress = useTransform(scrollYProgress, [0.2, 0.4], [0, 1])
  const linesProgress = useTransform(scrollYProgress, [0.35, 0.5], [0, 1])
  const sublabelsProgress = useTransform(scrollYProgress, [0.45, 0.6], [0, 1])
  const captionProgress = useTransform(scrollYProgress, [0.55, 0.65], [0, 1])

  return (
    <section
      id="system-map"
      ref={containerRef}
      className="relative py-28 md:py-0 md:min-h-[300vh]"
    >
      <div className="md:hidden max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-primary/80 text-sm tracking-[0.2em] uppercase mb-2">The Centerpiece</p>
          <h2 className="text-4xl font-serif mb-4">The AI Accountability System</h2>
          <p className="text-muted-foreground leading-relaxed">
            I selected these stakeholder groups because each one controls or experiences a
            different part of the accountability cycle.
          </p>
        </div>

        <div className="grid gap-4">
          {nodes.map((node) => (
            <div
              key={node.id}
              className="glass rounded-xl border p-5"
              style={{ borderColor: `${node.color}40` }}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-foreground">{node.label}</h3>
                <div
                  className="h-2 w-10 rounded-full"
                  style={{ backgroundColor: node.color }}
                />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {node.sublabels.map((sublabel) => (
                  <span
                    key={sublabel}
                    className="text-xs px-2 py-1 rounded-full bg-secondary/60 text-muted-foreground"
                  >
                    {sublabel}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-3">
          {relationships.map((relationship) => (
            <div
              key={relationship.label}
              className={`rounded-xl border px-4 py-3 text-sm font-medium ${
                relationship.type === "conflict"
                  ? "border-destructive/30 bg-destructive/10 text-destructive/90"
                  : "border-primary/30 bg-primary/10 text-primary"
              }`}
            >
              {relationship.label}
            </div>
          ))}
        </div>
      </div>

      <div className="sticky top-0 hidden h-screen items-center justify-center overflow-hidden md:flex">
        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 bg-primary" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            style={{ opacity: centerOpacity }}
            className="absolute top-20 left-6 right-6 text-center"
          >
            <p className="text-primary/80 text-sm tracking-[0.2em] uppercase mb-2">The Centerpiece</p>
            <h2 className="text-3xl md:text-4xl font-serif">The AI Accountability System</h2>
          </motion.div>

          {/* System Diagram */}
          <div className="relative w-full aspect-square max-w-3xl mx-auto">
            {/* Center Node */}
            <motion.div
              style={{ opacity: centerOpacity, scale: centerScale }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-xl bg-primary/30" />
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full glass-strong flex items-center justify-center border border-primary/40">
                  <div className="text-center px-4">
                    <span className="text-lg md:text-xl font-semibold text-gradient-cyan">
                      AI Accountability
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Outer Nodes */}
            {nodes.map((node, index) => (
              <SystemNode 
                key={node.id}
                node={node}
                index={index}
                nodesProgress={nodesProgress}
                linesProgress={linesProgress}
                sublabelsProgress={sublabelsProgress}
              />
            ))}

          </div>

          {/* Caption */}
          <motion.div
            style={{ opacity: captionProgress }}
            className="absolute bottom-8 left-6 right-6 max-w-2xl mx-auto"
          >
            <div className="glass rounded-xl p-5 text-center">
              <div className="mb-4 flex flex-wrap justify-center gap-2">
                {relationships.map((relationship) => (
                  <span
                    key={relationship.label}
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${
                      relationship.type === "conflict"
                        ? "border-destructive/30 bg-destructive/10 text-destructive/90"
                        : "border-primary/30 bg-primary/10 text-primary"
                    }`}
                  >
                    {relationship.label}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I selected these stakeholder groups because each one controls or experiences a
                different part of the accountability cycle: building, regulating, auditing, using,
                or financially pressuring AI systems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
