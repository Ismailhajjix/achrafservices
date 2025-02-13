"use client"

import { motion } from "framer-motion"
import { FileCheck, ClipboardCheck, CheckCircle2 } from "lucide-react"
import { useState } from "react"

const steps = [
  {
    number: "01",
    title: "Submit Your Request",
    description: "Submit your request on Our Website.",
    icon: FileCheck,
    color: "from-amber-500/20 to-amber-600/20",
    iconColor: "text-amber-500"
  },
  {
    number: "02",
    title: "Document Verification",
    description: "We review and process your application.",
    icon: ClipboardCheck,
    color: "from-gold/20 to-amber-500/20",
    iconColor: "text-gold"
  },
  {
    number: "03",
    title: "Receive Your Approved",
    description: "Get your documents hassle-free.",
    icon: CheckCircle2,
    color: "from-amber-600/20 to-amber-700/20",
    iconColor: "text-amber-600"
  }
]

export function WorkingProcess() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  return (
    <section className="relative z-20 pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,184,0,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,184,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" 
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group inline-block"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-gold font-medium text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 relative z-10 before:absolute before:w-6 sm:before:w-8 before:h-0.5 before:bg-gold before:left-0 before:top-1/2 before:-translate-x-8 sm:before:-translate-x-10 after:absolute after:w-6 sm:after:w-8 after:h-0.5 after:bg-gold after:right-0 after:top-1/2 after:translate-x-8 sm:after:translate-x-10"
            >
              Working Process
            </motion.span>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" 
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold mb-4 sm:mb-6 relative group flex flex-col gap-1 sm:gap-2"
          >
            {/* Mobile Title (Hidden on larger screens) */}
            <div className="block sm:hidden">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl text-white relative z-10"
              >
                3 Steps to Get Your
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent relative z-10 block mt-1"
              >
                Service Request
              </motion.span>
            </div>

            {/* Desktop Title (Hidden on mobile) */}
            <div className="hidden sm:block">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl text-white relative z-10"
              >
                3 Simple Steps to Get Your
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent relative z-10 block mt-2"
              >
                Immigration or Business Service
              </motion.span>
            </div>
          </motion.h2>
        </div>

        {/* Steps Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Animated Connecting Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-[27px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/30 via-gold/20 to-transparent transform sm:-translate-x-1/2 hidden sm:block"
          >
            <motion.div 
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                height: ["0%", "100%", "0%"]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 w-full bg-gradient-to-b from-gold/40 via-gold/20 to-transparent"
            />
          </motion.div>

          {/* Steps */}
          <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)}
                className={`flex flex-col ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-center gap-6 sm:gap-8 md:gap-12`}
              >
                {/* Icon with Enhanced Animations */}
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    animate={{
                      boxShadow: hoveredStep === index 
                        ? "0 0 30px rgba(255,184,0,0.3)" 
                        : "0 0 0px rgba(255,184,0,0)"
                    }}
                    className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-[#1A1500] backdrop-blur-xl border border-gold/30 flex items-center justify-center relative z-10"
                  >
                    <motion.div
                      animate={{
                        rotate: hoveredStep === index ? 360 : 0,
                        scale: hoveredStep === index ? 1.2 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <step.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${step.iconColor}`} />
                    </motion.div>
                    <motion.div 
                      animate={{
                        opacity: hoveredStep === index ? 1 : 0
                      }}
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/10 to-transparent transition-all duration-500" 
                    />
                  </motion.div>

                  {/* Animated Glow Effect */}
                  <motion.div
                    animate={{
                      opacity: hoveredStep === index ? 1 : 0,
                      scale: hoveredStep === index ? 1.2 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gold/20 rounded-full blur-xl"
                  />

                  {/* Animated Step Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="absolute -top-2 -right-2 bg-gradient-to-r from-gold to-amber-500 text-black w-6 sm:w-8 h-6 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold"
                  >
                    {step.number}
                  </motion.div>
                </motion.div>

                {/* Content with Enhanced Animations */}
                <motion.div 
                  className={`flex-1 text-center sm:text-left ${index % 2 !== 0 && 'sm:text-right'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <motion.h3
                    animate={{
                      color: hoveredStep === index ? "#FFB800" : "#FFFFFF"
                    }}
                    className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 transition-colors duration-300"
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    animate={{
                      color: hoveredStep === index ? "#D1D5DB" : "#9CA3AF"
                    }}
                    className="text-sm sm:text-base lg:text-lg transition-colors duration-300"
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 