"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface OptimizedFlagImageProps {
  src: string
  alt: string
  className?: string
}

export function OptimizedFlagImage({ src, alt, className }: OptimizedFlagImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={cn(
      "relative overflow-hidden flex items-center justify-center",
      className
    )}>
      {isLoading && (
        <div className="absolute inset-0 bg-black/5 animate-pulse rounded-lg" />
      )}
      <Image
        src={src}
        alt={alt}
        width={48}
        height={32}
        className={cn(
          "w-full h-full object-contain transition-all duration-300",
          isLoading ? "scale-110 blur-sm" : "scale-100 blur-0"
        )}
        onLoad={() => setIsLoading(false)}
        priority={alt === "Germany" || alt === "France" || alt === "Spain" || alt === "Netherlands"}
        loading={alt === "Germany" || alt === "France" || alt === "Spain" || alt === "Netherlands" ? "eager" : "lazy"}
      />
    </div>
  )
} 