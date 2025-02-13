"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Target, Lightbulb } from "lucide-react"
import { services } from "@/lib/about-data"

export function MissionVision() {
  return (
    <>
      {/* Mission Section - Image Left, Content Right */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,184,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" 
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative h-[300px] lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/about/mission.jpg"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-gold/5 to-white/5 rounded-2xl blur-xl" />
                <div className="relative bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-gold/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 via-gold/20 to-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Target className="w-6 h-6 text-gold" />
                      </div>
                      <h2 className="text-3xl font-bold text-white group-hover:text-gold transition-colors duration-300">Our Mission</h2>
                    </div>

                    <div className="space-y-6">
                      <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed text-lg">
                        To provide exceptional business and immigration services that empower individuals and organizations to achieve their goals in Morocco.
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold mt-2.5" />
                          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                            Deliver personalized solutions for business and immigration needs
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold mt-2.5" />
                          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                            Ensure 100% compliance with Moroccan regulations
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold mt-2.5" />
                          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                            Provide expert guidance through complex procedures
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold mt-2.5" />
                          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                            Maintain highest standards of professionalism and integrity
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold mt-2.5" />
                          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                            Offer multilingual support for international clients
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold mt-2.5" />
                          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                            Foster long-term relationships with our clients
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,184,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" 
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <div className="inline-block">
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent blur-xl group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-r from-gold/20 via-gold/30 to-gold/20 text-white px-4 py-2 rounded-full border border-gold/20 group-hover:border-gold/40 transition-all duration-500">
                  <span className="text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">OUR SERVICES</span>
                </div>
              </div>
            </div>
            
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold">
              <span className="text-white">Comprehensive </span>
              <span className="bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent">Solutions</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group h-[280px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-gold/5 to-white/5 rounded-2xl blur-xl" />
                <div className="relative bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-gold/20 transition-all duration-500 h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <service.icon className="w-12 h-12 text-gold mb-4" />
                    <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 text-base leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section - Content Left, Image Right */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,184,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" 
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-gold/5 to-white/5 rounded-2xl blur-xl" />
                <div className="relative bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-gold/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 via-gold/20 to-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Lightbulb className="w-6 h-6 text-gold" />
                      </div>
                      <h2 className="text-3xl font-bold text-white group-hover:text-gold transition-colors duration-300">Our Vision</h2>
                    </div>

                    <div className="space-y-6">
                      <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed text-lg">
                        To be the leading consultancy firm in Morocco, recognized for our excellence in business and immigration services.
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold mt-2.5" />
                          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                            Set industry standards for service excellence
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold mt-2.5" />
                          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                            Drive innovation in business solutions
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold mt-2.5" />
                          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                            Facilitate seamless international integration
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold mt-2.5" />
                          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                            Contribute to Morocco's economic growth
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold mt-2.5" />
                          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                            Build lasting international partnerships
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold mt-2.5" />
                          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                            Empower sustainable business success
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative h-[300px] lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/about/vision.jpg"
                  alt="Our Vision"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
} 