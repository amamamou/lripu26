"use client"

import Image from "next/image"
import { Quote, Star } from "lucide-react"

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
    image: "/rym.jpg",
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
    <section className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-[1800px]">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[#6C2EB7]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6C2EB7]">Témoignages</span>
          </div>
          <h2 className="text-3xl font-bold text-[#1B1142] md:text-4xl lg:text-5xl">
            Ce qu&apos;ils retiennent de{" "}
            <span className="text-[#6C2EB7]">RIPU25</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group relative overflow-hidden rounded-3xl p-8 transition-all hover:shadow-lg ${
                index === 1 
                  ? "bg-gradient-to-br from-[#6C2EB7] to-[#A64DFF] text-white" 
                  : "bg-[#F8F6F3]"
              }`}
            >
              {/* Quote Icon */}
              <Quote className={`h-10 w-10 ${index === 1 ? "text-white/30" : "text-[#6C2EB7]/20"}`} />

              {/* Rating */}
              <div className="mt-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${index === 1 ? "fill-yellow-300 text-yellow-300" : "fill-yellow-400 text-yellow-400"}`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className={`mt-4 text-base leading-relaxed ${index === 1 ? "text-white/90" : "text-[#1B1142]/80"}`}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full ring-2 ring-offset-2 ring-offset-transparent ring-[#A64DFF]/30">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className={`font-semibold ${index === 1 ? "text-white" : "text-[#1B1142]"}`}>
                    {testimonial.name}
                  </p>
                  <p className={`text-sm ${index === 1 ? "text-white/70" : "text-muted-foreground"}`}>
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
