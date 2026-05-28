"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Le Colloque", href: "#about" },
  { label: "Programme", href: "#programme" },
  { label: "Intervenants", href: "#speakers" },
  { label: "Lieu", href: "#venue" },
]

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
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
        <Link href="#contact" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
          Contact
        </Link>
        <Button className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#6C2EB7] hover:bg-white/90">
          Inscription
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="rounded-full bg-white/10 p-2.5 backdrop-blur-sm lg:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
      </button>

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
            <Link href="#contact" className="text-base font-medium text-[#1B1142] hover:text-[#6C2EB7]">
              Contact
            </Link>
            <Button className="mt-2 rounded-full bg-[#6C2EB7] text-white hover:bg-[#5A2599]">
              Inscription
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
