"use client"

import { Calendar, FileText, Bell, Award } from "lucide-react"

const dates = [
  {
    icon: Calendar,
    label: "Appel",
    date: "01 Juin 2026",
    description: "Ouverture de l'appel à communications",
    status: "upcoming"
  },
  {
    icon: FileText,
    label: "Dépôt",
    date: "01 Juillet 2026",
    description: "Date limite de soumission des résumés",
    status: "upcoming"
  },
  {
    icon: Bell,
    label: "Résultats",
    date: "15 Juillet 2026",
    description: "Notification d'acceptation aux auteurs",
    status: "upcoming"
  },
  {
    icon: Award,
    label: "Colloque",
    date: "30–31 Octobre 2026",
    description: "Deux jours de conférences et ateliers",
    status: "highlight"
  },
]

export function DatesSection() {
  return (
    <section id="dates" className="bg-background px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-[1800px]">
        {/* Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#6C2EB7]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6C2EB7]">Dates importantes</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight text-[#1B1142] md:text-5xl lg:text-6xl">
              Calendrier<br />
              <span className="font-light text-[#6C2EB7]">clé</span>
            </h2>
          </div>
          <div>
            <p className="max-w-md text-muted-foreground lg:ml-auto">
              Repérez les échéances essentielles pour soumettre et participer au colloque. Ne manquez aucune date importante.
            </p>
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-0 right-0 top-1/2 hidden h-0.5 -translate-y-1/2 bg-gradient-to-r from-[#6C2EB7]/20 via-[#A64DFF]/40 to-[#6C2EB7]/20 lg:block" />
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {dates.map((item, index) => (
              <div
                key={index}
                className={`group relative rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 ${
                  item.status === "highlight"
                    ? "bg-gradient-to-br from-[#6C2EB7] to-[#A64DFF] text-white shadow-xl shadow-[#6C2EB7]/25"
                    : "bg-white shadow-sm hover:shadow-lg"
                }`}
              >
                {/* Step Number */}
                <div className={`absolute -top-3 right-6 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                  item.status === "highlight"
                    ? "bg-white text-[#6C2EB7]"
                    : "bg-gradient-to-br from-[#6C2EB7] to-[#A64DFF] text-white"
                }`}>
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${
                  item.status === "highlight"
                    ? "bg-white/20"
                    : "bg-gradient-to-br from-[#6C2EB7]/10 to-[#A64DFF]/10"
                }`}>
                  <item.icon className={`h-6 w-6 ${
                    item.status === "highlight" ? "text-white" : "text-[#6C2EB7]"
                  }`} />
                </div>

                {/* Label */}
                <span className={`mb-2 inline-block text-sm font-semibold uppercase tracking-wider ${
                  item.status === "highlight" ? "text-white/80" : "text-[#6C2EB7]"
                }`}>
                  {item.label}
                </span>

                {/* Date */}
                <h3 className={`mb-3 text-2xl font-bold ${
                  item.status === "highlight" ? "text-white" : "text-[#1B1142]"
                }`}>
                  {item.date}
                </h3>

                {/* Description */}
                <p className={`text-sm ${
                  item.status === "highlight" ? "text-white/80" : "text-muted-foreground"
                }`}>
                  {item.description}
                </p>

                {/* Bottom Decoration */}
                <div className={`mt-6 h-1 w-12 rounded-full ${
                  item.status === "highlight" ? "bg-white/30" : "bg-gradient-to-r from-[#6C2EB7] to-[#A64DFF]"
                }`} />
              </div>
            ))}
          </div>
        </div>

   
      </div>
    </section>
  )
}
