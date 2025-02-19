import { cn } from "@/lib/utils"

export const buttons = {
  base: "rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300",
  sizes: {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  },
  variants: {
    primary: cn(
      "relative overflow-hidden",
      "bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#FFB800]",
      "text-black font-semibold",
      "px-8 py-3 rounded-xl",
      "shadow-[0_0_20px_rgba(255,184,0,0.3)]",
      "hover:shadow-[0_0_30px_rgba(255,184,0,0.5)]",
      "hover:scale-105",
      "active:scale-100",
      "flex items-center justify-between gap-4",
      "min-w-[200px]",
      "transition-all duration-300"
    ),
    secondary: cn(
      "relative overflow-hidden",
      "bg-black/50 backdrop-blur-sm",
      "border-2 border-gold",
      "text-white font-semibold",
      "px-8 py-3 rounded-xl",
      "shadow-[0_0_15px_rgba(255,184,0,0.15)]",
      "hover:shadow-[0_0_25px_rgba(255,184,0,0.25)]",
      "hover:bg-black/70",
      "hover:scale-105",
      "active:scale-100",
      "flex items-center justify-between gap-4",
      "min-w-[200px]",
      "transition-all duration-300"
    ),
    outline: cn(
      "relative overflow-hidden",
      "border-2 border-gold",
      "text-gold font-semibold",
      "px-8 py-3 rounded-xl",
      "hover:bg-gold/10",
      "hover:scale-105",
      "active:scale-100",
      "transition-all duration-300"
    ),
    ghost: cn(
      "text-white",
      "hover:text-gold",
      "transition-all duration-300"
    )
  },
  iconBox: {
    base: "flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
    small: "w-8 h-8 rounded-lg",
    medium: "w-10 h-10 rounded-xl",
    large: "w-12 h-12 rounded-xl",
    gradient: "bg-gradient-to-br from-gold to-amber-500 shadow-[0_0_15px_rgba(255,184,0,0.3)]",
    ghostGradient: "bg-gradient-to-br from-white/10 via-gold/20 to-white/10"
  }
} 