"use client"

import { useEffect } from "react"
import { ErrorPage } from "@/components/core/error-page"

export default function GlobalError({
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
    <html>
      <body>
        <ErrorPage
          errorCode="500"
          message="Something went wrong"
          description="A critical error occurred. Please try again later."
          onRetry={reset}
        />
      </body>
    </html>
  )
} 