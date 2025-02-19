/** @jsxImportSource react */
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Building2, FileCheck, Users2, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import { whoWeAreTranslations } from "@/translations/who-we-are"
import {
  typography,
  gradients,
  effects,
  variants,
  buttons,
  containers,
  cards
} from "@/styles"

const featuresData = [
  {
    icon: Building2,
    key: "businessFormation"
  },
  {
    icon: FileCheck,
    key: "immigrationServices"
  },
  {
    icon: Users2,
    key: "legalDocumentation"
  },
  {
    icon: Briefcase,
    key: "supportServices"
  }
]

export function WhoWeAre() {
  const { language, dir } = useLanguage()
  const translations = whoWeAreTranslations[language as keyof typeof whoWeAreTranslations]

  return (
    <section id="who-we-are" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden" dir={dir}>
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,184,0,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,184,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" 
      />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <span className="inline-block text-gold font-medium text-sm tracking-wider uppercase mb-4 px-4 py-2 rounded-full bg-[#1A1500] border border-gold/30 relative z-10">
              {translations.label}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 rounded-full blur-xl" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mx-auto max-w-3xl mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gold to-white">
              {translations.heading}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={cn(
              "text-white/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed",
              dir === 'rtl' ? 'font-[500]' : ''
            )}
          >
            {translations.description}
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuresData.map((feature, index) => {
            const featureTranslation = translations.features[feature.key as keyof typeof translations.features]
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className={cn(
                  "relative overflow-hidden rounded-2xl",
                  "bg-gradient-to-br from-black/90 via-black/80 to-black/90",
                  "border-2 border-gold p-6 transition-all duration-300",
                  "group-hover:shadow-[0_0_25px_rgba(255,184,0,0.15)]",
                  "backdrop-blur-xl",
                  "h-full"
                )}>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                  
                  {/* Animated Corner Borders */}
                  <div className={cn(
                    "absolute top-0 w-16 h-16",
                    dir === 'rtl' ? 'right-0' : 'left-0'
                  )}>
                    <div className={cn(
                      "absolute top-0 w-[1px] h-8 bg-gradient-to-b from-gold/50 to-transparent",
                      dir === 'rtl' ? 'right-0' : 'left-0'
                    )} />
                    <div className={cn(
                      "absolute top-0 w-8 h-[1px]",
                      dir === 'rtl' 
                        ? 'right-0 bg-gradient-to-l from-gold/50 to-transparent'
                        : 'left-0 bg-gradient-to-r from-gold/50 to-transparent'
                    )} />
                  </div>
                  <div className={cn(
                    "absolute bottom-0 w-16 h-16",
                    dir === 'rtl' ? 'left-0' : 'right-0'
                  )}>
                    <div className={cn(
                      "absolute bottom-0 w-[1px] h-8 bg-gradient-to-t from-gold/50 to-transparent",
                      dir === 'rtl' ? 'left-0' : 'right-0'
                    )} />
                    <div className={cn(
                      "absolute bottom-0 w-8 h-[1px]",
                      dir === 'rtl' 
                        ? 'left-0 bg-gradient-to-r from-gold/50 to-transparent'
                        : 'right-0 bg-gradient-to-l from-gold/50 to-transparent'
                    )} />
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon and Title */}
                    <div className={cn(
                      "flex items-start gap-3",
                      dir === 'rtl' ? 'flex-row' : 'flex-row',
                      "mb-4"
                    )}>
                      <div className={cn(
                        "flex-shrink-0",
                        "w-10 h-10 rounded-lg",
                        "bg-gradient-to-br from-[#FFD700] to-[#FFB800]",
                        "flex items-center justify-center",
                        "shadow-lg transform group-hover:scale-110 transition-transform duration-300",
                        "drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]",
                        "border-2 border-[#FFD700]/20",
                        dir === 'rtl' ? 'order-1' : 'order-none'
                      )}>
                        <feature.icon className="w-5 h-5 text-black drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]" />
                      </div>

                      <div className={cn(
                        "flex-grow",
                        dir === 'rtl' ? 'text-right order-2' : 'text-left order-none'
                      )}>
                        <h3 className={cn(
                          "text-lg sm:text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors duration-300",
                          dir === 'rtl' ? 'font-[600]' : ''
                        )}>
                          {featureTranslation.title}
                        </h3>
                        <p className={cn(
                          "text-white/60 text-sm mt-1",
                          dir === 'rtl' ? 'font-[500]' : ''
                        )}>
                          {featureTranslation.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className={cn(
                      "text-white/80 text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300",
                      dir === 'rtl' ? 'font-[500] text-right' : ''
                    )}>
                      {featureTranslation.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 