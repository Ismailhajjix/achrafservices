import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import type { NavItem } from "@/types/navigation"
import { useLanguage } from "@/contexts/language-context"
import { navigationTranslations } from "@/translations/navigation"

type TranslationKey = keyof typeof navigationTranslations.en

interface MobileMenuProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  navItems: (NavItem & { label: TranslationKey })[]
  socialLinks: {
    icon: LucideIcon
    href: string
    label: string
  }[]
  companyInfo: {
    icon: LucideIcon
    info: string
    href: string
  }[]
  activeSection: string
  onNavigate: (item: NavItem) => void
}

export default function MobileMenu({
  isOpen,
  onOpenChange,
  navItems,
  socialLinks,
  companyInfo,
  activeSection,
  onNavigate
}: MobileMenuProps) {
  const { language, dir } = useLanguage()
  const translations = navigationTranslations[language]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => onOpenChange(!isOpen)}
        className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
        aria-label="Toggle menu"
      >
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          {isOpen ? (
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
          opacity: isOpen ? 1 : 0,
          x: isOpen ? "0%" : "100%",
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
        className={cn(
          "fixed inset-0 md:hidden z-40 flex flex-col",
          isOpen ? "pointer-events-auto" : "pointer-events-none delay-200"
        )}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 20
          }}
          transition={{ delay: 0.1 }}
          className="relative z-10 flex flex-col items-center min-h-screen px-4 pt-20 pb-6 overflow-y-auto"
          style={{ background: 'black' }}
        >
          <div className="w-full max-w-sm">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: isOpen ? 1 : 0,
                scale: isOpen ? 1 : 0.9
              }}
              transition={{ delay: 0.2 }}
              className="mb-12 flex justify-center relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFB800]/20 via-transparent to-[#FFB800]/20 blur-2xl" />
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
                    opacity: isOpen ? 1 : 0,
                    y: isOpen ? 0 : 20 
                  }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <button
                    onClick={() => {
                      onNavigate(item)
                      onOpenChange(false)
                    }}
                    className={cn(
                      "w-full px-6 py-4 rounded-xl text-base font-medium transition-all duration-300",
                      activeSection === item.sectionId
                        ? [
                            "bg-[#FFB800]",
                            "text-black",
                            "border-none",
                            "shadow-[0_0_20px_rgba(255,184,0,0.3)]"
                          ]
                        : [
                            "bg-black",
                            "text-white",
                            "border-2 border-[#FFB800]/30",
                            "hover:border-[#FFB800]",
                            "shadow-[0_0_15px_rgba(0,0,0,0.3)]",
                            "hover:shadow-[0_0_20px_rgba(255,184,0,0.2)]"
                          ],
                      "active:scale-[0.98]",
                      language === 'ar' && "font-arabic"
                    )}
                  >
                    <div className={cn(
                      "relative flex items-center justify-between",
                      dir === 'rtl' && "flex-row-reverse"
                    )}>
                      <span className="relative z-10">{translations[item.label]}</span>
                      {activeSection === item.sectionId && (
                        <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-black" />
                        </div>
                      )}
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 20 
              }}
              transition={{ delay: 0.4 + navItems.length * 0.1 }}
              className="w-full mt-10 space-y-3"
            >
              {companyInfo.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "group flex items-center gap-4 px-6 py-4 rounded-xl",
                    "bg-black border-2 border-[#FFB800]/30",
                    "hover:border-[#FFB800]",
                    "transition-all duration-300",
                    "shadow-[0_0_15px_rgba(0,0,0,0.3)]",
                    "hover:shadow-[0_0_20px_rgba(255,184,0,0.2)]",
                    dir === 'rtl' && "flex-row-reverse text-right",
                    language === 'ar' && "font-arabic"
                  )}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FFB800] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-white">{item.info}</span>
                </Link>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 20 
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
                  className={cn(
                    "group p-4 rounded-xl",
                    "bg-black border-2 border-[#FFB800]/30",
                    "hover:border-[#FFB800]",
                    "transition-all duration-300 hover:scale-110",
                    "shadow-[0_0_15px_rgba(0,0,0,0.3)]",
                    "hover:shadow-[0_0_20px_rgba(255,184,0,0.2)]",
                    dir === 'rtl' && "flex-row-reverse text-right"
                  )}
                >
                  <social.icon className="w-5 h-5 text-[#FFB800] transition-transform duration-300 group-hover:scale-110" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ delay: 0.6 + navItems.length * 0.1 }}
              className="mt-auto pt-10 text-center text-xs text-white/70"
            >
              ©2024 Agence Achraf Services • Built by{" "}
              <a 
                href="https://nadevo.ma/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-white hover:text-gold transition-colors relative after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-white hover:after:bg-gold after:transition-colors"
                aria-label="Visit Nadevo Groupe website (opens in new tab)"
              >
                @nadevogroupe
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
} 