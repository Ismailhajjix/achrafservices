import { Suspense } from 'react'
import { HomePageWrapper } from "@/components/home-page-wrapper"

export default function Home() {
  return (
    <Suspense 
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#FFB800] rounded-full animate-spin border-t-transparent" />
        </div>
      }
    >
      <HomePageWrapper />
    </Suspense>
  )
}

