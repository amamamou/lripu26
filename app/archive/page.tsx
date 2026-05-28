"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Play, Calendar, MapPin, Users, FileText, Award, Globe, Download, ArrowUpRight } from "lucide-react"
import { FooterSection } from "@/components/ripu/footer-section"

const stats = [
  { icon: Users, value: "420", label: "Participants" },
  { icon: FileText, value: "87", label: "Communications" },
  { icon: Award, value: "15", label: "Keynotes & Ateliers" },
  { icon: Globe, value: "18", label: "Pays représentés" },
]

const highlights = [
  {
    title: "Cérémonie d'ouverture",
    description: "Discours inaugural du Ministre de l'Enseignement Supérieur et allocutions des partenaires.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
  },
  {
    title: "Keynotes internationaux",
    description: "3 conférences plénières par des experts de renommée mondiale en pédagogie universitaire.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop"
  },
  {
    title: "Sessions parallèles",
    description: "Plus de 80 communications orales réparties en 12 sessions thématiques.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
  },
  {
    title: "Ateliers pratiques",
    description: "8 ateliers interactifs pour découvrir des outils et méthodes innovantes.",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop"
  },
]

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop", alt: "Cérémonie d'ouverture" },
  { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop", alt: "Conférence plénière" },
  { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop", alt: "Atelier interactif" },
  { src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=400&fit=crop", alt: "Table ronde" },
  { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop", alt: "Networking" },
  { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop", alt: "Remise des prix" },
  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop", alt: "Session posters" },
  { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop", alt: "Dîner de gala" },
]

const testimonials = [
  {
    quote: "Une organisation impeccable et des échanges d'une grande richesse. J'ai particulièrement apprécié la qualité des keynotes.",
    author: "Dr. Marie Leblanc",
    institution: "Université de Lyon",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face"
  },
  {
    quote: "RIPU25 m'a permis de nouer des collaborations internationales précieuses. Une expérience inoubliable!",
    author: "Prof. Ahmed Mansour",
    institution: "Université du Caire",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
  },
]

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1B1142] via-[#2D1B5E] to-[#6C2EB7] px-4 pb-24 pt-8 md:px-6">
        <div className="mx-auto max-w-[1800px]">
          <Link 
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l&apos;accueil
          </Link>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#A64DFF]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#A64DFF]">Édition Précédente</span>
              </div>
              <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Retour sur<br />
                <span className="text-[#A64DFF]">RIPU&apos;25</span>
              </h1>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                  <Calendar className="h-4 w-4" />
                  30-31 Mai 2025
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                  <MapPin className="h-4 w-4" />
                  Sousse, Tunisie
                </span>
              </div>
            </div>
            <div>
              <p className="max-w-md text-white/70 lg:ml-auto lg:text-right">
                Revivez les moments forts de la 25ème édition. Une expérience académique inoubliable qui a réuni chercheurs et praticiens du monde entier.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 md:px-6">
        <div className="mx-auto -mt-12 max-w-[1800px]">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="rounded-2xl bg-white p-6 shadow-lg">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#6C2EB7] to-[#A64DFF]">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-[#1B1142]">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#6C2EB7]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6C2EB7]">Film officiel</span>
              </div>
              <h2 className="text-3xl font-bold text-[#1B1142] md:text-4xl">
                3 minutes pour revivre RIPU&apos;25
              </h2>
              <p className="mt-4 text-muted-foreground">
                Découvrez l&apos;ambiance, les moments clés et les témoignages des participants à travers notre vidéo récapitulative officielle.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6C2EB7] to-[#A64DFF] px-6 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-[#6C2EB7]/25">
                  <Play className="h-4 w-4 fill-white" />
                  Regarder la vidéo
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border-2 border-[#1B1142] px-6 py-3 font-semibold text-[#1B1142] transition-all hover:bg-[#1B1142] hover:text-white">
                  <Download className="h-4 w-4" />
                  Actes du colloque
                </button>
              </div>
            </div>
            <div className="group relative aspect-video overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&h=700&fit=crop"
                alt="Vidéo RIPU25"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#1B1142]/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all hover:scale-110 hover:bg-white/30">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                    <Play className="h-6 w-6 fill-[#6C2EB7] text-[#6C2EB7] ml-1" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-[#F8F6F3] px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#6C2EB7]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6C2EB7]">Temps forts</span>
            </div>
            <h2 className="text-3xl font-bold text-[#1B1142] md:text-4xl">
              Moments marquants
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B1142]">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#6C2EB7]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6C2EB7]">Galerie</span>
              </div>
              <h2 className="text-3xl font-bold text-[#1B1142] md:text-4xl">
                Photos de l&apos;événement
              </h2>
            </div>
            <button className="hidden items-center gap-2 rounded-full border-2 border-[#1B1142] px-6 py-3 font-semibold text-[#1B1142] transition-all hover:bg-[#1B1142] hover:text-white md:flex">
              Voir toutes les photos
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl ${
                  index === 0 || index === 5 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1142]/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 translate-y-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-sm text-white backdrop-blur-sm">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#1B1142] px-6 py-3 font-semibold text-[#1B1142] transition-all hover:bg-[#1B1142] hover:text-white md:hidden">
            Voir toutes les photos
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#1B1142] px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#A64DFF]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A64DFF]">Témoignages</span>
            </div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ce qu&apos;ils ont dit
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <p className="text-lg text-white/90">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-white/60">{testimonial.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
