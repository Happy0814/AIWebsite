"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { WhyMattersSection } from "@/components/sections/why-matters"
import { SystemMapSection } from "@/components/sections/system-map"
import { StakeholdersSection } from "@/components/sections/stakeholders"
import { ConflictsSection } from "@/components/sections/conflicts"
import { WickedProblemSection } from "@/components/sections/wicked-problem"
import { EthicsSection } from "@/components/sections/ethics"
import { OpenQuestionsSection } from "@/components/sections/open-questions"
import { VisualEvidenceSection } from "@/components/sections/visual-evidence"
import { TakeHomeSection } from "@/components/sections/take-home"
import { RevisionStatementSection } from "@/components/sections/revision-statement"
import { BibliographySection } from "@/components/sections/bibliography"
import { Footer } from "@/components/sections/footer"

export default function AIAccountabilityExhibition() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Navigation />
      
      {/* Hero - Sticky scroll section */}
      <HeroSection />
      
      {/* Why This Problem Matters */}
      <WhyMattersSection />
      
      {/* System Map - Sticky scroll section */}
      <SystemMapSection />
      
      {/* Stakeholders */}
      <StakeholdersSection />
      
      {/* Conflict and Convergence - Sticky scroll section */}
      <ConflictsSection />
      
      {/* Why This Is a Wicked Problem */}
      <WickedProblemSection />
      
      {/* Ethical Problems */}
      <EthicsSection />
      
      {/* Open Questions */}
      <OpenQuestionsSection />

      {/* Visual Evidence */}
      <VisualEvidenceSection />
      
      {/* Take-Home Lesson */}
      <TakeHomeSection />

      {/* Revision Statement */}
      <RevisionStatementSection />
      
      {/* Bibliography */}
      <BibliographySection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
