"use client"

import { useEffect, useState } from 'react'
import { HomeContent } from './home-content'

export function HomePageWrapper() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#FFB800] rounded-full animate-spin border-t-transparent" />
      </div>
    )
  }

  return <HomeContent />
} 