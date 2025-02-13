"use client"

import Image from 'next/image'
import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          <Link href="/">
            <Image 
              src="/images/footer-logo.png"
              alt="Agence Achraf Services"
              width={180}
              height={45}
              className="h-[45px] w-auto"
              quality={100}
            />
          </Link>
        </div>
      </div>
    </footer>
  )
} 