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
    <section id="dates" className="bg-white px-6 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-gray-900" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">Calendrier important</span>
          </div>
          <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Jalons du colloque
          </h2>
        </div>

        {/* Timeline Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {dates.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-lg border p-8 transition-all duration-300 ${
                item.status === "highlight"
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              {/* Step Number */}
              <div className={`absolute -top-4 right-6 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                item.status === "highlight"
                  ? "bg-white text-gray-900"
                  : "bg-gray-900 text-white"
              }`}>
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg ${
                item.status === "highlight"
                  ? "bg-white/10"
                  : "bg-gray-900"
              }`}>
                <item.icon className={`h-6 w-6 ${
                  item.status === "highlight" ? "text-white" : "text-white"
                }`} />
              </div>

              {/* Label */}
              <span className={`mb-2 text-xs font-semibold uppercase tracking-wider ${
                item.status === "highlight" ? "text-white/70" : "text-gray-600"
              }`}>
                {item.label}
              </span>

              {/* Date */}
              <h3 className={`mb-4 text-xl font-bold ${
                item.status === "highlight" ? "text-white" : "text-gray-900"
              }`}>
                {item.date}
              </h3>

              {/* Description */}
              <p className={`text-sm leading-relaxed ${
                item.status === "highlight" ? "text-white/80" : "text-gray-600"
              }`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

