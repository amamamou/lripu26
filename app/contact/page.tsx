"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, MessageSquare, Globe, Facebook, Linkedin, Twitter, Youtube, CheckCircle } from "lucide-react"
import { FooterSection } from "@/components/ripu/footer-section"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@ripusousse.com",
    link: "mailto:contact@ripusousse.com"
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+216 73 123 456",
    link: "tel:+21673123456"
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Université de Sousse, Avenue Khalifa El Karoui, 4002 Sousse, Tunisie",
    link: "https://maps.google.com"
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun - Ven: 08:00 - 17:00",
    link: null
  },
]

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
]

const faqItems = [
  {
    question: "Comment soumettre une communication?",
    answer: "Les soumissions se font exclusivement via la plateforme EasyChair. Créez un compte, sélectionnez RIPU'26, et suivez les instructions pour soumettre votre résumé."
  },
  {
    question: "Quels sont les frais d'inscription?",
    answer: "Le tarif early bird (avant le 15 septembre) est de 150€. Le tarif standard est de 200€. Des réductions sont disponibles pour les doctorants et les participants des pays du Sud."
  },
  {
    question: "Y a-t-il des hébergements partenaires?",
    answer: "Oui, nous avons négocié des tarifs préférentiels avec plusieurs hôtels à Sousse. Les informations seront communiquées après votre inscription."
  },
  {
    question: "Les actes seront-ils publiés?",
    answer: "Oui, les actes du colloque seront publiés dans un ouvrage collectif avec ISBN. Les meilleures communications seront également proposées pour publication dans une revue indexée."
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1B1142] via-[#2D1B5E] to-[#6C2EB7] px-4 pb-24 pt-8 md:px-6">
        <div className="mx-auto max-w-[1800px]">
          <Link 
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l&apos;accueil
          </Link>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#A64DFF]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#A64DFF]">Contact</span>
              </div>
              <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Nous<br />
                <span className="text-[#A64DFF]">contacter</span>
              </h1>
            </div>
            <div>
              <p className="max-w-md text-white/70 lg:ml-auto lg:text-right">
                Une question sur le colloque? Notre équipe est à votre disposition pour vous accompagner.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="px-4 md:px-6">
        <div className="mx-auto -mt-12 max-w-[1800px]">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#6C2EB7] to-[#A64DFF]">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6C2EB7]">{item.label}</p>
                {item.link ? (
                  <a href={item.link} className="mt-1 block text-sm text-[#1B1142] hover:text-[#6C2EB7]">
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-[#1B1142]">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#6C2EB7]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#6C2EB7]">Formulaire</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1B1142] md:text-4xl">
                  Envoyez-nous un message
                </h2>
              </div>

              {isSubmitted ? (
                <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800">Message envoyé!</h3>
                  <p className="mt-2 text-emerald-700">Nous vous répondrons dans les plus brefs délais.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 rounded-full bg-emerald-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#1B1142]">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-[#E6E6E6] bg-white px-4 py-3 text-[#1B1142] transition-colors focus:border-[#6C2EB7] focus:outline-none focus:ring-2 focus:ring-[#6C2EB7]/20"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#1B1142]">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-[#E6E6E6] bg-white px-4 py-3 text-[#1B1142] transition-colors focus:border-[#6C2EB7] focus:outline-none focus:ring-2 focus:ring-[#6C2EB7]/20"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-[#1B1142]">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-xl border border-[#E6E6E6] bg-white px-4 py-3 text-[#1B1142] transition-colors focus:border-[#6C2EB7] focus:outline-none focus:ring-2 focus:ring-[#6C2EB7]/20"
                      required
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="soumission">Question sur la soumission</option>
                      <option value="inscription">Question sur l&apos;inscription</option>
                      <option value="programme">Question sur le programme</option>
                      <option value="hebergement">Hébergement et logistique</option>
                      <option value="partenariat">Proposition de partenariat</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#1B1142]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full resize-none rounded-xl border border-[#E6E6E6] bg-white px-4 py-3 text-[#1B1142] transition-colors focus:border-[#6C2EB7] focus:outline-none focus:ring-2 focus:ring-[#6C2EB7]/20"
                      placeholder="Votre message..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6C2EB7] to-[#A64DFF] px-8 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-[#6C2EB7]/25"
                  >
                    <Send className="h-4 w-4" />
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>

            {/* FAQ */}
            <div>
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#6C2EB7]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#6C2EB7]">FAQ</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1B1142] md:text-4xl">
                  Questions fréquentes
                </h2>
              </div>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#E6E6E6] bg-white p-6 transition-all hover:border-[#6C2EB7]/30 hover:shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#6C2EB7]/10">
                        <MessageSquare className="h-3 w-3 text-[#6C2EB7]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1B1142]">{item.question}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#F8F6F3] px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#6C2EB7]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6C2EB7]">Localisation</span>
              </div>
              <h2 className="text-3xl font-bold text-[#1B1142] md:text-4xl">
                Nous trouver
              </h2>
              <p className="mt-4 text-muted-foreground">
                Le colloque se tiendra à l&apos;Université de Sousse, au cœur de la ville côtière tunisienne.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6C2EB7]/10">
                    <MapPin className="h-5 w-5 text-[#6C2EB7]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1B1142]">Université de Sousse</p>
                    <p className="text-sm text-muted-foreground">Avenue Khalifa El Karoui, 4002 Sousse</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6C2EB7]/10">
                    <Globe className="h-5 w-5 text-[#6C2EB7]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1B1142]">Accès</p>
                    <p className="text-sm text-muted-foreground">30 min de l&apos;aéroport Enfidha</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="mb-4 text-sm font-semibold text-[#1B1142]">Suivez-nous</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1B1142]/10 transition-all hover:bg-[#6C2EB7] hover:text-white"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="h-full min-h-[400px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#1B1142] to-[#6C2EB7] p-1">
                <div className="flex h-full items-center justify-center rounded-[calc(1.5rem-4px)] bg-[#1B1142]/90">
                  <div className="text-center">
                    <MapPin className="mx-auto h-12 w-12 text-[#A64DFF]" />
                    <p className="mt-4 text-xl font-bold text-white">Sousse, Tunisie</p>
                    <p className="mt-2 text-white/70">Carte interactive</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                    >
                      Ouvrir dans Google Maps
                      <Globe className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  )
}
