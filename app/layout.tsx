import { Inter } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'
import { ErrorBoundary } from '@/components/error-boundary'
import { LoadingWrapper } from '@/components/loading-wrapper'
import { ClientLayout } from "@/components/layouts/client-layout"
import type { Metadata, Viewport } from 'next'

// Optimize font loading
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: true // Prevent layout shift
})

export const metadata: Metadata = {
  title: 'Agence Achraf Services',
  description: 'Premium Consultancy Services in Morocco',
  icons: {
    icon: '/fav/logo.png',
    apple: '/fav/logo.png',
  },
  metadataBase: new URL('https://achrafservices.ma'),
  openGraph: {
    title: 'Agence Achraf Services',
    description: 'Premium Consultancy Services in Morocco',
    images: ['/images/og-image.jpg'],
  },
}

// Add viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Resource Hints - Google Fonts Optimization */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        
        {/* Cache Control Headers */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
      </head>
      <body 
        className="bg-black"
        suppressHydrationWarning
      >
        <ErrorBoundary>
          <Suspense 
            fallback={
              <LoadingWrapper>
                <div className="text-white/80">Loading your experience...</div>
              </LoadingWrapper>
            }
          >
            <ClientLayout>{children}</ClientLayout>
          </Suspense>
        </ErrorBoundary>
      </body>
    </html>
  )
}