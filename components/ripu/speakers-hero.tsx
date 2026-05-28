"use client"

import Hero from "@/components/ripu/hero"
import React from "react"

export function SpeakersHero() {
  return (
    <Hero
      badge="Intervenants"
      title={<>Nos<br /><span className="text-[#A64DFF]">Conférenciers</span></>}
      subtitle={<>Des experts de renommée internationale partagent leurs recherches et visions pour l&apos;avenir de la pédagogie universitaire.</>}
    />
  )
}

export default SpeakersHero
