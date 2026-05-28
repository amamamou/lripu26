import Link from "next/link"
import { Instagram, Youtube, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-olive-dark px-8 py-16 text-white lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <span className="text-xs font-bold text-olive-dark">W</span>
              </div>
              <span className="text-lg font-semibold">Waveyu</span>
            </div>
            <p className="text-sm text-white/70">
              Surf camps in Bali for surfers of all levels. Join our community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">The Camp</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="#" className="hover:text-white">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Rooms */}
          <div>
            <h4 className="mb-4 font-semibold">Accommodation</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="#" className="hover:text-white">
                  Twin Room
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Double Room
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Group Suite
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Villa Tour
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold">Connect</h4>
            <div className="flex gap-4">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-white/50">
          <p>© 2024 Waveyu Surf Camp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
