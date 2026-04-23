"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const tasks = [
  { text: "Refine the digital system visualization", status: "in-progress" },
  { text: "Expand and polish final wording", status: "in-progress" },
  { text: "Finalize bibliography", status: "todo" },
  { text: "Strengthen ethical analysis", status: "todo" },
  { text: "Improve visual consistency and presentation polish", status: "in-progress" },
  { text: "Prepare for exhibition discussion and peer feedback", status: "todo" },
]

export function RemainingWorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4">Project Status</p>
          <h2 className="text-3xl md:text-4xl font-serif">What Still Needs to Be Done</h2>
        </motion.div>

        <div className="space-y-3">
          {tasks.map((task, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="flex items-center gap-4 glass rounded-lg px-5 py-4"
            >
              <div className={`w-3 h-3 rounded-full ${
                task.status === "in-progress" 
                  ? "bg-primary animate-pulse" 
                  : "bg-muted-foreground/30"
              }`} />
              <span className="text-foreground/80">{task.text}</span>
              <span className={`ml-auto text-xs px-2 py-1 rounded-full ${
                task.status === "in-progress"
                  ? "bg-primary/10 text-primary"
                  : "bg-secondary text-muted-foreground"
              }`}>
                {task.status === "in-progress" ? "In Progress" : "To Do"}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
