"use client"

import Hero from "@/components/ripu/hero"
import React from "react"

export function ComiteHero() {
  return (
    <Hero
      badge="Organisation"
      title={<>Comités du<br /><span className="text-[#A64DFF]">RIPU&apos;26</span></>}
      subtitle={<>Découvrez l&apos;équipe d&apos;experts académiques qui façonnent cette rencontre internationale unique.</>}
    />
  )
}

export default ComiteHero
