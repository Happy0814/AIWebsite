"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const sources = [
  {
    authors: "Rittel, H. W. J., & Webber, M. M.",
    year: "1973",
    title: "Dilemmas in a General Theory of Planning",
    publication: "Policy Sciences, 4, 155-169",
    url: "https://doi.org/10.1007/BF01405730",
    note: "Peer-reviewed foundation for wicked problems",
  },
  {
    authors: "Quiñonero-Candela, J., Sugiyama, M., Schwaighofer, A., & Lawrence, N. D. (Eds.).",
    year: "2009",
    title: "Dataset Shift in Machine Learning",
    publication: "MIT Press",
    url: "https://mitpress.mit.edu/9780262170055/dataset-shift-in-machine-learning/",
    note: "Source for model drift and distribution shift",
  },
  {
    authors: "Diakopoulos, N.",
    year: "2016",
    title: "Accountability in Algorithmic Decision Making",
    publication: "Communications of the ACM, 59(2), 56-62",
    url: "https://doi.org/10.1145/2844110",
    note: "Peer-reviewed source on algorithmic accountability",
  },
  {
    authors: "Raji, I. D., & Buolamwini, J.",
    year: "2019",
    title: "Actionable Auditing: Investigating the Impact of Publicly Naming Biased Performance Results of Commercial AI Products",
    publication: "Proceedings of the AAAI/ACM Conference on AI, Ethics, and Society",
    url: "https://doi.org/10.1145/3306618.3314244",
    note: "Peer-reviewed source on independent AI auditing",
  },
  {
    authors: "Raji, I. D., Smart, A., White, R. N., Mitchell, M., Gebru, T., Hutchinson, B., Smith-Loud, J., Theron, D., & Barnes, P.",
    year: "2020",
    title: "Closing the AI Accountability Gap: Defining an End-to-End Framework for Internal Algorithmic Auditing",
    publication: "Proceedings of the Conference on Fairness, Accountability, and Transparency, 33-44",
    url: "https://doi.org/10.1145/3351095.3372873",
    note: "Peer-reviewed source on internal audit structures",
  },
  {
    authors: "Rahwan, I.",
    year: "2018",
    title: "Society-in-the-Loop: Programming the Algorithmic Social Contract",
    publication: "Ethics and Information Technology, 20, 5-14",
    url: "https://doi.org/10.1007/s10676-017-9430-8",
    note: "Peer-reviewed source on AI governance and social oversight",
  },
  {
    authors: "National Institute of Standards and Technology",
    year: "2023",
    title: "AI Risk Management Framework (AI RMF 1.0)",
    publication: "NIST Publication",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
    note: "U.S. framework for AI risk governance",
  },
  {
    authors: "European Parliament and Council",
    year: "2024",
    title: "Regulation (EU) 2024/1689 (EU AI Act)",
    publication: "Official Journal of the European Union",
    url: "https://op.europa.eu/en/publication-detail/-/publication/d79f3e5d-41bc-11f0-b9f2-01aa75ed71a1/language-en",
    note: "Comprehensive AI regulation",
  },
  {
    authors: "Pew Research Center",
    year: "2025",
    title: "How the U.S. Public and AI Experts View Artificial Intelligence",
    publication: "Pew Research Center",
    url: "https://www.pewresearch.org/internet/2025/04/03/how-the-us-public-and-ai-experts-view-artificial-intelligence/",
    note: "Source for public trust and expert/public opinion gap",
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
            <motion.a
              key={index}
              href={source.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="glass block p-6 rounded-xl border transition-colors hover:border-primary/30 hover:bg-secondary/30"
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
