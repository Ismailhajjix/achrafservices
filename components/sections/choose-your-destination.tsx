"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useMemo } from "react"
import { countriesData } from '@/data/countries'
import dynamic from 'next/dynamic'
import { LoadingPlaceholder } from "@/components/ui/loading-placeholder"
import { BackgroundEffects } from "@/components/ui/background-effects"
import { SectionHeader } from "@/components/ui/section-header"
import { FilterButtons } from "@/components/ui/filter-buttons"
import { PaginationControls } from "@/components/ui/pagination-controls"

export interface ImmigrationPath {
  title: string
  description: string
  requirements: string[]
  processingTime: string
  cost: string
}

// Optimize imports
const LazyCountryCard = dynamic(() => import('@/components/country-card'), {
  loading: () => <div className="h-48 bg-gold/10 rounded-xl animate-pulse" />
})

export function ChooseYourDestination() {
  const [mounted, setMounted] = useState(false)
  const [activeFilter, setActiveFilter] = useState<string>("All")
  const [currentPage, setCurrentPage] = useState(1)

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

  // Optimize filtered countries calculation
  const filteredCountries = useMemo(() => {
    if (activeFilter === "All") return countries
    return countries.filter(country => country.isPopular === (activeFilter === "popular"))
  }, [activeFilter, countries])

  // Optimize pagination calculations
  const { paginatedCountries, totalPages } = useMemo(() => {
  const countriesPerPage = 8
    const total = Math.ceil(filteredCountries.length / countriesPerPage)
    const start = (currentPage - 1) * countriesPerPage
    const end = start + countriesPerPage
    return {
      paginatedCountries: filteredCountries.slice(start, end),
      totalPages: total
    }
  }, [filteredCountries, currentPage])

  // Optimize navigation functions
  const navigation = useMemo(() => ({
    nextPage: () => setCurrentPage(prev => Math.min(prev + 1, totalPages)),
    previousPage: () => setCurrentPage(prev => Math.max(prev - 1, 1)),
    goToPage: (pageIndex: number) => setCurrentPage(pageIndex)
  }), [totalPages])

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1)
  }, [activeFilter])

  // Loading state
  if (!mounted) {
    return <LoadingPlaceholder height="min-h-[100vh]" />
  }

  return (
      <section id="choose-your-destination" className="relative py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
      {/* Background effects */}
      <BackgroundEffects />
        
        <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Section header */}
        <SectionHeader />

        {/* Filter controls */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <FilterButtons activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>

        {/* Countries grid */}
          <div className="flex flex-col justify-center">
            <div className="w-full max-w-7xl mx-auto">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-4"
            >
              {paginatedCountries.map((country, index) => (
                <LazyCountryCard key={country.name} country={country} index={index} />
                ))}
              </motion.div>

            {/* Pagination */}
              {totalPages > 1 && (
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                navigation={navigation}
              />
              )}
            </div>
          </div>
        </div>
      </section>
  )
}