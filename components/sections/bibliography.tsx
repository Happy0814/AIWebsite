"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const sources = [
  {
    authors: "Rittel, H. W. J., & Webber, M. M.",
    year: "1973",
    title: "Dilemmas in a General Theory of Planning",
    publication: "Policy Sciences, 4(2), 155–169",
    note: "Foundational text on wicked problems",
  },
  {
    authors: "National Institute of Standards and Technology",
    year: "2023",
    title: "AI Risk Management Framework (AI RMF 1.0)",
    publication: "NIST Publication",
    note: "U.S. federal framework for AI risk",
  },
  {
    authors: "European Parliament and Council",
    year: "2024",
    title: "Regulation (EU) 2024/1689 (EU AI Act)",
    publication: "Official Journal of the European Union",
    note: "Comprehensive AI regulation",
  },
]

export function BibliographySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="bibliography"
      ref={sectionRef}
      className="relative py-32 md:py-40 border-t border-border/50"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4">References</p>
          <h2 className="text-4xl md:text-5xl font-serif">Selected Sources</h2>
        </motion.div>

        <div className="space-y-6">
          {sources.map((source, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="glass p-6 rounded-xl border transition-colors"
            >
              <p className="text-sm mb-2 text-muted-foreground">
                {source.authors} ({source.year})
              </p>
              <p className="text-lg font-medium mb-1 text-foreground">
                {source.title}
              </p>
              <p className="text-sm text-muted-foreground">
                {source.publication}
              </p>
              {source.note && (
                <p className="text-xs mt-3 text-primary/70">
                  {source.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
