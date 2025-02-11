"use client"

import { motion } from "framer-motion"

export function HeaderSkeleton() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar Skeleton */}
      <div className="bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] py-1">
        <div className="container mx-auto">
          <div className="flex justify-between items-center px-4">
            <div className="flex items-center gap-6">
              <div className="h-4 w-64 bg-black/10 rounded animate-pulse" />
            </div>
            <div className="flex items-center gap-4">
              <div className="h-4 w-32 bg-black/10 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Skeleton */}
      <div className="bg-black/75 backdrop-blur-md">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 px-8">
            {/* Logo Area */}
            <div className="h-[60px] w-[180px] bg-white/10 rounded animate-pulse" />

            {/* Navigation Items */}
            <div className="hidden md:flex items-center gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-4 w-24 bg-white/10 rounded animate-pulse" />
              ))}
            </div>

            {/* Right Section */}
            <div className="hidden md:flex items-center gap-4">
              <div className="h-10 w-24 bg-white/10 rounded animate-pulse" />
              <div className="h-10 w-24 bg-gradient-to-r from-[#FFB800] to-[#FFCD4D] rounded-full animate-pulse" />
            </div>

            {/* Mobile Menu Button */}
            <div className="h-6 w-6 bg-white/10 rounded md:hidden animate-pulse" />
          </div>
        </div>
      </div>
    </header>
  )
} 