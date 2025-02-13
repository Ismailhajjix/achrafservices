/** @jsxImportSource react */
"use client"

import { type FC, memo, useMemo } from "react"
import { motion, AnimatePresence, useScroll, useTransform, type Variants } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { type Service, businessServices, immigrationServices } from "@/data/services"
import { servicesTranslations } from "@/constants/translations"
import { 
  scrollProgressPoints, 
  opacityValues, 
  scaleValues, 
  intersectionObserverDefaults 
} from "@/constants/animations"
import {
  gradients,
  shadows,
  transitions,
  containers,
  borders
} from "@/constants/styles"

// Enhanced animation variants
const useAnimationVariants = () => {
  return useMemo(() => ({
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
          duration: 0.5
        }
      }
    } as Variants,
    
    item: {
      hidden: { 
        opacity: 0, 
        y: 20,
        scale: 0.95
      },
      visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15
        }
      }
    } as Variants,
    
    tab: {
      inactive: { 
        opacity: 0.7,
        scale: 0.95,
        y: 5
      },
      active: { 
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }
    } as Variants
  }), [])
}

interface ServiceCardProps {
  service: Service
  index: number
}

interface ServicesTabProps {
  isActive: boolean
  onClick: () => void
  children: React.ReactNode
}

const ServiceCard: FC<ServiceCardProps> = memo(({ service, index }) => {
  const [ref, inView] = useInView({
    threshold: intersectionObserverDefaults.cardThreshold,
    triggerOnce: true
  })
  
  const { item: itemVariants } = useAnimationVariants()

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      className="group relative"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      {/* Card Content */}
      <div className="relative bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-gold/20 transition-all duration-500 overflow-hidden h-full">
        {/* Hover Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Content Container */}
        <div className="relative z-10 p-6 flex flex-col h-full">
          {/* Icon & Title */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 via-gold/20 to-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <service.icon className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/70 text-sm mt-1">
                {service.description}
              </p>
            </div>
          </div>

          {/* Service Details */}
          <div className="space-y-3 mb-6 flex-grow">
            {service.details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 text-sm leading-relaxed">
                  {detail}
                </p>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <Link href={service.href} className="mt-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-4 py-3 bg-gradient-to-r from-gold via-amber-500 to-gold rounded-lg flex items-center justify-center gap-2 text-black font-medium shadow-[0_0_20px_rgba(255,184,0,0.2)] hover:shadow-[0_0_30px_rgba(255,184,0,0.4)] transition-shadow duration-300"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
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
        "w-full min-h-[48px] px-6 py-3 rounded-full",
        "font-medium text-base transition-colors duration-300",
        "touch-manipulation select-none cursor-pointer",
        "focus:outline-none focus:ring-2 focus:ring-gold/50",
        "active:transform active:scale-95",
        isActive 
          ? "bg-gradient-to-r from-gold via-amber-500 to-gold text-black shadow-lg shadow-gold/20" 
          : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
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
    threshold: intersectionObserverDefaults.sectionThreshold,
    triggerOnce: true
  })

  const { scrollYProgress } = useScroll()
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

  const { container: containerVariants } = useAnimationVariants()

  // Memoized values
  const currentServices = useMemo(() => 
    activeTab === 'business' ? businessServices : immigrationServices,
    [activeTab]
  )

  const backgroundEffects = useMemo(() => (
    <motion.div 
      style={{ opacity, scale }}
      className="absolute inset-0"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,184,0,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,184,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"
      />
    </motion.div>
  ), [opacity, scale])

  const handleTabChange = (newTab: 'business' | 'immigration') => {
    if (newTab !== activeTab) {
      setActiveTab(newTab)
    }
  }

  return (
    <section id="services" className={containers.section}>
      {backgroundEffects}

      <div className={containers.content}>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className={cn(
              "h-px max-w-[200px] mx-auto mb-8",
              gradients.goldBorder
            )}
          />

          <motion.h2 
            variants={useAnimationVariants().item}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-white">Our Premium </span>
            <span className={gradients.goldText}>
              {servicesTranslations.title}
            </span>
          </motion.h2>

          <motion.p 
            variants={useAnimationVariants().item}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            {servicesTranslations.subtitle}
          </motion.p>
        </motion.div>

        {/* Tabs Container */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 mb-12 mx-auto max-w-md sm:max-w-none px-4">
          <div className="w-full sm:w-auto">
            <ServicesTab 
              isActive={activeTab === 'business'} 
              onClick={() => handleTabChange('business')}
            >
              {servicesTranslations.businessTab}
            </ServicesTab>
          </div>
          
          <div className="w-full sm:w-auto">
            <ServicesTab 
              isActive={activeTab === 'immigration'} 
              onClick={() => handleTabChange('immigration')}
            >
              {servicesTranslations.immigrationTab}
            </ServicesTab>
          </div>
        </div>

        {/* Services Grid */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
} 