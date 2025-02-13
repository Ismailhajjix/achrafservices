import { ErrorPage } from "@/components/error-page"

export default function NotFound() {
  return (
    <ErrorPage
      errorCode="404"
      message="Page Not Found"
      description="Oops! The page you are looking for could not be found. Please check the URL or navigate back home."
    />
  )
} 