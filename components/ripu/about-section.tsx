"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="bg-white px-6 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <div className="mb-4 inline-flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-gray-900" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">À propos du colloque</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              L&apos;avenir de l&apos;éducation supérieure
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              RIPU26 réunit les meilleurs esprits de la pédagogie universitaire pour explorer les défis contemporains de l&apos;enseignement supérieur face à l&apos;intelligence artificielle et aux approches par compétences.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {/* Card 1 */}
          <div className="flex flex-col rounded-lg border border-gray-200 bg-gray-50 p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900">
              <span className="text-lg font-bold text-white">01</span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">Recherche innovante</h3>
            <p className="leading-relaxed text-gray-600">
              Accédez aux dernières découvertes en pédagogie universitaire, évaluation et intelligence artificielle.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col rounded-lg border border-gray-200 bg-gray-50 p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900">
              <span className="text-lg font-bold text-white">02</span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">Ateliers pratiques</h3>
            <p className="leading-relaxed text-gray-600">
              Participez à des sessions interactives pour renforcer vos compétences pédagogiques et vos pratiques.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col rounded-lg border border-gray-200 bg-gray-50 p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900">
              <span className="text-lg font-bold text-white">03</span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">Réseau international</h3>
            <p className="leading-relaxed text-gray-600">
              Connectez-vous avec des professionnels d&apos;enseignement de plus de 25 pays du monde.
            </p>
          </div>
        </div>

        {/* Featured Section */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-12 md:mt-24">
          {/* Left - Image */}
          <div className="relative h-96 overflow-hidden rounded-lg border border-gray-200 md:h-full">
            <Image
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2940&auto=format&fit=crop"
              alt="Conference workshop session"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-gray-900" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">En vedette</span>
            </div>
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Thématiques 2026
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-900" />
                <span className="text-lg text-gray-700">Intelligence Artificielle et pédagogie</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-900" />
                <span className="text-lg text-gray-700">Approches par compétences</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-900" />
                <span className="text-lg text-gray-700">Évaluation innovante</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-900" />
                <span className="text-lg text-gray-700">Transformation pédagogique</span>
              </li>
            </ul>
            <button className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-gray-600">
              Découvrir le programme
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

