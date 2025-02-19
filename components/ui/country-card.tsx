import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { countriesTranslations } from "@/translations/countries"
import { commonTranslations } from "@/translations/common"
import { useRTL } from "@/hooks/use-rtl"
import { cn } from "@/lib/utils"
import Image from "next/image"

type Language = "en" | "fr" | "ar"

interface CountryCardProps {
  country: {
    key: string
    name: string
    flag: string
    description: string
    processingTime: string
    isPopular?: boolean
  }
  index?: number
}

export default function CountryCard({ country, index = 0 }: CountryCardProps) {
  const { language, dir } = useLanguage()
  const rtl = useRTL()
  const translations = countriesTranslations[country.key]?.[language as Language]
  const commonT = commonTranslations[language as Language]

  if (!translations) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group h-full"
      dir={dir}
    >
      <div className={cn(
        "relative p-4 sm:p-6 lg:p-8 rounded-2xl overflow-hidden h-full",
        "bg-gradient-to-b from-black/80 via-black/50 to-black/80",
        "backdrop-blur-xl",
        "border-[2.5px] border-[#FFB800]",
        "group-hover:border-[#FFD700]",
        "transition-all duration-500",
        "shadow-[0_0_30px_rgba(255,184,0,0.15)]",
        "group-hover:shadow-[0_0_50px_rgba(255,184,0,0.3)]",
        "after:absolute after:inset-[1px] after:rounded-[14px] after:bg-black/40 after:z-0"
      )}>
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-gold/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
        
        {/* Corner Borders */}
        <div className={cn(
          "absolute top-0 w-16 sm:w-20 h-16 sm:h-20",
          rtl.isRTL ? 'right-0' : 'left-0'
        )}>
          <div className={cn(
            "absolute top-0 w-[2px] h-10 sm:h-12 bg-gradient-to-b from-[#FFD700] to-transparent",
            rtl.isRTL ? 'right-0' : 'left-0'
          )} />
          <div className={cn(
            "absolute top-0 w-10 sm:w-12 h-[2px]",
            rtl.isRTL 
              ? 'right-0 bg-gradient-to-l from-[#FFD700] to-transparent' 
              : 'left-0 bg-gradient-to-r from-[#FFD700] to-transparent'
          )} />
        </div>
        <div className={cn(
          "absolute bottom-0 w-16 sm:w-20 h-16 sm:h-20",
          rtl.isRTL ? 'left-0' : 'right-0'
        )}>
          <div className={cn(
            "absolute bottom-0 w-[2px] h-10 sm:h-12 bg-gradient-to-t from-[#FFD700] to-transparent",
            rtl.isRTL ? 'left-0' : 'right-0'
          )} />
          <div className={cn(
            "absolute bottom-0 w-10 sm:w-12 h-[2px]",
            rtl.isRTL 
              ? 'left-0 bg-gradient-to-r from-[#FFD700] to-transparent' 
              : 'right-0 bg-gradient-to-l from-[#FFD700] to-transparent'
          )} />
        </div>

        {/* Popular Badge */}
        {country.isPopular && (
          <div className={cn(
            "absolute z-10 rounded-full px-3 py-1.5 text-xs font-medium",
            "bg-gradient-to-r from-[#FFD700] via-amber-500 to-[#FFD700]",
            "text-black",
            "shadow-[0_0_15px_rgba(255,184,0,0.3)]",
            "transform -rotate-12",
            rtl.isRTL ? "-left-2 -top-2" : "-right-2 -top-2"
          )}>
            {commonT.popular}
          </div>
        )}

        {/* Content */}
        <div className="relative z-10">
          {/* Title with Flag */}
          <div className={cn(
            "flex items-center gap-3 mb-3",
            rtl.flexDirection()
          )}>
            {/* Flag */}
            <div className="relative w-8 h-6 rounded-sm overflow-hidden flex-shrink-0">
              <Image
                src={country.flag}
                alt={translations.name}
                fill
                className="object-cover"
                unoptimized
                sizes="32px"
              />
            </div>
            {/* Title */}
            <h3 className={cn(
              "text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors duration-300",
              rtl.isRTL ? "text-right" : "text-left",
              language === 'ar' && "font-arabic"
            )}>
              {translations.name}
            </h3>
          </div>

          <p className={cn(
            "mt-3 text-white/80 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300",
            rtl.isRTL ? "text-right" : "text-left",
            language === 'ar' && "font-arabic"
          )}>
            {translations.description}
          </p>

          {/* Processing Time */}
          <div className={cn(
            "mt-6 flex items-center gap-2",
            rtl.flexDirection()
          )}>
            <div className={cn(
              "flex items-center gap-2",
              rtl.flexDirection()
            )}>
              <div className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
              <span className={cn(
                "text-xs text-white/80",
                language === 'ar' && "font-arabic"
              )}>
                {commonT.processingTime}
              </span>
            </div>
            <span className={cn(
              "text-xs text-[#FFB800]",
              language === 'ar' && "font-arabic"
            )}>
              {translations.processingTime}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 