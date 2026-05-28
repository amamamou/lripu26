"use client"

import Image from "next/image"
import { ArrowUpRight, Brain, GraduationCap, Users, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const themes = [
  {
    number: "01",
    icon: Brain,
    title: "Intelligence Artificielle Générative & Enseignement",
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
    <section id="themes" className="bg-[#1B1142] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-[1800px]">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#A64DFF]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A64DFF]">Thématiques</span>
            </div>
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Trois axes de recherche
              <br />
              <span className="text-[#A64DFF]">pour transformer</span> l&apos;enseignement
            </h2>
          </div>
          <Button className="w-fit rounded-full bg-white px-6 text-[#1B1142] hover:bg-white/90">
            Soumettre une communication
          </Button>
        </div>

        {/* Theme Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {themes.map((theme) => (
            <div
              key={theme.number}
              className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={theme.image}
                  alt={theme.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1142] to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#A64DFF]">
                  <span className="text-sm font-bold text-white">{theme.number}</span>
                </div>
                
                {/* Icon */}
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <theme.icon className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{theme.title}</h3>
                
                <ul className="mt-4 space-y-2">
                  {theme.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-sm text-white/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#A64DFF]" />
                      {topic}
                    </li>
                  ))}
                </ul>

                <button className="group/btn mt-6 flex items-center gap-2 text-sm font-semibold text-[#A64DFF] transition-colors hover:text-white">
                  En savoir plus
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: "100+", label: "Communications attendues" },
            { value: "50+", label: "Ateliers pratiques" },
            { value: "25", label: "Pays représentés" },
            { value: "3", label: "Jours de colloque" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/5 p-6 text-center backdrop-blur-sm">
              <span className="text-3xl font-bold text-white md:text-4xl">{stat.value}</span>
              <p className="mt-1 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
