"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Shield, Award, CheckCircle, Target } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"
import { containers } from "@/styles"
import { useLanguage } from "@/contexts/language-context"
import { trustIndicatorsTranslations } from "@/translations/trust-indicators"

type MetricKey = "successRate" | "satisfiedClients" | "yearsExperience"

const trustMetrics = [
  {
    icon: Shield,
    metric: "98%",
    key: "successRate" as MetricKey
  },
  {
    icon: Award,
    metric: "900+",
    key: "satisfiedClients" as MetricKey
  },
  {
    icon: CheckCircle,
    metric: "10+",
    key: "yearsExperience" as MetricKey
  }
]

interface CounterProps {
  end: number
  duration: number
  suffix?: string
}

function Counter({ end, duration, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (inView && !hasAnimated) {
      let startTime: number
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = (currentTime - startTime) / (duration * 1000)

        if (progress < 1) {
          setCount(Math.min(Math.floor(end * progress), end))
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
          setHasAnimated(true)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [inView, end, duration, hasAnimated])

  return <span ref={ref}>{count}{suffix}</span>
}

export function TrustIndicators() {
  const { language, dir } = useLanguage()
  const t = trustIndicatorsTranslations[language]

  return (
    <section id="trust-indicators" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={containers.background.base}>
          <div className={containers.background.effects.radial} />
          <div className={containers.background.effects.vertical} />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className={containers.background.effects.pattern}
          />
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={cn(
            "text-center mb-16",
            language === 'ar' && "font-arabic"
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-1.5 rounded-full border-2 border-[#FFB800] bg-[#FFB800]/5">
              <span className={cn(
                "text-[#FFB800] text-sm font-semibold tracking-wide",
                language === 'ar' && "font-arabic"
              )}>
                {t.label}
              </span>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={cn(
              "text-4xl md:text-5xl font-bold",
              language === 'ar' && "font-arabic"
            )}
          >
            <div className={cn(
              "flex flex-col items-center gap-2",
              language === 'ar' && "font-arabic"
            )}>
              <span className="text-white">{t.heading.firstLine}</span>
              <span className="text-[#FFB800]">{t.heading.secondLine}</span>
            </div>
          </motion.h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={metric.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFB800]/20 via-[#FFB800]/10 to-[#FFB800]/5 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-xl border-2 border-[#FFB800] transition-all duration-500 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div className={cn(
                  "flex items-start gap-4",
                  language === 'ar' && "flex-row-reverse text-right"
                )}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFB800]/20 to-[#FFB800]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-[#FFB800]">
                    <metric.icon className="w-6 h-6 text-[#FFB800]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-white mb-1">
                      <Counter end={parseInt(metric.metric)} duration={2} suffix={metric.metric.includes('+') ? '+' : '%'} />
                    </div>
                    <div className={cn(
                      "text-lg font-semibold text-[#FFB800] mb-2",
                      language === 'ar' && "font-arabic"
                    )}>
                      {t.metrics[metric.key].label}
                    </div>
                    <div className={cn(
                      "text-white/70",
                      language === 'ar' && "font-arabic"
                    )}>
                      {t.metrics[metric.key].description}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 