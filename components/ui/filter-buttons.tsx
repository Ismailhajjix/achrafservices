import { motion } from "framer-motion"

interface FilterButtonsProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function FilterButtons({ activeFilter, onFilterChange }: FilterButtonsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="max-w-2xl mx-auto px-4 sm:px-6 mt-8 sm:mt-6"
    >
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 justify-center">
          {["All", "popular", "other"].map((filter) => (
            <motion.button
              key={filter}
              onClick={() => onFilterChange(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 relative overflow-hidden flex-1 sm:flex-none
                ${activeFilter === filter
                  ? "bg-gradient-to-r from-gold to-amber-500 text-black shadow-lg"
                  : "bg-white/5 text-white hover:bg-white/10"
                }`}
            >
              <span className="relative z-10">
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
} 