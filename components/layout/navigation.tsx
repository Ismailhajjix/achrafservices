"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import type { Route } from "next"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-black/0 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="relative z-50">
            <Image 
              src="/images/logo.png" 
              alt="Agence Achraf Services Logo"
              width={180}
              height={50}
              className="h-7 xs:h-8 sm:h-9 md:h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 text-white hover:text-gold transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <Link 
              href={{ pathname: "/" as Route }} 
              className="text-sm lg:text-base text-white hover:text-gold transition-colors px-2"
            >
              Home
            </Link>
            <Link 
              href={{ pathname: "/about" as Route }} 
              className="text-sm lg:text-base text-white hover:text-gold transition-colors px-2"
            >
              About
            </Link>
            <Link 
              href={{ pathname: "/services" as Route }} 
              className="text-sm lg:text-base text-white hover:text-gold transition-colors px-2"
            >
              Services
            </Link>
            <Link 
              href={{ pathname: "/contact" as Route }} 
              className="text-sm lg:text-base text-white hover:text-gold transition-colors px-2"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black/95 backdrop-blur-lg md:hidden pt-20 sm:pt-24">
              <div className="flex flex-col items-center justify-start h-full gap-5 sm:gap-8 p-4">
                <Link 
                  href={{ pathname: "/" as Route }} 
                  className="text-xl sm:text-2xl text-white hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href={{ pathname: "/about" as Route }} 
                  className="text-xl sm:text-2xl text-white hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href={{ pathname: "/services" as Route }} 
                  className="text-xl sm:text-2xl text-white hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href={{ pathname: "/contact" as Route }} 
                  className="text-xl sm:text-2xl text-white hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
} 