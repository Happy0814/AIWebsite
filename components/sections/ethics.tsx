"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const ethicalProblems = [
  {
    title: "Who Gets to Define \"Safe\" or \"Fair\"?",
    description: "Researchers and institutions may embed values into AI systems without broad democratic agreement.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 8 L24 24 L36 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
        <path d="M14 38 L24 24" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="2 2" />
        <path d="M34 38 L24 24" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    title: "How Much Uncertainty Is Acceptable?",
    description: "Deploying systems whose long-term harms cannot be fully tested in advance creates a tension between innovation and public protection.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="8" y="16" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 8 L24 16 L32 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="26" x2="32" y2="26" stroke="currentColor" strokeWidth="1.5" />
        <line x1="16" y1="32" x2="28" y2="32" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
        <circle cx="36" cy="32" r="2" fill="currentColor" fillOpacity="0.5" />
      </svg>
    ),
  },
]

export function EthicsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="ethics"
      ref={sectionRef}
      className="relative py-32 md:py-40"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary/80 text-sm tracking-[0.2em] uppercase mb-4">Research Implications</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            Ethical Problems for Researchers
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {ethicalProblems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group"
            >
              <div className="glass-strong rounded-2xl p-8 h-full transition-all duration-500 hover:border-primary/30">
                <div className="text-primary mb-6 transition-transform duration-300 group-hover:scale-105">
                  {problem.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground leading-tight">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
