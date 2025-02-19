import type { Direction } from "@/contexts/language-context"

type MarginSide = "left" | "right"
type PaddingSide = "left" | "right"
type BorderSide = "left" | "right"
type TextAlign = "left" | "right"
type FlexDirection = "row" | "row-reverse"

export function getMargin(side: MarginSide, dir: Direction): MarginSide {
  if (dir === "rtl") {
    return side === "left" ? "right" : "left"
  }
  return side
}

export function getPadding(side: PaddingSide, dir: Direction): PaddingSide {
  if (dir === "rtl") {
    return side === "left" ? "right" : "left"
  }
  return side
}

export function getBorder(side: BorderSide, dir: Direction): BorderSide {
  if (dir === "rtl") {
    return side === "left" ? "right" : "left"
  }
  return side
}

export function getTextAlign(align: TextAlign, dir: Direction): TextAlign {
  if (dir === "rtl") {
    return align === "left" ? "right" : "left"
  }
  return align
}

export function getFlexDirection(dir: Direction): FlexDirection {
  return dir === "rtl" ? "row-reverse" : "row"
}

export function getTransform(dir: Direction, transform: string): string {
  if (dir === "rtl") {
    // Mirror horizontal transforms
    return transform.replace(
      /translateX\((.*?)\)/g,
      (_, value) => `translateX(${value.startsWith("-") ? value.slice(1) : "-" + value})`
    )
  }
  return transform
} 