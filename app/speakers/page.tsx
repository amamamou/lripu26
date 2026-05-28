"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Linkedin, Twitter, Globe, Mic, Award, BookOpen } from "lucide-react"
import { FooterSection } from "@/components/ripu/footer-section"

const keynoteSpeakers = [
  {
    name: "Prof. Jean-Pierre Dupont",
    title: "Expert en Intelligence Artificielle et Éducation",
    institution: "Université de Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop&crop=face",
    bio: "Pionnier de l'IA appliquée à l'enseignement supérieur, auteur de plus de 150 publications académiques. Ses travaux sur l'apprentissage adaptatif ont influencé les politiques éducatives à l'échelle mondiale.",
    keynote: "L'IA générative: révolution ou évolution de l'enseignement?",
    linkedin: "#",
    twitter: "#",
    website: "#"
  },
  {
    name: "Prof. Maria Santos",
    title: "Spécialiste en Approche par Compétences",
    institution: "University of Lisbon",
    country: "Portugal",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&crop=face",
    bio: "Référence mondiale en matière d'évaluation par compétences. Consultante pour l'UNESCO et l'Union Européenne sur les réformes de l'enseignement supérieur.",
    keynote: "Transformer l'évaluation: de la notation à la validation des compétences",
    linkedin: "#",
    twitter: "#",
    website: "#"
  },
  {
    name: "Prof. Hans Mueller",
    title: "Chercheur en Technologies Éducatives",
    institution: "Universität Berlin",
    country: "Allemagne",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=face",
    bio: "Directeur du Centre d'Innovation Pédagogique de Berlin. Expert reconnu en transformation numérique des universités et learning analytics.",
    keynote: "L'université du futur: entre présence et distance",
    linkedin: "#",
    twitter: "#",
    website: "#"
  },
]

const invitedSpeakers = [
  {
    name: "Dr. Sarah Johnson",
    field: "Pédagogie inclusive",
    institution: "University of Toronto",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Dr. Yuki Tanaka",
    field: "Gamification éducative",
    institution: "Kyoto University",
    country: "Japon",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Dr. Amira Kechiche",
    field: "Éducation numérique",
    institution: "Université d'Alger",
    country: "Algérie",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Dr. Omar Al-Rashid",
    field: "Leadership académique",
    institution: "King Saud University",
    country: "Arabie Saoudite",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Dr. Elena Petrova",
    field: "Ingénierie pédagogique",
    institution: "Moscow State University",
    country: "Russie",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Dr. Carlos Rodriguez",
    field: "Évaluation formative",
    institution: "Universidad de Madrid",
    country: "Espagne",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face"
  },
]

const stats = [
  { icon: Mic, value: "3", label: "Keynotes" },
  { icon: Award, value: "6+", label: "Invités d'honneur" },
  { icon: Globe, value: "12", label: "Pays" },
  { icon: BookOpen, value: "500+", label: "Publications" },
]

export default function SpeakersPage() {
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
                <span className="text-xs font-semibold uppercase tracking-wider text-[#A64DFF]">Intervenants</span>
              </div>
              <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Nos<br />
                <span className="text-[#A64DFF]">Conférenciers</span>
              </h1>
            </div>
            <div>
              <p className="max-w-md text-white/70 lg:ml-auto lg:text-right">
                Des experts de renommée internationale partagent leurs recherches et visions pour l&apos;avenir de la pédagogie universitaire.
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

      {/* Keynote Speakers */}
      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#6C2EB7]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6C2EB7]">Keynotes</span>
            </div>
            <h2 className="text-3xl font-bold text-[#1B1142] md:text-4xl">
              Conférenciers Principaux
            </h2>
          </div>

          <div className="space-y-8">
            {keynoteSpeakers.map((speaker, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:shadow-xl"
              >
                <div className="grid lg:grid-cols-3">
                  {/* Image */}
                  <div className="relative aspect-square lg:aspect-auto">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white" />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:col-span-2 lg:p-12">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-gradient-to-r from-[#6C2EB7] to-[#A64DFF] px-4 py-1 text-sm font-semibold text-white">
                        Keynote {index + 1}
                      </span>
                      <span className="text-sm text-muted-foreground">{speaker.country}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#1B1142] md:text-3xl">{speaker.name}</h3>
                    <p className="mt-1 text-lg text-[#6C2EB7]">{speaker.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{speaker.institution}</p>

                    <p className="mt-6 text-muted-foreground">{speaker.bio}</p>

                    <div className="mt-6 rounded-2xl bg-[#F8F6F3] p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#6C2EB7]">Conférence</p>
                      <p className="mt-1 font-semibold text-[#1B1142]">&quot;{speaker.keynote}&quot;</p>
                    </div>

                    <div className="mt-6 flex gap-3">
                      <a href={speaker.linkedin} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1B1142]/10 transition-colors hover:bg-[#1B1142] hover:text-white">
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a href={speaker.twitter} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1B1142]/10 transition-colors hover:bg-[#1B1142] hover:text-white">
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a href={speaker.website} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1B1142]/10 transition-colors hover:bg-[#1B1142] hover:text-white">
                        <Globe className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invited Speakers */}
      <section className="bg-[#F8F6F3] px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#6C2EB7]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6C2EB7]">Invités</span>
            </div>
            <h2 className="text-3xl font-bold text-[#1B1142] md:text-4xl">
              Conférenciers Invités
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {invitedSpeakers.map((speaker, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#1B1142]">{speaker.name}</h3>
                  <p className="text-sm text-[#6C2EB7]">{speaker.field}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{speaker.institution}</p>
                  <span className="mt-2 inline-block rounded-full bg-[#F8F6F3] px-2 py-0.5 text-xs text-muted-foreground">
                    {speaker.country}
                  </span>
                </div>
                <ArrowUpRight className="h-5 w-5 text-[#6C2EB7] opacity-0 transition-all group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
