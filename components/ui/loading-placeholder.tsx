import { memo } from 'react'

interface LoadingPlaceholderProps {
  height?: string
}

export function LoadingPlaceholder({ height = "min-h-[100vh]" }: LoadingPlaceholderProps) {
  return (
    <section className={`relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden ${height}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <div className="container mx-auto px-4 relative">
        <div className="animate-pulse space-y-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="h-4 w-32 bg-gold/20 rounded" />
            <div className="h-8 w-64 bg-gold/20 rounded" />
            <div className="h-4 w-48 bg-gold/20 rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-48 bg-gold/10 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Memoize the component to prevent unnecessary rerenders
export const LoadingPlaceholderMemo = memo(LoadingPlaceholder)

// Add display name for better debugging
LoadingPlaceholderMemo.displayName = 'LoadingPlaceholder' 