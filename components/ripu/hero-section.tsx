"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "À propos", href: "#about" },
  { label: "Programme", href: "/programme" },
  { label: "Intervenants", href: "/speakers" },
  { label: "Appel d'Offres", href: "/appel" },
]

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <section className="relative min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center">
              <svg viewBox="0 0 40 40" className="h-6 w-6" fill="none">
                <circle cx="20" cy="20" r="4" fill="#111" />
                <circle cx="12" cy="12" r="2.5" fill="#111" />
                <circle cx="28" cy="12" r="2.5" fill="#111" />
                <circle cx="12" cy="28" r="2.5" fill="#111" />
                <circle cx="28" cy="28" r="2.5" fill="#111" />
                <line x1="20" y1="20" x2="12" y2="12" stroke="#111" strokeWidth="1.5" />
                <line x1="20" y1="20" x2="28" y2="12" stroke="#111" strokeWidth="1.5" />
                <line x1="20" y1="20" x2="12" y2="28" stroke="#111" strokeWidth="1.5" />
                <line x1="20" y1="20" x2="28" y2="28" stroke="#111" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-gray-900">RIPU</span>
              <span className="text-sm font-light text-gray-600">26</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-12 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link href="/contact" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900">
              Contact
            </Link>
            <Link href="/register">
              <Button className="rounded-md bg-gray-900 px-6 py-2 text-sm font-medium text-white hover:bg-gray-800">
                Inscription
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-gray-900" /> : <Menu className="h-5 w-5 text-gray-900" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white px-6 py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Contact
              </Link>
              <Link href="/register">
                <Button className="mt-2 w-full rounded-md bg-gray-900 text-white hover:bg-gray-800">
                  Inscription
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl text-center">
          {/* Subtitle */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-4 py-2">
            <div className="h-1.5 w-1.5 rounded-full bg-gray-900" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">Colloque International</span>
          </div>

          {/* Main Title */}
          <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl">
            Enseigner et évaluer à l&apos;ère de l&apos;IA
          </h1>

          {/* Subtitle Text */}
          <p className="mb-10 text-lg leading-relaxed text-gray-600 md:text-xl">
            La 26ème édition du colloque RIPU rassemble les pédagogues innovants pour explorer les défis et opportunités de l&apos;intelligence artificielle dans l&apos;éducation supérieure.
          </p>

          {/* Key Facts */}
          <div className="mb-12 grid grid-cols-3 gap-4 md:gap-6">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 md:p-6">
              <p className="text-3xl font-bold text-gray-900 md:text-4xl">30-31</p>
              <p className="text-xs uppercase tracking-wider text-gray-600 md:text-sm">Octobre 2026</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 md:p-6">
              <p className="text-3xl font-bold text-gray-900 md:text-4xl">500+</p>
              <p className="text-xs uppercase tracking-wider text-gray-600 md:text-sm">Participants</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 md:p-6">
              <p className="text-3xl font-bold text-gray-900 md:text-4xl">25+</p>
              <p className="text-xs uppercase tracking-wider text-gray-600 md:text-sm">Pays</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/register">
              <Button className="rounded-md bg-gray-900 px-8 py-3 text-base font-medium text-white hover:bg-gray-800">
                S&apos;inscrire
              </Button>
            </Link>
            <Link href="#about">
              <Button className="rounded-md border border-gray-300 px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                En savoir plus
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

