"use client"

import Hero from "@/components/ripu/hero"
import React from "react"

export function ArchiveHero() {
  return (
    <Hero
      badge="Édition Précédente"
      title={<>Retour sur<br /><span className="text-[#A64DFF]">RIPU&apos;25</span></>}
      date="30-31 Mai 2025"
      location="Sousse, Tunisie"
      subtitle={<>Revivez les moments forts de la 25ème édition. Une expérience académique inoubliable qui a réuni chercheurs et praticiens du monde entier.</>}
    />
  )
}

export default ArchiveHero
