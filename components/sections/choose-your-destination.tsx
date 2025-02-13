"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useMemo } from "react"
import { Badge } from "@/components/ui/badge"
import { OptimizedFlagImage } from "@/components/ui/optimized-flag-image"

export interface ImmigrationPath {
  title: string
  description: string
  requirements: string[]
  processingTime: string
  cost: string
}

// Update the countries array to limit description lengths
const countries = [
  {
    name: "Germany",
    flag: "/flags/germany.png",
    description: "Europe's powerhouse economy with world-class education system. Your gateway to endless opportunities.",
    isPopular: true
  },
  {
    name: "France",
    flag: "/flags/france.png",
    description: "Blend of timeless culture and modern innovation. Experience the art of living in Europe.",
    isPopular: true
  },
  {
    name: "Spain",
    flag: "/flags/spain.png",
    description: "Sun-soaked paradise with vibrant Mediterranean lifestyle. Where tech meets perfect work-life balance.",
    isPopular: true
  },
  {
    name: "Netherlands",
    flag: "/flags/netherlands.png",
    description: "Leading digital innovation hub with English-friendly cities. Where progress meets heritage.",
    isPopular: true
  },
  {
    name: "Italy",
    flag: "/flags/italy.png",
    description: "Rich heritage meets contemporary opportunities. Experience la dolce vita in Europe's heart.",
    isPopular: true
  },
  {
    name: "Sweden",
    flag: "/flags/sweden.png",
    description: "Pioneer in sustainability with exceptional quality of life. Where innovation meets social welfare.",
    isPopular: true
  },
  {
    name: "Canada",
    flag: "/flags/canada.png",
    description: "Multicultural haven with world-class opportunities. Where nature meets economic prosperity.",
    isPopular: true
  },
  {
    name: "UK",
    flag: "/flags/uk.png",
    description: "Global hub of educational and business excellence. Where tradition empowers future innovation.",
    isPopular: true
  },
  {
    name: "Belgium",
    flag: "/flags/belgium.png",
    description: "A multicultural hub at the heart of Europe, offering excellent quality of life, strong social security, and opportunities in international organizations.",
    isPopular: true
  },
  {
    name: "Portugal",
    flag: "/flags/Portugal.png",
    description: "A welcoming country with a growing tech scene, offering digital nomad opportunities, golden visa program, and exceptional quality of life.",
    isPopular: true
  },
  {
    name: "Switzerland",
    flag: "/flags/switzerland.png",
    description: "A global leader in banking, innovation, and quality of life, offering high salaries, excellent healthcare, and breathtaking natural beauty.",
    isPopular: true
  },
  {
    name: "Austria",
    flag: "/flags/austria.png",
    description: "A country combining rich cultural heritage with modern innovation, offering high living standards, excellent social security, and diverse opportunities.",
    isPopular: true
  },
  {
    name: "Greece",
    flag: "/flags/Greece.png",
    description: "A Mediterranean paradise offering digital nomad opportunities, rich cultural heritage, and an emerging tech ecosystem with affordable living costs.",
    isPopular: true
  },
  {
    name: "Norway",
    flag: "/flags/norway.png",
    description: "A Scandinavian nation offering exceptional quality of life, strong social welfare, and abundant opportunities in technology and natural resources.",
    isPopular: true
  },
  {
    name: "Denmark",
    flag: "/flags/denmark.png",
    description: "A Scandinavian leader in innovation and sustainability, offering high living standards, excellent work-life balance, and strong social security.",
    isPopular: true
  },
  {
    name: "Finland",
    flag: "/flags/finland.png",
    description: "The world's happiest country offering exceptional quality of life, cutting-edge technology sector, and world-class education system.",
    isPopular: true
  },
  {
    name: "Ireland",
    flag: "/flags/ireland.png",
    description: "A thriving tech hub with strong economic growth, offering excellent education and a welcoming English-speaking environment.",
    isPopular: false
  },
  {
    name: "Luxembourg",
    flag: "/flags/luxembourg.png",
    description: "A global financial center offering high living standards, multilingual environment, and strategic location in the heart of Europe.",
    isPopular: false
  },
  {
    name: "Malta",
    flag: "/flags/malta.png",
    description: "A Mediterranean island nation offering excellent climate, English-speaking environment, and growing opportunities in gaming and tech sectors.",
    isPopular: false
  },
  {
    name: "Cyprus",
    flag: "/flags/cyprus.png",
    description: "A Mediterranean business hub offering excellent climate, strategic location, and attractive tax regime for international professionals.",
    isPopular: false
  },
  {
    name: "Poland",
    flag: "/flags/poland.png",
    description: "A rapidly growing economy in Central Europe offering strong IT sector, affordable living costs, and rich cultural heritage.",
    isPopular: false
  },
  {
    name: "Czech Republic",
    flag: "/flags/czech-republic.png",
    description: "A central European gem offering high quality of life, strong economy, and beautiful historic surroundings with modern opportunities.",
    isPopular: false
  },
  {
    name: "Hungary",
    flag: "/flags/hungary.png",
    description: "A Central European nation offering rich cultural heritage, growing tech scene, and affordable high quality of life.",
    isPopular: false
  },
  {
    name: "Romania",
    flag: "/flags/romania.png",
    description: "An emerging tech hub with fast internet speeds, growing IT sector, and competitive advantages for digital businesses.",
    isPopular: false
  },
  {
    name: "Bulgaria",
    flag: "/flags/bulgaria.png",
    description: "An emerging digital hub offering affordable living costs, growing tech sector, and beautiful Black Sea coastline.",
    isPopular: false
  },
  {
    name: "Croatia",
    flag: "/flags/Croatia.png",
    description: "Adriatic pearl with thriving tourism sector. Digital nomad haven with Mediterranean charm.",
    isPopular: false
  },
  {
    name: "Estonia",
    flag: "/flags/estonia.png",
    description: "Digital society pioneer with e-Residency program. Leading startup ecosystem in Northern Europe.",
    isPopular: false
  },
  {
    name: "Latvia",
    flag: "/flags/latvia.png",
    description: "Baltic tech hub with rich cultural heritage. Fast-growing fintech and IT sectors.",
    isPopular: false
  },
  {
    name: "Lithuania",
    flag: "/flags/lithuania.png",
    description: "Fintech powerhouse with startup-friendly environment. Rapidly growing IT and innovation hub.",
    isPopular: false
  },
  {
    name: "Slovenia",
    flag: "/flags/slovenia.png",
    description: "A green technology leader combining Alpine beauty with Mediterranean charm, offering high living standards and innovation opportunities.",
    isPopular: false
  },
  {
    name: "Slovakia",
    flag: "/flags/slovakia.png",
    description: "Central European automotive hub. Strong manufacturing sector with growing IT industry.",
    isPopular: false
  },
  {
    name: "Iceland",
    flag: "/flags/Iceland.png",
    description: "Nordic paradise with renewable energy leadership. Innovation hub with exceptional quality of life.",
    isPopular: false
  }
]

export function ChooseYourDestination() {
  const [mounted, setMounted] = useState(false)
  const [activeFilter, setActiveFilter] = useState<string>("All")
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Filter countries based on filter
  const filteredCountries = useMemo(() => {
    return countries.filter(country => 
      activeFilter === "All" ? true : country.isPopular === (activeFilter === "popular")
    )
  }, [activeFilter])

  // Calculate pagination
  const countriesPerPage = 8
  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage)
  const paginatedCountries = filteredCountries.slice(
    (currentPage - 1) * countriesPerPage,
    currentPage * countriesPerPage
  )

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const previousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex)
  }

  useEffect(() => {
    // Reset to first page when filter changes
    setCurrentPage(1)
  }, [activeFilter])

  // Loading state with skeleton UI
  if (!mounted) {
    return (
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="container mx-auto px-4 relative">
          <div className="animate-pulse space-y-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="h-4 w-32 bg-gold/20 rounded" />
              <div className="h-8 w-64 bg-gold/20 rounded" />
              <div className="h-4 w-48 bg-gold/20 rounded" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-48 bg-gold/10 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section id="choose-your-destination" className="relative py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.15),transparent_70%)]"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,184,0,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,184,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          {/* Enhanced Section Header with better mobile spacing */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative inline-block"
            >
              <span className="relative inline-flex flex-col items-center">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -top-6 sm:-top-8 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent w-full"
                />
                <span className="inline-block text-gold font-medium text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 relative px-4 sm:px-8 py-1.5 sm:py-2">
                  <span className="relative z-10">SUPPORTED EUROPEAN DESTINATIONS</span>
                  <motion.span
                    className="absolute inset-0 bg-gold/5 rounded-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  />
                </span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10 tracking-tight px-4 sm:px-0">
                <span className="text-white">Discover Your </span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent">
                    European Gateway
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Filter Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto px-4 sm:px-6 mt-8 sm:mt-6"
            >
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 justify-center">
                  {["All", "popular", "other"].map((filter) => (
                    <motion.button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 relative overflow-hidden flex-1 sm:flex-none
                        ${activeFilter === filter
                          ? "bg-gradient-to-r from-gold to-amber-500 text-black shadow-lg"
                          : "bg-white/5 text-white hover:bg-white/10"
                        }`}
                    >
                      <span className="relative z-10">
                        {filter.charAt(0).toUpperCase() + filter.slice(1)}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Countries Grid with better mobile spacing */}
          <div className="flex flex-col justify-center">
            <div className="w-full max-w-7xl mx-auto">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-4"
              >
                {paginatedCountries.map((country, index) => (
                  <motion.div
                    key={country.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* Card Content */}
                    <div className="relative bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-xl rounded-xl border border-white/10 hover:border-gold/20 transition-all duration-500 overflow-hidden h-full">
                      {/* Hover Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      {/* Content Container */}
                      <div className="relative z-10 p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="relative w-12 h-8 rounded-md overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-lg">
                              <OptimizedFlagImage
                                src={country.flag}
                                alt={country.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h3 className="text-lg font-semibold bg-gradient-to-r from-white via-zinc-400 to-white bg-clip-text text-transparent group-hover:from-gold group-hover:via-amber-500 group-hover:to-gold transition-all duration-300">
                              {country.name}
                            </h3>
                          </div>
                          
                          {country.isPopular && (
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#FFB800] blur-md opacity-50" />
                              <div className="relative bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#FFB800] px-2 py-1 rounded-full">
                                <span className="text-black text-[10px] font-medium tracking-wide uppercase">
                                  Popular
                                </span>
                              </div>
                            </div>
                          )}
                        </div>

                        <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 line-clamp-2">
                          {country.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced Pagination Controls for mobile */}
              {totalPages > 1 && (
                <div className="mt-8 sm:mt-12 flex flex-col items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={previousPage}
                      className="p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-white/10 border border-gold/20 hover:border-gold/40 transition-all duration-300"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>

                    <div className="flex items-center gap-1.5 sm:gap-2">
                      {Array.from({ length: totalPages }).map((_, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => goToPage(index + 1)}
                          className={`w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                            currentPage === index + 1
                              ? "bg-gold w-3 sm:w-4"
                              : "bg-white/20 hover:bg-white/40"
                          }`}
                        />
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextPage}
                      className="p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-white/10 border border-gold/20 hover:border-gold/40 transition-all duration-300"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>

                  <div className="text-gold/60 text-xs sm:text-sm">
                    Page {currentPage} of {totalPages}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}