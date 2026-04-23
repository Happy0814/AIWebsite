"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function TakeHomeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="lesson"
      ref={sectionRef}
      className="relative py-32 md:py-48"
    >
      {/* Dramatic background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full blur-3xl opacity-10 bg-gradient-to-br from-primary via-accent to-primary" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6">The Core Lesson</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-2">Take-Home Lesson</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="glass-strong rounded-3xl p-10 md:p-16 mb-12"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed text-foreground text-balance">
            AI accountability cannot be solved once and for all because the same technical, 
            political, economic, and social systems that are supposed to control AI are also 
            the systems that{" "}
            <span className="text-gradient-cyan font-medium">reproduce the problem</span>.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          This is what makes AI accountability <span className="text-accent">wicked</span>. 
          It is not just a flaw in the technology. It is a problem of systems, incentives, 
          values, and power.
        </motion.p>
      </div>
    </section>
  )
}
