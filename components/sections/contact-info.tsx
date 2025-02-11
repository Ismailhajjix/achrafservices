"use client"

import Link from "next/link"
import { MessageSquare, Phone, Mail, MapPin, Linkedin as LinkedinIcon, Twitter, Facebook, Instagram } from "lucide-react"

const address = "Administrative District near Manhattan Cafe, Nador"

export function ContactInfo() {
  return (
    <div className="mt-6 pt-6 border-t border-gold/20">
      <div className="bg-black/40 backdrop-blur-xl border border-gold/20 rounded-xl p-6 shadow-[0_0_30px_rgba(255,184,0,0.1)]">
        <h3 className="text-gold font-heading text-lg font-semibold mb-4 flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Contact Us
        </h3>
        
        <div className="space-y-4">
          {/* Address */}
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
            <p className="text-gray-300 leading-relaxed">
              {address}
            </p>
          </div>

          {/* Phone Numbers */}
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-gold shrink-0 mt-0.5" />
            <div className="space-y-1">
              <Link href="tel:+212532323358" className="block text-gray-300 hover:text-gold transition-colors">
                +212 5 32 32 33 58
              </Link>
              <Link href="tel:+212664690555" className="block text-gray-300 hover:text-gold transition-colors">
                +212 6 64 69 05 55
              </Link>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-gold shrink-0 mt-0.5" />
            <Link href="mailto:contact@achrafservices.ma" className="text-gray-300 hover:text-gold transition-colors">
              contact@achrafservices.ma
            </Link>
          </div>

          {/* Social Media */}
          <div className="flex items-start gap-3">
            <div className="h-5 w-5 text-gold shrink-0 mt-0.5 opacity-0" />
            <div className="flex items-center gap-4">
              <Link href="https://linkedin.com" className="text-gray-300 hover:text-gold transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-300 hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://facebook.com" className="text-gray-300 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-300 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 