"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import type { Route } from "next"

interface ErrorPageProps {
  errorCode: string
  message: string
  description?: string
}

export function ErrorPage({ errorCode, message, description }: ErrorPageProps) {
  return (
    <div className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-black px-4 py-6">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,184,0,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,184,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute -right-28 top-1/4 h-64 w-64 -rotate-12 rounded-full bg-gold/30 blur-[96px] sm:h-96 sm:w-96" />
      <div className="absolute -bottom-32 -left-28 h-64 w-64 rotate-12 rounded-full bg-gold/20 blur-[96px] sm:h-96 sm:w-96" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
        <h1 className="bg-gradient-to-b from-white/90 to-white/40 bg-clip-text text-[120px] font-bold leading-[0.8] tracking-tighter text-transparent xs:text-[140px] sm:text-[160px] md:text-[180px] lg:text-[220px]">
          {errorCode}
        </h1>
        
        <h2 className="mb-4 mt-4 px-4 text-2xl font-bold tracking-tight text-white xs:text-3xl sm:text-4xl md:text-5xl">
          {message}
        </h2>

        <p className="mx-auto mb-8 max-w-md px-4 text-base text-zinc-400 sm:text-lg">
          {description}
        </p>

        <div className="flex flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:gap-4">
          <Link
            href="/"
            className={cn(
              "inline-flex w-full items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-black",
              "bg-gradient-to-r from-[#FFB800] via-[#FFD700] to-[#FFB800]",
              "shadow-[0_0_30px_rgba(255,184,0,0.3)] transition-all duration-300",
              "hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,184,0,0.4)]",
              "sm:w-auto sm:px-8 sm:py-3 sm:text-base"
            )}
          >
            Back home
          </Link>
          <Link
            href={{ pathname: "/contact" }}
            className={cn(
              "inline-flex w-full items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-white",
              "border border-gold/20 transition-all duration-300 hover:bg-white/5",
              "sm:w-auto sm:px-8 sm:py-3 sm:text-base"
            )}
          >
            Contact Support
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-0 right-0 px-4 text-center text-xs text-white/60 sm:bottom-6 sm:text-sm md:bottom-8">
        <p className="mx-auto max-w-[90%]">
          ©2024 Agence Achraf Services • Built by{" "}
          <a 
            href="https://www.instagram.com/nadevogroupe/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gold transition-colors hover:text-gold/80"
          >
            @nadevogroupe
          </a>
        </p>
      </footer>
    </div>
  )
} 