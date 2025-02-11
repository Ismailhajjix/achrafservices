"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/forms/button"
import { Input } from "@/components/ui/forms/input"
import { Textarea } from "@/components/ui/forms/textarea"
import { MapPin, Mail, Phone, Clock, Send, ArrowRight, MessageSquare, Users, CheckCircle2, ChevronUp } from "lucide-react"
import { useState, useEffect } from "react"

export function ContactForm() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    if (isClient) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="contact-form" className="relative py-10 xs:py-12 sm:py-16 lg:py-24 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,184,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" 
        />
        {/* Animated Gradient Orbs */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 -left-32 w-64 h-64 bg-gold/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gold/20 rounded-full blur-3xl"
        />
      </div>
      
      {/* Main Title Section */}
      <div className="container mx-auto px-4 relative mb-6 xs:mb-8 sm:mb-12 lg:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent blur-xl group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-r from-gold/20 via-gold/30 to-gold/20 text-white px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 rounded-full border border-gold/20 group-hover:border-gold/40 transition-all duration-500">
                <span className="text-[10px] xs:text-xs sm:text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">Your Success, Our Commitment</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-3 xs:mt-4 sm:mt-6 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold"
          >
            <div className="text-white mb-1 xs:mb-2">Get in Touch with Our</div>
            <div className="relative">
              <span className="bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent animate-gradient-x">
                Expert Team
              </span>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-3 xs:mt-4 text-white/70 text-xs xs:text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-2 xs:px-4"
          >
            Let's discuss how we can help you achieve your immigration and business goals. Our team is ready to provide personalized solutions tailored to your needs.
          </motion.p>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 lg:gap-12 xl:gap-16 max-w-7xl mx-auto">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Enhanced Glass Effect Card */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-gold/5 to-white/5 rounded-2xl blur-xl" />
            <div className="relative bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-xl rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 lg:p-8 border border-white/10 hover:border-gold/20 transition-all duration-500 group">
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Section Header */}
              <div className="mb-4 xs:mb-6 sm:mb-8 lg:mb-10 relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4"
                >
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                  <span className="text-gold font-medium text-xs sm:text-sm tracking-wider uppercase">Contact Us</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-3 xs:mb-4"
                >
                  <span className="text-white">Send Us a </span>
                  <span className="bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
                    Message
                  </span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-white/70 text-xs xs:text-sm sm:text-base"
                >
                  Fill out the form and our team will get back to you within 24 hours.
                </motion.p>
              </div>

              {/* Enhanced Contact Form */}
              <motion.form className="space-y-3 xs:space-y-4 sm:space-y-5">
                {/* Name Input */}
                <div className="group relative">
                  <Input 
                    placeholder="Your Name" 
                    className="w-full h-9 xs:h-10 sm:h-12 pl-9 xs:pl-10 sm:pl-12 pr-3 xs:pr-4 rounded-lg xs:rounded-xl bg-white/5 backdrop-blur-xl border-white/10 text-white placeholder:text-transparent focus:border-gold/30 focus:ring-gold/10 transition-all duration-300 peer text-xs xs:text-sm sm:text-base" 
                  />
                  <label className="absolute left-9 xs:left-10 sm:left-12 top-1/2 -translate-y-1/2 text-white/50 transition-all duration-300 pointer-events-none peer-focus:-translate-y-8 peer-focus:text-gold/80 peer-[:not(:placeholder-shown)]:-translate-y-8 peer-[:not(:placeholder-shown)]:text-gold/80 text-xs xs:text-sm sm:text-base">Your Name</label>
                  <Users className="absolute left-2.5 xs:left-3 sm:left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white/90 group-hover:text-gold transition-colors duration-300" />
                </div>

                {/* Email Input */}
                <div className="group relative">
                  <Input 
                    placeholder="Your Email" 
                    type="email" 
                    className="w-full h-9 xs:h-10 sm:h-12 pl-9 xs:pl-10 sm:pl-12 pr-3 xs:pr-4 rounded-lg xs:rounded-xl bg-white/5 backdrop-blur-xl border-white/10 text-white placeholder:text-transparent focus:border-gold/30 focus:ring-gold/10 transition-all duration-300 peer text-xs xs:text-sm sm:text-base" 
                  />
                  <label className="absolute left-9 xs:left-10 sm:left-12 top-1/2 -translate-y-1/2 text-white/50 transition-all duration-300 pointer-events-none peer-focus:-translate-y-8 peer-focus:text-gold/80 peer-[:not(:placeholder-shown)]:-translate-y-8 peer-[:not(:placeholder-shown)]:text-gold/80 text-xs xs:text-sm sm:text-base">Your Email</label>
                  <Mail className="absolute left-2.5 xs:left-3 sm:left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white/90 group-hover:text-gold transition-colors duration-300" />
                </div>

                {/* Subject Input */}
                <div className="group relative">
                  <Input 
                    placeholder="Subject" 
                    className="w-full h-9 xs:h-10 sm:h-12 pl-9 xs:pl-10 sm:pl-12 pr-3 xs:pr-4 rounded-lg xs:rounded-xl bg-white/5 backdrop-blur-xl border-white/10 text-white placeholder:text-transparent focus:border-gold/30 focus:ring-gold/10 transition-all duration-300 peer text-xs xs:text-sm sm:text-base" 
                  />
                  <label className="absolute left-9 xs:left-10 sm:left-12 top-1/2 -translate-y-1/2 text-white/50 transition-all duration-300 pointer-events-none peer-focus:-translate-y-8 peer-focus:text-gold/80 peer-[:not(:placeholder-shown)]:-translate-y-8 peer-[:not(:placeholder-shown)]:text-gold/80 text-xs xs:text-sm sm:text-base">Subject</label>
                  <MessageSquare className="absolute left-2.5 xs:left-3 sm:left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white/90 group-hover:text-gold transition-colors duration-300" />
                </div>

                {/* Message Textarea */}
                <div className="group relative">
                  <Textarea 
                    placeholder="Your Message" 
                    className="w-full min-h-[80px] xs:min-h-[100px] sm:min-h-[120px] pl-9 xs:pl-10 sm:pl-12 pr-3 xs:pr-4 pt-2 xs:pt-3 rounded-lg xs:rounded-xl bg-white/5 backdrop-blur-xl border-white/10 text-white placeholder:text-transparent focus:border-gold/30 focus:ring-gold/10 transition-all duration-300 peer text-xs xs:text-sm sm:text-base" 
                    rows={4} 
                  />
                  <label className="absolute left-9 xs:left-10 sm:left-12 top-2 xs:top-3 text-white/50 transition-all duration-300 pointer-events-none peer-focus:-translate-y-8 peer-focus:text-gold/80 peer-[:not(:placeholder-shown)]:-translate-y-8 peer-[:not(:placeholder-shown)]:text-gold/80 text-xs xs:text-sm sm:text-base">Your Message</label>
                  <MessageSquare className="absolute left-2.5 xs:left-3 sm:left-4 top-2 xs:top-3 w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white/90 group-hover:text-gold transition-colors duration-300" />
                </div>

                {/* Enhanced Submit Button */}
                <Button className="w-full relative group overflow-hidden h-9 xs:h-10 sm:h-12 px-4 xs:px-6 sm:px-8 rounded-lg xs:rounded-xl bg-gradient-to-r from-gold/80 via-gold to-gold/80 text-black font-semibold transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,184,0,0.3)] hover:scale-[0.99] active:scale-[0.97] text-xs xs:text-sm sm:text-base">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span className="font-medium">Send Message</span>
                    <Send className="w-3.5 h-3.5 xs:w-4 xs:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white to-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </Button>
              </motion.form>
            </div>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-3 xs:space-y-4 sm:space-y-6 order-1 lg:order-2"
          >
            {/* Office Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-gold/5 to-white/5 rounded-2xl blur-xl" />
              <div className="relative rounded-2xl bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:border-gold/20 transition-all duration-500 overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-gold/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center gap-4 sm:gap-6 relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-white/10 via-gold/20 to-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white/90 group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-gold transition-colors duration-300">Our Office</h3>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 whitespace-pre-line text-right text-sm sm:text-base">الحي الإداري قرب مقهى منهاتن الناظور</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-gold/5 to-white/5 rounded-2xl blur-xl" />
              <div className="relative rounded-2xl bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:border-gold/20 transition-all duration-500 overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-gold/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center gap-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 via-gold/20 to-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <Mail className="w-7 h-7 text-white/90 group-hover:text-gold transition-colors duration-300 brightness-[1.2] contrast-[1.2] drop-shadow-[0_0_3px_rgba(255,184,0,0.6)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-gold transition-colors duration-300">Contact Info</h3>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">Email: Contact@achrafservices.ma</p>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">Phone: 05 32 32 33 58</p>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">Mobile: 06 64 69 05 55</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Working Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-gold/5 to-white/5 rounded-2xl blur-xl" />
              <div className="relative rounded-2xl bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-xl p-6 sm:p-8 border border-white/10 hover:border-gold/20 transition-all duration-500 overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-gold/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center gap-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 via-gold/20 to-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <Clock className="w-7 h-7 text-white/90 group-hover:text-gold transition-colors duration-300 brightness-[1.2] contrast-[1.2] drop-shadow-[0_0_3px_rgba(255,184,0,0.6)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-gold transition-colors duration-300">Working Hours</h3>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Additional Contact Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 xs:mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3"
            >
              {/* Quick Response Card */}
              <div className="group relative bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-gold/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,184,0,0.05)] flex-1">
                <div className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 via-gold/20 to-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <MessageSquare className="w-6 h-6 text-white/90 group-hover:text-gold transition-colors duration-300 brightness-[1.2] contrast-[1.2] drop-shadow-[0_0_3px_rgba(255,184,0,0.6)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-gold transition-colors duration-300 text-sm sm:text-base">Quick Response</h4>
                    <p className="text-white/60 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-300">Within 24 Hours</p>
                  </div>
                </div>
              </div>

              {/* Expert Team Card */}
              <div className="group relative bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-gold/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,184,0,0.05)] flex-1">
                <div className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 via-gold/20 to-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <Users className="w-6 h-6 text-white/90 group-hover:text-gold transition-colors duration-300 brightness-[1.2] contrast-[1.2] drop-shadow-[0_0_3px_rgba(255,184,0,0.6)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-gold transition-colors duration-300 text-sm sm:text-base">Expert Team</h4>
                    <p className="text-white/60 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-300">Professional Support</p>
                  </div>
                </div>
              </div>

              {/* Success Rate Card */}
              <div className="group relative bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-gold/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,184,0,0.05)] flex-1">
                <div className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 via-gold/20 to-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <CheckCircle2 className="w-6 h-6 text-white/90 group-hover:text-gold transition-colors duration-300 brightness-[1.2] contrast-[1.2] drop-shadow-[0_0_3px_rgba(255,184,0,0.6)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-gold transition-colors duration-300 text-sm sm:text-base">High Success</h4>
                    <p className="text-white/60 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-300">98% Success Rate</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isClient && showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-4 xs:bottom-6 right-4 xs:right-6 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full bg-gold/90 hover:bg-gold flex items-center justify-center text-black transition-all duration-300 hover:scale-110 z-50"
        >
          <ChevronUp className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
        </motion.button>
      )}
    </section>
  )
}

