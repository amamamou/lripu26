"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Play, Calendar, MapPin, Users, FileText, Award, Globe } from "lucide-react"

const highlights = [
  { icon: Users, value: "400+", label: "Participants" },
  { icon: FileText, value: "80", label: "Communications" },
  { icon: Award, value: "12", label: "Keynotes" },
  { icon: Globe, value: "15", label: "Pays représentés" },
]

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    alt: "Cérémonie d'ouverture RIPU25",
    category: "Cérémonie"
  },
  {
    src: "/ripu/2.png",
    alt: "Conférence plénière",
    category: "Plénière"
  },
  {
    src: "/ripu/3.png",
    alt: "Photo de groupe",
    category: "Photo de groupe"
  },
  {
    src: "/ripu/p6.jpg",
    alt: "Atelier interactif",
    category: "Atelier"
  },
  {
    src: "/ripu/1.png",
    alt: "Remise des prix",
    category: "Récompenses"
  },
  {
    src: "/ripu/p8.jpg",
    alt: "Comité d'organisation",
    category: "Comité d'organisation"
  },
]

export function ArchiveSection() {
  return (
    <section id="archive" className="bg-background px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-[1800px]">
        {/* Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#6C2EB7]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6C2EB7]">Édition Précédente</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight text-[#1B1142] md:text-5xl lg:text-6xl">
              Retour sur<br />
              <span className="text-[#6C2EB7]">RIPU&apos;25</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <p className="max-w-md text-muted-foreground lg:text-right">
              Revivez les moments forts de l&apos;édition 2025. Une expérience académique inoubliable réunissant chercheurs et praticiens du monde entier.
            </p>
            <Link 
              href="/archive"
              className="group inline-flex items-center gap-2 rounded-full bg-[#1B1142] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#6C2EB7]"
            >
              Voir toutes les photos
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left Column - Featured Video Card */}
          <div className="lg:col-span-5">
            <div className="group relative  h-full min-h-[500px] overflow-hidden rounded-3xl">
              <Image
                src= "/ripu/ripu.jpg"
                alt="Vidéo récapitulative RIPU25"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {highlights.map((stat, index) => (
                <div 
                  key={index}
                  className="group rounded-2xl bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#6C2EB7] to-[#A64DFF]">
                    <stat.icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-[#1B1142]">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Image Grid */}
            <div className="grid flex-1 grid-cols-3 gap-3">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-2xl"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1142]/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full p-3 transition-transform group-hover:translate-y-0">
                    <span className="inline-block rounded-full bg-[#A64DFF] px-2 py-0.5 text-xs font-medium text-white">
                      {image.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Cards Row */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8F6F3]">
                  <Calendar className="h-5 w-5 text-[#6C2EB7]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-semibold text-[#1B1142]">30-31 Mai 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8F6F3]">
                  <MapPin className="h-5 w-5 text-[#6C2EB7]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Lieu</p>
                  <p className="font-semibold text-[#1B1142]">Sousse, Tunisie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
