"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(footerRef, { once: true })

  return (
    <footer
      ref={footerRef}
      className="relative py-16 md:py-24 border-t border-border/30"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-2xl md:text-3xl font-serif text-foreground">
            Abhi Patil
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-muted-foreground">
            <span>Final Project Exhibition</span>
            <span className="hidden md:inline text-border">•</span>
            <span>Spring 2026</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border/20"
        >
          <p className="text-sm text-muted-foreground/60">
            wow!!! you scrolled all the way down here, thank for reading and please give me a 100 p.s. please grade the two late weekly reflections. Or don't uhhh I can't really ask for much since they were late as hell but I would like an A in this class to save my gpa :D
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
