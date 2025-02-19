"use client"

import { ArrowRight, MessageSquare, Clock } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  typography,
  gradients,
  effects,
  containers
} from "@/styles"
import { useLanguage } from "@/contexts/language-context"
import { heroTranslations } from "@/translations/hero"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { language } = useLanguage()
  const t = heroTranslations[language]

  const handleContactClick = () => {
    window.location.href = '/appointment'
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center py-0 pt-16 sm:pt-20 md:pt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          fill
          priority
          quality={100}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={containers.background.base}>
          <div className={cn(containers.background.effects.radial, "opacity-90")} />
          <div className={cn(containers.background.effects.vertical, "opacity-80")} />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className={cn(containers.background.effects.pattern, "opacity-20")}
          />
        </div>
      </div>

      <div className={containers.base}>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={cn(
                "text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8",
                language === 'ar' && "font-arabic"
              )}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gold to-white">
                {language === 'ar' 
                  ? `${t.title.transform} ${t.title.your} ${t.title.vision}`
                  : `${t.title.your} ${t.title.business} ${t.title.vision}`
                }
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={cn(
                typography.body.large,
                typography.display.muted,
                "max-w-xl mb-8 mx-auto",
                language === 'ar' && "font-arabic"
              )}
            >
              <span className="hidden sm:block">{t.description.desktop}</span>
              <span className="block sm:hidden">{t.description.mobile}</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className={cn(
                "flex flex-col sm:flex-row gap-4 pt-8 max-w-xl mx-auto justify-center w-full",
                language === 'ar' && "sm:flex-row-reverse"
              )}
            >
              <Link 
                href={{ pathname: "/appointment" }} 
                className="w-full sm:w-auto group"
                aria-label="Schedule a free consultation"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "relative overflow-hidden bg-[#FFB800] hover:bg-[#FFD700] text-black font-semibold px-8 py-3 rounded-xl shadow-[0_0_20px_rgba(255,184,0,0.3)] hover:shadow-[0_0_30px_rgba(255,184,0,0.5)] flex items-center justify-between gap-4 min-w-[200px] transition-all duration-300",
                    language === 'ar' && "font-arabic flex-row-reverse justify-between"
                  )}
                >
                  <span>{t.buttons.consultation}</span>
                  <ArrowRight className={cn(
                    "w-5 h-5 transition-transform duration-300 group-hover:translate-x-1",
                    language === 'ar' && "rotate-180 group-hover:-translate-x-1"
                  )} />
                </motion.div>
              </Link>
              
              <button
                onClick={handleContactClick}
                className="w-full sm:w-auto group"
                type="button"
                aria-label="Contact our expert team"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "relative overflow-hidden bg-black/50 backdrop-blur-sm border-2 border-[#FFB800] text-white font-semibold px-8 py-3 rounded-xl shadow-[0_0_15px_rgba(255,184,0,0.15)] hover:shadow-[0_0_25px_rgba(255,184,0,0.25)] hover:bg-black/70 flex items-center justify-between gap-4 min-w-[200px] transition-all duration-300",
                    language === 'ar' && "font-arabic flex-row-reverse justify-between"
                  )}
                >
                  <span>{t.buttons.expert}</span>
                  <MessageSquare className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.div>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Logo Circle */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 flex justify-center lg:block"
          >
            <div className="relative w-[280px] md:w-[360px] h-[280px] md:h-[360px] lg:ml-auto lg:mr-8 lg:-translate-x-8">
              <div className={cn("absolute inset-0 rounded-full border-2 border-gold", effects.shadow.gold.lg)}>
                <div className="absolute inset-0 rounded-full">
                  <div className={cn(gradients.gold.radial, "absolute inset-0 animate-pulse")} />
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
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Stats Cards */}
              <motion.div
                variants={{
                  initial: { y: 0 },
                  animate: {
                    y: [-10, 10, -10],
                    transition: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }
                }}
                initial="initial"
                animate="animate"
                className={cn(
                  "absolute -top-4 -right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 border-2 border-gold",
                  effects.shadow.gold.md,
                  effects.transition.base,
                  "flex items-center gap-3"
                )}
              >
                <div className={cn("flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-amber-500 shadow-[0_0_15px_rgba(255,184,0,0.3)] group-hover:scale-110 transition-transform duration-300")}>
                  <Clock className="w-5 h-5 text-black" />
                </div>
                <div className={cn(
                  language === 'ar' && "font-arabic text-right"
                )}>
                  <div className="text-white text-sm font-medium">{t.stats.support.title}</div>
                  <div className="text-[#FFB800] text-xs">{t.stats.support.subtitle}</div>
                </div>
              </motion.div>

              <motion.div
                variants={{
                  initial: { y: 0 },
                  animate: {
                    y: [-10, 10, -10],
                    transition: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }
                }}
                initial="initial"
                animate="animate"
                className={cn(
                  "absolute -bottom-4 -left-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 border-2 border-gold",
                  effects.shadow.gold.md,
                  effects.transition.base,
                  "flex items-center gap-3"
                )}
              >
                <div className={cn("flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-amber-500 shadow-[0_0_15px_rgba(255,184,0,0.3)] group-hover:scale-110 transition-transform duration-300")}>
                  <Clock className="w-5 h-5 text-black" />
                </div>
                <div className={cn(
                  language === 'ar' && "font-arabic text-right"
                )}>
                  <div className="text-white text-sm font-medium">{t.stats.success.title}</div>
                  <div className="text-[#FFB800] text-xs">{t.stats.success.subtitle}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 