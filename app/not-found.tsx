import { ErrorPage } from "@/components/core/error-page"

export default function NotFound() {
  return (
    <ErrorPage
      errorCode="404"
      message="Page Not Found"
      description="The page you are looking for does not exist or has been moved."
    />
  )
} 