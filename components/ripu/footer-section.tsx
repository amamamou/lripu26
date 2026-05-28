"use client"

import Link from "next/link"
import { Mail, Linkedin, Facebook, Youtube, Twitter, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigationLinks = [
  { label: "Accueil", href: "#" },
  { label: "Le Colloque", href: "#about" },
  { label: "Programme", href: "#programme" },
  { label: "Intervenants", href: "#speakers" },
]

const resourceLinks = [
  { label: "Appel à communications", href: "#cfp" },
  { label: "Thématiques", href: "#themes" },
  { label: "Archives", href: "#archive" },
  { label: "FAQ", href: "#" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function FooterSection() {
  return (
    <footer className="bg-[#1B1142]">
      {/* CTA Section */}
      <div className="border-b border-white/10 px-4 py-16 md:px-6">
        <div className="mx-auto max-w-[1800px]">
          <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-gradient-to-r from-[#6C2EB7]/20 to-[#A64DFF]/20 p-10 md:flex-row md:p-14">
            <div>
              <h3 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                Prêt à participer à RIPU26 ?
              </h3>
              <p className="mt-2 text-white/70">
                Inscrivez-vous dès maintenant et rejoignez la communauté internationale.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-full bg-white px-8 py-6 text-[#6C2EB7] hover:bg-white/90">
                S&apos;inscrire
              </Button>
              <Button variant="outline" className="rounded-full border-white/30 bg-transparent px-8 py-6 text-white hover:bg-white/10">
                Soumettre un papier
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-[1800px]">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#6C2EB7] to-[#A64DFF]">
                  <svg viewBox="0 0 40 40" className="h-7 w-7" fill="none">
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
                <div>
                  <span className="text-2xl font-bold text-white">RIPU</span>
                  <span className="ml-1 text-2xl font-light text-white/80">26</span>
                </div>
              </Link>
              <p className="mt-4 max-w-sm text-white/60">
                Rencontre Internationale de la Pédagogie Universitaire. Une plateforme d&apos;échange et d&apos;innovation pour l&apos;enseignement supérieur.
              </p>

              {/* Date & Location */}
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="rounded-full bg-white/10 px-4 py-2">
                  <span className="text-sm text-white">30-31 Octobre 2026</span>
                </div>
                <div className="rounded-full bg-white/10 px-4 py-2">
                  <span className="text-sm text-white">Sousse, Tunisie</span>
                </div>
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="mb-6 font-semibold text-white">Navigation</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-[#A64DFF]"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="mb-6 font-semibold text-white">Ressources</h4>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-[#A64DFF]"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="mb-6 font-semibold text-white">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:contact@ripusousse.com"
                    className="flex items-center gap-2 text-white/60 transition-colors hover:text-[#A64DFF]"
                  >
                    <Mail className="h-4 w-4" />
                    contact@ripusousse.com
                  </a>
                </li>
              </ul>

              {/* Social Links */}
              <div className="mt-6">
                <span className="text-sm text-white/40">Suivez-nous</span>
                <div className="mt-3 flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-gradient-to-br hover:from-[#6C2EB7] hover:to-[#A64DFF]"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-sm text-white/40">
              © 2026 RIPU. Tous droits réservés.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/40">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6C2EB7]/30">
                <svg viewBox="0 0 40 40" className="h-4 w-4" fill="none">
                  <circle cx="20" cy="20" r="2" fill="currentColor" />
                </svg>
              </div>
              <span>www.ripusousse.com</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-white/40 transition-colors hover:text-[#A64DFF]">
                Confidentialité
              </a>
              <a href="#" className="text-white/40 transition-colors hover:text-[#A64DFF]">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
