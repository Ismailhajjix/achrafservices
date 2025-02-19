"use client"

import { useEffect } from "react"
import { ErrorPage } from "@/components/core/error-page"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <ErrorPage
      errorCode="500"
      message="Something went wrong"
      description="An error occurred while processing your request. Please try again later."
      onRetry={reset}
    />
  )
} 