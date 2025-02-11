import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        premium: "border-gold/20 bg-gold/10 text-gold hover:bg-gold/20 hover:border-gold/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode
  variant?: "default" | "premium"
}

export function Badge({ children, className, variant = "default", ...props }: BadgeProps) {
  return (
    <div 
      className={cn(
        "inline-flex items-center gap-2 px-6 py-2.5 rounded-full",
        variant === "default" && "bg-zinc-900 text-white",
        variant === "premium" && "bg-gradient-to-r from-[#1A1A1A] via-black to-[#1A1A1A] border border-gold/20 group-hover:border-gold/40 transition-all duration-500",
        className
      )} 
      {...props}
    >
      <span className={cn(
        "font-medium text-sm tracking-wider uppercase",
        variant === "premium" && "bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent"
      )}>
        {children}
      </span>
    </div>
  )
}

export { badgeVariants } 