"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  return (
    <section id="about" className="bg-white px-6 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-purple-600" />
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-600">À propos</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light leading-tight text-black">
            Enseigner et évaluer à l&apos;ère de l&apos;IA et de l&apos;APC
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid gap-12 md:grid-cols-12">
          {/* Left Column - Info Tags */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-600" />
                <span className="text-sm font-medium text-black">Recherche Innovante</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-600" />
                <span className="text-sm font-medium text-black">Ateliers Pratiques</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-600" />
                <span className="text-sm font-medium text-black">Réseau International</span>
              </div>
            </div>

            <p className="text-base leading-relaxed text-gray-700">
              RIPU rassemble depuis des années les acteurs de l&apos;enseignement supérieur. Cette 2ème édition explore les défis de l&apos;IA et de l&apos;APC dans nos pratiques pédagogiques quotidiennes.
            </p>

            <Link
              href="/authors"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors w-fit"
            >
              Rejoindre le Colloque
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Center Column - Video */}
          <div className="md:col-span-4 flex items-center justify-center">
            <div
              className="w-full max-w-xs overflow-hidden rounded-2xl border border-gray-200"
              style={{ aspectRatio: "9 / 16" }}
            >
              <iframe
                className="block h-full w-full"
                src="https://www.youtube.com/embed/pnKB0Pl3hdQ?autoplay=1&mute=1&loop=1&playlist=pnKB0Pl3hdQ&controls=1&rel=0"
                title="RIPU 2026"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="md:col-span-4 flex flex-col gap-4">
            {/* Location Card */}
            <div className="rounded-xl border border-gray-200 p-6 hover:border-purple-300 hover:bg-purple-50/20 transition-all">
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-600">Lieu</span>
              <p className="mt-3 text-lg font-medium text-black">Sousse, Tunisie</p>
            </div>

            {/* Date Card */}
            <div className="rounded-xl border border-gray-200 p-6 hover:border-purple-300 hover:bg-purple-50/20 transition-all">
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-600">Dates</span>
              <p className="mt-3 text-lg font-medium text-black">30–31 Octobre 2026</p>
            </div>

            {/* Public Card */}
            <div className="rounded-xl border border-gray-200 p-6 hover:border-purple-300 hover:bg-purple-50/20 transition-all">
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-600">Public Cible</span>
              <p className="mt-3 text-base font-medium text-black">Enseignants, Chercheurs, Responsables</p>
            </div>

            {/* President Card */}
            <div className="rounded-xl border border-purple-200 bg-purple-50 p-6 mt-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-purple-300">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop"
                    alt="President"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">Sonia Sahli</p>
                  <p className="text-xs text-gray-600">Présidente du Comité</p>
                </div>
              </div>
              <p className="text-sm italic leading-relaxed text-gray-700">
                &ldquo;RIPU est né d&apos;une vision. Aujourd&apos;hui, nous construisons une communauté de pédagogues qui privilégie l&apos;excellence et l&apos;innovation.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

