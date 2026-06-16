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
    <section className="relative bg-white px-6 py-24 md:px-8 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-700">Témoignages</span>
            <div className="mt-2 h-0.5 w-12 mx-auto bg-gradient-to-r from-purple-700 to-purple-400" />
          </div>
          <h2 className="text-6xl md:text-7xl font-light text-black">
            Ce qu&apos;ils retiennent de RIPU25
          </h2>
        </div>

        {/* Testimonials Grid with Stagger */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 border flex flex-col h-full ${
                index === 1
                  ? "bg-gradient-to-br from-purple-600 to-purple-700 text-white border-purple-600 md:scale-105"
                  : "bg-white border-gray-200 hover:border-purple-400 hover:shadow-lg hover:-translate-y-2"
              }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 transition-transform group-hover:scale-110 ${
                      index === 1 ? "fill-yellow-300 text-yellow-300" : "fill-purple-500 text-purple-500"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className={`text-base leading-relaxed mb-8 flex-1 ${
                  index === 1 ? "text-white/95" : "text-gray-700 group-hover:text-black transition-colors"
                }`}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Divider */}
              <div
                className={`mb-6 h-0.5 w-8 ${
                  index === 1 ? "bg-white/20" : "bg-purple-200"
                }`}
              />

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 overflow-hidden rounded-full flex-shrink-0 ring-2 ring-offset-0" style={{
                  ringColor: index === 1 ? 'rgba(255,255,255,0.3)' : '#e5e7eb'
                }}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p
                    className={`font-semibold text-sm ${
                      index === 1 ? "text-white" : "text-black"
                    }`}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className={`text-xs mt-0.5 ${
                      index === 1 ? "text-white/70" : "text-gray-500"
                    }`}
                  >
                    {testimonial.institution}
                  </p>
                </div>
              </div>
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
      `}</style>
    </section>
  )
}
