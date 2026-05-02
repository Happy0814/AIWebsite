"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

const stakeholders = [
  {
    id: "makers",
    title: "The Makers",
    role: "Private-sector actors who build, train, deploy, and maintain AI systems.",
    interests: "Profit, market share, speed, innovation, and control over information. Their power is very high because they decide what gets built and released.",
    perception: "They often frame accountability as a technical issue that can be managed internally through engineering, monitoring, and selective regulation.",
    impact: "They face liability, reputational risk, financial loss, and regulatory pressure, but may also benefit in the short term from weak accountability because it allows faster deployment.",
    color: "oklch(0.6 0.18 280)",
  },
  {
    id: "government",
    title: "Government & Legal Institutions",
    role: "These actors create, interpret, and enforce the rules around AI accountability.",
    interests: "Public safety, legitimacy, economic stability, and national competitiveness. Their power is high but slower and less direct than corporate power.",
    perception: "They see AI not only as a safety issue, but also as an issue of competition, growth, and geopolitical advantage.",
    impact: "They are affected when AI failures produce backlash, legal disputes, and pressure to regulate more effectively.",
    color: "oklch(0.5 0.18 220)",
  },
  {
    id: "people",
    title: "The People",
    role: "Users, non-users, workers, consumers, patients, students, job applicants, whistleblowers, and journalists.",
    interests: "Their direct power is often low, but collectively they influence markets, media narratives, and politics. Their interests center on privacy, fairness, safety, transparency, job security, and protection from misuse.",
    perception: "They see AI accountability through lived consequences rather than technical abstractions.",
    impact: "They are often the group most directly affected when the system fails.",
    color: "oklch(0.55 0.15 180)",
  },
  {
    id: "oversight",
    title: "Technical Oversight Actors",
    role: "Auditors, safety teams, evaluators, monitoring systems, verification efforts, and human oversight structures.",
    interests: "Reliability, traceability, safety, and continuing oversight. Their power is moderate because they influence what gets measured and monitored but do not control the whole system.",
    perception: "They see accountability as a complex ongoing process, not a problem solved once.",
    impact: "They are trapped inside the same system that makes accountability difficult, especially when oversight is rushed or reduced to appearances.",
    color: "oklch(0.55 0.22 250)",
  },
  {
    id: "market",
    title: "Structural & Market Drivers",
    role: "Larger forces that shape the behavior of everyone else.",
    interests: "Profit motives, competition, customer demand, investor pressure, public trust, compliance costs, and geopolitics. Their structural power is enormous.",
    perception: "Accountability is difficult because the wider system rewards speed, scale, and advantage more than caution.",
    impact: "These forces are destabilized by AI failures, but they also continue feeding the system that produces the problem.",
    color: "oklch(0.6 0.2 300)",
  },
]

export function StakeholdersSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  return (
    <section
      id="stakeholders"
      ref={sectionRef}
      className="relative py-32 md:py-40"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary/80 text-sm tracking-[0.2em] uppercase mb-4">Understanding Power</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            Stakeholders in the System
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            These groups were selected because they either shape AI decisions directly or absorb
            the consequences when accountability fails.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={stakeholder.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className={cn(
                "group relative cursor-pointer",
                index === 3 && "lg:col-span-1 md:col-span-1",
                index === 4 && "lg:col-span-1 md:col-span-1"
              )}
              onClick={() => setExpandedCard(expandedCard === stakeholder.id ? null : stakeholder.id)}
            >
              <div
                className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundColor: stakeholder.color }}
              />
              <div
                className={cn(
                  "relative glass rounded-2xl p-6 h-full transition-all duration-500",
                  "hover:border-primary/30",
                  expandedCard === stakeholder.id && "ring-1 ring-primary/40"
                )}
              >
                <div
                  className="w-2 h-2 rounded-full mb-4"
                  style={{ backgroundColor: stakeholder.color }}
                />
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {stakeholder.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {stakeholder.role}
                </p>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedCard === stakeholder.id ? "auto" : 0,
                    opacity: expandedCard === stakeholder.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-border space-y-4">
                    <div>
                      <p className="text-xs text-primary uppercase tracking-wide mb-1">Interests & Power</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{stakeholder.interests}</p>
                    </div>
                    <div>
                      <p className="text-xs text-primary uppercase tracking-wide mb-1">Perception</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{stakeholder.perception}</p>
                    </div>
                    <div>
                      <p className="text-xs text-primary uppercase tracking-wide mb-1">Impact</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{stakeholder.impact}</p>
                    </div>
                  </div>
                </motion.div>

                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{expandedCard === stakeholder.id ? "Click to collapse" : "Click to expand"}</span>
                  <motion.svg
                    animate={{ rotate: expandedCard === stakeholder.id ? 180 : 0 }}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
