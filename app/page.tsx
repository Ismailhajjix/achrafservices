import { Suspense } from "react"
import { HomeContent } from "@/components/home-content"
import { LoadingWrapper } from "@/components/loading-wrapper"
import { ErrorBoundary } from "@/components/error-boundary"

export default function Home() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingWrapper>Loading...</LoadingWrapper>}>
        <HomeContent />
      </Suspense>
    </ErrorBoundary>
  )
}

