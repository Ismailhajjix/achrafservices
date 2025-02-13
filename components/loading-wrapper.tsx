"use client"

export function LoadingWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent"></div>
        {children}
      </div>
    </div>
  )
} 