import { breakpoints } from "./breakpoints"

// Helper function to determine if the current viewport is mobile
export const isMobileViewport = (): boolean => {
  if (typeof window === "undefined") return false
  return window.innerWidth < breakpoints.md
}

// Helper function to determine if the current viewport is tablet
export const isTabletViewport = (): boolean => {
  if (typeof window === "undefined") return false
  return window.innerWidth >= breakpoints.md && window.innerWidth < breakpoints.lg
}

// Helper function to determine if the current viewport is desktop
export const isDesktopViewport = (): boolean => {
  if (typeof window === "undefined") return false
  return window.innerWidth >= breakpoints.lg
}

// Helper function to get the current viewport size category
export const getViewportSize = (): string => {
  if (typeof window === "undefined") return "unknown"

  if (window.innerWidth < breakpoints.sm) return "xs"
  if (window.innerWidth < breakpoints.md) return "sm"
  if (window.innerWidth < breakpoints.lg) return "md"
  if (window.innerWidth < breakpoints.xl) return "lg"
  if (window.innerWidth < breakpoints["2xl"]) return "xl"
  return "2xl"
}
