"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const features = [
  {
    icon: "/images/icons/expert.svg",
    title: "Business Formation",
    description: "Complete company, cooperative, and association setup with full documentation, tax registration, and banking support.",
    gradient: "from-[#FFB800] via-[#FFCD4D] to-[#FFB800]",
    stats: "500+ Businesses Launched"
  },
  {
    icon: "/images/icons/process.svg",
    title: "Immigration Services",
    description: "Expert visa processing, residence permits, citizenship applications, and family reunification services.",
    gradient: "from-[#FFB800] via-[#FFE066] to-[#FFB800]",
    stats: "10K+ Successful Cases"
  },
  {
    icon: "/images/icons/client.svg",
    title: "Legal Documentation",
    description: "Professional document authentication, apostille services, real estate registry, and legal consultation.",
    gradient: "from-[#FFB800] via-[#FFD700] to-[#FFB800]",
    stats: "24/7 Support"
  },
  {
    icon: "/images/icons/business.svg",
    title: "Support Services",
    description: "Comprehensive ANAPEC registration, social security services, and self-entrepreneur assistance.",
    gradient: "from-[#FFB800] via-[#FFC847] to-[#FFB800]",
    stats: "98% Success Rate"
  }
]

export function AboutCompany() {
  return (
    <section id="about-company" className="relative py-8 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,184,0,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,184,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" 
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block relative mb-4 sm:mb-6"
            >
              <div className="relative border border-gold/30 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 backdrop-blur-xl bg-black/30 shadow-[0_0_30px_rgba(255,184,0,0.1)]">
                <div className="text-gold font-medium text-xs sm:text-sm tracking-wider uppercase bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent">
                  YOUR TRUSTED PARTNER
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6"
            >
              <div className="text-white/95 mb-1 sm:mb-2">Transform Your Future with</div>
              <div className="relative">
                <span className="bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent">
                  19+ Premium Services
                </span>
              </div>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8"
            >
              Located in the Administrative District of Nador, near Manhattan Café, Agence Achraf Services is your premier partner for business formation, legal documentation, and immigration services in Morocco. With a proven track record of over 10,000 successful cases, we transform complex administrative processes into seamless experiences, available Monday through Friday, 9:00 AM to 5:00 PM.
            </motion.p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative">
                    {/* Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 rounded-lg opacity-0 group-hover:opacity-100 blur-lg transition-all duration-700" />
                    
                    {/* Card Container */}
                    <div className="relative p-4 rounded-lg bg-black/40 backdrop-blur-xl border border-white/5 group-hover:border-gold/20 transition-all duration-500">
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-black/80 via-black/50 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Content */}
                      <div className="relative flex flex-col gap-3">
                        {/* Icon and Title Row */}
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0">
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-[1px] overflow-hidden`}>
                              <div className="w-full h-full rounded-lg bg-black flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                <Image
                                  src={feature.icon}
                                  alt={feature.title}
                                  width={20}
                                  height={20}
                                  className="w-6 h-6 text-gold brightness-[1.2] contrast-[1.2] drop-shadow-[0_0_3px_rgba(255,184,0,0.6)] invert-[1]"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-[15px] font-semibold text-white group-hover:text-gold transition-colors duration-300 whitespace-nowrap">
                              {feature.title}
                            </h3>
                            <p className="text-xs text-gold/80 font-medium mt-0.5">
                              {feature.stats}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 transition-all duration-300" />
                        </div>
                        
                        {/* Description */}
                        <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 line-clamp-2">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced CTA Button */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-[#FFB800] via-[#FFCD4D] to-[#FFB800] text-black text-sm sm:text-base font-medium hover:shadow-[0_0_30px_rgba(255,184,0,0.3)] transition-all duration-500 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Transform Your Future Today
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white to-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </Link>
          </motion.div>

          {/* Right Content - Images */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] min-h-[400px] sm:min-h-[500px] lg:min-h-[700px]"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-900">
              <Image
                src="/images/about/main.jpg?v=2"
                alt="About Agence Achraf Services"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover w-full h-full"
                priority
                quality={90}
                loading="eager"
              />
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-4 right-4 z-10"
              >
                <motion.div 
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.03 }}
                  className="relative group"
                >
                  {/* Main Card */}
                  <div className="relative p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-black/95 to-black/90 backdrop-blur-xl border border-white/5">
                    {/* Glow Effects */}
                    <div className="absolute -inset-[2px] bg-gradient-to-r from-gold/30 via-amber-500/30 to-gold/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:duration-200"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-900 to-black rounded-2xl"></div>
                    
                    {/* Inner Content Container */}
                    <div className="relative flex items-center gap-4 sm:gap-6">
                      {/* Number Container */}
                      <div className="relative flex flex-col items-center">
                        <motion.div
                          initial={{ opacity: 0.5 }}
                          whileHover={{ opacity: 1 }}
                          className="relative"
                        >
                          {/* Glowing Background */}
                          <div className="absolute -inset-4 bg-gold/20 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {/* Number with Enhanced Styling */}
                          <div className="relative">
                            <span className="text-5xl sm:text-7xl font-bold bg-gradient-to-br from-gold via-amber-400 to-amber-500 bg-clip-text text-transparent [text-shadow:0_0_20px_rgba(255,184,0,0.4)] tracking-tight">
                              10K
                            </span>
                            <span className="absolute -right-4 sm:-right-6 top-0 text-3xl sm:text-5xl font-bold text-gold/90 [text-shadow:0_0_15px_rgba(255,184,0,0.4)]">
                              +
                            </span>
                          </div>
                        </motion.div>
                      </div>

                      {/* Text Content with Line Animation */}
                      <div className="relative">
                        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-gradient-to-b from-transparent via-gold to-transparent group-hover:h-full transition-all duration-300"></div>
                        <div className="space-y-0.5 sm:space-y-1 pl-2">
                          <motion.div
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                            className="text-sm sm:text-base text-white/90 font-medium tracking-wide"
                          >
                            Successful
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                            className="text-base sm:text-lg text-gold/90 font-semibold tracking-wider"
                          >
                            Applications
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute -top-px -right-px w-6 sm:w-8 h-6 sm:h-8">
                      <div className="absolute inset-0 rotate-45 translate-y-1/2 translate-x-1/2 bg-gradient-to-r from-gold/50 to-amber-500/50 blur"></div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Small Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group absolute bottom-[-20px] sm:bottom-[-42px] -left-4 sm:-left-12 w-48 sm:w-64 h-36 sm:h-48 rounded-xl overflow-hidden shadow-xl bg-zinc-900 hidden sm:block"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold via-amber-500 to-gold p-[1px] rounded-xl">
                <div className="absolute inset-[1px] rounded-[10px] bg-transparent z-10"></div>
              </div>

              {/* Image Container */}
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/images/about/secondary.jpg?v=2"
                  alt="Our Services"
                  fill
                  sizes="(max-width: 768px) 192px, 256px"
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  quality={90}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 