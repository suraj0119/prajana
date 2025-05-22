"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface TextProps {
  children: ReactNode
  className?: string
}

export function Title({ children, className }: TextProps) {
  return <h1 className={cn("font-poppins text-title font-bold leading-tight md:text-title", className)}>{children}</h1>
}

export function Subheading({ children, className }: TextProps) {
  return (
    <h2 className={cn("font-poppins text-subheading font-semibold leading-tight md:text-subheading", className)}>
      {children}
    </h2>
  )
}

export function Paragraph({ children, className }: TextProps) {
  return <p className={cn("font-raleway text-body leading-relaxed md:text-body", className)}>{children}</p>
}

// For smaller text elements that should remain smaller (like labels, captions, etc.)
export function SmallText({ children, className }: TextProps) {
  return <span className={cn("font-raleway text-sm md:text-base", className)}>{children}</span>
}
