"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useCallback, useRef } from "react"
import { Menu, X, Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, ArrowRight, MessageSquare, Globe } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import dynamic from 'next/dynamic'
import type { NavItem } from "@/types/navigation"
import { useLanguage } from "@/contexts/language-context"
import { navigationTranslations } from "@/translations/navigation"
import { LanguageToggle } from "@/components/core/language-toggle"

type SectionId = 
  | "hero"
  | "services"
  | "featured-services"
  | "why-choose-us"
  | "who-we-are"
  | "choose-your-destination"
  | "trust-indicators"
  | "working-process"

type TranslationKey = keyof typeof navigationTranslations.en

const navItems: (NavItem & { label: TranslationKey })[] = [
  { label: "home", sectionId: "hero" },
  { label: "services", sectionId: "services" },
  { label: "solutions", sectionId: "featured-services" },
  { label: "whyUs", sectionId: "why-choose-us" },
  { label: "aboutUs", sectionId: "who-we-are" },
  { label: "destinations", sectionId: "choose-your-destination" }
]

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/achrafservices", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/achrafservices", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/achrafservices", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/achrafservices", label: "LinkedIn" }
]

const companyInfo = [
  { icon: Phone, info: "06 64 69 05 55", href: "tel:+212664690555" },
  { icon: Mail, info: "contact@achrafservices.ma", href: "mailto:contact@achrafservices.ma" },
  { icon: MapPin, info: "Nador, Morocco", href: "https://maps.google.com/?q=Nador+Morocco" }
]

type NavLinkProps = {
  item: NavItem
  onClose?: () => void
}

// Lazy load mobile menu component
const MobileMenu = dynamic(() => import("./mobile-menu"), {
  ssr: false,
  loading: () => (
    <div className="md:hidden">
      <div className="w-10 h-10 rounded-lg bg-black/60 animate-pulse" />
    </div>
  )
})

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPastHero, setIsPastHero] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("home")
  const router = useRouter()
  const pathname = usePathname()
  const isScrolling = useRef(false)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const { language, setLanguage, dir } = useLanguage()

  // Handle body scroll locking when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Lock scroll
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100vh'
      document.body.style.touchAction = 'none'
    } else {
      // Restore scroll
      document.body.style.overflow = ''
      document.body.style.height = ''
      document.body.style.touchAction = ''
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = ''
      document.body.style.height = ''
      document.body.style.touchAction = ''
    }
  }, [isMenuOpen])

  const scrollToSection = useCallback((sectionId: string, immediate = false) => {
    const section = document.getElementById(sectionId)
    if (section) {
      isScrolling.current = true
      const headerOffset = 64
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: immediate ? "auto" : "smooth"
      })

      // Update URL hash without triggering scroll
      if (typeof window !== 'undefined') {
        const newUrl = `${window.location.pathname}#${sectionId}`
        window.history.replaceState(null, '', newUrl)
      }

      setActiveSection(sectionId)

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      // Set new timeout
      timeoutRef.current = setTimeout(() => {
        isScrolling.current = false
      }, immediate ? 0 : 1000)
    }
  }, [])

  const handleNavigation = async (item: NavItem) => {
    // Always ensure we're on the home page first
    if (pathname !== "/") {
      // For hero section, just navigate to home page without hash
      if (item.sectionId === "hero") {
        await router.push("/")
        window.scrollTo({ top: 0, behavior: "smooth" })
        setActiveSection("hero")
      } else {
        // For other sections, include the hash
        await router.push(`/#${item.sectionId}`)
        setTimeout(() => {
          scrollToSection(item.sectionId as string)
        }, 100)
      }
      return
    }

    // If we're already on home page
    if (item.sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setActiveSection("hero")
      // Remove hash for hero section
      window.history.replaceState(null, '', '/')
    } else {
      scrollToSection(item.sectionId as string)
      window.history.replaceState(null, '', `/#${item.sectionId}`)
    }
  }

  // Handle initial scroll and section highlighting
  useEffect(() => {
    const handleInitialScroll = () => {
      // Check for section ID in the URL
      const hash = window.location.hash.slice(1)
      if (hash) {
        const section = document.getElementById(hash)
        if (section) {
          scrollToSection(hash, true)
          setActiveSection(hash)
        }
      } else {
        // If no hash, set hero as active without adding hash
        setActiveSection("hero")
      }
    }

    // Execute on mount and pathname change
    handleInitialScroll()

    // Add popstate listener for browser back/forward buttons
    const handlePopState = () => {
      const hash = window.location.hash.slice(1)
      if (hash) {
        scrollToSection(hash, true)
        setActiveSection(hash)
      } else {
        window.scrollTo(0, 0)
        setActiveSection("hero")
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [pathname, scrollToSection])

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return

      const currentScrollPos = window.scrollY
      const viewportHeight = window.innerHeight
      const offset = 100 // Offset for better section detection

      // Update scroll state for header styling
      setIsScrolled(currentScrollPos > 0)
      setIsPastHero(currentScrollPos > viewportHeight * 0.8)

      // Find active section
      const sections = document.querySelectorAll('section[id]')
      let currentSection = ''
      let minDistance = Infinity

      sections.forEach(section => {
        const sectionElement = section as HTMLElement
        const sectionTop = sectionElement.offsetTop - offset
        const sectionBottom = sectionTop + sectionElement.offsetHeight
        const distanceFromTop = Math.abs(currentScrollPos - sectionTop)

        // Check if we're within this section
        if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
          if (distanceFromTop < minDistance) {
            minDistance = distanceFromTop
            currentSection = section.id
          }
        }
      })

      // If we're at the top, set hero as active without hash
      if (currentScrollPos <= 50) {
        currentSection = 'hero'
        if (typeof window !== 'undefined' && !isScrolling.current) {
          window.history.replaceState(null, '', '/')
        }
      }

      // Update active section and URL hash if changed
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection)
        if (typeof window !== 'undefined' && !isScrolling.current) {
          // Only update URL with hash for non-hero sections
          if (currentSection !== 'hero') {
            window.history.replaceState(null, '', `/#${currentSection}`)
          }
        }
      }
    }

    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  // Function to toggle language
  const toggleLanguage = () => {
    if (language === 'en') setLanguage('ar')
    else if (language === 'ar') setLanguage('fr')
    else setLanguage('en')
  }

  const NavLink = ({ item, onClose }: NavLinkProps) => {
    const isActive = item.sectionId 
      ? activeSection === item.sectionId
      : false
    
    return (
      <button
        onClick={() => {
          handleNavigation(item)
          onClose?.()
        }}
        className={cn(
          "relative group px-3 py-1.5 rounded-full transition-all duration-300",
          isActive 
            ? "text-white border border-white/20 bg-white/10 backdrop-blur-sm"
            : "text-white/90 hover:text-white"
        )}
      >
        <span className={cn(
          "text-sm font-medium tracking-wide capitalize transition-colors",
          isActive ? "text-white" : "text-white/90 group-hover:text-white",
          language === 'ar' && "font-arabic"
        )}>
          {navigationTranslations[language][item.label as TranslationKey]}
        </span>
        
        {/* Circle Background Effect */}
        <div className={cn(
          "absolute inset-0 rounded-full transition-all duration-300",
          "bg-gradient-to-r from-white/0 via-white/5 to-white/0",
          "opacity-0 group-hover:opacity-100"
        )} />
        
        {/* Hover Line Effect */}
        <span className="absolute -bottom-1 left-0 h-[2px] bg-white/20 transition-all duration-300 w-0 group-hover:w-full" />
      </button>
    )
  }

  return (
    <>
      {/* Fixed Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className={cn(
          "transition-all duration-300",
          "bg-transparent backdrop-blur-sm border-b border-gold/20",
          isScrolled && "bg-black/50"
        )}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <button 
                onClick={() => handleNavigation({ label: "home" as TranslationKey, href: "/", sectionId: "hero" })}
                className="relative flex-shrink-0"
              >
                <div className="relative h-[60px] w-[180px]">
                  <Image 
                    src="/images/header-logo.png" 
                    alt="Agence Achraf Services"
                    fill
                    className="object-contain"
                    priority
                    sizes="180px"
                  />
                </div>
              </button>

              {/* Desktop Navigation - Centered */}
              <nav className={cn(
                "hidden md:flex items-center justify-center flex-1 mx-4",
                dir === 'rtl' && "flex-row-reverse"
              )}>
                {/* Premium 3D Border Container */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-full p-[1.5px] bg-transparent border-2 border-[#FFB800]">
                    <div className="w-full h-full rounded-full bg-transparent" />
                  </div>
                  
                  {/* Content Container */}
                  <div className={cn(
                    "relative z-10 flex items-center gap-4 px-6 py-2",
                    dir === 'rtl' && "flex-row-reverse"
                  )}>
                    {dir === 'rtl' 
                      ? [...navItems].reverse().map((item) => (
                          <NavLink key={item.label} item={item} />
                        ))
                      : navItems.map((item) => (
                          <NavLink key={item.label} item={item} />
                        ))
                    }
                  </div>
                </div>
              </nav>

              <div className="flex items-center gap-4">
                {/* Language Toggle */}
                <LanguageToggle />

                {/* Contact Button */}
                <Link
                  href="/appointment"
                  className="relative group hidden md:block flex-shrink-0"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#FFB800] text-black font-medium hover:shadow-lg hover:shadow-[#FFB800]/20 transition-all flex items-center gap-2",
                      language === 'ar' && "font-arabic flex-row-reverse"
                    )}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{navigationTranslations[language].consultation}</span>
                  </motion.div>
                </Link>

                {/* Mobile Menu Button and Content */}
                <MobileMenu 
                  isOpen={isMenuOpen} 
                  onOpenChange={setIsMenuOpen}
                  navItems={navItems}
                  socialLinks={socialLinks}
                  companyInfo={companyInfo}
                  activeSection={activeSection}
                  onNavigate={handleNavigation}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
} 