"use client"

import Image from "next/image"
import { ArrowUpRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const themes = [
  { name: "Intelligence Artificielle et Enseignement" },
  { name: "Approche par Compétences (APC)" },
  { name: "Évaluation et Certification" },
  { name: "Genre et Équité en Éducation" },
]

export function CallForPapers() {
  return (
    <section id="cfp" className="bg-white px-6 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-4 inline-flex items-center gap-2">
          <div className="h-1 w-1 rounded-full bg-gray-900" />
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">Lieu d'excellence</span>
        </div>

        {/* Title */}
        <h2 className="mb-16 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
          Immersion au cœur de la Méditerranée
        </h2>

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Large Image */}
          <div className="flex flex-col justify-between">
            <div className="relative h-96 overflow-hidden rounded-lg border border-gray-200 md:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=2940&auto=format&fit=crop"
                alt="Sousse Tunisia venue"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <h3 className="mb-6 text-3xl font-bold text-gray-900">
              Hôtel Mövenpick Resort & Marine Spa
            </h3>
            
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Notre venue partenaire offre des installations modernes de classe mondiale avec connexion Wi-Fi haute vitesse, espaces de conférence équipés, et accès direct à la plage de Sousse.
            </p>

            {/* Features */}
            <div className="mb-8 space-y-4">
              {themes.map((theme) => (
                <div
                  key={theme.name}
                  className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:bg-white hover:shadow-sm"
                >
                  <span className="text-base font-medium text-gray-900">{theme.name}</span>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <Button className="rounded-md bg-gray-900 px-6 py-3 text-white hover:bg-gray-800">
                Réserver votre place
              </Button>
              <Button className="rounded-md border border-gray-300 px-6 py-3 text-gray-900 hover:bg-gray-50">
                Voir plus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

