"use client"

import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Users, Coffee, Award, Calendar, Download, ArrowUpRight, Mic, BookOpen, MessageSquare } from "lucide-react"
import { FooterSection } from "@/components/ripu/footer-section"
import ProgrammeHero from "@/components/ripu/programme-hero"

const day1Sessions = [
  {
    time: "08:00 - 09:00",
    title: "Accueil & Inscription",
    type: "accueil",
    location: "Hall Principal",
    icon: Users
  },
  {
    time: "09:00 - 09:30",
    title: "Cérémonie d'ouverture",
    description: "Allocutions officielles et présentation du colloque",
    type: "ceremonie",
    location: "Amphithéâtre A",
    icon: Award
  },
  {
    time: "09:30 - 10:30",
    title: "Keynote 1: L'IA générative et l'enseignement",
    speaker: "Prof. Jean-Pierre Dupont",
    institution: "Université de Paris",
    type: "keynote",
    location: "Amphithéâtre A",
    icon: Mic
  },
  {
    time: "10:30 - 11:00",
    title: "Pause café & Networking",
    type: "pause",
    location: "Espace Café",
    icon: Coffee
  },
  {
    time: "11:00 - 12:30",
    title: "Sessions parallèles - Bloc A",
    description: "4 sessions thématiques en parallèle",
    type: "session",
    location: "Salles 1-4",
    tracks: ["IA et Pédagogie", "Évaluation", "Formation des enseignants", "Innovations"]
  },
  {
    time: "12:30 - 14:00",
    title: "Déjeuner",
    type: "pause",
    location: "Restaurant Universitaire",
    icon: Coffee
  },
  {
    time: "14:00 - 15:30",
    title: "Ateliers pratiques - Série 1",
    description: "Découvrez des outils et méthodes innovantes",
    type: "atelier",
    location: "Salles 5-8",
    workshops: ["ChatGPT en classe", "Évaluation par compétences", "Classes inversées", "Feedback efficace"],
    icon: BookOpen
  },
  {
    time: "15:30 - 16:00",
    title: "Pause café",
    type: "pause",
    location: "Espace Café",
    icon: Coffee
  },
  {
    time: "16:00 - 17:00",
    title: "Keynote 2: L'approche par compétences",
    speaker: "Prof. Maria Santos",
    institution: "University of Lisbon",
    type: "keynote",
    location: "Amphithéâtre A",
    icon: Mic
  },
  {
    time: "17:00 - 18:30",
    title: "Session Posters",
    description: "Présentations interactives des travaux de recherche",
    type: "posters",
    location: "Hall d'exposition",
    icon: MessageSquare
  },
  {
    time: "20:00",
    title: "Dîner de Gala",
    description: "Soirée networking dans un cadre exceptionnel",
    type: "social",
    location: "Hôtel Mövenpick",
    icon: Award
  },
]

const day2Sessions = [
  {
    time: "09:00 - 10:00",
    title: "Keynote 3: L'université du futur",
    speaker: "Prof. Hans Mueller",
    institution: "Universität Berlin",
    type: "keynote",
    location: "Amphithéâtre A",
    icon: Mic
  },
  {
    time: "10:00 - 10:30",
    title: "Pause café",
    type: "pause",
    location: "Espace Café",
    icon: Coffee
  },
  {
    time: "10:30 - 12:00",
    title: "Sessions parallèles - Bloc B",
    description: "4 sessions thématiques en parallèle",
    type: "session",
    location: "Salles 1-4",
    tracks: ["Genre et équité", "Technologies éducatives", "Internationalisation", "Qualité"]
  },
  {
    time: "12:00 - 13:30",
    title: "Déjeuner",
    type: "pause",
    location: "Restaurant Universitaire",
    icon: Coffee
  },
  {
    time: "13:30 - 15:00",
    title: "Ateliers pratiques - Série 2",
    type: "atelier",
    location: "Salles 5-8",
    workshops: ["Learning Analytics", "Pédagogie inclusive", "Design thinking", "Portfolios"],
    icon: BookOpen
  },
  {
    time: "15:00 - 15:30",
    title: "Pause café",
    type: "pause",
    location: "Espace Café",
    icon: Coffee
  },
  {
    time: "15:30 - 17:00",
    title: "Table ronde: Perspectives futures",
    description: "Échanges entre experts internationaux et participants",
    type: "table-ronde",
    location: "Amphithéâtre A",
    icon: MessageSquare
  },
  {
    time: "17:00 - 17:30",
    title: "Cérémonie de clôture & Remise des prix",
    description: "Synthèse et annonce de RIPU'27",
    type: "ceremonie",
    location: "Amphithéâtre A",
    icon: Award
  },
]

const getTypeColor = (type: string) => {
  switch (type) {
    case "keynote": return "bg-gradient-to-r from-[#6C2EB7] to-[#A64DFF] text-white"
    case "session": return "bg-[#6C2EB7]/10 border-[#6C2EB7]/30 text-[#6C2EB7]"
    case "atelier": return "bg-amber-50 border-amber-200 text-amber-700"
    case "pause": return "bg-gray-100 text-gray-600"
    case "ceremonie": return "bg-[#1B1142] text-white"
    case "social": return "bg-gradient-to-r from-[#A64DFF] to-[#6C2EB7] text-white"
    case "posters": return "bg-emerald-50 border-emerald-200 text-emerald-700"
    case "table-ronde": return "bg-blue-50 border-blue-200 text-blue-700"
    default: return "bg-gray-100 text-gray-600"
  }
}

export default function ProgrammePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header (extracted component) */}
      <ProgrammeHero />

      {/* Legend */}
      <div className="px-4 md:px-6">
        <div className="mx-auto -mt-8 max-w-[1800px]">
          <div className="flex flex-wrap gap-3 rounded-2xl bg-white p-4 shadow-lg">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6C2EB7] to-[#A64DFF] px-3 py-1 text-xs font-medium text-white">
              Keynote
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#6C2EB7]/30 bg-[#6C2EB7]/10 px-3 py-1 text-xs font-medium text-[#6C2EB7]">
              Session
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
              Atelier
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#1B1142] px-3 py-1 text-xs font-medium text-white">
              Cérémonie
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
              Pause
            </span>
          </div>
        </div>
      </div>

      {/* Day 1 */}
      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6C2EB7] to-[#A64DFF]">
              <span className="text-2xl font-bold text-white">01</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1B1142] md:text-4xl">Jour 1</h2>
              <p className="text-muted-foreground">Vendredi 30 Octobre 2026</p>
            </div>
          </div>

          <div className="space-y-4">
            {day1Sessions.map((session, index) => (
              <div
                key={index}
                className={`group rounded-2xl border p-4 transition-all hover:shadow-md md:p-6 ${
                  session.type === "keynote" || session.type === "ceremonie" || session.type === "social"
                    ? getTypeColor(session.type)
                    : "border-[#E6E6E6] bg-white"
                }`}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <div className="flex items-center gap-4 md:w-48">
                    <Clock className={`h-4 w-4 ${
                      session.type === "keynote" || session.type === "ceremonie" || session.type === "social"
                        ? "text-white/70"
                        : "text-[#6C2EB7]"
                    }`} />
                    <span className={`text-sm font-semibold ${
                      session.type === "keynote" || session.type === "ceremonie" || session.type === "social"
                        ? "text-white"
                        : "text-[#1B1142]"
                    }`}>
                      {session.time}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold ${
                      session.type === "keynote" || session.type === "ceremonie" || session.type === "social"
                        ? "text-white"
                        : "text-[#1B1142]"
                    }`}>
                      {session.title}
                    </h3>
                    {session.speaker && (
                      <p className={`mt-1 text-sm ${
                        session.type === "keynote" ? "text-white/80" : "text-[#6C2EB7]"
                      }`}>
                        {session.speaker} — {session.institution}
                      </p>
                    )}
                    {session.description && (
                      <p className={`mt-1 text-sm ${
                        session.type === "keynote" || session.type === "ceremonie" || session.type === "social"
                          ? "text-white/70"
                          : "text-muted-foreground"
                      }`}>
                        {session.description}
                      </p>
                    )}
                    {session.tracks && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {session.tracks.map((track, i) => (
                          <span key={i} className="rounded-full bg-[#6C2EB7]/10 px-3 py-1 text-xs font-medium text-[#6C2EB7]">
                            {track}
                          </span>
                        ))}
                      </div>
                    )}
                    {session.workshops && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {session.workshops.map((workshop, i) => (
                          <span key={i} className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                            {workshop}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className={`flex items-center gap-2 text-sm ${
                    session.type === "keynote" || session.type === "ceremonie" || session.type === "social"
                      ? "text-white/70"
                      : "text-muted-foreground"
                  }`}>
                    <MapPin className="h-4 w-4" />
                    {session.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day 2 */}
      <section className="bg-[#F8F6F3] px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6C2EB7] to-[#A64DFF]">
              <span className="text-2xl font-bold text-white">02</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1B1142] md:text-4xl">Jour 2</h2>
              <p className="text-muted-foreground">Samedi 31 Octobre 2026</p>
            </div>
          </div>

          <div className="space-y-4">
            {day2Sessions.map((session, index) => (
              <div
                key={index}
                className={`group rounded-2xl border p-4 transition-all hover:shadow-md md:p-6 ${
                  session.type === "keynote" || session.type === "ceremonie"
                    ? getTypeColor(session.type)
                    : "border-[#E6E6E6] bg-white"
                }`}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <div className="flex items-center gap-4 md:w-48">
                    <Clock className={`h-4 w-4 ${
                      session.type === "keynote" || session.type === "ceremonie"
                        ? "text-white/70"
                        : "text-[#6C2EB7]"
                    }`} />
                    <span className={`text-sm font-semibold ${
                      session.type === "keynote" || session.type === "ceremonie"
                        ? "text-white"
                        : "text-[#1B1142]"
                    }`}>
                      {session.time}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold ${
                      session.type === "keynote" || session.type === "ceremonie"
                        ? "text-white"
                        : "text-[#1B1142]"
                    }`}>
                      {session.title}
                    </h3>
                    {session.speaker && (
                      <p className={`mt-1 text-sm ${
                        session.type === "keynote" ? "text-white/80" : "text-[#6C2EB7]"
                      }`}>
                        {session.speaker} — {session.institution}
                      </p>
                    )}
                    {session.description && (
                      <p className={`mt-1 text-sm ${
                        session.type === "keynote" || session.type === "ceremonie"
                          ? "text-white/70"
                          : "text-muted-foreground"
                      }`}>
                        {session.description}
                      </p>
                    )}
                    {session.tracks && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {session.tracks.map((track, i) => (
                          <span key={i} className="rounded-full bg-[#6C2EB7]/10 px-3 py-1 text-xs font-medium text-[#6C2EB7]">
                            {track}
                          </span>
                        ))}
                      </div>
                    )}
                    {session.workshops && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {session.workshops.map((workshop, i) => (
                          <span key={i} className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                            {workshop}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className={`flex items-center gap-2 text-sm ${
                    session.type === "keynote" || session.type === "ceremonie"
                      ? "text-white/70"
                      : "text-muted-foreground"
                  }`}>
                    <MapPin className="h-4 w-4" />
                    {session.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Mobile-only CTA: placed at the end of the programme page, above the footer */}
      <div className="sm:hidden px-4 pb-8">
        <div className="mx-auto max-w-[1800px]">
          <div className="px-2">
            <button className="w-full rounded-full bg-white px-6 py-3 font-semibold text-[#6C2EB7]">
              Télécharger le PDF
            </button>
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  )
}
