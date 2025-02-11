import { Inter } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'
import { ErrorBoundary } from '@/components/error-boundary'
import { LoadingWrapper } from '@/components/loading-wrapper'
import Header from "@/components/header/index"
import { Footer } from "@/components/footer/footer"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary>
          <Suspense fallback={<LoadingWrapper>Loading...</LoadingWrapper>}>
            <Header />
            {children}
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </body>
    </html>
  )
}