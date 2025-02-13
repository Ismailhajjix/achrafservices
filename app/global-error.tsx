"use client"

import { useEffect } from "react"
import { ErrorPage } from "@/components/error-page"

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
          message="Critical Error"
          description="A critical error has occurred. Our team has been notified and is working to resolve the issue. Please try again later."
          onRetry={reset}
        />
      </body>
    </html>
  )
} 