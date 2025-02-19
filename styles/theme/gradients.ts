import { cn } from "@/lib/utils"

export const gradients = {
  gold: {
    primary: "bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#FFB800]",
    secondary: "bg-gradient-to-br from-gold to-amber-500",
    radial: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/20 via-gold/10 to-transparent",
    conic: "bg-[conic-gradient(var(--tw-gradient-stops))] from-gold via-amber-500 to-gold",
    text: "bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent"
  },
  dark: {
    primary: "bg-gradient-to-br from-black/90 via-black/70 to-black/90",
    secondary: "bg-gradient-to-br from-black/50 via-black/30 to-black/50",
    radial: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/90 via-black/50 to-transparent",
    conic: "bg-[conic-gradient(var(--tw-gradient-stops))] from-black via-black/50 to-black"
  },
  glass: {
    primary: "bg-white/5 backdrop-blur-sm",
    secondary: "bg-black/50 backdrop-blur-sm",
    dark: "bg-black/80 backdrop-blur-sm"
  },
  glow: {
    gold: cn(
      "absolute inset-0",
      "bg-gradient-to-br from-gold/20 via-transparent to-gold/20",
      "opacity-0 group-hover:opacity-100",
      "transition-opacity duration-500",
      "blur-xl"
    ),
    white: cn(
      "absolute inset-0",
      "bg-gradient-to-br from-white/10 via-transparent to-white/10",
      "opacity-0 group-hover:opacity-100",
      "transition-opacity duration-500",
      "blur-xl"
    )
  }
} 