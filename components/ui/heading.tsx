import { cn } from "@/lib/utils"
import { createElement } from "react"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export function Heading({ children, className, level = 1, ...props }: HeadingProps) {
  return createElement(
    `h${level}`,
    {
      className: cn(
        "font-bold text-white",
        level === 1 && "text-5xl sm:text-7xl lg:text-7xl",
        level === 2 && "text-4xl sm:text-5xl lg:text-6xl",
        level === 3 && "text-2xl sm:text-3xl",
        level === 4 && "text-xl",
        level === 5 && "text-lg",
        level === 6 && "text-base",
        className
      ),
      ...props
    },
    children
  )
} 