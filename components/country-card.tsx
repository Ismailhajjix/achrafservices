import { motion } from "framer-motion"
import { OptimizedFlagImage } from "@/components/ui/optimized-flag-image"
import type { Country } from "@/data/countries"

interface CountryCardProps {
  country: Country
  index: number
}

export default function CountryCard({ country, index }: CountryCardProps) {
  return (
    <motion.div
      key={country.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      {/* Card Content */}
      <div className="relative bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-xl rounded-xl border border-white/10 hover:border-gold/20 transition-all duration-500 overflow-hidden h-full">
        {/* Hover Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Content Container */}
        <div className="relative z-10 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-8 rounded-md overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-lg">
                <OptimizedFlagImage
                  src={country.flag}
                  alt={country.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold bg-gradient-to-r from-white via-zinc-400 to-white bg-clip-text text-transparent group-hover:from-gold group-hover:via-amber-500 group-hover:to-gold transition-all duration-300">
                {country.name}
              </h2>
            </div>
            
            {country.isPopular && (
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#FFB800] blur-md opacity-50" />
                <div className="relative bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#FFB800] px-2 py-1 rounded-full">
                  <span className="text-black text-[10px] font-medium tracking-wide uppercase">
                    Popular
                  </span>
                </div>
              </div>
            )}
          </div>

          <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 line-clamp-2">
            {country.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
} 