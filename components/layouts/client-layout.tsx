"use client"

import { Navigation } from "@/components/layouts/navigation"
import { Footer } from "@/components/layouts/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { useEffect, useState } from "react"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // Prevents hydration mismatch by not rendering anything on server
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}