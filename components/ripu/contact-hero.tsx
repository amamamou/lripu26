"use client"

import Hero from "@/components/ripu/hero"
import React from "react"

export function ContactHero() {
  return (
    <Hero
      badge="Contact"
      title={<>Nous<br /><span className="text-[#A64DFF]">contacter</span></>}
      subtitle={<>Une question sur le colloque? Notre équipe est à votre disposition pour vous accompagner.</>}
    />
  )
}

export default ContactHero
