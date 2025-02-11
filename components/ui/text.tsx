import * as React from "react"
import { cn } from "@/lib/utils"

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
  variant?: "default" | "lead" | "large" | "small" | "muted"
}

export function Text({ children, className, variant = "default", ...props }: TextProps) {
  return (
    <p 
      className={cn(
        "text-zinc-400",
        variant === "lead" && "text-xl leading-relaxed",
        variant === "large" && "text-lg",
        variant === "small" && "text-sm",
        variant === "muted" && "text-sm text-zinc-500",
        className
      )} 
      {...props}
    >
      {children}
    </p>
  )
} 