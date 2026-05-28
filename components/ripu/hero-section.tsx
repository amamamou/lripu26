"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Le Colloque", href: "/about" },
  { label: "Programme", href: "/programme" },
  { label: "Intervenants", href: "/speakers" },
  { label: "Lieu", href: "/venue" },
]

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <section className="relative min-h-screen bg-background px-4 pt-4 md:px-6 md:pt-6">
      {/* Main Hero Card */}
      <div className="relative mx-auto h-[calc(100vh-2rem)] max-w-[1800px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop"
          alt="Conference auditorium with purple lighting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B1142]/60 via-[#1B1142]/40 to-[#1B1142]/70" />

        {/* Navigation */}
        <nav className="relative z-20 flex items-center justify-between px-6 py-5 md:px-10 lg:px-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm">
              <svg viewBox="0 0 40 40" className="h-6 w-6" fill="none">
                <circle cx="20" cy="20" r="4" fill="white" />
                <circle cx="12" cy="12" r="2.5" fill="white" />
                <circle cx="28" cy="12" r="2.5" fill="white" />
                <circle cx="12" cy="28" r="2.5" fill="white" />
                <circle cx="28" cy="28" r="2.5" fill="white" />
                <line x1="20" y1="20" x2="12" y2="12" stroke="white" strokeWidth="1.5" />
                <line x1="20" y1="20" x2="28" y2="12" stroke="white" strokeWidth="1.5" />
                <line x1="20" y1="20" x2="12" y2="28" stroke="white" strokeWidth="1.5" />
                <line x1="20" y1="20" x2="28" y2="28" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-white">RIPU</span>
              <span className="text-xl font-light text-white/80">26</span>
            </div>
            {/* Date next to logo (visible on md+) */}
            <span className="hidden md:inline-flex ml-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-sm">
              <span className="text-sm font-medium text-white">30 — 31 Oct 2026</span>
            </span>
          </Link>

          {/* Center Date Badge removed — date is now shown next to the logo on md+ */}

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
              Contact
            </Link>
            <Link href="/register">
              <Button className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#6C2EB7] hover:bg-white/90">
                Inscription
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-full bg-white/10 p-2.5 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute left-4 right-4 top-20 z-50 rounded-2xl bg-white p-6 shadow-2xl lg:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium text-[#1B1142] transition-colors hover:text-[#6C2EB7]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="text-base font-medium text-[#1B1142] hover:text-[#6C2EB7]">
                Contact
              </Link>
              <Link href="/register">
                <Button className="mt-2 rounded-full bg-[#6C2EB7] text-white hover:bg-[#5A2599]">
                  Inscription
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 flex h-[calc(100%-80px)] flex-col items-center justify-center px-6 text-center">
          <h1 className="text-6xl font-bold leading-none text-white md:text-8xl lg:text-[10rem]">
            RIPU
            <br />
            <span className="bg-gradient-to-r from-white to-[#A64DFF] bg-clip-text text-transparent">2026</span>
          </h1>

          <Button className="mt-10 rounded-full bg-[#6C2EB7] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#6C2EB7]/30 hover:bg-[#5A2599]">
            En Savoir Plus
          </Button>

          {/* Bottom Stats */}
          <div className="absolute bottom-10 left-6 flex items-center gap-3 md:left-10">
            <span className="text-5xl font-bold text-white md:text-6xl">500+</span>
            <span className="max-w-[140px] text-left text-sm leading-tight text-white/70">
              participants attendus de plus de 25 pays
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
