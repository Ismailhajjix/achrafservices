"use client"

import { useState, useEffect } from "react"
import { Hero } from "@/components/sections/hero"
import { VIPServices } from "@/components/sections/vip-services"
import { WorkingProcess } from "@/components/sections/working-process"
import { AboutCompany } from "@/components/sections/about-company"
import { ChooseYourDestination } from "@/components/sections/choose-your-destination"
import { TeamMember } from "@/components/sections/team-member"
import { ContactForm } from "@/components/sections/contact-form"
import { Testimonials } from "@/components/sections/testimonials"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function HomeContent() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // Return null on server-side and first client render
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col min-h-screen bg-black selection:bg-gold/30 selection:text-white"
      >
        {/* Background Effects */}
        <div className="fixed inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#4f4f4f2e_1px,transparent_1px)] bg-[length:24px_24px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_14px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.08),transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        </div>
        
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-80px)] mb-22">
          {/* Background Image with Parallax */}
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="/images/hero-bg.jpg"
              alt="Hero Background"
              fill
              priority
              quality={100}
              className="object-cover object-center"
            />
          </motion.div>

          {/* Premium Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black z-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20" />
          
          {/* Hero Content */}
          <div className="relative z-30 h-full">
            <Hero />
          </div>
        </section>

        {/* Main Content */}
        <main className="flex-grow relative z-10">
          <VIPServices />
          <WorkingProcess />
          <AboutCompany />
          <ChooseYourDestination />
          <TeamMember />
          <Testimonials />
          <ContactForm />
        </main>
      </motion.div>
    </AnimatePresence>
  )
} 