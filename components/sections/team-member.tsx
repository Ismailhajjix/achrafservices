"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Twitter, Share2, Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Alexander Mitchell",
    role: "Business Strategy Director",
    expertise: "Market Expansion & Growth",
    image: "/images/team/prince-brown.jpg",
    socialLinks: [
      { icon: Linkedin, url: "https://www.linkedin.com/#" },
      { icon: Twitter, url: "https://www.twitter.com/#" },
    ],
  },
  {
    name: "Sarah Chen",
    role: "Financial Advisory Lead",
    expertise: "Corporate Finance",
    image: "/images/team/sara-albert.jpg",
    socialLinks: [
      { icon: Linkedin, url: "https://www.linkedin.com/#" },
      { icon: Twitter, url: "https://www.twitter.com/#" },
    ],
  },
  {
    name: "Marcus Rodriguez",
    role: "Technology Consultant",
    expertise: "Digital Solutions",
    image: "/images/team/mike-hardson.jpg",
    socialLinks: [
      { icon: Linkedin, url: "https://www.linkedin.com/#" },
      { icon: Twitter, url: "https://www.twitter.com/#" },
    ],
  },
  {
    name: "Elena Petrova",
    role: "Operations Director",
    expertise: "Business Excellence",
    image: "/images/team/christine-eve.jpg",
    socialLinks: [
      { icon: Linkedin, url: "https://www.linkedin.com/#" },
      { icon: Twitter, url: "https://www.twitter.com/#" },
    ],
  },
]

export function TeamMember() {
  return (
    <section className="relative py-12 xs:py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,184,0,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,184,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" 
      />

      <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-10 xs:mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-gold font-medium text-[10px] xs:text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 relative before:absolute before:w-6 xs:before:w-8 before:h-0.5 before:bg-gold before:left-0 before:top-1/2 before:-translate-x-8 xs:before:-translate-x-10 after:absolute after:w-6 xs:after:w-8 after:h-0.5 after:bg-gold after:right-0 after:top-1/2 after:translate-x-8 xs:after:translate-x-10"
          >
            EXPERT TEAM
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bold mb-4 xs:mb-5 sm:mb-6 md:mb-8"
          >
            <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-1 sm:mb-2">
              Meet Our
            </div>
            <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gold">
              Business Consultants
            </div>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto text-xs xs:text-sm sm:text-base px-2 xs:px-4"
          >
            Transform your business with our expert guidance and strategic solutions
          </motion.p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Member Card */}
              <div className="relative overflow-hidden rounded-xl xs:rounded-2xl bg-[#1A1500] border-2 border-gold/20 transition-all duration-300 group-hover:border-gold/40">
                {/* Member Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    quality={90}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links */}
                  <div className="absolute bottom-3 xs:bottom-4 left-0 right-0 flex justify-center gap-2 xs:gap-3 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {member.socialLinks.map((link, idx) => (
                      <Link
                      key={idx}
                      href={{ pathname: link.url }}
                      className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#FFB800] to-[#FFCD4D] flex items-center justify-center text-black hover:scale-110 transition-transform duration-300"
                    >
                      <link.icon className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                    </Link>
                    ))}
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-3 xs:p-4 sm:p-6">
                  <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-white mb-1.5 xs:mb-2">{member.name}</h3>
                  <p className="text-gold font-medium mb-2 text-xs xs:text-sm sm:text-base">{member.role}</p>
                  <div className="bg-gold/10 rounded-full px-2.5 xs:px-3 py-1 text-[10px] xs:text-xs text-gold inline-block">
                    {member.expertise}
                  </div>
                </div>

                {/* Share Button */}
                <button className="absolute top-3 xs:top-4 right-3 xs:right-4 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70">
                  <Share2 className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 