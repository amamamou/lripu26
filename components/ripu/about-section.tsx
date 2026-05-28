"use client"

import Image from "next/image"
import { ArrowUpRight, Play, Calendar, MapPin, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="bg-background px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-[1800px]">
        {/* Bento Grid Layout */}
        <div className="grid gap-4 md:grid-cols-12 md:gap-5">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-4 md:col-span-4 md:gap-5">
            {/* Section Label */}
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#6C2EB7]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6C2EB7]">À propos</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl font-bold leading-tight text-[#1B1142] md:text-4xl lg:text-5xl">
Enseigner et évaluer à l’ère de l’IA et de l’APC     
            </h2>

            {/* Feature Tags */}
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#1B1142] shadow-sm">
                <span className="h-1 w-1 rounded-full bg-[#6C2EB7]" />
                Recherche Innovante
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#1B1142] shadow-sm">
                <span className="h-1 w-1 rounded-full bg-[#6C2EB7]" />
                Ateliers Pratiques
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#1B1142] shadow-sm">
                <span className="h-1 w-1 rounded-full bg-[#6C2EB7]" />
                Réseau International
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              RIPU rassemble depuis des années les acteurs de l&apos;enseignement supérieur. Cette 26ème édition explore les défis de l&apos;IA et de l&apos;APC dans nos pratiques pédagogiques quotidiennes.
            </p>

            {/* CTA Link */}
            <button className="group mt-4 flex items-center gap-2 text-sm font-semibold text-[#1B1142] transition-colors hover:text-[#6C2EB7]">
              Rejoindre le Colloque
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Center Column - Featured Image Card */}
          <div className="md:col-span-4">
            <div className="group relative h-[400px] overflow-hidden rounded-3xl md:h-full">
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2940&auto=format&fit=crop"
                alt="Conference workshop session"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1142]/90 via-[#1B1142]/20 to-transparent" />
              
              {/* Card Header */}
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  En Vedette
                </span>
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/30">
                  <Play className="h-3 w-3 fill-white text-white" />
                </button>
              </div>

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  Découvrez les
                  <br />
                  Thématiques 2026
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  IA, évaluation, approches par compétences et plus encore
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="flex flex-col gap-4 md:col-span-4 md:gap-5">
            {/* Info Cards Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {/* Location Card */}
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <span className="text-xs font-medium text-muted-foreground">Lieu</span>
                <p className="mt-2 font-semibold text-[#1B1142]">Sousse, Tunisie</p>
              </div>

              {/* Date Card */}
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <span className="text-xs font-medium text-muted-foreground">Dates</span>
                <p className="mt-2 font-semibold text-[#1B1142]">30-31 Oct 2026</p>
              </div>

              {/* Audience Card */}
              <div className="col-span-2 rounded-2xl bg-white p-5 shadow-sm">
                <span className="text-xs font-medium text-muted-foreground">Public Cible</span>
                <p className="mt-2 font-semibold text-[#1B1142]">Enseignants, Chercheurs, Responsables</p>
              </div>
            </div>

            {/* Story Card */}
            <div className="flex-1 rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-[#6C2EB7] to-[#A64DFF]">
                  <Image
                    src="/sonya.png"
                    alt="Professor"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1B1142]">Sonia Sahli</p>
                  <p className="text-xs text-muted-foreground">Présidente du Comité</p>
                </div>
              </div>
              <p className="mt-4 text-sm italic leading-relaxed text-muted-foreground">
                &ldquo;RIPU est né d&apos;une vision. Aujourd&apos;hui, nous construisons une communauté de pédagogues qui privilégie l&apos;excellence et l&apos;innovation.&rdquo;
              </p>
              <button className="group mt-4 flex items-center gap-2 text-sm font-semibold text-[#1B1142] transition-colors hover:text-[#6C2EB7]">
                Notre Histoire
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
