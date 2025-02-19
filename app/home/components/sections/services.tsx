/** @jsxImportSource react */
"use client"

import { type FC, memo, useMemo } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { type Service, businessServices, immigrationServices } from "@/data/services"
import { servicesTranslations } from "@/translations/services"
import { useLanguage } from "@/contexts/language-context"
import { 
  scrollProgressPoints, 
  opacityValues, 
  scaleValues, 
  intersectionObserverDefaults 
} from "@/constants/animations"
import type { Route } from "next"
import {
  typography,
  gradients,
  effects,
  variants,
  buttons,
  containers,
  cards
} from "@/styles"

type ServiceTranslationKey = keyof Omit<typeof servicesTranslations.en, 'title' | 'subtitle' | 'businessTab' | 'immigrationTab' | 'scheduleConsultation'>

interface ServiceCardProps {
  service: Service
  index: number
  translations: typeof servicesTranslations[keyof typeof servicesTranslations]
  dir: 'ltr' | 'rtl'
}

interface ServicesTabProps {
  isActive: boolean
  onClick: () => void
  children: React.ReactNode
}

const ServiceCard: FC<ServiceCardProps> = memo(({ service, index, translations, dir }) => {
  const [ref, inView] = useInView({
    threshold: intersectionObserverDefaults.cardThreshold,
    triggerOnce: true
  })
  
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight
  
  return (
    <motion.div
      ref={ref}
      variants={variants.fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      className="relative group"
      dir={dir}
    >
      <div className={cn(
        "relative p-4 sm:p-6 rounded-2xl overflow-hidden",
        "bg-gradient-to-b from-black/80 via-black/50 to-black/80",
        "backdrop-blur-xl",
        "border-[2.5px] border-[#FFB800]",
        "group-hover:border-[#FFD700]",
        "transition-all duration-500",
        "shadow-[0_0_30px_rgba(255,184,0,0.15)]",
        "group-hover:shadow-[0_0_50px_rgba(255,184,0,0.3)]",
        "after:absolute after:inset-[1px] after:rounded-[14px] after:bg-black/40 after:z-0"
      )}>
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-gold/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
        
        {/* Corner Borders */}
        <div className={cn(
          "absolute top-0 w-16 sm:w-20 h-16 sm:h-20",
          dir === 'rtl' ? 'right-0' : 'left-0'
        )}>
          <div className={cn(
            "absolute top-0 w-[2px] h-10 sm:h-12 bg-gradient-to-b from-[#FFD700] to-transparent",
            dir === 'rtl' ? 'right-0' : 'left-0'
          )} />
          <div className={cn(
            "absolute top-0 w-10 sm:w-12 h-[2px]",
            dir === 'rtl' 
              ? 'right-0 bg-gradient-to-l from-[#FFD700] to-transparent' 
              : 'left-0 bg-gradient-to-r from-[#FFD700] to-transparent'
          )} />
        </div>
        <div className={cn(
          "absolute bottom-0 w-16 sm:w-20 h-16 sm:h-20",
          dir === 'rtl' ? 'left-0' : 'right-0'
        )}>
          <div className={cn(
            "absolute bottom-0 w-[2px] h-10 sm:h-12 bg-gradient-to-t from-[#FFD700] to-transparent",
            dir === 'rtl' ? 'left-0' : 'right-0'
          )} />
          <div className={cn(
            "absolute bottom-0 w-10 sm:w-12 h-[2px]",
            dir === 'rtl' 
              ? 'left-0 bg-gradient-to-r from-[#FFD700] to-transparent' 
              : 'right-0 bg-gradient-to-l from-[#FFD700] to-transparent'
          )} />
        </div>
        
        {/* Card Content */}
        <div className="relative z-10 flex flex-col">
          {/* Header with Icon and Title */}
          <div className={cn(
            "flex items-start gap-4 sm:gap-6 mb-4",
            dir === 'rtl' ? 'flex-row' : 'flex-row'
          )}>
            {/* Icon */}
            <div className={cn(
              "flex-shrink-0",
              "w-8 h-8 rounded-lg",
              "bg-gradient-to-br from-[#FFD700] to-[#FFB800]",
              "flex items-center justify-center",
              "shadow-lg transform group-hover:scale-110 transition-transform duration-300",
              "drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]",
              "border-2 border-[#FFD700]/20"
            )}>
              <service.icon className="w-4 h-4 text-black drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]" />
            </div>

            {/* Title */}
            <div className={cn(
              "flex-grow",
              dir === 'rtl' ? 'text-right' : 'text-left'
            )}>
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors duration-300 break-words">
                {service.title}
              </h3>
            </div>
          </div>

          {/* Service Details */}
          <div className="space-y-2 mb-4">
            {service.details.map((detail, idx) => (
              <div key={idx} className={cn(
                "flex items-start gap-3",
                dir === 'rtl' ? 'flex-row' : 'flex-row'
              )}>
                <div className={cn(
                  "flex-shrink-0 w-2 h-2 rounded-full mt-2",
                  "bg-gradient-to-r from-[#FFD700] to-[#FFB800]",
                  "shadow-[0_0_8px_rgba(255,215,0,0.4)]"
                )} />
                <p className={cn(
                  "flex-grow text-white/80 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300 break-words",
                  dir === 'rtl' ? 'text-right' : 'text-left'
                )}>
                  {detail}
                </p>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <Link
            href={{ pathname: "/appointment" as Route }}
            className="mt-auto"
            aria-label={`Schedule consultation for ${service.title}`}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "relative overflow-hidden rounded-xl",
                "bg-gradient-to-r from-[#FFD700] via-[#FFB800] to-[#FFD700]",
                "px-4 sm:px-6 py-3",
                "flex items-center justify-center gap-2",
                "text-black font-semibold text-sm sm:text-base",
                "shadow-[0_0_20px_rgba(255,215,0,0.3)]",
                "hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]",
                "border border-[#FFD700]/20",
                "transition-all duration-300",
                dir === 'rtl' ? 'flex-row-reverse' : 'flex-row'
              )}
            >
              <span>{translations.scheduleConsultation}</span>
              <ArrowIcon className={cn(
                "w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300",
                dir === 'rtl' 
                  ? "group-hover:-translate-x-1" 
                  : "group-hover:translate-x-1"
              )} />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  )
})
ServiceCard.displayName = "ServiceCard"

const ServicesTab: FC<ServicesTabProps> = memo(({ isActive, onClick, children }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        onClick()
      }}
      type="button"
      role="tab"
      aria-selected={isActive}
      className={cn(
        "relative overflow-hidden",
        "w-full px-8 py-4 rounded-full",
        "font-medium text-base",
        "transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-gold/50",
        isActive 
          ? [
              "bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#FFB800]",
              "text-black",
              "shadow-[0_0_25px_rgba(255,184,0,0.3)]",
              "border-2 border-transparent"
            ]
          : [
              "bg-black/40 backdrop-blur-sm",
              "border-2 border-[#FFB800]",
              "text-white/70",
              "hover:border-[#FFD700] hover:text-white",
              "shadow-[0_0_15px_rgba(255,184,0,0.15)]",
              "hover:shadow-[0_0_25px_rgba(255,184,0,0.25)]"
            ]
      )}
    >
      {children}
    </motion.button>
  )
})
ServicesTab.displayName = "ServicesTab"

export const Services: FC = () => {
  const [activeTab, setActiveTab] = useState<'business' | 'immigration'>('business')
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  const { scrollYProgress } = useScroll()
  const { language, dir } = useLanguage()
  const translations = servicesTranslations[language as keyof typeof servicesTranslations]

  const opacity = useTransform(
    scrollYProgress, 
    [
      scrollProgressPoints.start,
      scrollProgressPoints.visibleStart,
      scrollProgressPoints.visibleEnd,
      scrollProgressPoints.end
    ],
    opacityValues
  )
  const scale = useTransform(
    scrollYProgress,
    [
      scrollProgressPoints.start,
      scrollProgressPoints.visibleStart,
      scrollProgressPoints.visibleEnd,
      scrollProgressPoints.end
    ],
    scaleValues
  )

  // Memoized values
  const currentServices = useMemo(() => 
    activeTab === 'business' ? businessServices : immigrationServices,
    [activeTab]
  )

  const backgroundEffectsElement = useMemo(() => (
    <motion.div 
      style={{ opacity, scale }}
      className={containers.background.base}
    >
      <div className={containers.background.effects.radial} />
      <div className={containers.background.effects.vertical} />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className={containers.background.effects.pattern}
      />
    </motion.div>
  ), [opacity, scale])

  return (
    <section id="services" ref={ref} className="relative py-32 overflow-hidden" dir={dir}>
      {backgroundEffectsElement}
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 sm:mb-6"
          >
            <div className="relative px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-[#1A1500] border-2 border-gold/30">
              <span className="bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent text-xs sm:text-sm font-semibold tracking-wider uppercase">
                {translations.title}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 rounded-full blur-xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="flex flex-col gap-2 sm:gap-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="relative inline-block">
                <span className="relative bg-gradient-to-r from-[#FFD700] via-white to-[#FFD700] bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer">
                  {translations.subtitle.split('\n')[0]}
                </span>
              </span>
              <span className="relative inline-block text-[0.9em]">
                <span className="relative text-white/90">
                  {translations.subtitle.split('\n')[1]}
                </span>
              </span>
            </h2>
          </motion.div>
        </motion.div>

        {/* Service Type Tabs */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <ServicesTab
            isActive={activeTab === 'business'}
            onClick={() => setActiveTab('business')}
          >
            {translations.businessTab}
          </ServicesTab>
          <ServicesTab
            isActive={activeTab === 'immigration'}
            onClick={() => setActiveTab('immigration')}
          >
            {translations.immigrationTab}
          </ServicesTab>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {currentServices.map((service, index) => {
              const serviceTranslation = translations[service.key] as {
                title: string
                description: string
                details: string[]
              }
              return (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ServiceCard
                    service={{
                      ...service,
                      title: serviceTranslation.title,
                      description: serviceTranslation.description,
                      details: serviceTranslation.details
                    }}
                    index={index}
                    translations={translations}
                    dir={dir}
                  />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
} 