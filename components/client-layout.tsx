"use client"

import Header from "@/components/header"
import { Footer } from "@/components/footer/footer"
import { ThemeProvider } from "@/components/theme-provider"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="dark" 
      enableSystem={true}
      disableTransitionOnChange
    >
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
} 