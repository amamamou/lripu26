"use client"

import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "RIPU25 a su allier rigueur scientifique et échanges authentiques — les sessions étaient soigneusement organisées et ont offert des approches pratiques que j'ai immédiatement appliquées à mon enseignement.",
    name: "Maher Abdelli",
    institution: "ISET Kairouan",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "Un programme réfléchi : les ateliers étaient pratiques et les conférences ont offert des cadres clairs pour l'IA éthique dans l'évaluation. C'était raffiné et profondément utile.",
    name: "Rym Mallouli",
    institution: "Université de Sousse",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "Un rythme posé, intense en idées. Les conversations ont mûri en stratégies pour la pratique — réfléchi, professionnel et élégant dans sa discrétion.",
    name: "Fattouma Mzali",
    institution: "ISET Rades",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-white px-6 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-purple-600" />
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-600">Témoignages</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-black">
            Ce qu&apos;ils retiennent de RIPU25
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group relative overflow-hidden rounded-2xl p-8 transition-all border ${
                index === 1 
                  ? "bg-gradient-to-br from-purple-600 to-purple-700 text-white border-purple-600" 
                  : "bg-white border-gray-200 hover:border-purple-300"
              }`}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${index === 1 ? "fill-yellow-300 text-yellow-300" : "fill-purple-400 text-purple-400"}`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className={`text-base leading-relaxed mb-8 ${index === 1 ? "text-white/95" : "text-gray-700"}`}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t" style={{ borderColor: index === 1 ? 'rgba(255,255,255,0.2)' : '#e5e7eb' }}>
                <div className="h-12 w-12 overflow-hidden rounded-full flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className={`font-semibold text-sm ${index === 1 ? "text-white" : "text-black"}`}>
                    {testimonial.name}
                  </p>
                  <p className={`text-xs ${index === 1 ? "text-white/70" : "text-gray-600"}`}>
                    {testimonial.institution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
