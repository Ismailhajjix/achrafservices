"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navigation } from "@/components/layout/navigation"

export function Header() {
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10 transition-all duration-200"
      style={{ height: "64px" }}
      suppressHydrationWarning
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              suppressHydrationWarning
            >
              <Image 
                src="/images/header-logo.png"
                alt="Agence Achraf Services"
                width={150}
                height={40}
                className="h-[35px] w-auto"
                priority
                quality={100}
              />
            </motion.div>
          </Link>

          <Navigation />
        </div>
      </div>
    </header>
  )
}