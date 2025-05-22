"use client"

import type { ReactNode } from "react"
import { useIsMobile, useIsTablet, useIsDesktop } from "@/hooks/use-mobile"

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
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const isDesktop = useIsDesktop()

  if (isMobile && mobileContent) return <>{mobileContent}</>
  if (isTablet && tabletContent) return <>{tabletContent}</>
  if (isDesktop && desktopContent) return <>{desktopContent}</>

  return <>{children}</>
}
