"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Linkedin, Mail, Globe, Award, Users, BookOpen } from "lucide-react"
import { Footer } from "react-day-picker"
import { FooterSection } from "@/components/ripu/footer-section"

const comiteOrganisation = [
  {
    name: "Prof. Ahmed Ben Salem",
    role: "Président du comité",
    institution: "Université de Sousse",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Professeur en Sciences de l'Éducation avec 25 ans d'expérience en pédagogie universitaire.",
    linkedin: "#",
    email: "ahmed.bensalem@university.tn"
  },
  {
    name: "Prof. Fatma Gharbi",
    role: "Vice-présidente",
    institution: "ISSEP Tunis",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "Spécialiste en innovation pédagogique et technologies éducatives.",
    linkedin: "#",
    email: "fatma.gharbi@university.tn"
  },
  {
    name: "Dr. Mohamed Trabelsi",
    role: "Secrétaire général",
    institution: "ISEFC Tunis",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Expert en évaluation des apprentissages et approche par compétences.",
    linkedin: "#",
    email: "mohamed.trabelsi@university.tn"
  },
  {
    name: "Dr. Leila Mansouri",
    role: "Trésorière",
    institution: "Université de Sfax",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Chercheuse en didactique et formation des enseignants.",
    linkedin: "#",
    email: "leila.mansouri@university.tn"
  },
]

const comiteScientifique = [
  { name: "Prof. Jean-Pierre Dupont", institution: "Université de Paris", country: "France" },
  { name: "Prof. Maria Santos", institution: "University of Lisbon", country: "Portugal" },
  { name: "Prof. Hans Mueller", institution: "Universität Berlin", country: "Allemagne" },
  { name: "Prof. Sarah Johnson", institution: "University of Toronto", country: "Canada" },
  { name: "Prof. Yuki Tanaka", institution: "Kyoto University", country: "Japon" },
  { name: "Prof. Omar Al-Rashid", institution: "King Saud University", country: "Arabie Saoudite" },
  { name: "Prof. Amina Kechiche", institution: "Université d'Alger", country: "Algérie" },
  { name: "Prof. Joseph Mbeki", institution: "University of Cape Town", country: "Afrique du Sud" },
  { name: "Prof. Elena Petrova", institution: "Moscow State University", country: "Russie" },
  { name: "Prof. Carlos Rodriguez", institution: "Universidad de Madrid", country: "Espagne" },
  { name: "Prof. Aisha Patel", institution: "University of Mumbai", country: "Inde" },
  { name: "Prof. Chen Wei", institution: "Peking University", country: "Chine" },
]

const stats = [
  { icon: Users, value: "16", label: "Membres du comité" },
  { icon: Globe, value: "12", label: "Pays représentés" },
  { icon: BookOpen, value: "200+", label: "Publications" },
  { icon: Award, value: "50+", label: "Années d'expérience cumulées" },
]

export default function ComiteePage() {
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
                <span className="text-xs font-semibold uppercase tracking-wider text-[#A64DFF]">Organisation</span>
              </div>
              <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Comités du<br />
                <span className="text-[#A64DFF]">RIPU&apos;26</span>
              </h1>
            </div>
            <div>
              <p className="max-w-md text-white/70 lg:ml-auto lg:text-right">
                Découvrez l&apos;équipe d&apos;experts académiques qui façonnent cette rencontre internationale unique.
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

      {/* Comité d'Organisation */}
      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#6C2EB7]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6C2EB7]">Direction</span>
            </div>
            <h2 className="text-3xl font-bold text-[#1B1142] md:text-4xl">
              Comité d&apos;Organisation
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {comiteOrganisation.map((member, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1142] via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-full opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <a href={member.linkedin} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/30">
                      <Linkedin className="h-4 w-4 text-white" />
                    </a>
                    <a href={`mailto:${member.email}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/30">
                      <Mail className="h-4 w-4 text-white" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <span className="mb-2 inline-block rounded-full bg-[#6C2EB7]/10 px-3 py-1 text-xs font-semibold text-[#6C2EB7]">
                    {member.role}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-[#1B1142]">{member.name}</h3>
                  <p className="text-sm text-[#6C2EB7]">{member.institution}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comité Scientifique */}
      <section className="bg-[#1B1142] px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#A64DFF]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A64DFF]">International</span>
            </div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Comité Scientifique
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Un réseau international d&apos;experts académiques assurant l&apos;excellence scientifique de la conférence.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {comiteScientifique.map((member, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-[#A64DFF]/50 hover:bg-white/10"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#6C2EB7] to-[#A64DFF] text-sm font-bold text-white">
                    {member.name.split(" ").slice(-1)[0][0]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{member.name}</h3>
                    <p className="text-xs text-white/50">{member.country}</p>
                  </div>
                </div>
                <p className="text-sm text-white/70">{member.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
<FooterSection />
    </main>
  )
}
