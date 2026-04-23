"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const cards = [
  {
    title: "No Single Definition",
    description: "AI accountability means different things depending on whether one prioritizes fairness, safety, privacy, innovation, growth, or national security.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="12" cy="20" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="28" cy="20" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    title: "No Stopping Rule",
    description: "There is no final point where accountability is finished. Models change, regulations shift, and new uses keep appearing.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M20 5 L20 35" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 12 L20 5 L28 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="3" fill="currentColor" />
        <circle cx="20" cy="30" r="2" fill="currentColor" fillOpacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Good or Bad, Not True or False",
    description: "There is no perfect solution. Different approaches involve tradeoffs.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="8" y="15" width="10" height="15" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="22" y="10" width="10" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <line x1="5" y1="35" x2="35" y2="35" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    title: "No Final Test",
    description: "No one-time evaluation can prove that an AI system will remain safe or fair across all future contexts.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="8" y="8" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 20 L18 24 L26 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="8" y1="32" x2="32" y2="8" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
      </svg>
    ),
  },
  {
    title: "Interventions Have Tradeoffs",
    description: "Stronger regulation may reduce harms but can also shift markets and incentives.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 12 L20 20 L26 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 26 Q 20 22, 26 26" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Framing Changes the Solution",
    description: "The way the problem is defined shapes the kinds of solutions people consider possible.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="6" y="6" width="28" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
        <rect x="12" y="12" width="16" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="4" fill="currentColor" fillOpacity="0.3" />
      </svg>
    ),
  },
]

export function WickedProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="wicked"
      ref={sectionRef}
      className="relative py-32 md:py-40"
    >
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-5 bg-accent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">The Core Insight</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            Why This Is a <span className="text-gradient-violet">Wicked Problem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Wicked problems resist simple solutions because they are defined by complexity, 
            interdependence, and fundamental disagreement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
              className="group"
            >
              <div className="glass rounded-xl p-6 h-full transition-all duration-500 hover:bg-accent/5 hover:border-accent/20">
                <div className="text-accent mb-4 transition-transform duration-300 group-hover:scale-110">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
