"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

const navItems = [
  { label: "À propos", href: "#about" },
  { label: "Programme", href: "/programme" },
  { label: "Intervenants", href: "/speakers" },
  { label: "Appel d'Offres", href: "/appel" },
]

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/45" />
      </div>

      {/* Transparent Navigation */}
      <nav className="relative z-50 mx-auto max-w-6xl px-6 py-5 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm group-hover:bg-white/15 transition-all">
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
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-semibold text-white">RIPU</span>
              <span className="text-sm font-light text-white/70">26</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white group relative"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/contact" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
              Contact
            </Link>
            <Link href="/register">
              <Button className="rounded-full bg-white/10 px-6 py-2 text-sm font-medium text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all">
                Inscription
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 hover:bg-white/10 lg:hidden transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10 px-6 py-4 lg:hidden mt-2 rounded-lg">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <Link href="/contact" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/register">
                <Button className="w-full rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all">
                  Inscription
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-sm text-white/70 font-medium tracking-wide">
          30–31 Octobre 2026
        </p>

        <h1 className="mb-8 max-w-5xl text-6xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
          RIPU
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">26</span>
        </h1>

        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-white/80">
          Enseigner et évaluer à l&apos;ère de l&apos;IA et de l&apos;APC
        </p>

        <Link href="/register">
          <Button className="rounded-full bg-white text-black px-8 py-4 text-base font-semibold hover:bg-white/90 transition-all shadow-2xl">
            Appel à Communications
          </Button>
        </Link>

        {/* Stats */}
        <div className="mt-20 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <span className="text-5xl sm:text-6xl font-bold text-white">2e</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/40 to-white/0 hidden sm:block" />
          <span className="max-w-xs text-left text-sm text-white/70">
            édition de la Rencontre Internationale de la Pédagogie Universitaire
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="h-6 w-6 text-white/50" />
      </div>
    </section>
  )
}

