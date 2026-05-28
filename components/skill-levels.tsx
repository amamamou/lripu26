"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const skillLevels = [
  {
    id: 1,
    icon: "🌊",
    label: "Total Newbie",
    tag: "first-time",
    description: "Never touched a board",
  },
  {
    id: 2,
    icon: "🏄",
    label: "Still Learning",
    tag: "beginner",
    description: "Can stand up sometimes",
  },
  {
    id: 3,
    icon: "🌴",
    label: "Pretty Confident",
    tag: "intermediate",
    description: "Comfortable on waves",
  },
  {
    id: 4,
    icon: "⚡",
    label: "Already a Pro",
    tag: "advanced",
    description: "Ready for any challenge",
  },
]

export default function SkillLevels() {
  return (
    <section className="bg-background px-8 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-4 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-olive-dark" />
          <span className="text-xs uppercase tracking-wider text-muted-foreground">Levels</span>
        </div>

        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-md text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Catch the wave regardless
            <br />
            of your <span className="text-olive-dark">surfing skills</span>
          </h2>
          <Button variant="outline" className="group rounded-full">
            See Full Program
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Skill Level Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillLevels.map((level) => (
            <div
              key={level.id}
              className="group cursor-pointer rounded-2xl border border-border bg-card p-6 transition-all hover:border-olive-dark hover:shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-2xl">
                  {level.icon}
                </div>
                <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                  {level.tag}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{level.label}</h3>
              <p className="text-sm text-muted-foreground">{level.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
