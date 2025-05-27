"use client"
import { useState } from "react"
import type React from "react"

import {
  ArrowRight,
  Smartphone,
  Wifi,
  Share2,
  QrCode,
  Users,
  Zap,
  Shield,
  Globe,
  BookOpen,
  FileText,
  Mail,
  CheckCircle,
  Palette,
  Link,
  Eye,
  Settings,
  ChevronDown,
  ChevronUp,
  Building,
  Briefcase,
  Heart,
  TrendingUp,
  X,
  Nfc,
  PartyPopper,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const ContactModal = ({ 
  isModalOpen, 
  closeModal, 
  isEnglish, 
  email, 
  setEmail, 
  subject, 
  setSubject, 
  message, 
  setMessage, 
  handleEmailSubmit 
}: {
  isModalOpen: boolean
  closeModal: () => void
  isEnglish: boolean
  email: string
  setEmail: (value: string) => void
  subject: string
  setSubject: (value: string) => void
  message: string
  setMessage: (value: string) => void
  handleEmailSubmit: (e: React.FormEvent) => void
}) => {
  if (!isModalOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModal} />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900">{isEnglish ? "Contact Us" : "Kontaktirajte Nas"}</h2>
          <button onClick={closeModal} className="p-1 hover:bg-slate-100 rounded-full transition-colors">
            <X className="h-5 w-5 text-slate-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-slate-600 mb-6">
            {isEnglish
              ? "We prefer to conduct our market analysis live, so please sign up for our market research and help shape the future of smart business solutions. Share your thoughts and feedback with us."
              : "Analizo najraje izvedemo kar v živo zato se prijavite na našo raziskavo trga in pomagajte oblikovati prihodnost pametnih poslovnih rešitev. Delite svoje misli in povratne informacije z nami."}
          </p>

          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {isEnglish ? "Your Email" : "Vaš E-naslov"}
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={isEnglish ? "Enter your email..." : "Vnesite vaš e-naslov..."}
                className="w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {isEnglish ? "Subject" : "Zadeva"}
              </label>
              <Input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder={isEnglish ? "Enter subject..." : "Vnesite zadevo..."}
                className="w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {isEnglish ? "Message" : "Sporočilo"}
              </label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  isEnglish ? "Share your thoughts and feedback..." : "Delite svoje misli in povratne informacije..."
                }
                className="w-full min-h-24 resize-none"
                required
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={closeModal} className="flex-1">
                {isEnglish ? "Cancel" : "Prekliči"}
              </Button>
              <Button type="submit" className="flex-1 bg-slate-900 hover:bg-slate-800">
                <Mail className="mr-2 h-4 w-4" />
                {isEnglish ? "Send" : "Pošlji"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}



export default function KnowMeWebsite() {
  const [isEnglish, setIsEnglish] = useState(false) // Default to Slovenian
  const [currentPage, setCurrentPage] = useState("about") // Default to About Us
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:proki.doki003@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`
    window.location.href = mailtoLink
    setIsModalOpen(false)
    setEmail("")
    setSubject("")
    setMessage("")
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEmail("")
    setSubject("")
    setMessage("")
  }

  const AboutUsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
              {isEnglish ? (
                <>
                  Learn about
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600  text-7xl">
                    KnowMe
                  </span>
                </>
              ) : (
                <>
                  Spoznajte
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-7xl">
                    KnowMe
                  </span>
                </>
              )}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {isEnglish
                ? "We're revolutionizing how businesses connect and share information through innovative smart technology solutions."
                : "Revolucioniramo način, kako se podjetja povezujejo in delijo informacije z inovativnimi pametnimi tehnološkimi rešitvami."}
            </p>
            <div className="pt-8">
              <Button
                size="lg"
                onClick={openModal}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {isEnglish ? "Participate in Market Analysis" : "Sodeluj pri Analizi Trga"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 px-4 bg-white from-slate-50 to-slate-100 rounded-t-[40pt] border-t">
        {/* Container for the section */}
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{isEnglish ? "Our Team" : "Naša Ekipa"}</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {isEnglish
                ? "We are a team of students from the Faculty of Computer and Information Science and the Faculty of Economics at the University of Ljubljana, developing KnowMe products under the Garaža project."
                : "Smo ekipa študentov iz Fakultete za računalništvo in informatiko ter Fakulteto za Ekonomijo Univerze v Ljubljani, ki pod okriljem projekta Garaža razvijamo izdelke KnowMe."}
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{isEnglish ? "Our Journey" : "Naša Pot"}</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {isEnglish
                ? "Follow our development process from concept to reality"
                : "Sledite našemu razvojnemu procesu od koncepta do resničnosti"}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-12 relative">
              {/* Vertical Connection Line */}
              <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 z-0"></div>

              {/* Step 1 */}
              <div className="relative z-10 flex items-center space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">
                    {isEnglish ? "Idea Research" : "Raziskava Ideje"}
                  </h3>
                  <p className="text-slate-600">
                    {isEnglish
                      ? "Identifying market needs and innovative solutions"
                      : "Prepoznavanje potreb trga in inovativnih rešitev"}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex items-center space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">
                    {isEnglish ? "Market Analysis" : "Analiza Trga"}
                  </h3>
                  <p className="text-slate-600">
                    {isEnglish
                      ? "Gathering insights from potential users"
                      : "Zbiranje mnenj potencialnih uporabnikov"}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 border-2 border-yellow-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex items-center space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">{isEnglish ? "Development" : "Razvoj"}</h3>
                  <p className="text-slate-600">
                    {isEnglish
                      ? "Building and testing our smart solutions"
                      : "Gradnja in testiranje naših pametnih rešitev"}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 border-2 border-slate-400 rounded-full"></div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative z-10 flex items-center space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">
                    {isEnglish ? "Final Deployment" : "Končna Uvedba"}
                  </h3>
                  <p className="text-slate-600">
                    {isEnglish ? "Launching our products to the market" : "Lansiranje naših izdelkov na trg"}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 border-2 border-slate-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">
              {isEnglish ? "Join the Market Research" : "Pridružite se Raziskavi Trga"}
            </h2>
            <p className="text-xl text-slate-300">
              {isEnglish
                ? "Join us in revolutionizing how businesses connect, communicate, and share information"
                : "Pridružite se nam pri revolucioniranju načina povezovanja, obveščanja in deljenja informacij podjetij"}
            </p>
            <Button size="lg" onClick={openModal} className="bg-white text-slate-900 hover:bg-slate-100">
              <Mail className="mr-2 h-5 w-5" />
              {isEnglish ? "Get in Touch" : "Stopite v Stik"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )

  const SmartBusinessCardsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  {isEnglish ? (
                    <>
                      SMART
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        BUSINESS
                      </span>
                      <br />
                      CARDS
                    </>
                  ) : (
                    <>
                      PAMETNE
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        POSLOVNE
                      </span>
                      <br />
                      VIZITKE
                    </>
                  )}
                </h1>
                <p className="text-xl text-slate-600 max-w-lg">
                  {isEnglish
                    ? "Transform your networking with smart business cards, sharing your contact details quickly and easily."
                    : "Spremenite svoje mreženje s pametnimi vizitkami, in delite svoje kontaktne podatke hitro in enostavno."}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={openModal}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {isEnglish ? "Participate in Market Analysis" : "Sodeluj pri Analizi Trga"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div
                className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500"
                style={{ width: "400px", height: "230px" }}
              >
                <Card className="bg-gradient-to-br from-slate-900 to-slate-700 text-white p-6 shadow-2xl h-full">
                  <CardContent className="space-y-4 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold leading-tight">
                          {isEnglish ? "SMART BUSINESS CARD" : "PAMETNA POSLOVNA VIZITKA"}
                        </h3>
                        <p className="text-slate-300 text-sm">
                          {isEnglish ? "Next-gen networking" : "Mreženje nove generacije"}
                        </p>
                      </div>
                      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0 ml-2">
                        <QrCode className="h-9 w-9 text-slate-900" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-slate-300">Janez Kranjski</p>
                      <p className="text-base font-semibold">CEO & Founder</p>
                      <p className="text-sm text-slate-300">janez@company.com</p>
                    </div>
                    <div className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <Wifi className="h-4 w-4" />
                        <span className="text-sm">NFC</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Share2 className="h-4 w-4" />
                        <span className="text-sm">Share</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur-xl opacity-30 transform scale-105"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white from-slate-50 to-slate-100 rounded-t-[40pt] border-t">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{isEnglish ? "How It Works" : "Kako Deluje"}</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {isEnglish
                ? "Three simple steps to revolutionize your networking experience"
                : "Trije preprosti koraki do revolucije vaše mreženjske izkušnje"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <QrCode className="h-10 w-10 text-white" />
                </div>
                <div className="w-20 h-20 bg-gradient-to-r from-purple-300 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Nfc className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">{isEnglish ? "Scan QR Code or Tap NFC" : "Skeniraj QR kodo oz. uporabi NFC 'dotik'"}</h3>
              <p className="text-slate-600">
                {isEnglish
                  ? "Simply scan the QR code on the card with any smartphone camera, or tap the card with an NFC-enabled device"
                  : "Preprosto skenirajte QR kodo na kartici s kamero katerega koli pametnega telefona, ali pa se z napravo, ki podpira NFC, dotaknite vizitke"}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Link className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{isEnglish ? "Open Scanned Link" : "Odprite povezavo"}</h3>
              <p className="text-slate-600">
                {isEnglish
                  ? <>
                      Open the link in your browser to view the contact information and business profile generated by {" "}
                      <span
                        onClick={() => setCurrentPage("our-app")}
                        className="underline text-blue-600 hover:text-blue-800 cursor-pointer transition-colors"
                      >
                        our app
                      </span>
                    </>
                  : <>
                      Odprite povezavo, ki se prikaže po skeniranju vizitke v prejšnem koraku, in odprite spletni profil{" "}
                      <span
                        onClick={() => setCurrentPage("our-app")}
                        className="underline text-blue-600 hover:text-blue-800 cursor-pointer transition-colors"
                      >
                        naše aplikacije
                      </span>
                    </>
                }
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Share2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{isEnglish ? "Instant Share" : "Takojšnja Delitev"}</h3>
              <p className="text-slate-600">
                {isEnglish
                  ? "Shared contact details can be easily saved to their device, ensuring they can reach you anytime"
                  : "Deljeni kontaktni podatki se lahko enostavno shranijo v njihovo napravo. Tako si zagotovite, da vas bodo lahko kontaktirali kadar koli"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {isEnglish ? "Perfect For Every Professional" : "Popolno za Vsakega Profesionalca"}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {isEnglish
                ? "From entrepreneurs to executives, our smart business cards work for everyone"
                : "Od podjetnikov do vodij, naše pametne vizitke delujejo za vsakogar"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Building className="h-12 w-12 text-blue-600 mx-auto" />
                <h3 className="text-lg font-semibold">{isEnglish ? "Corporate" : "Vodje"}</h3>
                <p className="text-slate-600 text-sm">
                  {isEnglish
                    ? "Professional networking at conferences and meetings"
                    : "Profesionalno mreženje na konferencah in sestankih"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Briefcase className="h-12 w-12 text-purple-600 mx-auto" />
                <h3 className="text-lg font-semibold">{isEnglish ? "Entrepreneurs" : "Podjetniki"}</h3>
                <p className="text-slate-600 text-sm">
                  {isEnglish
                    ? "Make lasting impressions with potential investors"
                    : "Naredite trajen vtis na potencialne vlagatelje"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Users className="h-12 w-12 text-green-600 mx-auto" />
                <h3 className="text-lg font-semibold">{isEnglish ? "Sales Teams" : "Prodajne Ekipe"}</h3>
                <p className="text-slate-600 text-sm">
                  {isEnglish
                    ? "Streamline lead capture and follow-up processes"
                    : "Poenostavite zajem potencialnih strank in nadaljnje procese"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Heart className="h-12 w-12 text-pink-600 mx-auto" />
                <h3 className="text-lg font-semibold">{isEnglish ? "Creatives" : "Kreativci"}</h3>
                <p className="text-slate-600 text-sm">
                  {isEnglish
                    ? "Showcase portfolios and creative work instantly"
                    : "Takoj pokažite portfolje in kreativno delo"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {isEnglish ? "Powerful Features" : "Močne Funkcije"}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {isEnglish
                ? "Everything you need for modern professional networking"
                : "Vse, kar potrebujete za sodobno profesionalno mreženje"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Smartphone className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-semibold">{isEnglish ? "Mobile Optimized" : "Mobilno Optimizirano"}</h3>
                <p className="text-slate-600">
                  {isEnglish
                    ? "Works seamlessly with all smartphone devices and operating systems"
                    : "Deluje brezhibno z vsemi pametnimi telefoni in operacijskimi sistemi"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Zap className="h-12 w-12 text-purple-600" />
                <h3 className="text-xl font-semibold">{isEnglish ? "Instant Connection" : "Takojšnja Povezava"}</h3>
                <p className="text-slate-600">
                  {isEnglish
                    ? "Connect and share all kinds of information in few seconds"
                    : "Povežite se in delite vsemogoče informacije v parih sekundah"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Shield className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-semibold">{isEnglish ? "Secure & Private" : "Varno in Zasebno"}</h3>
                <p className="text-slate-600">
                  {isEnglish
                    ? "You control what information is shared"
                    : "Vi nadzirate, katere informacije se delijo"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Users className="h-12 w-12 text-orange-600" />
                <h3 className="text-xl font-semibold">{isEnglish ? "Contact Management" : "Upravljanje Stikov"}</h3>
                <p className="text-slate-600">
                  {isEnglish
                    ? "With advanced analytics, track how your network grows"
                    : "Z napredno analizo sledite kako se vaša mreža širi"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Globe className="h-12 w-12 text-teal-600" />
                <h3 className="text-xl font-semibold">
                  {isEnglish ? "Global Compatibility" : "Globalna Združljivost"}
                </h3>
                <p className="text-slate-600">
                  {isEnglish
                    ? "Works worldwide with universal NFC and QR standards"
                    : "Deluje po vsem svetu z univerzalnimi standardi NFC in QR"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <QrCode className="h-12 w-12 text-indigo-600" />
                <h3 className="text-xl font-semibold">{isEnglish ? "Customizable Design" : "Prilagodljiv Dizajn"}</h3>
                <p className="text-slate-600">
                  {isEnglish
                    ? "Personalize your card design to match your brand"
                    : "Prilagodite dizajn svoje kartice, da se ujema z vašo blagovno znamko"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {isEnglish ? "Frequently Asked Questions" : "Pogosto Zastavljena Vprašanja"}
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: isEnglish ? "Can I change the card content later, after I give it to someone?" : "Ali lahko naknadno spremenim vsebino kartice, tudi po tem ko jo oddam stiku?",
                answer: isEnglish
                  ? "Absolutely! With our app, you can update your card details anytime, even remotely after sharing it with someone."
                  : "Seveda! Z uporabo naše aplikacije lahko posodobite svoje podatke na kartici kadarkoli, celo na daljavo, potem ko ste jo že delili s komerkoli.",
              },
              {
                question: isEnglish ? "How does NFC technology work?" : "Kako deluje NFC tehnologija?",
                answer: isEnglish
                  ? "NFC (Near Field Communication) allows two devices to communicate when they're within 4cm of each other. Simply tap your phone against the card to instantly receive information."
                  : "NFC (Near Field Communication) omogoča komunikacijo med dvema napravama, ko sta oddaljeni manj kot 4 cm. Preprosto se dotaknite s telefonom kartice za takojšen sprejem informacij.",
              },
              {
                question: isEnglish ? "What if someone doesn't have NFC?" : "Kaj če nekdo nima NFC?",
                answer: isEnglish
                  ? "Every card can also include a QR code that works with any smartphone camera. No special apps needed - just point and scan!"
                  : "Vsaka kartica lahko vključuje tudi QR kodo, ki deluje s kamero katerega koli pametnega telefona. Nobene posebne aplikacije ni potrebne - samo usmerite in skenirajte!",
              },
              {
                question: isEnglish ? "Can I update my information?" : "Ali lahko posodobim svoje podatke?",
                answer: isEnglish
                  ? "Yes! Your card links to a digital profile that you can update anytime. Changes are reflected immediately without needing new cards."
                  : "Da! Vaša kartica se povezuje z digitalnim profilom, ki ga lahko kadarkoli posodobite. Spremembe se takoj odrazijo brez potrebe po novih karticah.",
              },
              {
                question: isEnglish ? "Which data is visible to the contact?" : "Kateri podatki so vidni stiku?",
                answer: isEnglish
                  ? "You have complete control over what information is shared. You can also enable/disable sharing at any time."
                  : "Imate popoln nadzor nad tem, katere informacije se delijo. Deljenje lahko tudi kadarkoli omogočite/onemogočite.",
              },
            ].map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-slate-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-500" />
                    )}
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">
              {isEnglish ? "Ready to Transform Your Networking?" : "Pripravljeni Spremeniti Svoje Mreženje?"}
            </h2>
            <p className="text-xl text-slate-300">
              {isEnglish
                ? "Write to us and participate in market analysis to shape the future of networking"
                : "Pišite nam in sodelujte v analizi trga, ter oblikujte prihodnost mreženja"}
            </p>
            <Button size="lg" onClick={openModal} className="bg-white text-slate-900 hover:bg-slate-100">
              <Mail className="mr-2 h-5 w-5" />
              {isEnglish ? "Get in Touch" : "Stopite v Stik"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )

  const SmartCatalogsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  {isEnglish ? (
                    <>
                      SMART
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                        DIGITAL
                      </span>
                      <br />
                      CATALOGS
                    </>
                  ) : (
                    <>
                      PAMETNI
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                        DIGITALNI
                      </span>
                      <br />
                      KATALOGI
                    </>
                  )}
                </h1>
                <p className="text-xl text-slate-600 max-w-lg">
                  {isEnglish
                    ? "Revolutionize your product presentations with interactive digital catalogs accessible through NFC and QR technology."
                    : "Revolucionirajte predstavitve svojih izdelkov z interaktivnimi digitalnimi katalogi, dostopnimi preko NFC in QR tehnologije."}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={openModal}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                >
                  {isEnglish ? "Participate in Market Analysis" : "Sodeluj pri Analizi Trga"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div
                className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500"
                style={{ width: "400px", height: "230px" }}
              >
                <Card className="bg-gradient-to-br from-green-800 to-blue-800 text-white p-6 shadow-2xl h-full">
                  <CardContent className="space-y-4 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold leading-tight">
                          {isEnglish ? "SMART CATALOG" : "PAMETNI KATALOG"}
                        </h3>
                        <p className="text-slate-300 text-sm">
                          {isEnglish ? "Interactive showcase of current information" : "Interaktivna predstavitev aktualnih informacij"}
                        </p>
                      </div>
                      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0 ml-2">
                        <BookOpen className="h-9 w-9 text-slate-900" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-8 bg-white/20 rounded"></div>
                        <div className="h-8 bg-white/20 rounded"></div>
                        <div className="h-8 bg-white/20 rounded"></div>
                        <div className="h-8 bg-white/20 rounded"></div>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <Wifi className="h-4 w-4" />
                        <span className="text-sm">NFC</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Share2 className="h-4 w-4" />
                        <span className="text-sm">Share</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg blur-xl opacity-30 transform scale-105"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white from-slate-50 to-slate-100 rounded-t-[40pt] border-t">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{isEnglish ? "How It Works" : "Kako Deluje"}</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {isEnglish
                ? "Three simple steps to showcase your products digitally"
                : "Trije preprosti koraki do digitalne predstavitve vaših izdelkov"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <QrCode className="h-10 w-10 text-white" />
                </div>
                <div className="w-20 h-20 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Nfc className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">{isEnglish ? "Scan QR Code or Tap NFC" : "Skeniraj QR kodo oz. uporabi NFC 'dotik'"}</h3>
              <p className="text-slate-600">
                {isEnglish
                  ? "Simply scan the QR code on the card with any smartphone camera, or tap the card with an NFC-enabled device"
                  : "Preprosto skenirajte QR kodo na kartici s kamero katerega koli pametnega telefona, ali pa se z napravo, ki podpira NFC, dotaknite vizitke"}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Link className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{isEnglish ? "Open Scanned Link" : "Odprite povezavo"}</h3>
              <p className="text-slate-600">
                {isEnglish
                  ? <>
                      Open the link in your browser to view the contact information and business profile generated by {" "}
                      <span
                        onClick={() => setCurrentPage("our-app")}
                        className="underline text-blue-600 hover:text-blue-800 cursor-pointer transition-colors"
                      >
                        our app
                      </span>
                    </>
                  : <>
                      Odprite povezavo, ki se prikaže po skeniranju vizitke v prejšnem koraku, in odprite spletni profil{" "}
                      <span
                        onClick={() => setCurrentPage("our-app")}
                        className="underline text-blue-600 hover:text-blue-800 cursor-pointer transition-colors"
                      >
                        naše aplikacije
                      </span>
                    </>
                }
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{isEnglish ? "Browse Content" : "Prebrskaj Vsebino"}</h3>
              <p className="text-slate-600">
                {isEnglish
                  ? "Browse digital catalogs, links, contact details, or other shared information"
                  : "Preglej digitalne kataloge, povezave, kontaktne podatke oz. druge deljene informacije"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {isEnglish ? "Perfect For Every Industry" : "Popolno za Vsako Industrijo"}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {isEnglish
                ? "From retail to manufacturing, our digital catalogs adapt to your business needs"
                : "Od trgovine do proizvodnje, naši digitalni katalogi se prilagajajo vašim poslovnim potrebam"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Building className="h-12 w-12 text-green-600 mx-auto" />
                <h3 className="text-lg font-semibold">{isEnglish ? "Retail" : "Trgovina"}</h3>
                <p className="text-slate-600 text-sm">
                  {isEnglish
                    ? "Share digital catalogs and showcase products"
                    : "Delite digitalne kataloge in predstavite izdelke"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Settings className="h-12 w-12 text-blue-600 mx-auto" />
                <h3 className="text-lg font-semibold">{isEnglish ? "Manufacturing" : "Proizvodnja"}</h3>
                <p className="text-slate-600 text-sm">
                  {isEnglish
                    ? "Display technical specifications and capabilities of products"
                    : "Prikažite tehnične specifikacije in zmogljivosti izdelkov"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <PartyPopper className="h-12 w-12 text-pink-600 mx-auto" />
                <h3 className="text-lg font-semibold">{isEnglish ? "Advertising" : "Oglaševanje"}</h3>
                <p className="text-slate-600 text-sm">
                  {isEnglish
                    ? "Showcase special promotions and update content as needed"
                    : "Predstavite posebne akcije, vsebino pa po potrebi prilagodite tudi v prihodnosti"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Briefcase className="h-12 w-12 text-purple-600 mx-auto" />
                <h3 className="text-lg font-semibold">{isEnglish ? "Services" : "Storitve"}</h3>
                <p className="text-slate-600 text-sm">
                  {isEnglish
                    ? "Share service catalogs and special offers"
                    : "Delite aktivne ponudbe ter akcije"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {isEnglish ? "Digital vs Traditional Catalogs" : "Digitalni vs Tradicionalni Katalogi"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {isEnglish ? "Traditional Catalogs" : "Tradicionalni Katalogi"}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-sm">✗</span>
                  </div>
                  <span className="text-slate-600">
                    {isEnglish ? "Expensive to print and update" : "Drago za tisk in posodobitve"}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-sm">✗</span>
                  </div>
                  <span className="text-slate-600">
                    {isEnglish ? "Limited space for information" : "Omejen prostor za informacije"}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-sm">✗</span>
                  </div>
                  <span className="text-slate-600">
                    {isEnglish ? "No interaction tracking" : "Brez sledenja interakcij"}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-sm">✗</span>
                  </div>
                  <span className="text-slate-600">{isEnglish ? "Environmental impact" : "Vpliv na okolje"}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {isEnglish ? "Smart Digital Catalogs" : "Pametni Digitalni Katalogi"}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-slate-600">
                    {isEnglish ? "Instant updates, no reprinting" : "Takojšnje posodobitve, brez ponovnega tiska"}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-slate-600">
                    {isEnglish ? "Unlimited content and media" : "Neomejena vsebina in mediji"}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-slate-600">
                    {isEnglish ? "Detailed analytics and insights" : "Podrobna analitika in vpogledi"}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-slate-600">
                    {isEnglish ? "Eco-friendly solution" : "Okolju prijazna rešitev"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {isEnglish ? "Advanced Catalog Features" : "Napredne Funkcije Kataloga"}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {isEnglish
                ? "Everything you need for modern product presentation"
                : "Vse, kar potrebujete za sodobno predstavitev izdelkov"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <FileText className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-semibold">{isEnglish ? "Rich Content" : "Bogata Vsebina"}</h3>
                <p className="text-slate-600">
                  {isEnglish
                    ? "Show images, videos, text, links, and much more"
                    : "Prikažite slike, videoposnetke, besedila, povezave in mnogo več"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Zap className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-semibold">
                  {isEnglish ? "Real-time Updates" : "Posodobitve v Realnem Času"}
                </h3>
                <p className="text-slate-600">
                  {isEnglish
                    ? "Update your catalog instantly without reprinting materials"
                    : "Posodobite svoj katalog takoj brez ponovnega tiskanja materialov"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <TrendingUp className="h-12 w-12 text-purple-600" />
                <h3 className="text-xl font-semibold">
                  {isEnglish ? "Analytics Dashboard" : "Analitična Nadzorna Plošča"}
                </h3>
                <p className="text-slate-600">
                  {isEnglish
                    ? "Track views, engagement, and customer interactions"
                    : "Sledite ogledom, angažiranosti in interakcijam strank"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Users className="h-12 w-12 text-orange-600" />
                <h3 className="text-xl font-semibold">
                  {isEnglish ? "Lead Generation" : "Generiranje Potencialnih Strank"}
                </h3>
                <p className="text-slate-600">
                  {isEnglish
                    ? "Capture customer information and generate qualified leads"
                    : "Zajemite informacije o strankah in generirajte kvalificirane potencialne stranke"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Sparkles className="h-12 w-12 text-teal-600" />
                <h3 className="text-xl font-semibold">
                  {isEnglish ? "Stand Out from the Crowd" : "Izstopajte iz množice"}
                </h3>
                <p className="text-slate-600">
                  {isEnglish
                    ? "Present information in a unique and engaging way"
                    : "Delite informacije na drugačen in zanimiv način"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <QrCode className="h-12 w-12 text-indigo-600" />
                <h3 className="text-xl font-semibold">{isEnglish ? "Easy Integration" : "Enostavna Integracija"}</h3>
                <p className="text-slate-600">
                  {isEnglish
                    ? "Seamlessly integrate with your existing business systems"
                    : "Brezhibno integrirajte z obstoječimi poslovnimi sistemi"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {isEnglish ? "Frequently Asked Questions" : "Pogosto Zastavljena Vprašanja"}
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: isEnglish
                  ? "How quickly can I update my catalog?"
                  : "Kako hitro lahko posodobim svoj katalog?",
                answer: isEnglish
                  ? "Updates are instant! Simply log into your dashboard, make changes, and they're immediately reflected in your digital catalog. No waiting, no reprinting costs."
                  : "Posodobitve so takojšnje! Preprosto se prijavite v svojo nadzorno ploščo, naredite spremembe in takoj se odrazijo v vašem digitalnem katalogu. Brez čakanja, brez stroškov ponovnega tiska.",
              },
              {
                question: isEnglish
                  ? "Can I track how many people view my catalog?"
                  : "Ali lahko sledim, koliko ljudi si ogleda moj katalog?",
                answer: isEnglish
                  ? "Yes! Our analytics dashboard shows you detailed insights including view counts and more."
                  : "Da! Naša analitična nadzorna plošča vam prikazuje podrobne vpoglede, vključno s številom ogledov in več.",
              },
            ].map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-slate-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-500" />
                    )}
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">
              {isEnglish ? "Ready to Go Digital?" : "Pripravljeni na Digitalno Preobrazbo?"}
            </h2>
            <p className="text-xl text-slate-300">
              {isEnglish
                ? "Write to us and participate in our market analysis to shape the future of digital catalogs."
                : "Pišite nam in sodelujte v naši analizi trga, ter oblikujte prihodnost digitalnih katalogov."}
            </p>
            <Button size="lg" onClick={openModal} className="bg-white text-slate-900 hover:bg-slate-100">
              <Mail className="mr-2 h-5 w-5" />
              {isEnglish ? "Get in Touch" : "Stopite v Stik"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )

  const OurAppPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  {isEnglish ? (
                    <>
                      OUR
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                        CUSTOM
                      </span>
                      <br />
                      APP
                    </>
                  ) : (
                    <>
                      NAŠA
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                        APLIKACIJA
                      </span>
                      <br />
                      PO MERI
                    </>
                  )}
                </h1>
                <p className="text-xl text-slate-600 max-w-lg">
                  {isEnglish
                    ? "Experience the future of personal branding with our in-house developed web app - like Linktree, but extremely more customizable, personal, and completely debranded."
                    : "Doživite prihodnost osebnega blagovnega označevanja z našo interno razvito spletno aplikacijo - kot Linktree, vendar izjemno bolj prilagodljiva, osebna in popolnoma brez tujih blagovnih oznak."}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  disabled
                >
                  <Eye className="mr-2 h-5 w-5" />
                  {isEnglish ? "Visit App Preview (In Development)" : "Ogled Predogleda Aplikacije (V Razvoju)"}
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <Card className="bg-gradient-to-br from-purple-800 to-pink-800 text-white p-8 shadow-2xl w-80">
                  <CardContent className="space-y-6 text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto">
                      <Palette className="h-12 w-12 text-purple-800" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{isEnglish ? "Your Personal Hub" : "Vaš Osebni Center"}</h3>
                      <p className="text-purple-200 text-sm">
                        {isEnglish
                          ? "Fully customizable & debranded"
                          : "Popolnoma prilagodljiv in brez blagovnih oznak"}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-white/20 rounded-full"></div>
                      <div className="h-3 bg-white/30 rounded-full"></div>
                      <div className="h-3 bg-white/25 rounded-full"></div>
                      <div className="h-3 bg-white/35 rounded-full"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Settings className="h-4 w-4" />
                        <span className="text-xs">Custom</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Link className="h-4 w-4" />
                        <span className="text-xs">Links</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur-xl opacity-30 transform scale-105"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white from-slate-50 to-slate-100 rounded-t-[40pt] border-t">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {isEnglish ? "Why Our App is Different" : "Zakaj je Naša Aplikacija Drugačna"}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {isEnglish
                ? "Built from the ground up to give you complete control over your digital presence"
                : "Zgrajena od temeljev, da vam omogoči popoln nadzor nad vašo digitalno prisotnostjo"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Palette className="h-12 w-12 text-purple-600" />
                <h3 className="text-xl font-semibold">
                  {isEnglish ? "Unlimited Customization" : "Neomejena Prilagoditev"}
                </h3>
                <p className="text-slate-600">
                  {isEnglish
                    ? "Complete control over colors, fonts, layouts,... . Make it truly yours"
                    : "Popoln nadzor nad barvami, pisavami, postavitvijo,... . Naredite jo resnično svojo"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Shield className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-semibold">
                  {isEnglish ? "Completely Debranded" : "Popolnoma Brez Blagovnih Oznak"}
                </h3>
                <p className="text-slate-600">
                  {isEnglish
                    ? "No watermarks, no 'powered by' links. Your brand, your way, completely clean"
                    : "Brez vodnih znakov, brez povezav 'powered by'. Vaša blagovna znamka, na vaš način, popolnoma čisto"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Users className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-semibold">{isEnglish ? "Personal Touch" : "Osebni Pridih"}</h3>
                <p className="text-slate-600">
                  {isEnglish
                    ? "Advanced personalization features that adapt to your unique style and needs"
                    : "Napredne funkcije personalizacije, ki se prilagajajo vašemu edinstvennemu slogu in potrebam"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Zap className="h-12 w-12 text-orange-600" />
                <h3 className="text-xl font-semibold">{isEnglish ? "Lightning Fast" : "Bliskovito Hitro"}</h3>
                <p className="text-slate-600">
                  {isEnglish
                    ? "Optimized for speed and performance. Your visitors will love the experience"
                    : "Optimizirano za hitrost in zmogljivost. Vaši obiskovalci bodo navdušeni nad izkušnjo"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Globe className="h-12 w-12 text-teal-600" />
                <h3 className="text-xl font-semibold">{isEnglish ? "Advanced Analytics" : "Napredna Analitika"}</h3>
                <p className="text-slate-600">
                  {isEnglish
                    ? "Detailed insights into your audience behavior and engagement patterns"
                    : "Podrobni vpogledi v vedenje vaše publike in vzorce angažiranosti"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <BookOpen className="h-12 w-12 text-indigo-600" />
                <h3 className="text-xl font-semibold">{isEnglish ? "Easy to Use" : "Enostavna Uporaba"}</h3>
                <p className="text-slate-600">
                  {isEnglish
                    ? "Application is user-friendly so you can focus on content, not technology"
                    : "Aplikacija je enostavna za uporabo, da se lahko osredotočite na vsebino, ne na tehnologijo."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto text-center">
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900">{isEnglish ? "Coming Soon" : "Kmalu na Voljo"}</h2>
            <p className="text-xl text-slate-600">
              {isEnglish
                ? "We're putting the finishing touches on our link-in-bio platform. Get ready for a completely new way to showcase your digital presence."
                : "Dodajamo zadnje popravke naši platformi za povezave v biografiji. Pripravite se na popolnoma nov način predstavitve vaše digitalne prisotnosti."}
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <p className="text-slate-600">{isEnglish ? "Customizable" : "Prilagodljivo"}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">0</div>
                <p className="text-slate-600">{isEnglish ? "Other Branding, only Yours" : "Tujih Blagovnih Oznak, le Vaša"}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">∞</div>
                <p className="text-slate-600">{isEnglish ? "Possibilities" : "Možnosti"}</p>
              </div>
            </div>
            <div className="pt-8">
              <Button
                size="lg"
                onClick={openModal}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Mail className="mr-2 h-5 w-5" />
                {isEnglish ? "Write to Us About Your Interest" : "Pišite Nam O Vašem Zanimanju"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Contact Modal */}
      <ContactModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        isEnglish={isEnglish}
        email={email}
        setEmail={setEmail}
        subject={subject}
        setSubject={setSubject}
        message={message}
        setMessage={setMessage}
        handleEmailSubmit={handleEmailSubmit}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-slate-800">KnowMe</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setCurrentPage("about")}
                className={`transition-colors ${
                  currentPage === "about" ? "text-slate-900 font-semibold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {isEnglish ? "About Us" : "O nas"}
              </button>
              <button
                onClick={() => setCurrentPage("business-cards")}
                className={`transition-colors ${
                  currentPage === "business-cards"
                    ? "text-slate-900 font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {isEnglish ? "Smart Business Cards" : "Pametne Vizitke"}
              </button>
              <button
                onClick={() => setCurrentPage("catalogs")}
                className={`transition-colors ${
                  currentPage === "catalogs" ? "text-slate-900 font-semibold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {isEnglish ? "Smart Catalogs" : "Pametni Katalogi"}
              </button>
              <button
                onClick={() => setCurrentPage("our-app")}
                className={`transition-colors ${
                  currentPage === "our-app" ? "text-slate-900 font-semibold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {isEnglish ? "Our App" : "Naša Aplikacija"}
              </button>
            </div>

            <div className="flex items-center space-x-3">
              {/* Language Toggle */}
              <span className={`text-sm ${!isEnglish ? "text-slate-900 font-semibold" : "text-slate-500"}`}>SL</span>
              <button
                onClick={() => setIsEnglish(!isEnglish)}
                className="relative w-12 h-6 bg-slate-200 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <div
                  className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${
                    isEnglish ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
              <span className={`text-sm ${isEnglish ? "text-slate-900 font-semibold" : "text-slate-500"}`}>EN</span>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div
                    className={`w-full h-0.5 bg-slate-600 transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                  ></div>
                  <div
                    className={`w-full h-0.5 bg-slate-600 transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`}
                  ></div>
                  <div
                    className={`w-full h-0.5 bg-slate-600 transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                  ></div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-200">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => {
                    setCurrentPage("about")
                    setIsMobileMenuOpen(false)
                  }}
                  className={`text-left transition-colors ${
                    currentPage === "about" ? "text-slate-900 font-semibold" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isEnglish ? "About Us" : "O nas"}
                </button>
                <button
                  onClick={() => {
                    setCurrentPage("business-cards")
                    setIsMobileMenuOpen(false)
                  }}
                  className={`text-left transition-colors ${
                    currentPage === "business-cards"
                      ? "text-slate-900 font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isEnglish ? "Smart Business Cards" : "Pametne Vizitke"}
                </button>
                <button
                  onClick={() => {
                    setCurrentPage("catalogs")
                    setIsMobileMenuOpen(false)
                  }}
                  className={`text-left transition-colors ${
                    currentPage === "catalogs" ? "text-slate-900 font-semibold" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isEnglish ? "Smart Catalogs" : "Pametni Katalogi"}
                </button>
                <button
                  onClick={() => {
                    setCurrentPage("our-app")
                    setIsMobileMenuOpen(false)
                  }}
                  className={`text-left transition-colors ${
                    currentPage === "our-app" ? "text-slate-900 font-semibold" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isEnglish ? "Our App" : "Naša Aplikacija"}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      {currentPage === "about" && <AboutUsPage />}
      {currentPage === "business-cards" && <SmartBusinessCardsPage />}
      {currentPage === "catalogs" && <SmartCatalogsPage />}
      {currentPage === "our-app" && <OurAppPage />}

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-800 text-slate-300">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold text-white">KnowMe</div>
              <p className="text-sm">
                {isEnglish
                  ? "Revolutionizing networking and communication with smart technology."
                  : "Revolucioniranje mreženja in obveščanja s pametno tehnologijo."}
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">{isEnglish ? "Products" : "Izdelki"}</h4>
              <div className="space-y-2 text-sm">
                <button
                  onClick={() => setCurrentPage("business-cards")}
                  className="block hover:text-white transition-colors"
                >
                  {isEnglish ? "Smart Business Cards" : "Pametne Vizitke"}
                </button>
                <button onClick={() => setCurrentPage("catalogs")} className="block hover:text-white transition-colors">
                  {isEnglish ? "Smart Catalogs" : "Pametni Katalogi"}
                </button>
                <button onClick={() => setCurrentPage("our-app")} className="block hover:text-white transition-colors">
                  {isEnglish ? "Our App" : "Naša Aplikacija"}
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">{isEnglish ? "Company" : "Podjetje"}</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => setCurrentPage("about")} className="block hover:text-white transition-colors">
                  {isEnglish ? "About Us" : "O nas"}
                </button>
                <button onClick={openModal} className="block hover:text-white transition-colors">
                  {isEnglish ? "Contact" : "Kontakt"}
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">{isEnglish ? "Contact" : "Kontakt"}</h4>
              <div className="space-y-2 text-sm">
                <button onClick={openModal} className="hover:text-white transition-colors">
                  {isEnglish ? "Send Message" : "Pošlji Sporočilo"}
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 KnowMe</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
