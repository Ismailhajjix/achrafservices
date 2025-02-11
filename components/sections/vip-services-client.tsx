"use client"

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Users, Building2, FileCheck, Shield, Landmark, BadgeCheck, MessageSquare, HomeIcon, Briefcase, Globe } from "lucide-react"
import { useState, useEffect } from "react"
import type { Service } from "./vip-services"

interface VIPServicesClientProps {
  businessServices: Service[]
  immigrationServices: Service[]
  translations: {
    title: string
    subtitle: string
    businessTab: string
    immigrationTab: string
    bookAppointment: string
  }
}

export function VIPServicesClient({ businessServices, immigrationServices, translations }: VIPServicesClientProps) {
  const [activeTab, setActiveTab] = useState<'business' | 'immigration'>('business')
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Return a simpler version during SSR
  if (!mounted) {
    return (
      <div id="vip-services" className="relative py-8">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              {translations.title}
            </h2>
          </div>
        </div>
      </div>
    )
  }

  return (
    <motion.div 
      id="vip-services" 
      className="relative py-8"
      style={{ y }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_70%)]"
      />

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block">
            <h2 className="inline-block text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight whitespace-nowrap
              bg-gradient-to-r from-[#FFD700] via-amber-200 to-[#FFD700] bg-clip-text text-transparent
              relative">
              {translations.title}
              <div className="absolute -bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-50"></div>
            </h2>
          </div>
          <p className="mt-6 text-base md:text-lg leading-7 text-white/90
            max-w-2xl mx-auto font-light">
            {translations.subtitle}
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4 sm:px-0">
          <button
            onClick={() => setActiveTab('business')}
            className={`px-8 py-4 rounded-xl transition-all duration-300
              backdrop-blur-sm
              border-2
              w-full sm:w-auto
              ${
              activeTab === 'business'
                ? 'bg-black/40 border-[#FFD700B3] text-[#FFD700]'
                : 'bg-black/20 border-[#FFD70040] text-white/70 hover:bg-black/40 hover:border-[#FFD70080] hover:text-[#FFD700]'
            }`}
          >
            {translations.businessTab}
          </button>
          <button
            onClick={() => setActiveTab('immigration')}
            className={`px-8 py-4 rounded-xl transition-all duration-300
              backdrop-blur-sm
              border-2
              w-full sm:w-auto
              ${
              activeTab === 'immigration'
                ? 'bg-black/40 border-[#FFD700B3] text-[#FFD700]'
                : 'bg-black/20 border-[#FFD70040] text-white/70 hover:bg-black/40 hover:border-[#FFD70080] hover:text-[#FFD700]'
            }`}
          >
            {translations.immigrationTab}
          </button>
        </div>

        {/* Services Grid */}
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {(activeTab === 'business' ? businessServices : immigrationServices).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={{ pathname: service.href }}
                  className="group relative flex flex-col h-full rounded-2xl p-6 
                    bg-black/40 backdrop-blur-sm
                    border-2 border-[#FFD70080]
                    hover:border-[#FFD700B3]
                    hover:bg-black/50
                    transition-colors duration-300"
                >
                  {/* Content */}
                  <div className="relative">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-x-4 mb-4">
                      <div className="p-2 rounded-xl bg-[#FFD70015]">
                        <service.icon className="h-6 w-6 text-[#FFD700]" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#FFD700] group-hover:text-[#FFD700] transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-6 text-gray-300">
                      {service.description}
                    </p>

                    {/* Details List */}
                    <ul className="mt-4 space-y-2.5">
                      {service.details.map((detail: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-x-2 text-sm text-gray-400">
                          <span className="h-1 w-1 rounded-full bg-[#FFD70080]" />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Book an Appointment Button */}
                    <div className="mt-6 pt-4 border-t border-[#FFD70040]">
                      <button
                        className="w-full px-4 py-2.5 rounded-lg
                          bg-[#FFD70008] 
                          border border-[#FFD70040]
                          text-sm font-medium text-white
                          hover:bg-[#FFD70015]
                          hover:border-[#FFD70080]
                          hover:text-[#FFD700]
                          focus:outline-none
                          transition-all duration-300
                          flex items-center justify-center gap-2
                          group"
                      >
                        <span>{translations.bookAppointment}</span>
                        <span className="group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
} 