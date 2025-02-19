"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

const whatsappMessages = {
  en: "Hello! I'm interested in your services.",
  fr: "Bonjour! Je suis intéressé par vos services.",
  ar: "مرحباً! أنا مهتم بخدماتكم."
}

export function WhatsAppButtonWrapper() {
  const whatsappNumber = "+212664690555"
  const { language } = useLanguage()
  const whatsappMessage = whatsappMessages[language as keyof typeof whatsappMessages]
  const [showScrollTop, setShowScrollTop] = useState(false)
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Scroll to Top Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: showScrollTop ? 1 : 0,
          opacity: showScrollTop ? 1 : 0
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleScrollToTop}
        className={cn(
          "w-16 h-16 rounded-full",
          "bg-gradient-to-br from-black/90 via-black/80 to-black/90",
          "backdrop-blur-xl",
          "flex items-center justify-center",
          "border-2 border-gold",
          "hover:border-gold hover:shadow-[0_0_25px_rgba(255,184,0,0.15)]",
          "transition-all duration-300",
          "group relative",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
        )}
        aria-label="Scroll back to top"
        type="button"
        role="button"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-gold/5" aria-hidden="true" />
        
        <ArrowUp className="relative w-6 h-6 text-gold drop-shadow-[0_0_3px_rgba(255,184,0,0.3)] transform transition-transform group-hover:scale-110 group-hover:brightness-110" aria-hidden="true" />
        
        {/* Tooltip */}
        <div className={cn(
          "absolute right-full mr-4 px-4 py-2",
          "rounded-lg bg-black/90 backdrop-blur-sm",
          "text-white text-sm font-medium whitespace-nowrap",
          "opacity-0 group-hover:opacity-100",
          "translate-x-4 group-hover:translate-x-0",
          "pointer-events-none",
          "transition-all duration-300",
          "border border-gold",
          "shadow-lg"
        )}
        aria-hidden="true"
        >
          Scroll to top
          <div className="absolute top-1/2 right-0 w-2 h-2 -mt-1 -mr-1 bg-black/90 transform rotate-45 border-r border-t border-gold" />
        </div>
      </motion.button>

      {/* WhatsApp Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleWhatsAppClick}
        className={cn(
          "w-16 h-16 rounded-full",
          "bg-[#25D366] !important",
          "flex items-center justify-center",
          "border-2 border-[#25D366] !important",
          "hover:shadow-[0_0_25px_rgba(37,211,102,0.3)]",
          "transition-all duration-300",
          "group relative",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
        )}
        aria-label="Start WhatsApp chat"
        type="button"
        role="button"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-white/10" aria-hidden="true" />
        
        {/* WhatsApp Icon */}
        <div className="relative w-8 h-8 drop-shadow-[0_0_3px_rgba(255,255,255,0.3)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full text-white transform transition-transform group-hover:scale-110 group-hover:brightness-110"
            aria-hidden="true"
          >
            <path
              d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 1.869.518 3.668 1.475 5.235L2.038 21.98l4.821-1.396c1.549.922 3.317 1.414 5.142 1.414h.004c5.522 0 9.999-4.477 9.999-9.999s-4.478-9.999-10-9.999h-.003zM8.905 7.275c.141 0 .285 0 .409.015.141.015.332.015.518.437.205.465.654 1.64.713 1.757.063.117.102.257.019.417-.082.156-.125.252-.243.389-.121.136-.254.303-.363.405-.121.117-.248.244-.106.478.141.233.627 1.001 1.346 1.62.871.756 1.607.99 1.835 1.102.187.097.409.073.546-.121.175-.233.389-.621.607-1.01.152-.275.348-.233.582-.137.238.097 1.499.706 1.757.832.26.128.433.19.495.292.063.107.063.602-.141 1.185-.204.581-1.217 1.138-1.683 1.217-.433.077-.84.112-1.356-.12-.311-.138-.704-.324-1.439-.672-2.5-1.179-4.131-3.92-4.254-4.102-.126-.18-1.036-1.378-1.036-2.628 0-1.25.654-1.864.889-2.118.236-.255.512-.318.689-.318z"
            />
          </svg>
        </div>

        {/* Tooltip */}
        <div className={cn(
          "absolute right-full mr-4 px-4 py-2",
          "rounded-lg bg-[#25D366] backdrop-blur-sm",
          "text-white text-sm font-medium whitespace-nowrap",
          "opacity-0 group-hover:opacity-100",
          "translate-x-4 group-hover:translate-x-0",
          "pointer-events-none",
          "transition-all duration-300",
          "border border-white/20",
          "shadow-lg"
        )}
        aria-hidden="true"
        >
          Chat with us on WhatsApp
          <div className="absolute top-1/2 right-0 w-2 h-2 -mt-1 -mr-1 bg-[#25D366] transform rotate-45 border-r border-t border-white/20" />
        </div>
      </motion.button>
    </div>
  )
} 