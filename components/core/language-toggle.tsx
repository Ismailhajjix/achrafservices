import { useLanguage } from "@/contexts/language-context"
import { useRTL } from "@/hooks/use-rtl"
import { cn } from "@/lib/utils"
import { Globe } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

const languages = [
  { 
    code: "en", 
    label: "English",
    flag: "https://flagcdn.com/us.svg"
  },
  { 
    code: "fr", 
    label: "Français",
    flag: "https://flagcdn.com/fr.svg"
  },
  { 
    code: "ar", 
    label: "العربية",
    flag: "https://flagcdn.com/ma.svg"
  }
] as const

export function LanguageToggle() {
  const { language, setLanguage, dir } = useLanguage()
  const rtl = useRTL()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative group p-2 rounded-full",
          "border-2 border-[#FFB800] bg-[#FFB800]/5",
          "text-[#FFB800] hover:bg-[#FFB800]/10",
          "transition-colors duration-300",
          "focus:outline-none focus:ring-2 focus:ring-[#FFB800]/50"
        )}
        aria-label="Select Language"
      >
        <Globe className="w-5 h-5" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={cn(
          "absolute top-full mt-2",
          dir === 'rtl' ? 'right-0' : 'left-0',
          "min-w-[160px]",
          "bg-black/90 backdrop-blur-sm",
          "border-2 border-[#FFB800]/20",
          "rounded-xl overflow-hidden",
          "shadow-lg shadow-[#FFB800]/10",
          "z-50"
        )}>
          {languages.map(({ code, label, flag }) => (
            <button
              key={code}
              onClick={() => {
                setLanguage(code)
                setIsOpen(false)
              }}
              className={cn(
                "w-full px-4 py-3",
                "flex items-center gap-3",
                "transition-colors duration-200",
                language === code
                  ? "bg-[#FFB800] text-black"
                  : "text-white hover:bg-[#FFB800]/10",
                code === "ar" && "font-arabic",
                dir === 'rtl' && "flex-row-reverse text-right"
              )}
            >
              <div className="relative w-6 h-4 rounded overflow-hidden border border-white/10">
                <Image
                  src={flag}
                  alt={`${label} flag`}
                  width={24}
                  height={16}
                  className="object-cover"
                  unoptimized
                />
              </div>
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 