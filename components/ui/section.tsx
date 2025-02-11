import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section 
      className={cn(
        "relative w-full",
        className
      )} 
      {...props}
    >
      {children}
    </section>
  )
}
