"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useCallback, useRef } from "react"
import { Menu, X, Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type SectionId = 
  | "hero"
  | "services"
  | "working-process"
  | "about-company"
  | "success-stories"
  | "contact-form"
  | "choose-your-destination"

interface NavItem {
  label: string
  href: string
  sectionId?: SectionId
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", sectionId: "hero" },
  { label: "Services", href: "/", sectionId: "services" },
  { label: "About us", href: "/", sectionId: "about-company" },
  { label: "Destinations", href: "/", sectionId: "choose-your-destination" },
  { label: "Testimonials", href: "/", sectionId: "success-stories" },
  { label: "Contact us", href: "/", sectionId: "contact-form" }
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

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPastHero, setIsPastHero] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("home")
  const router = useRouter()
  const pathname = usePathname()
  const isScrolling = useRef(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

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
    if (pathname !== "/" && item.sectionId) {
      // If we're not on homepage and there's a section ID, navigate to homepage first
      // Use the section ID in the URL when navigating
      const targetUrl = item.sectionId === "hero" ? "/" : `/#${item.sectionId}`
      await router.push(targetUrl)
      
      // Wait for a brief moment to ensure DOM is ready
      setTimeout(() => {
        if (item.sectionId === "hero") {
          window.scrollTo({ top: 0, behavior: "smooth" })
          setActiveSection("hero")
          // Update URL without hash for home
          if (typeof window !== 'undefined') {
            window.history.replaceState(null, '', window.location.pathname)
          }
        } else {
          const section = document.getElementById(item.sectionId as string)
          if (section) {
            const headerOffset = 64
            const elementPosition = section.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset
            
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            })
            setActiveSection(item.sectionId as string)
          }
        }
      }, 100)
    } else if (item.sectionId) {
      if (item.sectionId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" })
        setActiveSection("hero")
        // Update URL without hash for home
        if (typeof window !== 'undefined') {
          window.history.replaceState(null, '', window.location.pathname)
        }
      } else {
        scrollToSection(item.sectionId)
      }
    }
  }

  // Handle initial scroll and section highlighting
  useEffect(() => {
    const handleInitialScroll = () => {
      // Check for section ID in the URL
      const hash = window.location.hash.slice(1)
      if (hash && pathname === '/') {
        const section = document.getElementById(hash)
        if (section) {
          scrollToSection(hash, true)
        }
      }
    }

    // Execute on mount and pathname change
    handleInitialScroll()

    // Add popstate listener for browser back/forward buttons
    const handlePopState = () => {
      const hash = window.location.hash.slice(1)
      if (hash) {
        scrollToSection(hash, true)
      } else {
        window.scrollTo(0, 0)
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

      // Update scroll state for header styling
      setIsScrolled(currentScrollPos > 0)
      setIsPastHero(currentScrollPos > viewportHeight * 0.8)

      // If at the top of the page, set hero as active and remove hash
      if (currentScrollPos === 0) {
        setActiveSection("hero")
        if (typeof window !== 'undefined') {
          window.history.replaceState(null, '', window.location.pathname)
        }
        return
      }

      // Find active section
      const sections = document.querySelectorAll('section[id]')
      let currentSection = ''

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionHeight = (section as HTMLElement).offsetHeight
        if (currentScrollPos >= sectionTop && currentScrollPos < sectionTop + sectionHeight) {
          currentSection = section.id
          
          // Update URL hash without triggering scroll
          if (typeof window !== 'undefined' && !isScrolling.current) {
            const newUrl = currentSection === "hero" 
              ? window.location.pathname
              : `${window.location.pathname}#${currentSection}`
            window.history.replaceState(null, '', newUrl)
          }
        }
      })

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 0)

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      isScrolling.current = true
      timeoutRef.current = setTimeout(() => {
        isScrolling.current = false
      }, 150)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            ? "bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#FFB800] text-black border-2 border-white/90 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.8)] hover:shadow-[inset_0_-3px_6px_rgba(0,0,0,0.3),inset_0_3px_6px_rgba(255,255,255,0.9)] transform-gpu -translate-y-[1px] hover:-translate-y-[2px]" 
            : "text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm"
        )}
      >
        <div className={cn(
          "relative z-10",
          isActive && "bg-gradient-to-b from-transparent via-black/5 to-black/10 rounded-full px-1.5"
        )}>
          <span className={cn(
            "text-sm font-medium tracking-wide capitalize transition-colors",
            isActive ? "text-black font-bold" : "text-white/90 group-hover:text-white"
          )}>
            {item.label}
          </span>
        </div>
        {!isActive && (
          <span className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#FFB800] transition-all duration-300 w-0 group-hover:w-full" />
        )}
      </button>
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navigation */}
      <div className={cn(
        "transition-all duration-500",
        isScrolled 
          ? "bg-black/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(255,184,0,0.15)] border-b border-gold/20"
          : "bg-transparent"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button 
              onClick={() => handleNavigation({ label: "Home", href: "/" })}
              className="relative"
            >
              <div className="relative h-[60px] w-[180px]">
                <Image 
                  src="/images/header-logo.png" 
                  alt="Agence Achraf Services"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2 px-4 py-1.5 mx-4 rounded-full relative">
              {/* Premium 3D Border Container */}
              <div className={cn(
                "absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#FFB800] transition-all duration-500",
                "before:absolute before:inset-0 before:p-[1.5px] before:rounded-full before:bg-gradient-to-r before:from-white/20 before:via-transparent before:to-white/20 before:blur-sm",
                "after:absolute after:inset-0 after:p-[1.5px] after:rounded-full after:bg-gradient-to-b after:from-black/10 after:to-white/10 after:blur-md",
                isPastHero
                  ? "shadow-[0_0_25px_rgba(255,184,0,0.4)] before:blur-md after:blur-lg border-2 border-white/90"
                  : "shadow-[0_0_15px_rgba(255,184,0,0.3)] before:blur-sm after:blur-md"
              )}>
                <div className={cn(
                  "w-full h-full rounded-full transition-all duration-500",
                  isPastHero
                    ? "bg-[#FFB800]/95 backdrop-blur-xl"
                    : "bg-black/95 backdrop-blur-md"
                )} />
              </div>
              
              {/* Content Container */}
              <div className="relative z-10 flex items-center gap-4">
                {navItems.map((item) => (
                  <NavLink key={item.label} item={item} />
                ))}
              </div>
            </nav>

            {/* Book Now Button */}
            <Link
              href={{ pathname: "/appointment" }}
              className="hidden md:flex items-center gap-2 relative group"
            >
              <div className="absolute inset-0 rounded-lg p-[1.5px] bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#FFB800] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#FFB800] text-black px-6 py-2.5 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-gold/20 hover:scale-105 active:scale-95">
                Book Now
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <motion.div
                initial={false}
                animate={isMenuOpen ? "open" : "closed"}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </motion.div>
            </button>

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
                x: isMenuOpen ? "0%" : "100%",
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className={cn(
                "fixed inset-0 md:hidden z-40 flex flex-col",
                "bg-gradient-to-b from-black/98 via-black/99 to-black/98",
                "backdrop-blur-3xl border-l border-gold/30",
                isMenuOpen ? "pointer-events-auto" : "pointer-events-none delay-200"
              )}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0,
                  y: isMenuOpen ? 0 : 20
                }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center min-h-screen px-4 pt-20 pb-6 overflow-y-auto relative"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.03),transparent_70%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,184,0,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,184,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent" />
                
                <div className="relative z-10 w-full max-w-sm">
                  {/* Logo */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: isMenuOpen ? 1 : 0,
                      scale: isMenuOpen ? 1 : 0.9
                    }}
                    transition={{ delay: 0.2 }}
                    className="mb-12 flex justify-center relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-transparent to-gold/20 blur-2xl" />
                    <Image
                      src="/images/header-logo.png"
                      alt="Agence Achraf Services"
                      width={160}
                      height={48}
                      className="w-auto h-[48px] relative z-10"
                      priority
                    />
                  </motion.div>

                  {/* Navigation Items */}
                  <div className="w-full space-y-3">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: isMenuOpen ? 1 : 0,
                          y: isMenuOpen ? 0 : 20 
                        }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <button
                          onClick={() => {
                            handleNavigation(item)
                            setIsMenuOpen(false)
                          }}
                          className={cn(
                            "w-full px-6 py-4 rounded-xl text-base font-medium transition-all duration-300",
                            "bg-black/60 backdrop-blur-xl",
                            "border border-gold/20 hover:border-gold/40",
                            "hover:bg-black/40 hover:scale-[1.02] hover:-translate-y-0.5",
                            "shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(255,184,0,0.15)]",
                            "active:scale-[0.98]",
                            activeSection === item.sectionId
                              ? "bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#FFB800] text-black border-white shadow-[0_0_20px_rgba(255,184,0,0.3)]"
                              : "text-white/90 hover:text-white"
                          )}
                        >
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="relative z-10">{item.label}</span>
                          </div>
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  {/* Company Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: isMenuOpen ? 1 : 0,
                      y: isMenuOpen ? 0 : 20 
                    }}
                    transition={{ delay: 0.4 + navItems.length * 0.1 }}
                    className="w-full mt-10 space-y-3"
                  >
                    {companyInfo.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="group flex items-center gap-4 px-6 py-4 rounded-xl bg-black/60 backdrop-blur-xl border border-gold/20 hover:border-gold/40 hover:bg-black/40 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(255,184,0,0.15)]"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold/20 via-gold/10 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-5 h-5 text-gold" />
                        </div>
                        <span className="text-white/90">{item.info}</span>
                      </Link>
                    ))}
                  </motion.div>

                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: isMenuOpen ? 1 : 0,
                      y: isMenuOpen ? 0 : 20 
                    }}
                    transition={{ delay: 0.5 + navItems.length * 0.1 }}
                    className="flex justify-center gap-4 mt-10"
                  >
                    {socialLinks.map((social, index) => (
                      <Link
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-4 rounded-xl bg-black/60 backdrop-blur-xl border border-gold/20 hover:border-gold/40 hover:bg-black/40 transition-all duration-300 hover:scale-110 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(255,184,0,0.15)]"
                      >
                        <social.icon className="w-5 h-5 text-gold transition-transform duration-300 group-hover:scale-110" />
                        <span className="sr-only">{social.label}</span>
                      </Link>
                    ))}
                  </motion.div>

                  {/* Copyright */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isMenuOpen ? 1 : 0 }}
                    transition={{ delay: 0.6 + navItems.length * 0.1 }}
                    className="mt-auto pt-10 text-center text-xs text-white/50"
                  >
                    ©2024 Agence Achraf Services • Built by{" "}
                    <a 
                      href="https://nadevo.ma/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gold transition-colors hover:text-gold/80"
                    >
                      @nadevogroupe
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  )
} 