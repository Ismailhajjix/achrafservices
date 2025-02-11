"use client"

import { motion } from "framer-motion"
import { PolicyAccordion } from "./policy-accordion"
import { PolicyNavigation } from "./policy-navigation"

export function PoliciesSection() {
  return (
    <section className="relative py-12 xs:py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,184,0,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,184,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" 
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-gold font-medium text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 relative before:absolute before:w-8 before:h-0.5 before:bg-gold before:left-0 before:top-1/2 before:-translate-x-10 after:absolute after:w-8 after:h-0.5 after:bg-gold after:right-0 after:top-1/2 after:translate-x-10"
          >
            OUR SERVICES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bold mb-6"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-2">
              Comprehensive Solutions for
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent">
              Your Business & Immigration Needs
            </div>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/70 max-w-3xl mx-auto text-sm sm:text-base"
          >
            Explore our comprehensive range of services designed to support your business growth and immigration needs in Morocco. Our expert team ensures smooth processes and successful outcomes.
          </motion.p>
        </div>

        {/* Policy Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <PolicyAccordion />
          <PolicyNavigation />
        </motion.div>
      </div>
    </section>
  )
} 