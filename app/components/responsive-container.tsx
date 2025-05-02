"use client"

import type { ReactNode } from "react"
import { useMediaQuery } from "@/hooks/use-mobile"

interface ResponsiveContainerProps {
  children: ReactNode
  mobileContent?: ReactNode
  tabletContent?: ReactNode
  desktopContent?: ReactNode
}

export function ResponsiveContainer({
  children,
  mobileContent,
  tabletContent,
  desktopContent,
}: ResponsiveContainerProps) {
  const isMobile = useMediaQuery("(max-width: 639px)")
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)")
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  if (isMobile && mobileContent) return <>{mobileContent}</>
  if (isTablet && tabletContent) return <>{tabletContent}</>
  if (isDesktop && desktopContent) return <>{desktopContent}</>

  return <>{children}</>
}
