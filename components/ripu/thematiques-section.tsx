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
    <section id="themes" className="relative bg-white px-6 py-24 md:px-8 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-6 inline-block">
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-700">Axes de recherche</span>
              <div className="mt-2 h-0.5 w-12 bg-gradient-to-r from-purple-700 to-purple-400" />
            </div>
            <h2 className="text-6xl md:text-7xl font-light leading-tight text-black">
              Trois axes de transformation
            </h2>
          </div>
          <Button className="w-fit rounded-full bg-purple-700 px-8 py-3 text-white hover:bg-purple-600 transition-all font-medium shadow-lg hover:shadow-xl">
            Soumettre
          </Button>
        </div>

        {/* Theme Cards with Stagger Animation */}
        <div className="grid gap-8 md:grid-cols-3 mb-24">
          {themes.map((theme, idx) => (
            <div
              key={theme.number}
              className="group rounded-3xl overflow-hidden bg-white border border-gray-200 hover:border-purple-400 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${idx * 0.1 + 0.2}s both`
              }}
            >
              {/* Image Container */}
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src={theme.image}
                  alt={theme.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-700/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Number Badge */}
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 backdrop-blur-sm border border-white/40 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-sm font-bold text-purple-700">{theme.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-lg font-semibold text-black leading-snug mb-6 group-hover:text-purple-700 transition-colors">
                  {theme.title}
                </h3>

                {/* Topics */}
                <ul className="mb-8 flex-1 space-y-3">
                  {theme.topics.map((topic, i) => (
                    <li key={topic} className="flex items-start gap-3 group/item">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-600 group-hover/item:scale-125 transition-transform" />
                      <span className="text-sm leading-relaxed text-gray-700 group-hover/item:text-black transition-colors">
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <button className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-600 transition-colors">
                  En savoir plus
                  <ArrowUpRight className="h-4 w-4 transition-all group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 group-hover/btn:text-purple-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-gray-200 pt-20">
          {[
            { value: "100+", label: "Communications" },
            { value: "50+", label: "Ateliers" },
            { value: "25", label: "Pays" },
            { value: "2", label: "Jours" },
          ].map((stat, idx) => (
            <div
              key={stat.label}
              className="group p-6 rounded-2xl hover:bg-purple-50 transition-all duration-300"
              style={{
                animation: `fadeIn 0.4s ease-out ${idx * 0.05 + 0.4}s both`
              }}
            >
              <div className="text-3xl md:text-4xl font-bold text-black mb-2 group-hover:text-purple-700 transition-colors">
                {stat.value}
              </div>
              <p className="text-xs md:text-sm text-gray-600 font-medium group-hover:text-gray-900 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}

