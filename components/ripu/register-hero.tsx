"use client"

import Hero from "@/components/ripu/hero"
import React from "react"
import { Calendar, MapPin } from "lucide-react"

export function RegisterHero() {
  return (
    <Hero
      badge="Inscription"
      title={<>Rejoignez<br /><span className="text-[#A64DFF]">RIPU&apos;26</span></>}
      date="30-31 Octobre 2026"
      location="Sousse, Tunisie"
      subtitle={<>Complétez votre inscription en quelques étapes.<span className="hidden sm:inline"> Profitez du tarif early bird jusqu&apos;au 15 septembre 2026.</span></>}
    />
  )
}

export default RegisterHero
