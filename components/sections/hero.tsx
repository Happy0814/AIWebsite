"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -30])
  const subtitleY = useTransform(scrollYProgress, [0, 0.3], [0, -20])
  const thesisOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
  const thesisY = useTransform(scrollYProgress, [0.1, 0.3], [30, 0])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[200vh]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute inset-0 ambient-bg" />
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{
            background: "radial-gradient(circle, oklch(0.55 0.22 250) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10"
          style={{
            background: "radial-gradient(circle, oklch(0.6 0.18 280) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Network lines */}
        <NetworkLines />

        {/* Content */}
        <motion.div
          style={{ opacity, scale, y }}
          className="relative z-10 max-w-5xl mx-auto px-6 pt-16 md:pt-0 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary/80 text-xs md:text-sm tracking-[0.24em] md:tracking-[0.3em] uppercase mb-5 md:mb-8 font-medium"
          >
            An Exhibition on Wicked Problems
          </motion.p>

          <motion.h1
            style={{ y: titleY }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.98] md:leading-[0.95] mb-6 md:mb-8 text-balance"
          >
            <span className="text-gradient-cyan">Who Is Responsible</span>
            <br />
            <span className="text-foreground">When AI Goes Wrong?</span>
          </motion.h1>

          <motion.p
            style={{ y: subtitleY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8 md:mb-12 text-pretty"
          >
            AI accountability is difficult because AI systems are probabilistic, 
            can change over time, and distribute responsibility across many actors.
          </motion.p>

          <motion.div
            style={{ opacity: thesisOpacity, y: thesisY }}
            className="max-w-4xl mx-auto glass rounded-xl md:rounded-2xl p-5 md:p-10"
          >
            <p className="text-base md:text-xl leading-relaxed text-foreground/90">
              As AI systems become embedded in education, healthcare, work, media, and public life, 
              questions of responsibility become harder to answer. If an AI system causes harm, 
              who is accountable: the developer, the company, the deployer, the regulator, or no one at all? 
              This project argues that AI accountability is a <span className="text-primary font-medium">wicked problem</span>, 
              meaning it cannot be solved once and for all because it is shaped by interacting technical, 
              political, economic, and social systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12"
          >
            <motion.button
              onClick={() => {
                document.getElementById("why-matters")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-medium">Explore the System</span>
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="transition-transform group-hover:translate-y-1"
              >
                <path
                  d="M10 3v14m0 0l-5-5m5 5l5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function NetworkLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-30"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.55 0.22 250)" stopOpacity="0" />
          <stop offset="50%" stopColor="oklch(0.55 0.22 250)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.55 0.22 250)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.6 0.18 280)" stopOpacity="0" />
          <stop offset="50%" stopColor="oklch(0.6 0.18 280)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.6 0.18 280)" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Animated network lines */}
      <g className="animate-pulse-slow">
        <line x1="100" y1="200" x2="400" y2="350" stroke="url(#lineGradient1)" strokeWidth="1" />
        <line x1="400" y1="350" x2="700" y2="280" stroke="url(#lineGradient1)" strokeWidth="1" />
        <line x1="700" y1="280" x2="900" y2="450" stroke="url(#lineGradient1)" strokeWidth="1" />
        <line x1="200" y1="600" x2="500" y2="500" stroke="url(#lineGradient2)" strokeWidth="1" />
        <line x1="500" y1="500" x2="800" y2="650" stroke="url(#lineGradient2)" strokeWidth="1" />
        <line x1="300" y1="150" x2="600" y2="400" stroke="url(#lineGradient1)" strokeWidth="1" />
        <line x1="150" y1="450" x2="450" y2="600" stroke="url(#lineGradient2)" strokeWidth="1" />
        <line x1="600" y1="150" x2="850" y2="350" stroke="url(#lineGradient1)" strokeWidth="1" />
      </g>
      
      {/* Network nodes */}
      <g>
        <circle cx="400" cy="350" r="4" fill="oklch(0.55 0.22 250)" className="animate-pulse-slow" />
        <circle cx="700" cy="280" r="3" fill="oklch(0.6 0.18 280)" className="animate-pulse-slow" />
        <circle cx="500" cy="500" r="5" fill="oklch(0.55 0.22 250)" className="animate-pulse-slow" />
        <circle cx="300" cy="150" r="3" fill="oklch(0.6 0.18 280)" className="animate-pulse-slow" />
        <circle cx="600" cy="400" r="4" fill="oklch(0.55 0.22 250)" className="animate-pulse-slow" />
        <circle cx="800" cy="650" r="3" fill="oklch(0.6 0.18 280)" className="animate-pulse-slow" />
      </g>
    </svg>
  )
}
