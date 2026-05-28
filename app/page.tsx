import { HeroSection } from "@/components/ripu/hero-section"
import { AboutSection } from "@/components/ripu/about-section"
import { TimelineSection } from "@/components/ripu/timeline-section"
import { CallForPapers } from "@/components/ripu/call-for-papers"
import { ThematiquesSection } from "@/components/ripu/thematiques-section"
import { SpeakersSection } from "@/components/ripu/speakers-section"
import { ArchiveSection } from "@/components/ripu/archive-section"
import { TestimonialsSection } from "@/components/ripu/testimonials-section"
import { FooterSection } from "@/components/ripu/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <CallForPapers />
      <ThematiquesSection />
      <SpeakersSection />
      <ArchiveSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  )
}
