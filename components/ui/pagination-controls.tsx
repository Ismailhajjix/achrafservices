import { motion } from "framer-motion"

interface PaginationControlsProps {
  currentPage: number
  totalPages: number
  navigation: {
    nextPage: () => void
    previousPage: () => void
    goToPage: (pageIndex: number) => void
  }
}

export function PaginationControls({ currentPage, totalPages, navigation }: PaginationControlsProps) {
  return (
    <div className="mt-8 sm:mt-12 flex flex-col items-center gap-4 sm:gap-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={navigation.previousPage}
          className="p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-white/10 border border-gold/20 hover:border-gold/40 transition-all duration-300"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigation.goToPage(index + 1)}
              className={`w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                currentPage === index + 1
                  ? "bg-gold w-3 sm:w-4"
                  : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={navigation.nextPage}
          className="p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-white/10 border border-gold/20 hover:border-gold/40 transition-all duration-300"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      <div className="text-gold/60 text-xs sm:text-sm">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  )
} 