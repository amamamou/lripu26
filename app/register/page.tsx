"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, User, Mail, Building, GraduationCap, Globe, CreditCard, CheckCircle, ArrowRight, Shield, Calendar, MapPin } from "lucide-react"
import { FooterSection } from "@/components/ripu/footer-section"

const pricingTiers = [
  {
    name: "Early Bird",
    deadline: "Avant le 15 Sept 2026",
    prices: [
      { category: "Enseignant-chercheur", price: "150€" },
      { category: "Doctorant", price: "80€" },
      { category: "Professionnel", price: "200€" },
    ],
    highlight: true
  },
  {
    name: "Standard",
    deadline: "Après le 15 Sept 2026",
    prices: [
      { category: "Enseignant-chercheur", price: "200€" },
      { category: "Doctorant", price: "120€" },
      { category: "Professionnel", price: "250€" },
    ],
    highlight: false
  },
]

const included = [
  "Accès à toutes les sessions",
  "Kit du participant",
  "Pauses café et déjeuners",
  "Certificat de participation",
  "Actes du colloque (numérique)",
  "Accès au réseau WiFi"
]

const countries = [
  "Tunisie", "France", "Algérie", "Maroc", "Canada", "Belgique", "Suisse", 
  "Allemagne", "Espagne", "Italie", "Portugal", "Royaume-Uni", "États-Unis", "Autre"
]

const categories = [
  { value: "professor", label: "Enseignant-chercheur" },
  { value: "phd", label: "Doctorant" },
  { value: "professional", label: "Professionnel / Praticien" },
  { value: "student", label: "Étudiant Master" },
]

const participationTypes = [
  { value: "speaker", label: "Communicant (oral ou poster)" },
  { value: "attendee", label: "Participant sans communication" },
  { value: "workshop", label: "Animateur d'atelier" },
]

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    institution: "",
    country: "",
    category: "",
    participationType: "",
    dietary: "",
    gala: false,
    comments: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value })
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
                <span className="text-xs font-semibold uppercase tracking-wider text-[#A64DFF]">Inscription</span>
              </div>
              <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Rejoignez<br />
                <span className="text-[#A64DFF]">RIPU&apos;26</span>
              </h1>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                  <Calendar className="h-4 w-4" />
                  30-31 Octobre 2026
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                  <MapPin className="h-4 w-4" />
                  Sousse, Tunisie
                </span>
              </div>
            </div>
            <div>
              <p className="max-w-md text-white/70 lg:ml-auto lg:text-right">
                Complétez votre inscription en quelques étapes. Profitez du tarif early bird jusqu&apos;au 15 septembre 2026.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-6">
        <div className="mx-auto -mt-12 max-w-[1800px]">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl bg-white p-6 shadow-lg md:p-8">
                {/* Progress Steps */}
                <div className="mb-8 flex items-center justify-between">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                        s < step ? "bg-emerald-500 text-white" :
                        s === step ? "bg-gradient-to-r from-[#6C2EB7] to-[#A64DFF] text-white" :
                        "bg-gray-100 text-gray-400"
                      }`}>
                        {s < step ? <CheckCircle className="h-5 w-5" /> : s}
                      </div>
                      {s < 3 && (
                        <div className={`mx-2 h-1 w-16 rounded-full md:w-24 lg:w-32 ${
                          s < step ? "bg-emerald-500" : "bg-gray-100"
                        }`} />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#1B1142]">
                    {step === 1 && "Informations personnelles"}
                    {step === 2 && "Participation"}
                    {step === 3 && "Confirmation"}
                  </h2>
                  <p className="mt-1 text-muted-foreground">
                    {step === 1 && "Renseignez vos coordonnées et affiliation"}
                    {step === 2 && "Précisez votre type de participation"}
                    {step === 3 && "Vérifiez vos informations et finalisez"}
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#1B1142]">
                            <User className="h-4 w-4 text-[#6C2EB7]" />
                            Prénom
                          </label>
                          <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => updateFormData("firstName", e.target.value)}
                            className="w-full rounded-xl border border-[#E6E6E6] bg-white px-4 py-3 text-[#1B1142] transition-colors focus:border-[#6C2EB7] focus:outline-none focus:ring-2 focus:ring-[#6C2EB7]/20"
                            placeholder="Votre prénom"
                            required
                          />
                        </div>
                        <div>
                          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#1B1142]">
                            <User className="h-4 w-4 text-[#6C2EB7]" />
                            Nom
                          </label>
                          <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => updateFormData("lastName", e.target.value)}
                            className="w-full rounded-xl border border-[#E6E6E6] bg-white px-4 py-3 text-[#1B1142] transition-colors focus:border-[#6C2EB7] focus:outline-none focus:ring-2 focus:ring-[#6C2EB7]/20"
                            placeholder="Votre nom"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#1B1142]">
                          <Mail className="h-4 w-4 text-[#6C2EB7]" />
                          Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                          className="w-full rounded-xl border border-[#E6E6E6] bg-white px-4 py-3 text-[#1B1142] transition-colors focus:border-[#6C2EB7] focus:outline-none focus:ring-2 focus:ring-[#6C2EB7]/20"
                          placeholder="votre@email.com"
                          required
                        />
                      </div>

                      <div>
                        <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#1B1142]">
                          <Building className="h-4 w-4 text-[#6C2EB7]" />
                          Institution / Université
                        </label>
                        <input
                          type="text"
                          value={formData.institution}
                          onChange={(e) => updateFormData("institution", e.target.value)}
                          className="w-full rounded-xl border border-[#E6E6E6] bg-white px-4 py-3 text-[#1B1142] transition-colors focus:border-[#6C2EB7] focus:outline-none focus:ring-2 focus:ring-[#6C2EB7]/20"
                          placeholder="Votre institution"
                          required
                        />
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#1B1142]">
                            <Globe className="h-4 w-4 text-[#6C2EB7]" />
                            Pays
                          </label>
                          <select
                            value={formData.country}
                            onChange={(e) => updateFormData("country", e.target.value)}
                            className="w-full rounded-xl border border-[#E6E6E6] bg-white px-4 py-3 text-[#1B1142] transition-colors focus:border-[#6C2EB7] focus:outline-none focus:ring-2 focus:ring-[#6C2EB7]/20"
                            required
                          >
                            <option value="">Sélectionnez</option>
                            {countries.map((c) => (
                              <option key={c} value={c}>{c}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#1B1142]">
                            <GraduationCap className="h-4 w-4 text-[#6C2EB7]" />
                            Catégorie
                          </label>
                          <select
                            value={formData.category}
                            onChange={(e) => updateFormData("category", e.target.value)}
                            className="w-full rounded-xl border border-[#E6E6E6] bg-white px-4 py-3 text-[#1B1142] transition-colors focus:border-[#6C2EB7] focus:outline-none focus:ring-2 focus:ring-[#6C2EB7]/20"
                            required
                          >
                            <option value="">Sélectionnez</option>
                            {categories.map((c) => (
                              <option key={c.value} value={c.value}>{c.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label className="mb-3 block text-sm font-medium text-[#1B1142]">
                          Type de participation
                        </label>
                        <div className="space-y-3">
                          {participationTypes.map((type) => (
                            <label
                              key={type.value}
                              className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition-all ${
                                formData.participationType === type.value
                                  ? "border-[#6C2EB7] bg-[#6C2EB7]/5"
                                  : "border-[#E6E6E6] hover:border-[#6C2EB7]/30"
                              }`}
                            >
                              <input
                                type="radio"
                                name="participationType"
                                value={type.value}
                                checked={formData.participationType === type.value}
                                onChange={(e) => updateFormData("participationType", e.target.value)}
                                className="sr-only"
                              />
                              <div className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                                formData.participationType === type.value
                                  ? "border-[#6C2EB7] bg-[#6C2EB7]"
                                  : "border-gray-300"
                              }`}>
                                {formData.participationType === type.value && (
                                  <div className="h-2 w-2 rounded-full bg-white" />
                                )}
                              </div>
                              <span className="font-medium text-[#1B1142]">{type.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#1B1142]">
                          Restrictions alimentaires (optionnel)
                        </label>
                        <input
                          type="text"
                          value={formData.dietary}
                          onChange={(e) => updateFormData("dietary", e.target.value)}
                          className="w-full rounded-xl border border-[#E6E6E6] bg-white px-4 py-3 text-[#1B1142] transition-colors focus:border-[#6C2EB7] focus:outline-none focus:ring-2 focus:ring-[#6C2EB7]/20"
                          placeholder="Végétarien, sans gluten, etc."
                        />
                      </div>

                      <div className="rounded-xl border border-[#E6E6E6] p-4">
                        <label className="flex cursor-pointer items-start gap-4">
                          <input
                            type="checkbox"
                            checked={formData.gala}
                            onChange={(e) => updateFormData("gala", e.target.checked)}
                            className="mt-1 h-5 w-5 rounded border-gray-300 text-[#6C2EB7] focus:ring-[#6C2EB7]"
                          />
                          <div>
                            <p className="font-medium text-[#1B1142]">Dîner de Gala (+30€)</p>
                            <p className="mt-1 text-sm text-muted-foreground">
                              Soirée networking dans un cadre exceptionnel le vendredi soir
                            </p>
                          </div>
                        </label>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#1B1142]">
                          Commentaires (optionnel)
                        </label>
                        <textarea
                          value={formData.comments}
                          onChange={(e) => updateFormData("comments", e.target.value)}
                          rows={3}
                          className="w-full resize-none rounded-xl border border-[#E6E6E6] bg-white px-4 py-3 text-[#1B1142] transition-colors focus:border-[#6C2EB7] focus:outline-none focus:ring-2 focus:ring-[#6C2EB7]/20"
                          placeholder="Questions ou demandes particulières"
                        />
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="rounded-2xl bg-[#F8F6F3] p-6">
                        <h3 className="mb-4 font-semibold text-[#1B1142]">Récapitulatif</h3>
                        <dl className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Nom</dt>
                            <dd className="font-medium text-[#1B1142]">{formData.firstName} {formData.lastName}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Email</dt>
                            <dd className="font-medium text-[#1B1142]">{formData.email}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Institution</dt>
                            <dd className="font-medium text-[#1B1142]">{formData.institution}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Catégorie</dt>
                            <dd className="font-medium text-[#1B1142]">
                              {categories.find(c => c.value === formData.category)?.label}
                            </dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Participation</dt>
                            <dd className="font-medium text-[#1B1142]">
                              {participationTypes.find(t => t.value === formData.participationType)?.label}
                            </dd>
                          </div>
                          {formData.gala && (
                            <div className="flex justify-between">
                              <dt className="text-muted-foreground">Dîner de Gala</dt>
                              <dd className="font-medium text-[#1B1142]">Oui (+30€)</dd>
                            </div>
                          )}
                        </dl>
                      </div>

                      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                        <div className="flex items-start gap-3">
                          <Shield className="mt-0.5 h-5 w-5 text-emerald-600" />
                          <div>
                            <p className="font-medium text-emerald-800">Paiement sécurisé</p>
                            <p className="mt-1 text-sm text-emerald-700">
                              Vous serez redirigé vers notre plateforme de paiement sécurisée pour finaliser votre inscription.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-8 flex justify-between">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="rounded-full border-2 border-[#1B1142] px-6 py-3 font-semibold text-[#1B1142] transition-all hover:bg-[#1B1142] hover:text-white"
                      >
                        Retour
                      </button>
                    )}
                    <button
                      type="submit"
                      className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6C2EB7] to-[#A64DFF] px-8 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-[#6C2EB7]/25 ${
                        step === 1 ? "ml-auto" : ""
                      }`}
                    >
                      {step === 3 ? (
                        <>
                          <CreditCard className="h-4 w-4" />
                          Procéder au paiement
                        </>
                      ) : (
                        <>
                          Continuer
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing */}
              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-lg font-bold text-[#1B1142]">Tarifs d&apos;inscription</h3>
                <div className="space-y-4">
                  {pricingTiers.map((tier, index) => (
                    <div
                      key={index}
                      className={`rounded-2xl p-4 ${
                        tier.highlight
                          ? "bg-gradient-to-br from-[#6C2EB7] to-[#A64DFF] text-white"
                          : "bg-[#F8F6F3]"
                      }`}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-semibold">{tier.name}</span>
                        {tier.highlight && (
                          <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">Recommandé</span>
                        )}
                      </div>
                      <p className={`mb-3 text-xs ${tier.highlight ? "text-white/70" : "text-muted-foreground"}`}>
                        {tier.deadline}
                      </p>
                      <div className="space-y-2">
                        {tier.prices.map((p, i) => (
                          <div key={i} className="flex justify-between text-sm">
                            <span className={tier.highlight ? "text-white/80" : "text-muted-foreground"}>
                              {p.category}
                            </span>
                            <span className="font-semibold">{p.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included */}
              <div className="rounded-3xl bg-[#1B1142] p-6">
                <h3 className="mb-4 text-lg font-bold text-white">Inclus dans l&apos;inscription</h3>
                <ul className="space-y-3">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-white/80">
                      <CheckCircle className="h-4 w-4 text-[#A64DFF]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Help */}
              <div className="rounded-3xl border border-[#E6E6E6] bg-white p-6">
                <h3 className="mb-2 font-bold text-[#1B1142]">Besoin d&apos;aide?</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Notre équipe est disponible pour répondre à vos questions.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#6C2EB7] hover:underline"
                >
                  Nous contacter
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-24" />
      <FooterSection />
    </main>
  )
}
