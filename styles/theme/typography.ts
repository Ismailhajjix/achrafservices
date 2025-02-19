import { cn } from "@/lib/utils"

export const typography = {
  heading: {
    h1: cn(
      "text-5xl sm:text-6xl lg:text-7xl",
      "font-bold",
      "leading-tight"
    ),
    h2: cn(
      "text-4xl sm:text-5xl lg:text-6xl",
      "font-bold",
      "leading-tight"
    ),
    h3: cn(
      "text-3xl sm:text-4xl lg:text-5xl",
      "font-bold",
      "leading-tight"
    ),
    h4: cn(
      "text-2xl sm:text-3xl lg:text-4xl",
      "font-bold",
      "leading-tight"
    ),
    h5: cn(
      "text-xl sm:text-2xl lg:text-3xl",
      "font-bold",
      "leading-tight"
    ),
    h6: cn(
      "text-lg sm:text-xl lg:text-2xl",
      "font-bold",
      "leading-tight"
    )
  },
  body: {
    regular: "text-base leading-relaxed",
    large: "text-lg leading-relaxed",
    small: "text-sm leading-relaxed",
    xs: "text-xs leading-relaxed"
  },
  label: {
    base: "text-sm font-medium",
    variants: {
      primary: "text-white/90",
      secondary: "text-white/70",
      gold: "text-gold"
    }
  },
  gradient: {
    gold: "bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent",
    white: "bg-gradient-to-r from-white via-white/80 to-white bg-clip-text text-transparent"
  },
  display: {
    gradient: "bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#FFB800] bg-clip-text text-transparent",
    muted: "text-white/60"
  }
} 