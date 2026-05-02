"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const trustData = [
  { category: "Positive impact", public: 17, experts: 56 },
  { category: "More excited", public: 11, experts: 47 },
  { category: "More concerned", public: 51, experts: 15 },
]

const loopSteps = [
  {
    label: "Deploy",
    description: "Systems enter schools, workplaces, healthcare, media, and public services.",
    color: "oklch(0.55 0.22 250)",
  },
  {
    label: "Drift",
    description: "New users, incentives, and contexts change model behavior after launch.",
    color: "oklch(0.55 0.15 180)",
  },
  {
    label: "Audit",
    description: "Testing and monitoring reveal harms, gaps, and uneven performance.",
    color: "oklch(0.6 0.18 280)",
  },
  {
    label: "Liability",
    description: "Courts, insurers, and organizations decide who absorbs the risk.",
    color: "oklch(0.577 0.245 27.325)",
  },
  {
    label: "Govern",
    description: "Rules and standards reshape incentives, but also create new workarounds.",
    color: "oklch(0.5 0.18 220)",
  },
]

const chartConfig = {
  public: {
    label: "U.S. public",
    color: "oklch(0.55 0.22 250)",
  },
  experts: {
    label: "AI experts",
    color: "oklch(0.6 0.18 280)",
  },
}

export function VisualEvidenceSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="evidence"
      ref={sectionRef}
      className="relative py-32 md:py-40 border-y border-border/40"
    >
      <div className="absolute inset-0 ambient-bg opacity-70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary/80 text-sm tracking-[0.2em] uppercase mb-4">Visual Evidence</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            The Gap Is Social, Not Just Technical
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Research and public opinion point to the same problem: accountability depends on
            institutions, trust, incentives, and feedback loops.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass-strong overflow-hidden rounded-xl p-5 md:p-8"
          >
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-foreground leading-tight">
                Public Trust and Expert Optimism Do Not Match
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Pew Research Center found that experts are much more positive about AI than the
                public, while the public is far more likely to feel concerned than excited.
              </p>
            </div>

            <ChartContainer config={chartConfig} className="h-[320px] w-full">
              <BarChart data={trustData} margin={{ top: 24, right: 6, left: -16, bottom: 10 }}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="category"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  interval={0}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}%`}
                  width={42}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar dataKey="public" fill="var(--color-public)" radius={[6, 6, 0, 0]}>
                  <LabelList dataKey="public" position="top" formatter={(value: number) => `${value}%`} />
                </Bar>
                <Bar dataKey="experts" fill="var(--color-experts)" radius={[6, 6, 0, 0]}>
                  <LabelList dataKey="experts" position="top" formatter={(value: number) => `${value}%`} />
                </Bar>
              </BarChart>
            </ChartContainer>

            <p className="mt-4 text-xs text-muted-foreground">
              Source: Pew Research Center, 2025 survey of U.S. adults and AI experts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="glass-strong overflow-hidden rounded-xl p-5 md:p-8"
          >
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-foreground leading-tight">
                Accountability Is a Loop
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                A one-time approval cannot settle responsibility because AI behavior, law, insurance,
                and public expectations keep changing after deployment.
              </p>
            </div>

            <div className="space-y-3 md:hidden">
              {loopSteps.map((step, index) => (
                <div
                  key={step.label}
                  className="rounded-xl border bg-background/80 p-4"
                  style={{ borderColor: `${step.color}55` }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: step.color }}
                    >
                      {index + 1}
                    </span>
                    <p className="text-base font-semibold text-foreground">{step.label}</p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
              <div className="rounded-xl border border-primary/30 bg-primary/10 p-4 text-center text-sm font-semibold text-primary">
                The loop repeats, so responsibility has to be continuous.
              </div>
            </div>

            <div className="relative mx-auto hidden aspect-square max-w-[430px] md:block">
              <div className="absolute inset-[22%] rounded-full border border-dashed border-primary/30" />
              {loopSteps.map((step, index) => {
                const angle = -90 + index * 72
                const radius = 38
                const x = 50 + Math.cos((angle * Math.PI) / 180) * radius
                const y = 50 + Math.sin((angle * Math.PI) / 180) * radius

                return (
                  <div
                    key={step.label}
                    className="absolute w-28 md:w-32 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div
                      className="rounded-xl border bg-background/85 p-3 text-center shadow-sm"
                      style={{ borderColor: `${step.color}55` }}
                    >
                      <div
                        className="mx-auto mb-2 h-2 w-8 rounded-full"
                        style={{ backgroundColor: step.color }}
                      />
                      <p className="text-sm font-semibold text-foreground">{step.label}</p>
                      <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}

              <div className="absolute left-1/2 top-1/2 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 bg-primary/10 p-5 text-center">
                <p className="text-sm font-semibold text-primary">continuous responsibility</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
