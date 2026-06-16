"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Calendar, MapPin, Users, FileText, Award, Globe } from "lucide-react"

const highlights = [
  { icon: Users, value: "400+", label: "Participants" },
  { icon: FileText, value: "80", label: "Communications" },
  { icon: Award, value: "12", label: "Keynotes" },
  { icon: Globe, value: "15", label: "Pays" },
]

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    alt: "Cérémonie d'ouverture RIPU25",
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    alt: "Conférence plénière",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    alt: "Photo de groupe",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    alt: "Atelier interactif",
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    alt: "Remise des prix",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    alt: "Participants",
  },
]

export function ArchiveSection() {
  return (
    <section id="archive" className="bg-white px-6 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-purple-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-600">Édition Précédente</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light leading-tight text-black">
              Retour sur RIPU&apos;25
            </h2>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <p className="max-w-md text-gray-600">
              Revivez les moments forts de l&apos;édition 2025. Une expérience académique inoubliable réunissant chercheurs et praticiens.
            </p>
            <Link 
              href="/archive"
              className="group inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-purple-700 transition-all w-fit"
            >
              Galerie complète
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Featured Image */}
          <div className="lg:col-span-1">
            <div className="group relative h-full min-h-[400px] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=800&fit=crop"
                alt="Moments RIPU25"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((stat, index) => (
                <div 
                  key={index}
                  className="group rounded-xl border border-gray-200 bg-white p-6 hover:border-purple-300 hover:bg-purple-50/10 transition-all"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/10">
                    <stat.icon className="h-5 w-5 text-purple-600" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-black">{stat.value}</p>
                  <p className="mt-1 text-xs md:text-sm text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-3 gap-3 flex-1">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-xl border border-gray-200 hover:border-purple-300 transition-all"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

            {/* Info Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-5 flex items-center gap-4 hover:border-purple-300 transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600/10 flex-shrink-0">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-medium uppercase">Date</p>
                  <p className="text-sm font-semibold text-black">30-31 Mai 2025</p>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 flex items-center gap-4 hover:border-purple-300 transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600/10 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-medium uppercase">Lieu</p>
                  <p className="text-sm font-semibold text-black">Sousse, Tunisie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
