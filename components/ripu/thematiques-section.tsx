"use client"

import Image from "next/image"
import { ArrowUpRight, Brain, GraduationCap, Users, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const themes = [
  {
    number: "01",
    icon: Brain,
    title: "Intelligence Artificielle & Enseignement",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    topics: [
      "L'IAG comme tuteur d'apprentissage",
      "L'IAG et le geste enseignant",
      "L'IAG pour la correction des examens",
      "Les effets de l'IAG sur les apprentissages",
    ],
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "Approches pédagogiques & Compétences",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    topics: [
      "L'approche par compétences (APC)",
      "Les plans d'études à l'ère de l'IA",
      "La gamification comme levier",
    ],
  },
  {
    number: "03",
    icon: Users,
    title: "Genre & Équité en Éducation",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
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
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-gray-900" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">Axes de recherche</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Trois axes pour transformer l&apos;enseignement
            </h2>
          </div>
          <Button className="w-fit rounded-md bg-gray-900 px-6 py-3 text-white hover:bg-gray-800">
            Soumettre une communication
          </Button>
        </div>

        {/* Theme Cards */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {themes.map((theme) => (
            <div
              key={theme.number}
              className="flex flex-col overflow-hidden rounded-lg border border-gray-200 transition-all hover:shadow-lg hover:border-gray-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <Image
                  src={theme.image}
                  alt={theme.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Number Badge */}
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900">
                  <span className="text-sm font-bold text-white">{theme.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col bg-white p-8">
                <h3 className="mb-6 text-xl font-bold text-gray-900">{theme.title}</h3>
                
                <ul className="mb-8 flex-1 space-y-3">
                  {theme.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <div className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gray-900" />
                      <span className="text-sm leading-relaxed text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>

                <button className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-gray-600">
                  En savoir plus
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: "100+", label: "Communications attendues" },
            { value: "50+", label: "Ateliers pratiques" },
            { value: "25", label: "Pays représentés" },
            { value: "2", label: "Jours de colloque" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
              <span className="block text-3xl font-bold text-gray-900 md:text-4xl">{stat.value}</span>
              <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

