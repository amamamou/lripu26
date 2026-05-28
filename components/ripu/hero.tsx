"use client"

import React from "react"
import NavBar from "@/components/ripu/navbar"
import { Calendar, MapPin } from "lucide-react"

export interface HeroProps {
  badge?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  date?: string
  location?: string
  cta?: {
    label: string
    href?: string
    onClick?: () => void
    hideOnMobile?: boolean
  }
  className?: string
}

export default function Hero({ badge, title, subtitle, date, location, cta, className = "" }: HeroProps) {
  return (
    <div className={`px-4 pb-24 pt-6 md:px-6 ${className}`}>
      <div className="relative mx-auto h-[320px] sm:h-[360px] md:h-[400px] lg:h-[420px] max-w-[1800px] overflow-visible lg:overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-b from-[#1B1142] via-[#2D1B5E] to-[#6C2EB7]">
        {/* Nav overlay */}
        <div className="absolute inset-x-0 top-0 z-30">
          <div className="mx-auto max-w-[1800px] px-4">
            <div className="py-5 md:py-6">
              <NavBar />
            </div>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-20 flex h-full items-center">
          <div className="mx-auto w-full max-w-[1800px] px-6 pt-12 sm:pt-20 md:pt-16">
            <div className="grid gap-3 lg:gap-6 lg:grid-cols-2 lg:items-center">
              <div className="py-6 lg:py-8">
                {badge && (
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#A64DFF]" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#A64DFF]">{badge}</span>
                  </div>
                )}

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {title}
                </h1>

                {(date || location) && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {date && (
                      <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                        <Calendar className="h-4 w-4" />
                        {date}
                      </span>
                    )}
                    {location && (
                      <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                        <MapPin className="h-4 w-4" />
                        {location}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className="-mt-2 sm:mt-0">
                {subtitle && (
                  <p className="max-w-md text-white/70 lg:ml-auto lg:text-right text-xs sm:text-sm md:text-base leading-tight sm:leading-normal">
                    {subtitle}
                  </p>
                )}

                {cta && (
                  <div className="mt-4 lg:mt-6 lg:ml-auto lg:text-right">
                    <button
                      onClick={cta.onClick}
                      className={`${cta.hideOnMobile ? "hidden sm:inline-flex" : "inline-flex"} items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#6C2EB7] transition-all hover:bg-[#A64DFF] hover:text-white`}
                    >
                      {cta.label}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
