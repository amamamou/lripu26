"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  return (
    <section id="about" className="relative bg-white px-6 py-24 md:px-8 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-24 max-w-3xl">
          <div className="mb-6 inline-block">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-700">À propos</span>
            <div className="mt-2 h-0.5 w-12 bg-gradient-to-r from-purple-700 to-purple-400" />
          </div>
          <h2 className="text-6xl md:text-7xl font-light leading-tight text-black">
            Enseigner et évaluer à l'ère de l'IA
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl">
            RIPU rassemble les pédagogues innovants pour explorer les défis de l'intelligence artificielle et des approches par compétences.
          </p>
        </div>

        {/* Main Content - Two Column */}
        <div className="grid gap-16 md:grid-cols-2 md:gap-20 mb-24">
          {/* Left - Key Points */}
          <div className="space-y-8">
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                  <div className="relative">
                    <div className="h-2 w-2 rounded-full bg-purple-700" />
                    <div className="absolute inset-0 h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-black mb-2">Recherche Innovante</h3>
                  <p className="text-sm text-gray-600">Découvrez les dernières avancées en pédagogie universitaire et évaluation.</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                  <div className="relative">
                    <div className="h-2 w-2 rounded-full bg-purple-700" />
                    <div className="absolute inset-0 h-2 w-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: "0.3s" }} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-black mb-2">Ateliers Pratiques</h3>
                  <p className="text-sm text-gray-600">Sessions interactives pour transformer vos pratiques pédagogiques.</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                  <div className="relative">
                    <div className="h-2 w-2 rounded-full bg-purple-700" />
                    <div className="absolute inset-0 h-2 w-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: "0.6s" }} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-black mb-2">Réseau International</h3>
                  <p className="text-sm text-gray-600">Connectez-vous avec 500+ pédagogues de 25 pays.</p>
                </div>
              </div>
            </div>

            <Link
              href="/authors"
              className="group inline-flex items-center gap-3 mt-8 text-purple-700 hover:text-purple-600 transition-colors"
            >
              <span className="font-semibold">Rejoindre le Colloque</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Right - Image with Modern Design */}
          <div className="relative">
            <div className="relative h-96 md:h-full min-h-[400px] overflow-hidden rounded-3xl group">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=700&h=700&fit=crop"
                alt="Conférence RIPU"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 max-w-sm border border-gray-100">
              <div className="mb-2 text-xs uppercase tracking-wider font-semibold text-purple-700">Édition 2025</div>
              <p className="text-sm text-gray-700">
                <strong>400+</strong> participants ont expérimenté une transformation pédagogique.
              </p>
            </div>
          </div>
        </div>

        {/* Key Info Grid */}
        <div className="grid gap-6 md:grid-cols-3 border-t border-gray-100 pt-24">
          {[
            { label: "Lieu", value: "Sousse, Tunisie" },
            { label: "Dates", value: "30–31 Octobre 2026" },
            { label: "Public", value: "Enseignants & Chercheurs" }
          ].map((item) => (
            <div key={item.label} className="group p-6 rounded-2xl hover:bg-purple-50 transition-all duration-300">
              <div className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-3">
                {item.label}
              </div>
              <div className="text-xl font-semibold text-black group-hover:text-purple-700 transition-colors">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

