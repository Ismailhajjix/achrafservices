"use client"

import { motion } from "framer-motion"
import { FileCheck, ClipboardCheck, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import { workingProcessTranslations } from "@/translations/working-process"

type StepKey = "step1" | "step2" | "step3"

const steps = [
  {
    number: "01",
    key: "step1" as StepKey,
    icon: FileCheck,
    color: "from-amber-500/20 to-amber-600/20",
    iconColor: "text-gold"
  },
  {
    number: "02",
    key: "step2" as StepKey,
    icon: ClipboardCheck,
    color: "from-gold/20 to-amber-500/20",
    iconColor: "text-gold"
  },
  {
    number: "03",
    key: "step3" as StepKey,
    icon: CheckCircle2,
    color: "from-amber-600/20 to-amber-700/20",
    iconColor: "text-gold"
  }
]

export function WorkingProcess() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const { language, dir } = useLanguage()
  const t = workingProcessTranslations[language]

  return (
    <section className="relative z-20 pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24" dir={dir}>
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,184,0,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,184,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" 
      />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={cn(
          "text-center mb-8 sm:mb-10 lg:mb-12",
          language === 'ar' && "font-arabic"
        )}>
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
              className={cn(
                "inline-block text-gold font-medium text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 relative z-10",
                "before:absolute before:w-6 sm:before:w-8 before:h-0.5 before:bg-gold before:top-1/2 before:-translate-y-1/2",
                "after:absolute after:w-6 sm:after:w-8 after:h-0.5 after:bg-gold after:top-1/2 after:-translate-y-1/2",
                language === 'ar' ? [
                  "before:right-0 before:translate-x-8 sm:before:translate-x-10",
                  "after:left-0 after:-translate-x-8 sm:after:-translate-x-10"
                ] : [
                  "before:left-0 before:-translate-x-8 sm:before:-translate-x-10",
                  "after:right-0 after:translate-x-8 sm:after:translate-x-10"
                ]
              )}
            >
              {t.label}
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
            className={cn(
              "font-bold mb-4 sm:mb-6 relative group flex flex-col gap-1 sm:gap-2",
              language === 'ar' && "font-arabic"
            )}
          >
            {/* Mobile Title */}
            <div className="block sm:hidden">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl text-white relative z-10"
              >
                {t.heading.mobile.firstLine}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent relative z-10 block mt-1"
              >
                {t.heading.mobile.secondLine}
              </motion.span>
            </div>

            {/* Desktop Title */}
            <div className="hidden sm:block">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl text-white relative z-10"
              >
                {t.heading.desktop.firstLine}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent relative z-10 block mt-2"
              >
                {t.heading.desktop.secondLine}
              </motion.span>
            </div>
          </motion.h2>
        </div>

        {/* Steps Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Steps */}
          <div className="grid grid-cols-1 gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Connection Lines */}
                {index < 2 && (
                  <div className="absolute left-0 right-0 top-full h-16 overflow-visible">
                    {/* Curved Line */}
                    <svg
                      className="absolute w-full h-32 top-0"
                      viewBox="0 0 400 100"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      {index === 0 ? (
                        <path
                          d={language === 'ar' ? "M370 0 C370 50 30 50 30 100" : "M30 0 C30 50 370 50 370 100"}
                          stroke="url(#goldGradient)"
                          strokeWidth="2"
                          className="path-animation"
                        />
                      ) : (
                        <path
                          d={language === 'ar' ? "M30 0 C30 50 370 50 370 100" : "M370 0 C370 50 30 50 30 100"}
                          stroke="url(#goldGradient)"
                          strokeWidth="2"
                          className="path-animation"
                        />
                      )}
                      <defs>
                        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#FFB800" />
                          <stop offset="50%" stopColor="#FFDB7D" />
                          <stop offset="100%" stopColor="#FFB800" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}

                {/* Step Card */}
                <div className={cn(
                  "relative rounded-2xl overflow-hidden",
                  "border-2 border-gold",
                  "transition-all duration-300",
                  "group",
                  "hover:shadow-[0_0_25px_rgba(255,184,0,0.15)]",
                  index % 2 === 0 
                    ? language === 'ar' ? "ml-auto" : "mr-auto"
                    : language === 'ar' ? "mr-auto" : "ml-auto",
                  "w-full max-w-lg"
                )}>
                  {/* Content */}
                  <div className="p-6 bg-black/90 backdrop-blur-xl">
                    {/* Header with Icon and Title */}
                    <div className={cn(
                      "flex items-start gap-4 mb-4",
                      language === 'ar' && "flex-row-reverse"
                    )}>
                      {/* Step Icon */}
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold to-amber-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="w-8 h-8 text-black" />
                      </div>

                      <div className={cn(
                        language === 'ar' && "text-right"
                      )}>
                        {/* Step Number */}
                        <div className="text-gold text-sm font-medium mb-1">
                          {language === 'ar' ? `${step.number} الخطوة` : `Step ${step.number}`}
                        </div>
                        {/* Title */}
                        <h3 className={cn(
                          "text-xl font-bold text-white group-hover:text-gold transition-colors duration-300",
                          language === 'ar' && "font-arabic"
                        )}>
                          {t.steps[step.key].title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className={cn(
                      "text-white/70 text-sm mb-4",
                      language === 'ar' && "text-right font-arabic"
                    )}>
                      {t.steps[step.key].description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-2">
                      {t.steps[step.key].details.map((detail, idx) => (
                        <li key={idx} className={cn(
                          "flex items-center gap-2",
                          language === 'ar' && "flex-row-reverse"
                        )}>
                          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span className={cn(
                            "text-sm text-white/80",
                            language === 'ar' && "font-arabic"
                          )}>
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add CSS for path animation */}
          <style jsx>{`
            .path-animation {
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              animation: draw 2s ease forwards;
            }

            @keyframes draw {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  )
} 