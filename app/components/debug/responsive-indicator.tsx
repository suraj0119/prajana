"use client"

import { useIsMobile, useIsTablet, useIsDesktop } from "@/hooks/use-mobile"

interface ResponsiveIndicatorProps {
  /**
   * Whether to show the indicator (useful for toggling in development)
   */
  show?: boolean
}

/**
 * A component that displays the current responsive breakpoint
 * Useful for debugging responsive behavior
 */
export function ResponsiveIndicator({ show = process.env.NODE_ENV === "development" }: ResponsiveIndicatorProps) {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const isDesktop = useIsDesktop()

  if (!show) return null

  let currentBreakpoint = "unknown"
  if (isMobile) currentBreakpoint = "mobile"
  if (isTablet) currentBreakpoint = "tablet"
  if (isDesktop) currentBreakpoint = "desktop"

  return (
    <div className="fixed bottom-2 right-2 z-50 rounded bg-black/70 px-2 py-1 text-xs text-white">
      <div>Breakpoint: {currentBreakpoint}</div>
      <div>Width: {typeof window !== "undefined" ? window.innerWidth : "N/A"}px</div>
    </div>
  )
}
