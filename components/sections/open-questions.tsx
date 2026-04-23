"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const questions = [
  "How should liability be divided across developers, companies, deployers, regulators, and users?",
  "What forms of post-deployment monitoring actually work?",
  "Can independent audits remain meaningful in a system that rewards speed?",
  "How should different countries balance innovation and restraint?",
  "How do military and state uses of AI complicate accountability?",
  "What structures could force continuous proof of safety instead of one-time approval?",
]

export function OpenQuestionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="questions"
      ref={sectionRef}
      className="relative py-32 md:py-40"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary/80 text-sm tracking-[0.2em] uppercase mb-4">Looking Forward</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            Open Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These questions remain unresolved and require ongoing attention from researchers, 
            policymakers, and the public.
          </p>
        </motion.div>

        <div className="space-y-4">
          {questions.map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="group"
            >
              <div className="flex items-start gap-6 glass rounded-xl p-6 transition-all duration-300 hover:bg-secondary/30 hover:border-primary/20">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <span className="text-sm font-mono text-primary">{(index + 1).toString().padStart(2, '0')}</span>
                </div>
                <p className="text-lg text-foreground/90 leading-relaxed pt-1.5">
                  {question}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
