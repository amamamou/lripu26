"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Waves, Sun, Music } from "lucide-react"
import Image from "next/image"

export default function Overview() {
  return (
    <section className="bg-background px-8 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-4 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-olive-dark" />
          <span className="text-xs uppercase tracking-wider text-muted-foreground">Overview</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-1">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Spend a week
              <br />
              living in a surfer&apos;s
              <br />
              paradise — <span className="text-olive-dark">Bali</span>
            </h2>

            {/* Features */}
            <div className="mb-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full bg-muted px-4 py-2">
                <Waves className="h-4 w-4 text-olive-dark" />
                <span className="text-sm">Perfect Swells</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-muted px-4 py-2">
                <Sun className="h-4 w-4 text-olive-dark" />
                <span className="text-sm">Warm Waters</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-muted px-4 py-2">
                <Music className="h-4 w-4 text-olive-dark" />
                <span className="text-sm">Surf Culture</span>
              </div>
            </div>

            <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
              Bali has drawn surfers since the 70s. It&apos;s a legendary destination with waves for every level. Surf every day, explore the island, and connect with people from all around the world. This is the kind of trip that stays with you long after you leave.
            </p>

            <Button variant="outline" className="group rounded-full border-olive-dark text-olive-dark hover:bg-olive-dark hover:text-white">
              Join The Camp
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Center Column - Image Card */}
          <div className="lg:col-span-1">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs backdrop-blur-sm">
                Our highlights
              </div>
              <div className="absolute right-4 top-4 z-10 flex gap-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm">
                  <ArrowRight className="h-4 w-4 rotate-180" />
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&q=80"
                alt="Surfboards"
                width={400}
                height={500}
                className="h-[400px] w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">
                  Discover the
                  <br />
                  Island&apos;s Secrets
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Waterfalls, temples, jungles and more
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="space-y-6 lg:col-span-1">
            {/* Location Info */}
            <div className="rounded-2xl bg-muted p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Where</p>
                  <p className="font-semibold">Bali, Canggu</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">When</p>
                  <p className="font-semibold">18 May - 26 May</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-muted-foreground">For whom</p>
                  <p className="font-semibold">All Skill Levels</p>
                </div>
              </div>
            </div>

            {/* Story Card */}
            <div className="rounded-2xl bg-muted p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-olive-dark">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                    alt="Founder"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                It started as a trip.
                <br />
                It became a movement. Now we&apos;re building a community of surfers who choose authentic experiences over everything else.
              </p>
              <Button variant="outline" className="group w-full justify-between rounded-full">
                Read Our Story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
