import { cn } from "@/lib/utils"

export const effects = {
  shadow: {
    sm: "shadow-[0_2px_10px_rgba(0,0,0,0.1)]",
    md: "shadow-[0_4px_20px_rgba(0,0,0,0.15)]",
    lg: "shadow-[0_8px_30px_rgba(0,0,0,0.2)]",
    gold: {
      sm: "shadow-[0_0_15px_rgba(255,184,0,0.15)]",
      md: "shadow-[0_0_25px_rgba(255,184,0,0.2)]",
      lg: "shadow-[0_0_35px_rgba(255,184,0,0.25)]"
    }
  },
  blur: {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg"
  },
  hover: {
    scale: {
      sm: "hover:scale-105",
      md: "hover:scale-110",
      lg: "hover:scale-115"
    },
    glow: {
      gold: "hover:shadow-[0_0_30px_rgba(255,184,0,0.2)]",
      white: "hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
    },
    border: {
      gold: "hover:border-gold/30",
      white: "hover:border-white/20"
    }
  },
  transition: {
    base: "transition-all duration-300",
    slow: "transition-all duration-500",
    fast: "transition-all duration-200"
  },
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
    )
  }
} 