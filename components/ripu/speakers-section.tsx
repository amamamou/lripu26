"use client"

import Image from "next/image"
import { ArrowUpRight, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const questionMarkSvg = encodeURIComponent(`
  <svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'>
    <rect width='100%' height='100%' rx='28' fill='#F3F4F6'/>
    <g transform='translate(0,30)'>
      <circle cx='200' cy='120' r='72' fill='#F3F4F6' />
      <text x='200' y='140' text-anchor='middle' font-family='Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' font-size='96' fill='#6C2EB7' font-weight='700'>?</text>
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
    <section id="speakers" className="bg-background px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-[1800px]">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#6C2EB7]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6C2EB7]">Intervenants</span>
            </div>
            <h2 className="text-3xl font-bold text-[#1B1142] md:text-4xl lg:text-5xl">
              Des experts internationaux
              <br />
              <span className="text-[#6C2EB7]">de renommée mondiale</span>
            </h2>
          </div>
          <Button variant="outline" className="w-fit rounded-full border-[#6C2EB7] px-6 text-[#6C2EB7] hover:bg-[#6C2EB7] hover:text-white">
            Voir tous les intervenants
          </Button>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 md:gap-5">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1142] via-transparent to-transparent opacity-80" />
                
                {/* Social Icons - Show on hover */}
                <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/40">
                    <Linkedin className="h-4 w-4 text-white" />
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/40">
                    <Twitter className="h-4 w-4 text-white" />
                  </button>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="mb-1 inline-block rounded-full bg-[#A64DFF]/80 px-2 py-0.5 text-[10px] font-semibold text-white">
                    {speaker.field}
                  </span>
                  <h3 className="text-sm font-bold leading-tight text-white">{speaker.name}</h3>
                  <p className="mt-1 text-xs text-white/70">{speaker.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
