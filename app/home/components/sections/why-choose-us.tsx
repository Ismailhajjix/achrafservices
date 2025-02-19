"use client"

import { motion } from "framer-motion"
import { Globe2, Clock, BadgeCheck, HeartHandshake, Languages, Scale } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { whyChooseUsTranslations } from "@/translations/why-choose-us"

const advantagesData = [
  {
    icon: Globe2,
    key: "globalNetwork"
  },
  {
    icon: Clock,
    key: "efficientService"
  },
  {
    icon: BadgeCheck,
    key: "expertConsultation"
  },
  {
    icon: HeartHandshake,
    key: "clientCentric"
  },
  {
    icon: Languages,
    key: "multilingualTeam"
  },
  {
    icon: Scale,
    key: "regulatoryAdherence"
  }
]

export function WhyChooseUs() {
  const { language, dir } = useLanguage()
  const translations = whyChooseUsTranslations[language as keyof typeof whyChooseUsTranslations]

  return (
    <section id="why-choose-us" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden" dir={dir}>
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
        {/* Section Header - Always First */}
        <div className="mb-8 lg:hidden text-center">
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
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gold to-white">
              {translations.heading.firstLine}
            </span>
          </motion.h2>
        </div>

        <div className={cn(
          "grid lg:grid-cols-5 gap-16 lg:gap-20 items-stretch h-full",
          dir === 'rtl' ? 'lg:rtl' : ''
        )}>
          {/* Left Image */}
          <div className="relative w-full h-full order-1 lg:order-1 mb-8 lg:mb-0 lg:col-span-2">
            <div className="relative w-full h-[300px] lg:h-full rounded-2xl overflow-hidden bg-zinc-900">
              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -left-8 -top-8 w-64 h-64 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-3xl -z-10"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -right-8 -bottom-8 w-64 h-64 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-3xl -z-10"
              />
              
              <Image
                src="/images/why-chose-us.webp"
                alt={translations.label}
                fill
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 40vw, 35vw"
                className="object-cover"
                priority
                quality={75}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex flex-col order-2 lg:order-2 lg:col-span-3">
            {/* Desktop Header */}
            <div className="mb-12 hidden lg:block text-center">
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
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mx-auto max-w-3xl"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gold to-white">
                  {translations.heading.firstLine}
                </span>
              </motion.h2>
            </div>

            {/* Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {advantagesData.map((advantage, index) => {
                const advantageTranslation = translations.advantages[advantage.key as keyof typeof translations.advantages]
                return (
                  <motion.div
                    key={advantage.key}
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
                        {/* Icon and Title in one line */}
                        <div className={cn(
                          "flex items-start gap-3",
                          dir === 'rtl' ? 'flex-row' : 'flex-row',
                          "mb-4"
                        )}>
                          <div className={cn(
                            "flex-shrink-0",
                            "w-8 h-8 rounded-lg",
                            "bg-gradient-to-br from-[#FFD700] to-[#FFB800]",
                            "flex items-center justify-center",
                            "shadow-lg transform group-hover:scale-110 transition-transform duration-300",
                            "drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]",
                            "border-2 border-[#FFD700]/20",
                            dir === 'rtl' ? 'order-1' : 'order-none'
                          )}>
                            <advantage.icon className="w-4 h-4 text-black drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]" />
                          </div>

                          <div className={cn(
                            "flex-grow",
                            dir === 'rtl' ? 'text-right order-2' : 'text-left order-none'
                          )}>
                            <h3 className={cn(
                              "text-sm sm:text-base font-bold text-white group-hover:text-[#FFD700] transition-colors duration-300",
                              dir === 'rtl' ? 'font-[600]' : ''
                            )}>
                              {advantageTranslation.title}
                            </h3>
                          </div>
                        </div>

                        {/* Benefits List */}
                        <ul className={cn(
                          "space-y-3 mt-4",
                          dir === 'rtl' ? 'text-right mr-2' : 'text-left'
                        )}>
                          {advantageTranslation.benefits.map((benefit, idx) => (
                            <li key={idx} className={cn(
                              "flex items-start",
                              "flex-row gap-4"
                            )}>
                              <div className={cn(
                                "flex-shrink-0 w-2 h-2 rounded-full mt-2",
                                "bg-gradient-to-r from-[#FFD700] to-[#FFB800]",
                                "shadow-[0_0_8px_rgba(255,215,0,0.4)]"
                              )} />
                              <p className={cn(
                                "flex-grow text-white/80 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300",
                                dir === 'rtl' ? 'font-[500] text-right' : ''
                              )}>
                                {benefit}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 