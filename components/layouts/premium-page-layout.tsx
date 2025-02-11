"use client"

import { motion } from "framer-motion"

interface PremiumPageLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
  badge?: string
  removePadding?: boolean
  showTitle?: boolean
}

export function PremiumPageLayout({
  children,
  title,
  subtitle,
  badge = "Premium Service",
  removePadding = false,
  showTitle = true
}: PremiumPageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-black selection:bg-gold/30 selection:text-white">
      {/* Global Background Effects */}
      <div className="fixed inset-0">
        {/* Diagonal lines */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#4f4f4f2e_1px,transparent_1px)] bg-[length:24px_24px]" />
        {/* Vertical and horizontal lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_14px]" />
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </div>
      
      {/* Content */}
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`relative ${removePadding ? "" : "pt-[80px]"}`}
      >
        <div className="relative py-24">
          {/* Premium Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.15),transparent_70%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,184,0,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,184,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" 
            />
          </div>

          <div className="container mx-auto px-4 relative">
            {showTitle && (
              <div className="text-center mb-16">
                {/* Premium Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center mb-8"
                >
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-gold/50 via-amber-500/50 to-gold/50 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-500" />
                    <div className="relative px-8 py-3 bg-black/50 backdrop-blur-xl rounded-full border border-gold/20 group-hover:border-gold/40 transition duration-500">
                      <span className="relative bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent text-sm font-medium tracking-wider uppercase">
                        {badge}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Main Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
                >
                  <div className="bg-gradient-to-r from-white via-zinc-400 to-white bg-clip-text text-transparent mb-2">
                    {title.split(' ')[0]}
                  </div>
                  <div className="relative">
                    <span className="absolute -inset-2 bg-gradient-to-r from-gold/50 via-amber-500/50 to-gold/50 blur-2xl opacity-30" />
                    <span className="relative bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent">
                      {title.split(' ').slice(1).join(' ')}
                    </span>
                  </div>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-4"
                >
                  {subtitle}
                </motion.p>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
                />
              </div>
            )}

            {/* Main Content */}
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  )
}