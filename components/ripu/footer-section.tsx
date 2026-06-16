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
    <footer className="relative bg-white border-t border-gray-200 overflow-hidden">
      {/* CTA Section */}
      <div className="px-6 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="group relative overflow-hidden rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-700 to-purple-600 p-12 md:p-16 shadow-lg hover:shadow-xl transition-all duration-500">
            {/* Decorative Elements */}
            <div className="absolute -right-32 -top-32 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-50" />
            <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-white/5 rounded-full blur-2xl opacity-50" />

            <div className="relative flex flex-col items-center justify-center gap-8 text-center md:flex-row md:justify-between md:text-left">
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-light text-white mb-3">
                  Prêt à participer à RIPU26 ?
                </h3>
                <p className="text-purple-100 text-lg">
                  Inscrivez-vous dès maintenant et rejoignez la communauté mondiale de pédagogues innovants.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:whitespace-nowrap">
                <Button className="rounded-full bg-white text-purple-700 px-8 py-3 font-semibold hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all">
                  S&apos;inscrire
                </Button>
                <Button className="rounded-full border-2 border-white bg-transparent text-white px-8 py-3 font-semibold hover:bg-white/10 transition-all">
                  Soumettre
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-6 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-5 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                <div className="flex h-12 w-12 items-center justify-center bg-gradient-to-br from-purple-700 to-purple-600 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
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
                  <span className="text-2xl font-bold text-black">RIPU</span>
                  <span className="ml-1 text-xl font-light text-purple-700">26</span>
                </div>
              </Link>

              <p className="text-gray-600 leading-relaxed mb-8 max-w-sm">
                Rencontre Internationale de la Pédagogie Universitaire — une plateforme d&apos;échange et d&apos;innovation pour les pédagogues du monde entier.
              </p>

              {/* Event Info Pills */}
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2">
                  <span className="text-xs font-semibold text-gray-600 uppercase">Date</span>
                  <span className="text-sm font-semibold text-black">30-31 Oct 2026</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2">
                  <span className="text-xs font-semibold text-gray-600 uppercase">Lieu</span>
                  <span className="text-sm font-semibold text-black">Sousse, TN</span>
                </div>
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="mb-6 font-semibold text-black text-lg">Navigation</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group/link inline-flex items-center gap-2 text-sm text-gray-600 hover:text-purple-700 transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="mb-6 font-semibold text-black text-lg">Ressources</h4>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group/link inline-flex items-center gap-2 text-sm text-gray-600 hover:text-purple-700 transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social Column */}
            <div>
              <h4 className="mb-6 font-semibold text-black text-lg">Contact</h4>
              <a
                href="mailto:contact@ripusousse.com"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-purple-700 transition-colors mb-8"
              >
                <Mail className="h-4 w-4" />
                contact@ripusousse.com
              </a>

              {/* Social Links */}
              <div>
                <span className="text-xs font-semibold text-gray-600 uppercase block mb-4">Suivez-nous</span>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-white hover:bg-purple-700 hover:border-purple-700 transition-all duration-300"
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
          <div className="border-t border-gray-200 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-600">
              © 2026 RIPU. Tous droits réservés.
            </p>
            <div className="text-sm text-gray-600 font-medium">
              www.ripusousse.com
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-purple-700 transition-colors font-medium">
                Confidentialité
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-700 transition-colors font-medium">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
