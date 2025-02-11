"use client"

import { useEffect } from "react"
import { ErrorPage } from "@/components/error-page"

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
      message="Internal Server Error"
      description="Oops! Something went wrong on our end. Please try again later or contact our support team if the problem persists."
    />
  )
} 