"use client"

import Image from "next/image"
import { ArrowUpRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const roomTypes = [
  { name: "Axe 1 : Intelligence Artificielle et Enseignement", expanded: false },
  { name: "Axe 2 : Approche par Compétences (APC)", expanded: false },
  { name: "Axe 3 : Évaluation et Certification", expanded: false },
  { name: "Axe 4 : Genre et Équité en Éducation", expanded: false },
]

export function CallForPapers() {
  return (
    <section id="cfp" className="bg-background px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-[1800px]">
        {/* Header */}
        <div className="mb-10 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-[#6C2EB7]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#6C2EB7]">Lieu</span>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left - Large Image */}
          <div className="lg:col-span-5">
            <div className="group relative h-[400px] overflow-hidden rounded-3xl lg:h-full">
              <Image
                src="https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=2940&auto=format&fit=crop"
                alt="Sousse Tunisia venue"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1142]/80 via-transparent to-transparent" />
              
              {/* Location Badge */}
              <div className="absolute left-4 top-4 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
                <span className="text-sm font-medium text-white">Sousse, Tunisie</span>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  Hôtel Mövenpick
                  <br />
                  Resort & Marine Spa
                </h3>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            {/* Title */}
            <div>
              <h2 className="text-3xl font-bold text-[#1B1142] md:text-4xl lg:text-5xl">
                Vivez le colloque dans un{" "}
                <span className="text-[#6C2EB7]">cadre méditerranéen</span>{" "}
                exceptionnel
              </h2>
              <p className="mt-4 text-muted-foreground">
                Notre hôtel partenaire offre des installations modernes, une connexion Wi-Fi haut débit, et un accès direct à la plage. Profitez de tarifs préférentiels pour les participants.
              </p>
            </div>

            {/* Accordion List */}
            <div className="flex-1 space-y-3">
              {roomTypes.map((room) => (
                <div
                  key={room.name}
                  className="group flex cursor-pointer items-center justify-between rounded-2xl bg-white p-5 shadow-sm transition-all hover:shadow-md"
                >
                  <span className="text-sm font-semibold text-[#1B1142] md:text-base">{room.name}</span>
                  <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-[#6C2EB7]" />
                </div>
              ))}
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Hébergement de qualité avec vue sur la mer, piscine privée, terrasse panoramique, et espaces de networking pour les échanges entre participants.
                </p>
                <button className="group mt-3 flex items-center gap-2 text-sm font-semibold text-[#6C2EB7] transition-colors hover:text-[#5A2599]">
                  Réserver Votre Place
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </div>

              {/* Small Preview Image */}
              <div className="h-24 w-32 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=400&auto=format&fit=crop"
                  alt="Hotel pool view"
                  width={128}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
