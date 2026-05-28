"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const skillLevels = [
  {
    icon: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=200&auto=format&fit=crop",
    label: "Doctorants",
    badge: "Débutant",
    description: "Premiers pas en recherche pédagogique"
  },
  {
    icon: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=200&auto=format&fit=crop",
    label: "Enseignants",
    badge: "Intermédiaire",
    description: "Partage d'expériences et pratiques"
  },
  {
    icon: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    label: "Chercheurs",
    badge: "Confirmé",
    description: "Contributions scientifiques avancées"
  },
  {
    icon: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop",
    label: "Experts",
    badge: "Expert",
    description: "Leadership et innovation pédagogique"
  },
]

export function TimelineSection() {
  return (
    <section className="bg-background px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-[1800px]">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#6C2EB7]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6C2EB7]">Niveaux</span>
            </div>
            <h2 className="text-3xl font-bold text-[#1B1142] md:text-4xl">
              Participez quel que soit
              <br />
              votre <span className="text-[#6C2EB7]">niveau d&apos;expertise</span>
            </h2>
          </div>
          <button className="group flex items-center gap-2 text-sm font-semibold text-[#1B1142] transition-colors hover:text-[#6C2EB7]">
            Voir le Programme Complet
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Skill Level Cards */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {skillLevels.map((level) => (
            <div
              key={level.label}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              {/* Icon */}
              <div className="mb-4 h-14 w-14 overflow-hidden rounded-full bg-gradient-to-br from-[#6C2EB7]/10 to-[#A64DFF]/10">
                <Image
                  src={level.icon}
                  alt={level.label}
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Badge */}
              <span className="inline-block rounded-full bg-[#F5F3F0] px-3 py-1 text-xs font-medium text-[#1B1142]">
                {level.badge}
              </span>

              {/* Label */}
              <h3 className="mt-4 text-lg font-bold text-[#1B1142]">{level.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{level.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
