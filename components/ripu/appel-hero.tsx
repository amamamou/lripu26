"use client"

import Hero from "@/components/ripu/hero"
import React from "react"

export function AppelHero() {
  return (
    <Hero
      badge="Appel à communications"
      title={<>Partagez vos<br />recherches</>}
      subtitle={<>Contribuez à l&apos;avancement de la pédagogie universitaire en soumettant vos travaux de recherche et retours d&apos;expérience.</>}
    />
  )
}

export default AppelHero
