import { motion } from "framer-motion"

export function SectionHeader() {
  return (
    <div className="text-center mb-8 sm:mb-12 lg:mb-16 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative inline-block"
      >
        <span className="relative inline-flex flex-col items-center">
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -top-6 sm:-top-8 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent w-full"
          />
          <span className="inline-block text-gold font-medium text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 relative px-4 sm:px-8 py-1.5 sm:py-2">
            <span className="relative z-10">SUPPORTED EUROPEAN DESTINATIONS</span>
            <motion.span
              className="absolute inset-0 bg-gold/5 rounded-lg"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />
          </span>
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10 tracking-tight px-4 sm:px-0">
          <span className="text-white">Discover Your </span>
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent">
              European Gateway
            </span>
          </span>
        </h1>
      </motion.div>
    </div>
  )
} 