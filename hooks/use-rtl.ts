import { useLanguage } from "@/contexts/language-context"
import {
  getMargin,
  getPadding,
  getBorder,
  getTextAlign,
  getFlexDirection,
  getTransform
} from "@/lib/rtl-utils"
import type { Direction } from "@/contexts/language-context"

interface RTLStyles {
  margin: (side: "left" | "right") => "left" | "right"
  padding: (side: "left" | "right") => "left" | "right"
  border: (side: "left" | "right") => "left" | "right"
  textAlign: (align: "left" | "right") => "left" | "right"
  flexDirection: () => "row" | "row-reverse"
  transform: (transform: string) => string
  isRTL: boolean
}

export function useRTL(): RTLStyles {
  const { dir } = useLanguage()

  return {
    margin: (side) => getMargin(side, dir),
    padding: (side) => getPadding(side, dir),
    border: (side) => getBorder(side, dir),
    textAlign: (align) => getTextAlign(align, dir),
    flexDirection: () => getFlexDirection(dir),
    transform: (transform) => getTransform(dir, transform),
    isRTL: dir === "rtl"
  }
} 