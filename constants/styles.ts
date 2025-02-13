export const gradients = {
  goldText: "bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent",
  goldBackground: "bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#FFB800]",
  goldBorder: "bg-gradient-to-r from-transparent via-gold/50 to-transparent",
  darkBackground: "bg-gradient-to-br from-black/80 via-black/70 to-black/80",
  glowBackground: "bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.15),transparent_70%)]"
} as const

export const shadows = {
  glow: "shadow-[0_0_30px_rgba(255,184,0,0.3)]",
  subtle: "shadow-[0_0_15px_rgba(255,184,0,0.15)]",
  strong: "shadow-[0_0_40px_rgba(255,184,0,0.4)]"
} as const

export const transitions = {
  smooth: "transition-all duration-300",
  medium: "transition-all duration-500",
  slow: "transition-all duration-700"
} as const

export const containers = {
  section: "relative py-16 sm:py-24 overflow-hidden",
  content: "container mx-auto px-4 relative"
} as const

export const borders = {
  light: "border border-white/10",
  gold: "border border-gold/30",
  goldHover: "hover:border-gold/50"
} as const