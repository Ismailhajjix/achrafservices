import { cn } from "@/lib/utils"

export const forms = {
  input: {
    base: cn(
      "w-full rounded-xl",
      "bg-black/40",
      "border-2 border-[#FFB800]",
      "text-white placeholder:text-white/40",
      "focus:outline-none focus:border-[#FFB800]",
      "transition-all duration-300",
      "backdrop-blur-xl",
      "shadow-[0_0_15px_rgba(255,184,0,0.2)]"
    ),
    sizes: {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-6 py-4 text-lg"
    },
    states: {
      filled: cn(
        "bg-black/60",
        "text-white",
        "shadow-[0_0_20px_rgba(255,184,0,0.3)]",
        "border-[#FFB800]"
      )
    }
  },
  textarea: {
    base: cn(
      "w-full rounded-xl",
      "bg-black/40",
      "border-2 border-[#FFB800]",
      "text-white placeholder:text-white/40",
      "focus:outline-none focus:border-[#FFB800]",
      "transition-all duration-300",
      "backdrop-blur-xl",
      "shadow-[0_0_15px_rgba(255,184,0,0.2)]",
      "resize-none"
    )
  },
  label: {
    base: "block text-sm font-medium text-white mb-2",
    required: "after:content-['*'] after:ml-1 after:text-gold"
  }
} 