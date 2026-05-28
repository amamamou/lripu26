"use client"

import Hero from "@/components/ripu/hero"
import React from "react"

export function ProgrammeHero() {
  return (
    <Hero
      badge="Agenda"
      title={<>Programme<br /><span className="text-[#A64DFF]">RIPU&apos;26</span></>}
      date="30-31 Octobre 2026"
      location="Sousse, Tunisie"
      subtitle={<>Deux journées riches en keynotes, sessions parallèles, ateliers pratiques et networking.</>}
      cta={{ label: "Télécharger le PDF", hideOnMobile: true }}
    />
  )
}

export default ProgrammeHero
