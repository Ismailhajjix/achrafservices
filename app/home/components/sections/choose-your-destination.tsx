"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useMemo } from "react"
import { countriesData } from '@/data/countries'
import dynamic from 'next/dynamic'
import { cn } from "@/lib/utils"
import { CheckCircle } from "lucide-react"
import { containers } from "@/styles"
import { useLanguage } from "@/contexts/language-context"
import { chooseYourDestinationTranslations } from "@/translations/choose-your-destination"

interface Destination {
  name: string
  flag: string
  description: string
  features: string[]
}

const destinations: Destination[] = [
  {
    name: "Spain",
    flag: "/images/flags/spain.svg",
    description: "A vibrant country offering golden visa opportunities through real estate investment and business ventures.",
    features: [
      "Golden Visa Program",
      "Real Estate Investment",
      "Business Setup",
      "Family Reunification"
    ]
  },
  {
    name: "Portugal",
    flag: "/images/flags/portugal.svg",
    description: "Attractive residency options through investment in property, business, or cultural projects.",
    features: [
      "D7 Visa",
      "Property Investment",
      "Startup Visa",
      "Tax Benefits"
    ]
  },
  {
    name: "Greece",
    flag: "/images/flags/greece.svg",
    description: "Mediterranean lifestyle with investment opportunities in real estate and business development.",
    features: [
      "Golden Visa",
      "Property Market",
      "Business Formation",
      "Residency Benefits"
    ]
  }
]

const LazyCountryCard = dynamic(() => import('@/components/ui/country-card'), {
  loading: () => <div className="h-48 bg-gold/10 rounded-xl animate-pulse" />,
  ssr: false
})

export function ChooseYourDestination() {
  const [mounted, setMounted] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const { language, dir } = useLanguage()
  const translations = chooseYourDestinationTranslations[language as keyof typeof chooseYourDestinationTranslations]

  // Optimize initialization with requestIdleCallback
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const idleCallback = requestIdleCallback(() => setMounted(true))
      return () => cancelIdleCallback(idleCallback)
    } else {
      const timeoutId = setTimeout(() => setMounted(true), 1000)
      return () => clearTimeout(timeoutId)
    }
  }, [])

  // Optimize memoization with more specific dependencies
  const countries = useMemo(() => countriesData, [])

  // Optimize pagination calculations
  const { paginatedCountries, totalPages } = useMemo(() => {
    const countriesPerPage = 8
    const total = Math.ceil(countries.length / countriesPerPage)
    const start = (currentPage - 1) * countriesPerPage
    const end = start + countriesPerPage
    return {
      paginatedCountries: countries.slice(start, end),
      totalPages: total
    }
  }, [countries, currentPage])

  // Optimize navigation functions
  const navigation = useMemo(() => ({
    nextPage: () => setCurrentPage(prev => Math.min(prev + 1, totalPages)),
    previousPage: () => setCurrentPage(prev => Math.max(prev - 1, 1)),
    goToPage: (pageIndex: number) => setCurrentPage(pageIndex)
  }), [totalPages])

  // Loading state
  if (!mounted) {
    return <div className="h-48 bg-gold/10 rounded-xl animate-pulse" />
  }

  return (
    <section id="choose-your-destination" className="relative py-32 overflow-hidden" dir={dir}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={containers.background.base}>
          <div className={containers.background.effects.radial} />
          <div className={containers.background.effects.vertical} />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className={containers.background.effects.pattern}
          />
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-1.5 rounded-full border-2 border-[#FFB800] bg-[#FFB800]/5">
              <span className={cn(
                "text-[#FFB800] text-sm font-semibold tracking-wide",
                language === 'ar' && "font-arabic"
              )}>
                {translations.label}
              </span>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={cn(
              "text-4xl md:text-5xl font-bold",
              language === 'ar' && "font-arabic"
            )}
          >
            <div className="text-white mb-2">{translations.heading.firstLine}</div>
            <div className="text-[#FFB800]">{translations.heading.secondLine}</div>
          </motion.h2>
        </motion.div>

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedCountries.map((country, index) => (
            <LazyCountryCard key={country.name} country={country} index={index} />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className={cn(
            "mt-12 flex justify-center gap-4",
            dir === 'rtl' && "flex-row-reverse"
          )}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={navigation.previousPage}
              disabled={currentPage === 1}
              className={cn(
                "p-2 rounded-full transition-all duration-300",
                currentPage === 1
                  ? "bg-black/40 text-white/30 cursor-not-allowed"
                  : "bg-black/40 text-[#FFB800] hover:bg-black/60 border border-[#FFB800]"
              )}
              aria-label={translations.pagination.prev}
            >
              <svg 
                className={cn(
                  "w-6 h-6",
                  dir === 'rtl' ? "" : "transform rotate-180"
                )} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => navigation.goToPage(index + 1)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    currentPage === index + 1
                      ? "bg-[#FFB800] w-4"
                      : "bg-white/20 hover:bg-white/40"
                  )}
                  aria-label={`Page ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={navigation.nextPage}
              disabled={currentPage === totalPages}
              className={cn(
                "p-2 rounded-full transition-all duration-300",
                currentPage === totalPages
                  ? "bg-black/40 text-white/30 cursor-not-allowed"
                  : "bg-black/40 text-[#FFB800] hover:bg-black/60 border border-[#FFB800]"
              )}
              aria-label={translations.pagination.next}
            >
              <svg 
                className={cn(
                  "w-6 h-6",
                  dir === 'rtl' && "transform rotate-180"
                )} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  )
} 