"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const cards = [
  {
    title: "Probabilistic Systems",
    description: "AI systems do not behave like simple machines with perfectly predictable outputs. Their behavior is harder to fully guarantee.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="20" cy="20" r="8" fill="currentColor" fillOpacity="0.2" />
        <circle cx="20" cy="20" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Model Drift",
    description: "Even if a system appears safe or fair at deployment, it may change over time as conditions and usage evolve.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M5 25 Q 10 10, 20 20 T 35 15" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M5 30 Q 10 20, 20 25 T 35 20" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" fill="none" />
        <circle cx="35" cy="15" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Distributed Responsibility",
    description: "Responsibility is spread across developers, companies, deployers, regulators, auditors, and users.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="28" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="30" cy="28" r="4" stroke="currentColor" strokeWidth="1.5" />
        <line x1="20" y1="14" x2="12" y2="24" stroke="currentColor" strokeWidth="1.5" />
        <line x1="20" y1="14" x2="28" y2="24" stroke="currentColor" strokeWidth="1.5" />
        <line x1="14" y1="28" x2="26" y2="28" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Regulation Lags Behind",
    description: "AI deployment often moves faster than legal and institutional oversight.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="8" y="8" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="12" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="1.5" />
        <line x1="12" y1="22" x2="24" y2="22" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="12" y1="28" x2="20" y2="28" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
      </svg>
    ),
  },
]

export function WhyMattersSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="why-matters"
      ref={sectionRef}
      className="relative py-32 md:py-40"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary/80 text-sm tracking-[0.2em] uppercase mb-4">Understanding the Stakes</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            Why This Problem Matters
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AI accountability matters because AI is no longer a distant future technology. 
            It already affects real decisions, real institutions, and real lives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-8 h-full transition-all duration-500 hover:bg-secondary/30 hover:border-primary/20">
                <div className="text-primary mb-6 transition-transform duration-300 group-hover:scale-110">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
