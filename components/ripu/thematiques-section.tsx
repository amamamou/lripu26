"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const themes = [
  {
    number: "01",
    title: "Intelligence Artificielle & Enseignement",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop",
    topics: [
      "L'IAG comme tuteur d'apprentissage",
      "L'IAG et le geste enseignant",
      "L'IAG pour la correction des examens",
      "Les effets de l'IAG sur les apprentissages",
    ],
  },
  {
    number: "02",
    title: "Approches pédagogiques & Compétences",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop",
    topics: [
      "L'approche par compétences (APC)",
      "Les plans d'études à l'ère de l'IA",
      "La gamification comme levier",
    ],
  },
  {
    number: "03",
    title: "Genre & Équité en Éducation",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop",
    topics: [
      "La place des femmes dans l'éducation",
      "Équité et inclusion pédagogique",
    ],
  },
]

export function ThematiquesSection() {
  return (
    <section id="themes" className="bg-white px-6 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-purple-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-600">Axes de recherche</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light leading-tight text-black">
              Trois axes pour transformer l&apos;enseignement
            </h2>
          </div>
          <Button className="w-fit rounded-full bg-purple-600 px-8 py-3 text-white hover:bg-purple-700 transition-all font-medium">
            Soumettre
          </Button>
        </div>

        {/* Theme Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {themes.map((theme) => (
            <div
              key={theme.number}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden hover:border-purple-300 transition-all duration-300"
            >
              {/* Image - Smaller, integrated */}
              <div className="relative h-32 overflow-hidden bg-gray-100">
                <Image
                  src={theme.image}
                  alt={theme.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Number Badge - Positioned absolutely */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 backdrop-blur-sm">
                  <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                    {theme.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-8">
                <h3 className="mb-6 text-lg font-semibold text-black leading-snug">{theme.title}</h3>
                
                <ul className="mb-8 flex-1 space-y-2.5">
                  {theme.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <div className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-purple-600" />
                      <span className="text-sm leading-relaxed text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>

                <button className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors">
                  En savoir plus
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: "100+", label: "Communications" },
            { value: "50+", label: "Ateliers" },
            { value: "25", label: "Pays" },
            { value: "2", label: "Jours" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-gray-200 p-6 text-center hover:border-purple-300 hover:bg-purple-50/10 transition-all">
              <span className="block text-3xl md:text-4xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <p className="mt-2 text-xs md:text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

