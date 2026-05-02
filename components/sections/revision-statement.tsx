"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const revisionStatement = `For my revised version, I added more sources, charts, and graphs, and I tried to make my explanations more clear on why AI accountability is a wicked problem. From my instructor's feedback (hi, Nick!), I understood that the strongest part of my project was the conclusion about accountability systems reproducing the same problems they are supposed to control. Therefore, I kept this idea as the main takeaway and made the surrounding sections build toward it more directly. The sources I added include research on model drift, dataset shift, algorithmic accountability, internal and external AI auditing, AI governance, public trust, and AI liability insurance. This makes my statements more credible because now I actually have research and policy material backing up what I am arguing, including sources like the EU AI Act and the NIST AI Risk Management Framework.`

const revisionStatement2 = `For my peer review feedback, I made visual changes because multiple people said the site could use more color, graphs, or pictures. I did add a little more color, but I kept the clean design because that was how I originally envisioned the website. I did not add random pictures because they did not really fit the style of the project, so I used graphs and diagrams as my data visualization instead. One chart compares public and expert views on AI, and the accountability loop diagram shows how deployment, drift, auditing, liability, and regulation keep feeding into each other. Another peer review question asked how I selected the stakeholders in the system map, so I added a short explanation that I chose the groups based on who has control over, or direct experience with, different parts of the accountability cycle. I also refined the system map so the relationships between companies, government, public groups, auditors, and market forces are easier to understand.`

const revisionStatement3 = `Finally, I polished the writing throughout the website a little bit. I shortened some wording so it would stay readable, since I also got feedback about there being too many words. I strengthened my ethical analysis by making my research questions more specific, especially questions like who gets to define safety or fairness and how much uncertainty should be acceptable before deployment. I also made my statements more direct about knowledge gaps, especially post-deployment monitoring, liability rules, public trust, and independent auditing. Ultimately, I made the conclusion connect back to the whole site instead of feeling like a weird separate ending. My new takeaway is that AI accountability is difficult because the institutions meant to control AI are also shaped by competition, legal uncertainty, limited transparency, and uneven public power. Overall, I used the feedback to polish my website and make the argument stronger while still keeping the same overall format and tone.`

export function RevisionStatementSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="revision"
      ref={sectionRef}
      className="relative py-28 md:py-36 border-t border-border/40"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary/80 text-sm tracking-[0.2em] uppercase mb-4">Final Requirement</p>
          <h2 className="text-4xl md:text-5xl font-serif">Revision Statement</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass-strong rounded-xl p-6 md:p-8 space-y-5"
        >
          {[revisionStatement, revisionStatement2, revisionStatement3].map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-base md:text-lg leading-relaxed text-foreground/90">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
