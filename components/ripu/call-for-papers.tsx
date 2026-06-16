"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const themes = [
  { name: "Intelligence Artificielle et Enseignement" },
  { name: "Approche par Compétences (APC)" },
  { name: "Évaluation et Certification" },
  { name: "Genre et Équité en Éducation" },
]

export function CallForPapers() {
  return (
    <section id="cfp" className="relative bg-white px-6 py-24 md:px-8 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20">
          <div className="mb-6 inline-block">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-700">Lieu d'excellence</span>
            <div className="mt-2 h-0.5 w-12 bg-gradient-to-r from-purple-700 to-purple-400" />
          </div>
          <h2 className="text-6xl md:text-7xl font-light leading-tight text-black max-w-3xl">
            Immersion au cœur de la Méditerranée
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left - Image with Overlay */}
          <div className="flex flex-col justify-between">
            <div className="group relative h-96 overflow-hidden rounded-3xl border border-gray-200 md:h-[500px] shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=2940&auto=format&fit=crop"
                alt="Sousse Tunisia venue"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-700/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-4xl md:text-5xl font-light text-black mb-4 leading-tight">
                Hôtel Mövenpick Resort & Marine Spa
              </h3>
              <p className="text-lg leading-relaxed text-gray-600 max-w-lg">
                Notre venue partenaire offre des installations modernes de classe mondiale avec connexion Wi-Fi haute vitesse, espaces de conférence équipés, et accès direct à la plage de Sousse.
              </p>
            </div>

            {/* Features - Modern Cards */}
            <div className="space-y-3">
              {themes.map((theme, idx) => (
                <div
                  key={theme.name}
                  className="group/item flex items-center gap-4 p-4 rounded-xl hover:bg-purple-50 transition-all duration-300"
                  style={{
                    animation: `slideIn 0.5s ease-out ${idx * 0.08}s both`
                  }}
                >
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-purple-700 group-hover/item:scale-150 transition-transform" />
                  <span className="text-base font-medium text-black group-hover/item:text-purple-700 transition-colors flex-1">
                    {theme.name}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-gray-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-4 pt-4">
              <Button className="flex-1 rounded-xl bg-purple-700 px-8 py-4 text-white hover:bg-purple-600 transition-all font-semibold shadow-lg hover:shadow-xl">
                Réserver votre place
              </Button>
              <Button className="flex-1 rounded-xl border-2 border-purple-200 bg-white px-8 py-4 text-purple-700 hover:bg-purple-50 transition-all font-semibold">
                Voir plus
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}

