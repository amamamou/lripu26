"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import Image from "next/image"

const roomTypes = [
  { id: 1, name: "Twin Room", description: "Shared room for two" },
  { id: 2, name: "Double Room", description: "Private room for couples" },
  { id: 3, name: "Group Suite", description: "Space for friends traveling together" },
  { id: 4, name: "Common Areas", description: "Shared spaces for everyone" },
]

export default function Accommodation() {
  return (
    <section className="bg-background px-8 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-4 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-olive-dark" />
          <span className="text-xs uppercase tracking-wider text-muted-foreground">Stay</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <div>
            <h2 className="mb-8 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Live in a <span className="text-olive-dark">tropical villa</span> with
              <br />
              friends or on your own
            </h2>

            {/* Villa Image */}
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs backdrop-blur-sm">
                Our Villa
              </div>
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                alt="Tropical Villa"
                width={600}
                height={400}
                className="h-[400px] w-full object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                Our villa in Canggu has 5 bedrooms sleeping 20-24 people maximum. Choose from shared twin rooms, private double rooms for couples, or group suites for friends traveling together.
              </p>

              {/* Room Types */}
              <div className="space-y-4">
                {roomTypes.map((room) => (
                  <div
                    key={room.id}
                    className="group flex cursor-pointer items-center justify-between border-b border-border pb-4 transition-colors hover:border-olive-dark"
                  >
                    <div>
                      <h3 className="font-semibold">{room.name}</h3>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-olive-dark" />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 flex items-end justify-between gap-4">
              <div>
                <p className="mb-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Private pool, rooftop terrace with ocean views, fully equipped kitchen, coworking space, outdoor lounge, games, surf gear storage and BBQ area. Everything you need between sessions.
                </p>
                <Button className="group rounded-full bg-olive-dark text-white hover:bg-olive-dark/90">
                  Reserve Your Spot
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="hidden overflow-hidden rounded-2xl lg:block">
                <Image
                  src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=200&q=80"
                  alt="Pool area"
                  width={150}
                  height={100}
                  className="h-24 w-36 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
