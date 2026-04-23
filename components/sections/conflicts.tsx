"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const conflicts = [
  {
    title: "The Makers vs The People",
    description: "Companies are rewarded for speed and scale, while ordinary people often absorb the harms.",
  },
  {
    title: "The Makers vs Government",
    description: "Firms want flexibility and light regulation, while governments face pressure to protect the public without undermining competitiveness.",
  },
  {
    title: "Oversight vs Market Incentives",
    description: "Auditors and safety teams aim for serious accountability, but the broader system rewards rapid deployment and shallow compliance.",
  },
]

const sharedConcerns = [
  {
    title: "Trust",
    description: "Companies need it for adoption, governments need it for legitimacy, and the public needs it to live with AI expansion.",
  },
  {
    title: "Stability",
    description: "Large AI failures could create lawsuits, backlash, market disruption, and political instability.",
  },
  {
    title: "Better Information",
    description: "Stronger monitoring, documentation, reporting, independent audits, and clearer liability rules benefit everyone.",
  },
]

export function ConflictsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const leftOpacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1])
  const leftX = useTransform(scrollYProgress, [0.15, 0.25], [-50, 0])
  const rightOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1])
  const rightX = useTransform(scrollYProgress, [0.3, 0.4], [50, 0])
  const centerOpacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1])
  const centerScale = useTransform(scrollYProgress, [0.45, 0.55], [0.9, 1])

  return (
    <section
      id="conflicts"
      ref={containerRef}
      className="relative min-h-[250vh]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 bg-destructive" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 bg-primary" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            style={{ opacity: leftOpacity }}
            className="text-center mb-12"
          >
            <p className="text-primary/80 text-sm tracking-[0.2em] uppercase mb-2">Tension & Alignment</p>
            <h2 className="text-4xl md:text-5xl font-serif">Conflict and Convergence</h2>
          </motion.div>

          {/* Split Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Conflicts */}
            <motion.div
              style={{ opacity: leftOpacity, x: leftX }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <h3 className="text-2xl font-semibold text-foreground">Major Conflicts</h3>
              </div>

              {conflicts.map((conflict) => (
                <div
                  key={conflict.title}
                  className="glass rounded-xl p-6 border-l-2 border-destructive/50"
                >
                  <h4 className="text-lg font-semibold text-foreground mb-2">{conflict.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{conflict.description}</p>
                </div>
              ))}
            </motion.div>

            {/* Right Side - Shared Concerns */}
            <motion.div
              style={{ opacity: rightOpacity, x: rightX }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Shared Concerns</h3>
              </div>

              {sharedConcerns.map((concern) => (
                <div
                  key={concern.title}
                  className="glass rounded-xl p-6 border-l-2 border-primary/50"
                >
                  <h4 className="text-lg font-semibold text-foreground mb-2">{concern.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{concern.description}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Center Takeaway */}
          <motion.div
            style={{ opacity: centerOpacity, scale: centerScale }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <div className="glass-strong rounded-2xl p-8 text-center border border-primary/20">
              <div className="flex justify-center gap-4 mb-4">
                <div className="w-8 h-1 rounded-full bg-destructive/60" />
                <div className="w-8 h-1 rounded-full bg-primary/60" />
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                Both <span className="text-destructive/90 font-medium">conflict</span> and{" "}
                <span className="text-primary font-medium">common ground</span> exist inside 
                the same system. Recognizing both is essential for understanding why AI 
                accountability remains so difficult to achieve.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
