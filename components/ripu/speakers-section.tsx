"use client"

import Image from "next/image"
import { ArrowUpRight, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const questionMarkSvg = encodeURIComponent(`
  <svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'>
    <rect width='100%' height='100%' rx='28' fill='#F3F4F6'/>
    <g transform='translate(0,30)'>
      <circle cx='200' cy='120' r='72' fill='#F3F4F6' />
      <text x='200' y='140' text-anchor='middle' font-family='Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' font-size='96' fill='#7C3AED' font-weight='700'>?</text>
    </g>
  </svg>
`)

const speakers = [
  {
    name: "Prof. Mohammed Al-Amin",
    field: "Pédagogie numérique et IA",
    institution: "🇲🇦 Maroc — SF",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Sophie Fontaine",
    field: "Innovation pédagogique",
    institution: "🇫🇷 France — AB",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Prof. Ahmed Bensalem",
    field: "Qualité de l'enseignement",
    institution: "🇹🇳 Tunisie — LC",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Laure Chenet",
    field: "Évaluation par compétences",
    institution: "🇧🇪 Belgique",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "?",
    field: "Intervenant à confirmer",
    institution: "Annonce prochainement",
    image: `data:image/svg+xml;utf8,${questionMarkSvg}`,
  },
]

export function SpeakersSection() {
  return (
    <section id="speakers" className="relative bg-white px-6 py-24 md:px-8 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-6 inline-block">
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-700">Intervenants</span>
              <div className="mt-2 h-0.5 w-12 bg-gradient-to-r from-purple-700 to-purple-400" />
            </div>
            <h2 className="text-6xl md:text-7xl font-light leading-tight text-black">
              Des experts de renommée mondiale
            </h2>
          </div>
          <Button className="w-fit rounded-full bg-purple-700 px-8 py-3 text-white hover:bg-purple-600 transition-all font-medium shadow-lg hover:shadow-xl">
            Voir tous les intervenants
          </Button>
        </div>

        {/* Speakers Grid with Stagger Animation */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 md:gap-6">
          {speakers.map((speaker, idx) => (
            <div
              key={speaker.name}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{
                animation: `scaleIn 0.5s ease-out ${idx * 0.08}s both`
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-700/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Social Icons - Hover Reveal */}
                <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-all hover:scale-110 hover:bg-purple-700 hover:text-white">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-all hover:scale-110 hover:bg-purple-700 hover:text-white">
                    <Twitter className="h-4 w-4" />
                  </button>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <div className="transform transition-all duration-300 group-hover:translate-y-0 translate-y-2">
                    <span className="inline-block mb-2 rounded-full bg-purple-700 px-3 py-1 text-[10px] font-bold text-white">
                      {speaker.field}
                    </span>
                    <h3 className="text-sm font-bold leading-snug text-white">{speaker.name}</h3>
                    <p className="text-xs text-white/80 mt-1">{speaker.institution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  )
}
