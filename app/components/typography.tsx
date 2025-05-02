"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface TextProps {
  children: ReactNode
  className?: string
}

export function Title({ children, className }: TextProps) {
  return (
    <h1 className={cn("font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight", className)}>
      {children}
    </h1>
  )
}

export function Subheading({ children, className }: TextProps) {
  return (
    <h2 className={cn("font-poppins text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight", className)}>
      {children}
    </h2>
  )
}

export function Paragraph({ children, className }: TextProps) {
  return <p className={cn("font-raleway text-sm sm:text-base md:text-lg leading-relaxed", className)}>{children}</p>
}

// For smaller text elements that should remain smaller (like labels, captions, etc.)
export function SmallText({ children, className }: TextProps) {
  return <span className={cn("font-raleway text-xs sm:text-sm md:text-base", className)}>{children}</span>
}
