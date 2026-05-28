"use client"

import NavBar from "@/components/ripu/navbar"

export function ContactHero() {
  return (
    <div className="px-4 pb-24 pt-8 md:px-6">
      <div className="relative mx-auto h-[320px] sm:h-[360px] md:h-[380px] lg:h-[420px] max-w-[1800px] overflow-visible lg:overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-[#1B1142] via-[#2D1B5E] to-[#6C2EB7]">
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
          <div className="mx-auto w-full max-w-[1800px] px-6 pt-10 sm:pt-16 md:pt-14">
            <div className="grid gap-3 lg:gap-6 lg:grid-cols-2 lg:items-center">
              <div className="py-6 lg:py-8">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#A64DFF]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#A64DFF]">Contact</span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Nous<br />
                  <span className="text-[#A64DFF]">contacter</span>
                </h1>
              </div>
              <div className="-mt-2 sm:mt-0">
                <p className="max-w-md text-white/70 lg:ml-auto lg:text-right text-xs sm:text-sm md:text-base leading-tight sm:leading-normal">
                  Une question sur le colloque? Notre équipe est à votre disposition pour vous accompagner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactHero
