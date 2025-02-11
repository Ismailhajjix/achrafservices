"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Clock } from "lucide-react"
import Link from "next/link"

export function CompanyDetails() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Glass Effect Card */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-gold/5 to-white/5 rounded-2xl blur-xl" />
      <div className="relative bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-gold/20 transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-gold/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Section Title */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
            Company Details
          </h2>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 via-gold/20 to-white/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white/90" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Address</h3>
              <p className="text-zinc-400 text-sm">الحي الإداري قرب مقهى منهاتن الناظور</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 via-gold/20 to-white/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-white/90" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Email</h3>
              <Link 
                href="mailto:Contact@achrafservices.ma"
                className="text-zinc-400 text-sm hover:text-gold transition-colors"
              >
                Contact@achrafservices.ma
              </Link>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 via-gold/20 to-white/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-white/90" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Phone</h3>
              <div className="space-y-1">
                <Link 
                  href="tel:+212532323358"
                  className="block text-zinc-400 text-sm hover:text-gold transition-colors"
                >
                  05 32 32 33 58
                </Link>
                <Link 
                  href="tel:+212664690555"
                  className="block text-zinc-400 text-sm hover:text-gold transition-colors"
                >
                  06 64 69 05 55
                </Link>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 via-gold/20 to-white/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-white/90" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Working Hours</h3>
              <div className="text-zinc-400 text-sm space-y-1">
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 