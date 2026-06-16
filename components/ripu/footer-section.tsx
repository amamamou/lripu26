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
    <footer className="bg-white border-t border-gray-200">
      {/* CTA Section */}
      <div className="px-6 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-8 rounded-lg border border-gray-200 bg-gray-50 p-12 md:flex-row">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Prêt à participer à RIPU26 ?
              </h3>
              <p className="mt-2 text-gray-600">
                Inscrivez-vous dès maintenant et rejoignez la communauté internationale de pédagogues.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:whitespace-nowrap">
              <Button className="rounded-md bg-gray-900 px-8 py-3 text-white hover:bg-gray-800">
                S&apos;inscrire
              </Button>
              <Button className="rounded-md border border-gray-300 px-8 py-3 text-gray-900 hover:bg-gray-100">
                Soumettre un papier
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-6 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center bg-gray-900 rounded-lg">
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
                <div>
                  <span className="text-xl font-bold text-gray-900">RIPU</span>
                  <span className="ml-1 text-lg font-light text-gray-600">26</span>
                </div>
              </Link>
              <p className="mt-4 max-w-sm text-gray-600">
                Rencontre Internationale de la Pédagogie Universitaire. Une plateforme d&apos;échange et d&apos;innovation pour les pédagogues du monde entier.
              </p>

              {/* Date & Location */}
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="rounded-md border border-gray-200 bg-gray-50 px-4 py-2">
                  <span className="text-sm font-medium text-gray-900">30-31 Octobre 2026</span>
                </div>
                <div className="rounded-md border border-gray-200 bg-gray-50 px-4 py-2">
                  <span className="text-sm font-medium text-gray-900">Sousse, Tunisie</span>
                </div>
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="mb-6 font-semibold text-gray-900">Navigation</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-gray-900"
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
              <h4 className="mb-6 font-semibold text-gray-900">Ressources</h4>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-gray-900"
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
              <h4 className="mb-6 font-semibold text-gray-900">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:contact@ripusousse.com"
                    className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
                  >
                    <Mail className="h-4 w-4" />
                    contact@ripusousse.com
                  </a>
                </li>
              </ul>

              {/* Social Links */}
              <div className="mt-8">
                <span className="text-sm font-medium text-gray-600">Suivez-nous</span>
                <div className="mt-3 flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-all hover:border-gray-900 hover:text-gray-900"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
            <p className="text-sm text-gray-600">
              © 2026 RIPU. Tous droits réservés.
            </p>
            <div className="text-sm text-gray-600">
              www.ripusousse.com
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-600 transition-colors hover:text-gray-900">
                Confidentialité
              </a>
              <a href="#" className="text-gray-600 transition-colors hover:text-gray-900">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
