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
    <section id="archive" className="relative bg-white px-6 py-24 md:px-8 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20">
          <div className="mb-6 inline-block">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-700">Édition Précédente</span>
            <div className="mt-2 h-0.5 w-12 bg-gradient-to-r from-purple-700 to-purple-400" />
          </div>
          <h2 className="text-6xl md:text-7xl font-light leading-tight text-black max-w-3xl">
            Retour sur RIPU&apos;25
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid gap-16 lg:grid-cols-3">
          {/* Left - Featured Image */}
          <div className="lg:col-span-1">
            <div className="group relative h-96 overflow-hidden rounded-3xl border border-gray-200 shadow-lg md:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=800&fit=crop"
                alt="Moments RIPU25"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-700/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 lg:col-span-2 space-y-8">
            {/* Intro Text */}
            <p className="text-lg leading-relaxed text-gray-600 max-w-xl">
              Revivez les moments forts de l&apos;édition 2025. Une expérience académique inoubliable réunissant chercheurs et praticiens du monde entier.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((stat, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-purple-400 hover:bg-purple-50 hover:-translate-y-1 transition-all duration-300"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both`
                  }}
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/10 group-hover:bg-purple-600/20 transition-colors">
                    <stat.icon className="h-5 w-5 text-purple-700" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-black">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs md:text-sm text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-3 gap-3">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-2xl border border-gray-200 hover:border-purple-400 shadow-sm hover:shadow-md transition-all duration-300"
                  style={{
                    animation: `scaleIn 0.4s ease-out ${index * 0.05}s both`
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-700/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

            {/* Info Cards */}
            <div className="grid gap-4 sm:grid-cols-2 pt-4">
              <div className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600/10 flex-shrink-0 group-hover:bg-purple-600/20 transition-colors">
                    <Calendar className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-semibold uppercase">Date</p>
                    <p className="text-sm font-semibold text-black">30-31 Mai 2025</p>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600/10 flex-shrink-0 group-hover:bg-purple-600/20 transition-colors">
                    <MapPin className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-semibold uppercase">Lieu</p>
                    <p className="text-sm font-semibold text-black">Sousse, Tunisie</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/archive"
              className="group inline-flex items-center gap-3 w-fit text-purple-700 hover:text-purple-600 transition-colors pt-4"
            >
              <span className="font-semibold">Galerie complète</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  )
}
