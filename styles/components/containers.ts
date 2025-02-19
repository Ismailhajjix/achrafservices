import { cn } from "@/lib/utils"

export const containers = {
  section: "relative w-full py-24 overflow-hidden",
  base: "container relative z-10 mx-auto px-6",
  background: {
    base: "absolute inset-0 z-0",
    effects: {
      radial: cn(
        "absolute inset-0",
        "bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.15),transparent_50%)]",
        "opacity-75"
      ),
      vertical: cn(
        "absolute inset-0",
        "bg-gradient-to-b from-black/0 via-gold/5 to-black/0",
        "opacity-50"
      ),
      pattern: cn(
        "absolute inset-0",
        "bg-[url('/patterns/grid.svg')] bg-repeat opacity-10",
        "mix-blend-overlay"
      )
    }
  }
} 