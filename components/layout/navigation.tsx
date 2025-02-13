"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useCallback, useRef } from "react"
import { Menu, X } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { Route } from "next"

type AppRoute = 
  | "/"
  | "/services" 
  | "/about"
  | "/success-stories"
  | "/contact"
  | "/appointment"

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
  href: AppRoute
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
  const lastScrollPosition = useRef(0)
  const isScrolling = useRef(false)
  const scrollTimeout = useRef<NodeJS.Timeout>()

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
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }

      // Set new timeout
      scrollTimeout.current = setTimeout(() => {
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
            : isPastHero
              ? "text-black font-bold hover:bg-black/10"
              : "text-white/90 hover:text-white hover:bg-white/5"
        )}
      >
        <div className={cn(
          "relative z-10",
          isActive && "bg-gradient-to-b from-transparent via-black/5 to-black/10 rounded-full px-1.5"
        )}>
          <span className={cn(
            "text-sm font-medium tracking-wide capitalize transition-colors",
            isActive ? "text-black font-bold" : isPastHero ? "text-black font-bold" : "text-white/90 group-hover:text-white"
          )}>
            {item.label}
          </span>
        </div>
        {!isActive && !isPastHero && (
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
          ? isPastHero
            ? "bg-black/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(255,184,0,0.15)] border-b border-gold/20"
            : "bg-black/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button 
              onClick={() => handleNavigation({ label: "Home", href: "/" })}
              className="relative"
            >
              <div className="relative h-[80px] w-[240px]">
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
            <nav className="hidden md:flex items-center gap-4 px-6 py-2 mx-4 rounded-full relative">
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
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -10 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "md:hidden",
          isScrolled ? "bg-black/95 backdrop-blur-lg" : "bg-transparent",
          "border-t border-white/10",
          !isMenuOpen && "pointer-events-none"
        )}
        aria-hidden={!isMenuOpen}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink 
                key={item.label} 
                item={item}
                onClose={() => setIsMenuOpen(false)}
              />
            ))}
            <Link
              href={{ pathname: "/appointment" }}
              className="bg-[#FFB800] text-black px-4 py-3 rounded-lg font-medium hover:bg-[#FFB800]/90 transition-all text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      </motion.div>
    </header>
  )
} 