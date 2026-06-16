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
    <section id="dates" className="relative bg-white px-6 py-24 md:px-8 md:py-40">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-20">
          <div className="mb-6 inline-block">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-700">Calendrier</span>
            <div className="mt-2 h-0.5 w-12 bg-gradient-to-r from-purple-700 to-purple-400" />
          </div>
          <h2 className="text-6xl md:text-7xl font-light leading-tight text-black">
            Jalons du colloque
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-purple-600 to-purple-700" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {dates.map((item, index) => (
              <div
                key={index}
                className="group relative pl-24 transition-all duration-500"
                style={{
                  animation: `slideInLeft 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 top-0 h-16 w-16 -ml-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                    item.status === "highlight"
                      ? "bg-gradient-to-br from-purple-600 to-purple-700 shadow-lg shadow-purple-600/50"
                      : "bg-white border-2 border-purple-600"
                  } group-hover:scale-110`}
                >
                  <item.icon
                    className={`h-7 w-7 ${
                      item.status === "highlight" ? "text-white" : "text-purple-600"
                    }`}
                  />
                </div>

                {/* Content Card */}
                <div
                  className={`rounded-2xl p-8 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 ${
                    item.status === "highlight"
                      ? "bg-gradient-to-br from-purple-600 to-purple-700 text-white border-0"
                      : "bg-white border border-gray-200 hover:border-purple-300"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className={`text-xs uppercase tracking-wider font-bold ${
                        item.status === "highlight" ? "text-purple-100" : "text-purple-700"
                      }`}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`text-sm font-bold ${
                        item.status === "highlight" ? "text-purple-100" : "text-gray-400"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3
                    className={`text-2xl font-bold mb-3 ${
                      item.status === "highlight" ? "text-white" : "text-black"
                    }`}
                  >
                    {item.date}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      item.status === "highlight" ? "text-purple-50" : "text-gray-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}

