"use client"

import { Button } from "@/components/ui/forms/button"
import { Input } from "@/components/ui/forms/input"
import { Search, Clock, BarChart2, ArrowRight, Star, MessageSquare } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const floatingAnimation: Variants = {
  initial: { 
    y: 0, 
    x: 0,
    opacity: 0,
    scale: 0.9
  },
  animate: { 
    y: [-8, 8, -8],
    x: [-6, 6, -6],
    opacity: 1,
    scale: 1,
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "mirror",
      opacity: { duration: 1 },
      scale: { duration: 1 }
    }
  }
}

const floatingAnimationReverse: Variants = {
  initial: { 
    y: 0, 
    x: 0 
  },
  animate: { 
    y: [8, -8, 8],
    x: [6, -6, 6],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "mirror"
    }
  }
}

// Mobile Content Component
const MobileContent = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact-form')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="lg:hidden w-full flex flex-col items-center">
      {/* Logo Circle with Stats */}
      <div className="relative">
        {/* Logo Circle */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="w-[220px] h-[220px] xs:w-[260px] xs:h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] relative overflow-hidden rounded-full"
        >
          <div className="absolute inset-0 rounded-full border-2 border-gold/30 z-20">
            <div className="absolute inset-0 rounded-full">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.15),transparent_70%)] animate-pulse"></div>
            </div>
          </div>
          
          <div className="absolute inset-[3px] rounded-full overflow-hidden bg-black">
            <Image 
              src="/images/home.jpg" 
              alt="Agence Achraf Services"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              priority={true}
            />
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          className="absolute -top-1 -right-1 rounded-lg py-1 sm:py-1.5 px-2 sm:px-3 flex items-center gap-1.5 sm:gap-2 bg-black/80 backdrop-blur-sm border border-gold/20 shadow-[0_0_15px_rgba(255,184,0,0.1)]"
        >
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FFB800] rounded-lg flex items-center justify-center text-black">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          <div>
            <div className="text-white font-medium text-xs sm:text-sm whitespace-nowrap">9AM - 5PM</div>
            <div className="text-zinc-400 text-[10px] sm:text-xs whitespace-nowrap">Working Hours</div>
          </div>
        </motion.div>

        <motion.div
          variants={floatingAnimationReverse}
          initial="initial"
          animate="animate"
          className="absolute -bottom-1 -left-1 rounded-lg py-1 sm:py-1.5 px-2 sm:px-3 flex items-center gap-1.5 sm:gap-2 bg-black/80 backdrop-blur-sm border border-gold/20 shadow-[0_0_15px_rgba(255,184,0,0.1)]"
        >
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FFB800] rounded-lg flex items-center justify-center text-black">
            <BarChart2 className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          <div>
            <div className="text-white font-medium text-xs sm:text-sm whitespace-nowrap">15+ Services</div>
            <div className="text-zinc-400 text-[10px] sm:text-xs whitespace-nowrap">Professional Solutions</div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Buttons */}
      <div className="w-full px-4 mt-6 sm:mt-8 flex flex-col xs:flex-row gap-3 sm:gap-4">
        <Link href={{ pathname: "/appointment" }} className="w-full xs:w-1/2">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="w-full px-6 py-3 bg-gradient-to-r from-gold via-amber-500 to-gold rounded-lg text-black font-medium hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
          >
            Get Started
            <ArrowRight className="inline-block ml-2 w-4 h-4" />
          </motion.button>
        </Link>
        <motion.button
          onClick={handleContactClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="w-full xs:w-1/2 px-6 py-3 bg-black/50 backdrop-blur-xl border border-gold/30 rounded-lg text-white font-medium hover:bg-black/70 hover:border-gold/50 transition-all duration-300"
        >
          Contact Support
          <MessageSquare className="inline-block ml-2 w-4 h-4" />
        </motion.button>
      </div>
    </div>
  )
}

// Desktop Content Component
const DesktopContent = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact-form')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="hidden lg:flex relative w-auto justify-center -mt-6">
      <div className="relative">
        {/* Logo Circle with Stats */}
        <div className="relative">
          {/* Logo Circle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="w-[320px] xl:w-[360px] h-[320px] xl:h-[360px] relative overflow-hidden rounded-full"
          >
            <div className="absolute inset-0 rounded-full border-2 border-gold/30 z-20">
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.15),transparent_70%)] animate-pulse"></div>
              </div>
            </div>
            
            <div className="absolute inset-[3px] rounded-full overflow-hidden bg-black">
              <Image 
                src="/images/home.jpg" 
                alt="Agence Achraf Services"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority={true}
              />
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            className="absolute -top-6 lg:-top-8 -right-2 lg:-right-4 rounded-xl py-1.5 lg:py-2 px-3 lg:px-4 flex items-center gap-2 lg:gap-3 bg-black/50 backdrop-blur-md border border-gold/20 shadow-[0_0_30px_rgba(255,184,0,0.1)]"
          >
            <div className="w-8 lg:w-10 h-8 lg:h-10 bg-gradient-to-br from-[#FFB800] to-[#FFCD4D] rounded-lg flex items-center justify-center text-black">
              <Clock className="w-4 lg:w-5 h-4 lg:h-5" />
            </div>
            <div>
              <div className="text-white font-medium text-sm whitespace-nowrap">9AM - 5PM</div>
              <div className="text-zinc-400 text-xs whitespace-nowrap">Working Hours</div>
            </div>
          </motion.div>

          <motion.div
            variants={floatingAnimationReverse}
            initial="initial"
            animate="animate"
            className="absolute -bottom-6 lg:-bottom-8 -left-2 lg:-left-4 rounded-xl py-1.5 lg:py-2 px-3 lg:px-4 flex items-center gap-2 lg:gap-3 bg-black/50 backdrop-blur-md border border-gold/20 shadow-[0_0_30px_rgba(255,184,0,0.1)]"
          >
            <div className="w-8 lg:w-10 h-8 lg:h-10 bg-gradient-to-br from-[#FFB800] to-[#FFCD4D] rounded-lg flex items-center justify-center text-black">
              <BarChart2 className="w-4 lg:w-5 h-4 lg:h-5" />
            </div>
            <div>
              <div className="text-white font-medium text-sm whitespace-nowrap">15+ Services</div>
              <div className="text-zinc-400 text-xs whitespace-nowrap">Professional Solutions</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const [mounted, setMounted] = useState(false)
  
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact-form')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  // Shared background component
  const BackgroundImage = () => (
    <div className="absolute inset-0">
      <Image
        src="/images/hero-bg.jpg"
        alt="Hero Background"
        fill
        className={cn(
          "object-cover object-center",
          mounted && "scale-[1.02] transform motion-safe:animate-subtle-zoom",
          "brightness-[0.7]"
        )}
        priority={true}
        sizes="100vw"
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,184,0,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,184,0,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,184,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
    </div>
  )

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden pt-[100px] sm:pt-[120px] pb-12 sm:pb-16">
      <BackgroundImage />
      
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col -mt-2">
            {/* Welcome Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-3 sm:mb-4"
            >
              <div className="inline-block relative">
                <div className="relative border border-gold/30 rounded-full px-5 sm:px-7 py-2.5 sm:py-3 backdrop-blur-xl bg-black/40 shadow-[0_0_40px_rgba(255,184,0,0.2)]">
                  <div className="text-gold font-semibold text-xs sm:text-sm md:text-base tracking-[0.2em] bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent">
                    PREMIUM CONSULTANCY SERVICES
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-4 sm:mb-5"
            >
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center">
                  <div className="text-white/95">
                    <span className="relative">
                      Your Gateway To
                      <motion.span
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent"
                      />
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-white/95">
                    <span className="relative">
                      Success
                    </span>
                  </div>
                  <div className="relative ml-2 whitespace-nowrap">
                    <span className="bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent">
                      in Morocco
                    </span>
                  </div>
                  <motion.span
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent"
                  />
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="relative text-base sm:text-lg md:text-xl text-zinc-300 mb-6 sm:mb-8 max-w-xl leading-relaxed"
            >
              <div>
                Experience excellence with Morocco's premier consultancy firm. We transform complex processes into seamless journeys, offering expert guidance in business formation, immigration services, and legal documentation. Your success is our signature.
              </div>
            </motion.div>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex gap-4 w-full max-w-xl">
              <Link href={{ pathname: "/appointment" }} className="flex-1">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-gold via-amber-500 to-gold rounded-xl text-black font-medium hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 text-base"
                >
                  Get Started
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </motion.button>
              </Link>
              <Link href={{ pathname: "/contact" }} className="flex-1">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                  className="w-full px-8 py-4 bg-black/50 backdrop-blur-xl border border-gold/30 rounded-xl text-white font-medium hover:bg-black/70 hover:border-gold/50 transition-all duration-300 text-base"
                >
                  Contact Support
                  <MessageSquare className="inline-block ml-2 w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Right Content - Separate Mobile and Desktop */}
          <MobileContent />
          <DesktopContent />
        </div>
      </div>
    </div>
  )
}

