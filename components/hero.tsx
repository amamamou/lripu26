"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 lg:px-16">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-olive-dark">
            <span className="text-xs font-bold text-white">W</span>
          </div>
          <span className="text-lg font-semibold text-white">Waveyu</span>
          <span className="ml-2 rounded-full bg-white/20 px-3 py-1 text-xs text-white backdrop-blur-sm">
            18 May - 26 May
          </span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="#" className="flex items-center gap-1 text-sm text-white/90 hover:text-white">
            The Camp <ChevronDown className="h-4 w-4" />
          </Link>
          <Link href="#" className="flex items-center gap-1 text-sm text-white/90 hover:text-white">
            The Rooms <ChevronDown className="h-4 w-4" />
          </Link>
          <Link href="#" className="flex items-center gap-1 text-sm text-white/90 hover:text-white">
            About <ChevronDown className="h-4 w-4" />
          </Link>
          <Link href="#" className="text-sm text-white/90 hover:text-white">
            Contact
          </Link>
        </div>

        <Button className="rounded-full bg-olive-dark px-6 text-white hover:bg-olive-dark/90">
          Apply Now
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-8 text-center">
        <p className="mb-4 text-sm text-white/80">18 May — 26 May</p>
        <h1 className="mb-8 max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
          Waveyu
          <br />
          Surf Camp
        </h1>
        <Button
          variant="outline"
          className="rounded-full border-white/30 bg-olive-dark px-8 py-6 text-white hover:bg-olive-dark/90"
        >
          Learn More
        </Button>

        {/* Stats */}
        <div className="mt-16 flex items-center gap-3">
          <span className="text-4xl font-bold text-white">350+</span>
          <span className="max-w-32 text-left text-sm text-white/70">
            surfers already caught waves with us
          </span>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
