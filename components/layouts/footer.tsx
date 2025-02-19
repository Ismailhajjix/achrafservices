"use client"

import Image from 'next/image'
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import type { Route } from "next"
import { useLanguage } from "@/contexts/language-context"
import { footerTranslations } from "@/translations/footer"
import { cn } from "@/lib/utils"

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" }
]

export function Footer() {
  const { language, dir } = useLanguage()
  const t = footerTranslations[language as keyof typeof footerTranslations]
  const isRTL = dir === 'rtl'

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden" dir={dir}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_14px] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />

      <div className="relative container mx-auto px-4 py-16">
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12",
          isRTL && "lg:rtl"
        )}>
          {/* Company Info */}
          <div className={cn(
            "space-y-8",
            isRTL ? "lg:order-1 lg:col-span-3" : "lg:order-1 lg:col-span-3"
          )}>
            <div className={cn(
              "flex",
              isRTL ? "justify-end" : "justify-start"
            )}>
              <Link href="/" className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 rounded-lg blur-lg group-hover:opacity-100 opacity-0 transition duration-500" />
                <div className="relative w-[180px] h-[45px]">
                  <Image 
                    src="/images/footer-logo.png"
                    alt="Agence Achraf Services"
                    fill
                    className="object-contain"
                    quality={100}
                    priority
                    sizes="180px"
                  />
                </div>
              </Link>
            </div>
            
            <p className={cn(
              "text-white/70 text-sm leading-relaxed",
              isRTL && "text-right font-arabic"
            )}>
              {t.description}
            </p>

            {/* Social Links */}
            <div className={cn(
              "flex gap-4",
              isRTL && "justify-end"
            )}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold/30 flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-gold transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={cn(
            isRTL ? "lg:order-2 lg:col-span-2" : "lg:order-2 lg:col-span-2"
          )}>
            <h3 className={cn(
              "text-lg font-semibold text-white mb-6",
              isRTL && "text-right font-arabic"
            )}>
              {t.sections.quickLinks}
            </h3>
            <ul className={cn(
              "space-y-4",
              isRTL && "text-right"
            )}>
              <li>
                <Link href="/services" className="text-white/70 hover:text-gold transition-colors duration-300 inline-flex items-center gap-2">
                  {isRTL ? '←' : '→'} {t.links.services}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-gold transition-colors duration-300 inline-flex items-center gap-2">
                  {isRTL ? '←' : '→'} {t.links.about}
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="text-white/70 hover:text-gold transition-colors duration-300 inline-flex items-center gap-2">
                  {isRTL ? '←' : '→'} {t.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={cn(
            isRTL ? "lg:order-3 lg:col-span-4" : "lg:order-3 lg:col-span-4"
          )}>
            <h3 className={cn(
              "text-lg font-semibold text-white mb-6",
              isRTL && "text-right font-arabic"
            )}>
              {t.sections.contactInfo}
            </h3>
            <div className="space-y-4">
              {language === 'ar' ? (
                // Arabic Layout
                <div className="flex flex-col items-end space-y-4">
                  <a 
                    href="tel:+212664690555"
                    className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors duration-300 group"
                  >
                    <span dir="ltr">+212 664 690 555</span>
                    <span className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-gold/20 border border-white/10 group-hover:border-gold/30 flex items-center justify-center transition-all duration-300">
                      <Phone className="w-5 h-5" />
                    </span>
                  </a>
                  <a 
                    href="mailto:info@achrafservices.ma"
                    className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors duration-300 group"
                  >
                    <span dir="ltr">info@achrafservices.ma</span>
                    <span className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-gold/20 border border-white/10 group-hover:border-gold/30 flex items-center justify-center transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </span>
                  </a>
                  <div className="flex items-center gap-3 text-white/70">
                    <span className="text-right font-arabic">
                      {t.address}
                    </span>
                    <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <span className="text-right font-arabic">
                      {t.workingHours}
                    </span>
                    <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              ) : (
                // English/French Layout
                <>
                  <a 
                    href="tel:+212664690555"
                    className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors duration-300 group"
                  >
                    <span className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-gold/20 border border-white/10 group-hover:border-gold/30 flex items-center justify-center transition-all duration-300">
                      <Phone className="w-5 h-5" />
                    </span>
                    <span dir="ltr">+212 664 690 555</span>
                  </a>
                  <a 
                    href="mailto:info@achrafservices.ma"
                    className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors duration-300 group"
                  >
                    <span className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-gold/20 border border-white/10 group-hover:border-gold/30 flex items-center justify-center transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </span>
                    <span dir="ltr">info@achrafservices.ma</span>
                  </a>
                  <div className="flex items-center gap-3 text-white/70">
                    <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </span>
                    <span>
                      {t.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </span>
                    <span>
                      {t.workingHours}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Newsletter */}
          <div className={cn(
            isRTL ? "lg:order-4 lg:col-span-3" : "lg:order-4 lg:col-span-3"
          )}>
            <h3 className={cn(
              "text-lg font-semibold text-white mb-6",
              isRTL && "text-right font-arabic"
            )}>
              {t.sections.newsletter}
            </h3>
            <div className="space-y-4">
              <p className={cn(
                "text-white/70 text-sm",
                isRTL && "text-right font-arabic"
              )}>
                {t.newsletter.description}
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder={t.newsletter.placeholder}
                  className={cn(
                    "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg",
                    "focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50",
                    "text-white placeholder-white/50",
                    "transition-all duration-300"
                  )}
                />
                <button
                  type="submit"
                  className={cn(
                    "w-full px-4 py-3 bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#FFB800]",
                    "text-black font-medium rounded-lg",
                    "hover:shadow-[0_0_20px_rgba(255,184,0,0.3)]",
                    "transition-all duration-300",
                    "relative overflow-hidden group"
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                  <span className="relative">{t.newsletter.subscribe}</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className={cn(
            "text-center text-sm text-white/70",
            isRTL && "font-arabic"
          )}>
            {t.copyright.text}{" "}
            <a 
              href="https://nadevo.ma/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-white hover:text-gold transition-colors relative after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-white hover:after:bg-gold after:transition-colors"
              aria-label="Visit Nadevo Groupe website (opens in new tab)"
            >
              {t.copyright.builtBy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 