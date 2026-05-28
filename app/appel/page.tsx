"use client"

import Link from "next/link"
import { ArrowLeft, FileText, Globe, Users, Calendar, CheckCircle, Clock, BookOpen, Award, Download, ArrowUpRight } from "lucide-react"
import { FooterSection } from "@/components/ripu/footer-section"

const submissionTypes = [
  {
    title: "Communication orale",
    duration: "20 min",
    description: "Présentation de recherche suivie d'un échange avec le public",
    icon: Users
  },
  {
    title: "Poster scientifique",
    duration: "Session dédiée",
    description: "Format visuel pour présenter vos travaux lors de la session posters",
    icon: FileText
  },
  {
    title: "Atelier pratique",
    duration: "90 min",
    description: "Session interactive pour partager une méthode ou un outil pédagogique",
    icon: BookOpen
  },
]

const themes = [
  {
    number: "01",
    title: "Intelligence artificielle et enseignement",
    topics: [
      "Intégration de l'IA dans les pratiques pédagogiques",
      "Éthique et limites de l'IA en éducation",
      "Outils d'IA pour l'évaluation et le feedback",
      "Formation des enseignants à l'IA"
    ]
  },
  {
    number: "02",
    title: "Approche par compétences (APC)",
    topics: [
      "Conception de référentiels de compétences",
      "Stratégies d'évaluation des compétences",
      "Alignement pédagogique et APC",
      "Retours d'expérience de mise en œuvre"
    ]
  },
  {
    number: "03",
    title: "Genre et équité en éducation",
    topics: [
      "Pédagogie inclusive et égalité des genres",
      "Représentation dans les curricula",
      "Accès équitable à l'enseignement supérieur",
      "Leadership féminin académique"
    ]
  },
]

const guidelines = [
  "Résumé de 300-500 mots en français ou anglais",
  "Titre explicite et mots-clés (5 maximum)",
  "Contexte, méthodologie et résultats attendus",
  "Références bibliographiques (format APA 7)",
  "Soumission via la plateforme EasyChair"
]

const timeline = [
  { date: "01 Juin 2026", event: "Ouverture de l'appel à communications", status: "upcoming" },
  { date: "01 Juillet 2026", event: "Date limite de soumission", status: "upcoming" },
  { date: "15 Juillet 2026", event: "Notification d'acceptation", status: "upcoming" },
  { date: "01 Sept 2026", event: "Date limite d'inscription auteurs", status: "upcoming" },
  { date: "30-31 Oct 2026", event: "Colloque RIPU'26", status: "highlight" },
]

export default function AppelPage() {
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
                <span className="text-xs font-semibold uppercase tracking-wider text-[#A64DFF]">Appel à communications</span>
              </div>
              <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Partagez vos<br />
                <span className="text-[#A64DFF]">recherches</span>
              </h1>
            </div>
            <div>
              <p className="max-w-md text-white/70 lg:ml-auto lg:text-right">
                Contribuez à l&apos;avancement de la pédagogie universitaire en soumettant vos travaux de recherche et retours d&apos;expérience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Submission Types */}
      <div className="px-4 md:px-6">
        <div className="mx-auto -mt-12 max-w-[1800px]">
          <div className="grid gap-4 md:grid-cols-3">
            {submissionTypes.map((type, index) => (
              <div key={index} className="rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#6C2EB7] to-[#A64DFF]">
                  <type.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1B1142]">{type.title}</h3>
                <span className="mt-1 inline-block rounded-full bg-[#6C2EB7]/10 px-2 py-0.5 text-xs font-semibold text-[#6C2EB7]">
                  {type.duration}
                </span>
                <p className="mt-3 text-sm text-muted-foreground">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Themes */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#6C2EB7]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#6C2EB7]">Axes thématiques</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1B1142] md:text-4xl">
                  Thèmes du colloque
                </h2>
                <p className="mt-4 max-w-2xl text-muted-foreground">
                  Les propositions doivent s&apos;inscrire dans l&apos;un des trois axes thématiques suivants.
                </p>
              </div>

              <div className="space-y-6">
                {themes.map((theme, index) => (
                  <div
                    key={index}
                    className="group rounded-3xl border border-[#E6E6E6] bg-white p-6 transition-all hover:border-[#6C2EB7]/30 hover:shadow-lg md:p-8"
                  >
                    <div className="flex items-start gap-6">
                      <span className="text-5xl font-bold text-[#6C2EB7]/20 transition-colors group-hover:text-[#6C2EB7]/40">
                        {theme.number}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#1B1142] md:text-2xl">{theme.title}</h3>
                        <ul className="mt-4 grid gap-2 md:grid-cols-2">
                          {theme.topics.map((topic, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#6C2EB7]" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Timeline Card */}
              <div className="rounded-3xl bg-[#1B1142] p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#A64DFF]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#A64DFF]">Calendrier</span>
                </div>
                <h3 className="text-xl font-bold text-white">Dates clés</h3>
                
                <div className="mt-6 space-y-4">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${
                        item.status === "highlight" ? "bg-[#A64DFF]" : "bg-white/30"
                      }`} />
                      <div>
                        <p className={`text-sm font-semibold ${
                          item.status === "highlight" ? "text-[#A64DFF]" : "text-white"
                        }`}>
                          {item.date}
                        </p>
                        <p className="text-sm text-white/70">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guidelines Card */}
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-[#6C2EB7]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#6C2EB7]">Instructions</span>
                </div>
                <h3 className="text-xl font-bold text-[#1B1142]">Guide de soumission</h3>
                
                <ul className="mt-4 space-y-3">
                  {guidelines.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#6C2EB7]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#1B1142]/10 px-4 py-3 text-sm font-semibold text-[#1B1142] transition-all hover:bg-[#1B1142] hover:text-white">
                  <Download className="h-4 w-4" />
                  Télécharger le template
                </button>
              </div>

              {/* Languages Card */}
              <div className="rounded-3xl bg-gradient-to-br from-[#6C2EB7] to-[#A64DFF] p-6 text-white">
                <div className="mb-4 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-white/70" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/70">Langues</span>
                </div>
                <h3 className="text-xl font-bold">Bilingual Conference</h3>
                <p className="mt-2 text-sm text-white/80">
                  Les communications peuvent être soumises et présentées en français ou en anglais.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">Français</span>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">English</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F8F6F3] px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1B1142] md:text-4xl">
                Prêt à soumettre?
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Rejoignez plus de 80 chercheurs et praticiens qui partageront leurs travaux lors de RIPU&apos;26.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://easychair.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6C2EB7] to-[#A64DFF] px-8 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-[#6C2EB7]/25"
                >
                  Soumettre via EasyChair
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#1B1142] px-8 py-3 font-semibold text-[#1B1142] transition-all hover:bg-[#1B1142] hover:text-white"
                >
                  Des questions?
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-4xl font-bold text-[#6C2EB7]">80+</p>
                <p className="mt-1 text-sm text-muted-foreground">Communications attendues</p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-4xl font-bold text-[#6C2EB7]">15+</p>
                <p className="mt-1 text-sm text-muted-foreground">Pays représentés</p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-4xl font-bold text-[#6C2EB7]">100%</p>
                <p className="mt-1 text-sm text-muted-foreground">Peer-reviewed</p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-4xl font-bold text-[#6C2EB7]">2</p>
                <p className="mt-1 text-sm text-muted-foreground">Jours de colloque</p>
              </div>
            </div>
          </div>
        </div>
      </section>
              <FooterSection />

    </main>
  )
}
