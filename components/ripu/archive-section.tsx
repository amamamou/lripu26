"use client"

import Image from "next/image"
import { ArrowUpRight, Play, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const archiveImages = [
  {
    src: "/ripu/2.png",
    alt: "Conférenciers sur scène à RIPU25",
    span: "col-span-2 row-span-2",
    height: "h-full"
  },
  {
    src: "/ripu/1.png",
    alt: "Participants lors d'un atelier",
    span: "col-span-1",
    height: "h-40"
  },
  {
    src: "/ripu/p10.jpg",
    alt: "Table ronde avec invités internationaux",
    span: "col-span-1",
    height: "h-40"
  },
  {
    src: "/ripu/3.png",
    alt: "Networking lors de la réception",
    span: "col-span-2",
    height: "h-32"
  },
]

export function ArchiveSection() {
  return (
    <section id="archive" className="bg-background px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-[1800px]">
        {/* Header */}
        <div className="mb-10 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-[#6C2EB7]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#6C2EB7]">Édition Précédente</span>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left - Text Content */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-bold text-[#1B1142] md:text-5xl lg:text-6xl">
              RIPU<span className="font-light text-[#6C2EB7]">25</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Revivez les moments marquants de l&apos;édition précédente. Plus de 400 participants, 80 communications et des échanges enrichissants.
            </p>

            {/* Info Pills */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-sm">
                <Calendar className="h-4 w-4 text-[#6C2EB7]" />
                30-31 Mai 2025
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-sm">
                <MapPin className="h-4 w-4 text-[#6C2EB7]" />
                Sousse, Tunisie
              </span>
            </div>

            <button className="group mt-8 flex items-center gap-2 text-sm font-semibold text-[#1B1142] transition-colors hover:text-[#6C2EB7]">
              Explorer l&apos;archive complète
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Right - Image Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-4 gap-3">
              {/* Large Featured Image */}
              <div className="group relative col-span-2 row-span-2 h-80 overflow-hidden rounded-2xl md:h-96">
                <Image
                  src={archiveImages[0].src}
                  alt={archiveImages[0].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1142]/60 to-transparent" />
                <button className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm transition-colors hover:bg-white/30">
                  <Play className="h-4 w-4 fill-white text-white" />
                  <span className="text-sm font-medium text-white">Voir la vidéo</span>
                </button>
              </div>

              {/* Smaller Images */}
              <div className="group relative col-span-1 h-40 overflow-hidden rounded-2xl md:h-[calc(50%-6px)]">
                <Image
                  src={archiveImages[1].src}
                  alt={archiveImages[1].alt}
                  fill
                  className="object-cover object-[50%_0%] transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="group relative col-span-1 h-40 overflow-hidden rounded-2xl md:h-[calc(50%-6px)]">
                <Image
                  src={archiveImages[2].src}
                  alt={archiveImages[2].alt}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="group relative col-span-2 h-32 overflow-hidden rounded-2xl md:h-[calc(50%-6px)]">
                <Image
                  src={archiveImages[3].src}
                  alt={archiveImages[3].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#1B1142]/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-sm font-medium text-white">+12 photos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
