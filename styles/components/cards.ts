import { cn } from "@/lib/utils"

export const cards = {
  base: "rounded-2xl relative overflow-hidden",
  variants: {
    primary: cn(
      "relative p-8 rounded-2xl overflow-hidden",
      "bg-gradient-to-b from-white/10 to-transparent",
      "backdrop-blur-xl",
      "border border-white/10",
      "group-hover:border-gold/30",
      "group-hover:from-white/15",
      "shadow-[0_0_25px_rgba(0,0,0,0.3)]",
      "group-hover:shadow-[0_0_35px_rgba(0,0,0,0.4)]",
      "transition-all duration-500"
    ),
    feature: cn(
      "relative p-6 rounded-2xl overflow-hidden h-[200px]",
      "bg-gradient-to-b from-black/80 via-black/50 to-black/80",
      "backdrop-blur-xl",
      "border-[2.5px] border-[#FFB800]",
      "group-hover:border-[#FFD700]",
      "transition-all duration-500",
      "shadow-[0_0_30px_rgba(255,184,0,0.15)]",
      "group-hover:shadow-[0_0_50px_rgba(255,184,0,0.3)]",
      "after:absolute after:inset-[1px] after:rounded-[14px] after:bg-black/40 after:z-0"
    ),
    secondary: cn(
      "bg-gradient-to-br from-black/50 via-black/30 to-black/50",
      "backdrop-blur-sm",
      "border border-white/10",
      "hover:border-gold/30",
      "transition-all duration-300"
    ),
    dark: cn(
      "bg-black/80 backdrop-blur-sm",
      "border border-white/10",
      "hover:border-gold/30",
      "transition-all duration-300"
    ),
    glass: cn(
      "bg-white/5 backdrop-blur-sm",
      "border border-white/10",
      "hover:border-gold/30 hover:bg-white/10",
      "transition-all duration-300"
    )
  },
  iconBox: {
    base: cn(
      "flex items-center justify-center shrink-0",
      "shadow-lg transform group-hover:scale-110 transition-transform duration-300",
      "drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]",
      "border-2 border-[#FFD700]/20"
    ),
    sizes: {
      sm: "w-8 h-8 rounded-lg",
      md: "w-10 h-10 rounded-lg",
      lg: "w-12 h-12 rounded-xl"
    },
    variants: {
      gold: "bg-gradient-to-br from-[#FFD700] to-[#FFB800]",
      primary: "bg-gradient-to-br from-white/10 to-white/5"
    }
  },
  sizes: {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  },
  decorations: {
    cornerBorders: {
      base: cn(
        "before:absolute before:top-0 before:left-0 before:w-20 before:h-20",
        "before:border-t-2 before:border-l-2 before:border-gold/30",
        "after:absolute after:bottom-0 after:right-0 after:w-20 after:h-20",
        "after:border-b-2 after:border-r-2 after:border-gold/30"
      ),
      animated: cn(
        "before:absolute before:top-0 before:left-0 before:w-20 before:h-20",
        "before:border-t-2 before:border-l-2 before:border-gold/30",
        "after:absolute after:bottom-0 after:right-0 after:w-20 after:h-20",
        "after:border-b-2 after:border-r-2 after:border-gold/30",
        "before:transition-all before:duration-300 after:transition-all after:duration-300",
        "hover:before:w-24 hover:before:h-24 hover:after:w-24 hover:after:h-24",
        "hover:before:border-gold hover:after:border-gold"
      ),
      feature: cn(
        "absolute top-0 left-0 w-16 h-16",
        "before:absolute before:top-0 before:left-0 before:w-[2px] before:h-10 before:bg-gradient-to-b before:from-[#FFD700] before:to-transparent",
        "after:absolute after:top-0 after:left-0 after:w-10 after:h-[2px] after:bg-gradient-to-r after:from-[#FFD700] after:to-transparent"
      ),
      featureReverse: cn(
        "absolute bottom-0 right-0 w-16 h-16",
        "before:absolute before:bottom-0 before:right-0 before:w-[2px] before:h-10 before:bg-gradient-to-t before:from-[#FFD700] before:to-transparent",
        "after:absolute after:bottom-0 after:right-0 after:w-10 after:h-[2px] after:bg-gradient-to-l after:from-[#FFD700] after:to-transparent"
      )
    },
    glow: {
      gold: cn(
        "absolute inset-0 opacity-0",
        "bg-gradient-to-b from-gold/20 via-gold/5 to-transparent",
        "group-hover:opacity-100",
        "transition-opacity duration-500",
        "pointer-events-none"
      ),
      white: "hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
    }
  }
} 