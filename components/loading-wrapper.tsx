"use client"

import { Suspense } from "react"
import { ClientLayout } from "@/components/client-layout"
import { HeaderSkeleton } from "@/components/header/header-skeleton"
import dynamic from 'next/dynamic'

// Dynamically import header with optimized loading
const DynamicHeader = dynamic(
  () => import('@/components/header'),
  {
    loading: () => <HeaderSkeleton />,
    ssr: true
  }
)

interface LoadingWrapperProps {
  children: React.ReactNode
}

export function LoadingWrapper({ children }: LoadingWrapperProps) {
  return (
    <ClientLayout>
      <Suspense fallback={<HeaderSkeleton />}>
        <DynamicHeader />
      </Suspense>
      <main className="pt-20">
        {children}
      </main>
    </ClientLayout>
  )
} 