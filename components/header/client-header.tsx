'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  MapPin, 
  Mail, 
  Phone, 
  Globe2, 
  LinkedinIcon, 
  Twitter, 
  Facebook, 
  Instagram, 
  ChevronDown, 
  Menu, 
  X,
  HomeIcon,
  Briefcase,
  Globe,
  Info,
  Users,
  Building2,
  FileCheck,
  Shield,
  Landmark,
  BadgeCheck,
  MessageSquare,
  Star
} from "lucide-react"
import { Input } from "@/components/ui/input"
import type { LucideIcon } from "lucide-react"
import type { Route } from "next"

type SubMenuItem = {
  href: Route
  label: string
  icon: LucideIcon
  onClick?: () => void
}

type DropdownSection = {
  title: string
  icon: LucideIcon
  items: SubMenuItem[]
}

type MenuItem = {
  href: Route
  label: string
  icon: LucideIcon
  dropdown?: DropdownSection[]
  onClick?: () => void
}

const address = "Administrative District near Manhattan Cafe, Nador"

export default function ClientHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsClient(true)
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 20)
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleServicesClick = () => {
    if (isClient) {
      const servicesSection = document.getElementById('vip-services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  const handleAboutClick = () => {
    if (isClient) {
      const aboutSection = document.getElementById('about-company');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSuccessStoriesClick = () => {
    if (isClient) {
      const successStoriesSection = document.getElementById('success-stories');
      if (successStoriesSection) {
        successStoriesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleContactClick = () => {
    if (isClient) {
      const contactSection = document.getElementById('contact-form');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navigationItems: MenuItem[] = [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/#services", label: "Our Services", icon: Briefcase, onClick: handleServicesClick },
    { href: "#about" as Route, label: "About Us", icon: Info, onClick: handleAboutClick },
    { href: "#success-stories" as Route, label: "Success Stories", icon: Star, onClick: handleSuccessStoriesClick },
    { href: "#contact-form" as Route, label: "Contact Us", icon: MessageSquare, onClick: handleContactClick }
  ]

  const mobileNavigationItems: MenuItem[] = [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/#services", label: "Our Services", icon: Briefcase, onClick: handleServicesClick },
    { href: "#about" as Route, label: "About Us", icon: Info, onClick: handleAboutClick },
    { href: "#success-stories" as Route, label: "Success Stories", icon: Star, onClick: handleSuccessStoriesClick },
    { href: "#contact-form" as Route, label: "Contact Us", icon: MessageSquare, onClick: handleContactClick }
  ]

  const menuItems: MenuItem[] = [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/#services", label: "Our Services", icon: Briefcase, onClick: handleServicesClick },
    { href: "#about" as Route, label: "About Us", icon: Info, onClick: handleAboutClick },
    { href: "#success-stories" as Route, label: "Success Stories", icon: Star, onClick: handleSuccessStoriesClick },
    { href: "#contact-form" as Route, label: "Contact Us", icon: MessageSquare, onClick: handleContactClick }
  ] as const

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isClient && isScrolled ? "bg-black/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
    )}>
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] text-black">
        <div className="container mx-auto">
          <div className="flex justify-center items-center px-4 py-1.5">
            <div className={`flex items-center gap-2 text-black/90 font-medium overflow-x-auto whitespace-nowrap text-sm`}>
              <Link href="mailto:info@achrafservices.ma" className="hover:text-black transition-colors flex items-center gap-1.5 keep-ltr">
                <Mail className={`h-3.5 w-3.5`} />
                info@achrafservices.ma
              </Link>
              <span className="text-black/60">|</span>
              <Link href="tel:+212664690555" className="hover:text-black transition-colors flex items-center gap-1.5 keep-ltr">
                <Phone className={`h-3.5 w-3.5`} />
                +212 664 690 555
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Top Bar */}
      <div className="hidden md:block">
        <div className={`transition-all duration-300 ${
          isScrolled ? "h-0 opacity-0 overflow-hidden" : "opacity-100"
        } ${
          isScrolled ? "py-0.5" : "py-1"
        } bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] text-black`}>
          <div className={`container mx-auto transition-all duration-300 ${
            isScrolled ? "-translate-y-full" : "translate-y-0"
          }`}>
            <div className={`flex flex-wrap justify-between items-center px-4 text-sm`}>
              {/* Contact Info */}
              <div className={`flex items-center gap-6`}>
                <div className="flex items-center gap-2">
                  <MapPin className={`h-4 w-4 text-black/80`} />
                  <span className="font-medium">
                    {address}
                  </span>
                </div>
                <div className={`flex items-center gap-4`}>
                  <div className="flex items-center gap-2 keep-ltr">
                    <Phone className={`h-4 w-4 text-black/80`} />
                    <span className="font-medium">+212 664 690 555</span>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className={`flex items-center gap-6`}>
                {/* Social Links */}
                <div className={`flex items-center gap-3`}>
                  <Link href="https://linkedin.com" className="text-black/70 hover:text-black transition-colors">
                    <LinkedinIcon className={`h-4 w-4`} />
                  </Link>
                  <Link href="https://twitter.com" className="text-black/70 hover:text-black transition-colors">
                    <Twitter className={`h-4 w-4`} />
                  </Link>
                  <Link href="https://facebook.com" className="text-black/70 hover:text-black transition-colors">
                    <Facebook className={`h-4 w-4`} />
                  </Link>
                  <Link href="https://instagram.com" className="text-black/70 hover:text-black transition-colors">
                    <Instagram className={`h-4 w-4`} />
                  </Link>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2 keep-ltr">
                  <Mail className={`h-4 w-4 text-black/80`} />
                  <span className="font-medium">info@achrafservices.ma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`transition-all duration-300 backdrop-blur-md ${
        isScrolled ? "bg-black/75" : "bg-black/90"
      }`}>
        <div className="container mx-auto">
          <div className={`flex items-center justify-between h-16 px-8`}>
            {/* Logo */}
            <Link href="/" className="relative flex items-center">
              <div className="relative h-[80px] w-[240px]">
                <Image
                  src="/images/header-logo.png"
                  alt="Agence Achraf Services"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
              <div className="flex justify-center w-full px-4">
                <div className="relative">
                  <nav className={`relative flex items-center bg-black/90 backdrop-blur-md rounded-full px-2 py-1 border border-gold/30 shadow-[0_0_20px_rgba(255,184,0,0.15)] hover:border-gold/50 hover:shadow-[0_0_30px_rgba(255,184,0,0.25)] transition-all duration-300`}>
                    <div className={`hidden lg:flex lg:items-center lg:gap-1`}>
                      <Link href="/" className={cn(
                        "px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-300",
                        pathname === "/" ? "text-black bg-gradient-to-r from-[#FFB800] via-[#FFD700] to-[#FFB800]" : "text-white hover:text-gold"
                      )}>
                        Home
                      </Link>
                      <button
                        onClick={handleServicesClick}
                        className="px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 text-white hover:text-gold"
                      >
                        Our Services
                      </button>
                      <button
                        onClick={handleAboutClick}
                        className={cn(
                          "px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-300",
                          pathname === "/about" ? "text-black bg-gradient-to-r from-[#FFB800] via-[#FFD700] to-[#FFB800]" : "text-white hover:text-gold"
                        )}
                      >
                        About Us
                      </button>
                      <button
                        onClick={handleSuccessStoriesClick}
                        className="px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 text-white hover:text-gold"
                      >
                        Success Stories
                      </button>
                      <button
                        onClick={handleContactClick}
                        className={cn(
                          "px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-300",
                          "text-white hover:text-gold"
                        )}
                      >
                        Contact Us
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
            </div>

            {/* Right Section with Book Now */}
            <div className={`flex items-center gap-4`}>
              <Link
                href={{ pathname: "/appointment" }}
                className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-gold via-amber-500 to-gold rounded-lg text-black font-medium hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
              >
                Book Now
              </Link>
              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-gold/20 md:hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]`}
                >
                  <nav className="container mx-auto px-8 py-6">
                    <div className="space-y-4">
                      <Link
                        href="/"
                        className="block text-white hover:text-gold py-2.5 px-4 rounded-lg hover:bg-[#FFD70008] border border-transparent hover:border-[#FFD70040] flex items-center gap-2.5 transition-all duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <HomeIcon className="h-5 w-5" />
                        <span className="font-medium">Home</span>
                      </Link>
                      <button
                        onClick={() => {
                          handleServicesClick();
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-white hover:text-gold py-2.5 px-4 rounded-lg hover:bg-[#FFD70008] border border-transparent hover:border-[#FFD70040] flex items-center gap-2.5 transition-all duration-300"
                      >
                        <Briefcase className="h-5 w-5" />
                        <span className="font-medium">Our Services</span>
                      </button>
                      <button
                        onClick={() => {
                          handleAboutClick();
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-left text-white hover:text-gold py-2.5 px-4 rounded-lg hover:bg-[#FFD70008] border border-transparent hover:border-[#FFD70040] flex items-center gap-2.5 transition-all duration-300"
                      >
                        <Info className="h-5 w-5" />
                        <span className="font-medium">About Us</span>
                      </button>
                      <button
                        onClick={() => {
                          handleSuccessStoriesClick();
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-left text-white hover:text-gold py-2.5 px-4 rounded-lg hover:bg-[#FFD70008] border border-transparent hover:border-[#FFD70040] flex items-center gap-2.5 transition-all duration-300"
                      >
                        <Star className="h-5 w-5" />
                        <span className="font-medium">Success Stories</span>
                      </button>
                      <button
                        onClick={() => {
                          handleContactClick();
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-left text-white hover:text-gold py-2.5 px-4 rounded-lg hover:bg-[#FFD70008] border border-transparent hover:border-[#FFD70040] flex items-center gap-2.5 transition-all duration-300"
                      >
                        <MessageSquare className="h-5 w-5" />
                        <span className="font-medium">Contact Us</span>
                      </button>
                    </div>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  )
} 