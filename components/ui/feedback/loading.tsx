import { cn } from "@/lib/utils"

interface LoadingProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Loading({ className, size = "md" }: LoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  }

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className={cn(
          "border-gold/30 border-t-gold animate-spin rounded-full",
          sizeClasses[size]
        )}
      />
    </div>
  )
}

export function LoadingPage() {
  return (
    <div className="min-h-[400px] w-full flex flex-col items-center justify-center">
      <Loading size="lg" />
      <p className="mt-4 text-muted-foreground">Loading...</p>
    </div>
  )
} 