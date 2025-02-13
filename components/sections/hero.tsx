"use client"

import { ArrowRight, MessageSquare, Clock, BarChart2 } from "lucide-react"
import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import type { Route } from "next"

const floatingAnimation: Variants = {
  initial: { 
    y: 0, 
    x: 0,
    opacity: 0,
    scale: 0.9
  },
  animate: { 
    y: [-15, 15, -15],
    x: [-12, 12, -12],
    opacity: 1,
    scale: 1,
    transition: {
      duration: 8,
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
    y: [15, -15, 15],
    x: [12, -12, 12],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "mirror"
    }
  }
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact-form')
    if (contactSection) {
      // Calculate header offset (accounting for navigation height)
      const headerOffset = 64
      const elementPosition = contactSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      // Use requestAnimationFrame to ensure smooth scrolling
      requestAnimationFrame(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      })
    }
  }

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-[85vh] flex items-center pt-12 pb-8 md:pt-24 md:pb-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover brightness-[0.3]"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <motion.div 
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-[#FFB800]/10 backdrop-blur-sm border border-[#FFB800]/20 rounded-full px-3 py-0.5">
                <span className="text-[#FFB800] font-medium tracking-wide uppercase text-sm">
                  PREMIUM CONSULTANCY SERVICES
                </span>
              </div>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <span className="bg-gradient-to-r from-white via-zinc-400 to-white bg-clip-text text-transparent">Your Gateway To</span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-xl opacity-50" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mt-2"
                >
                  <span className="bg-gradient-to-r from-white via-zinc-400 to-white bg-clip-text text-transparent">Success in </span>
                  <span className="relative">
                    <span className="relative z-10 bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#FFB800] bg-clip-text text-transparent animate-gradient-x">Morocco</span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#FFB800]/50 via-amber-500/50 to-[#FFB800]/50 blur-2xl opacity-50" />
                  </span>
                </motion.div>
              </h1>
              
              <p className="text-white/80 text-xl max-w-2xl leading-relaxed">
                Experience excellence with Morocco's premier consultancy firm. We transform complex processes into seamless journeys, offering expert guidance in business formation, immigration services, and legal documentation. Your success is our signature.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href={{ pathname: "/appointment" as Route }} className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full sm:w-auto px-8 py-4 bg-[#FFB800] text-black rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#FFB800]/90 transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <button
                onClick={handleContactClick}
                className="w-full sm:w-auto"
                type="button"
                aria-label="Contact Support"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-black/50 backdrop-blur-sm border border-[#FFB800]/30 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-black/70 hover:border-[#FFB800]/50 transition-all"
                >
                  Contact Support
                  <MessageSquare className="w-5 h-5" />
                </motion.div>
              </button>
            </div>
          </div>

          {/* Right Content - Logo Circle */}
          <div className="relative">
            <div className="relative w-[280px] md:w-[360px] h-[280px] md:h-[360px] mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-[#FFB800]/30">
                <div className="absolute inset-0 rounded-full">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.15),transparent_70%)] animate-pulse" />
                </div>
              </div>
              
              <div className="absolute inset-[3px] rounded-full overflow-hidden bg-black/50 backdrop-blur-sm">
                <Image 
                  src="/images/logo-circle.png"
                  alt="Agence Achraf Services"
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 280px, 360px"
                />
              </div>

              {/* Stats Cards */}
              <motion.div
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
                className="absolute -top-4 -right-4 bg-black/80 backdrop-blur-sm rounded-xl p-3 border border-[#FFB800]/20 flex items-center gap-3 scale-90 md:scale-100"
              >
                <div className="w-10 h-10 bg-[#FFB800] rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-black" />
                </div>
                <div>
                  <div className="text-white font-medium">9AM - 5PM</div>
                  <div className="text-white/60 text-sm">Working Hours</div>
                </div>
              </motion.div>

              <motion.div
                variants={floatingAnimationReverse}
                initial="initial"
                animate="animate"
                className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-sm rounded-xl p-3 border border-[#FFB800]/20 flex items-center gap-3 scale-90 md:scale-100"
              >
                <div className="w-10 h-10 bg-[#FFB800] rounded-lg flex items-center justify-center">
                  <BarChart2 className="w-5 h-5 text-black" />
                </div>
                <div>
                  <div className="text-white font-medium">15+ Services</div>
                  <div className="text-white/60 text-sm">Professional Solutions</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

