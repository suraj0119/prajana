// Breakpoint values that match Tailwind's default breakpoints
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

// Media query strings for use with CSS-in-JS libraries
export const mediaQueries = {
  sm: `@media (min-width: ${breakpoints.sm}px)`,
  md: `@media (min-width: ${breakpoints.md}px)`,
  lg: `@media (min-width: ${breakpoints.lg}px)`,
  xl: `@media (min-width: ${breakpoints.xl}px)`,
  "2xl": `@media (min-width: ${breakpoints["2xl"]}px)`,
}

// Helper function to determine if the current viewport is mobile
export const isMobileViewport = () => {
  if (typeof window === "undefined") return false
  return window.innerWidth < breakpoints.md
}

// Helper function to determine if the current viewport is tablet
export const isTabletViewport = () => {
  if (typeof window === "undefined") return false
  return window.innerWidth >= breakpoints.md && window.innerWidth < breakpoints.lg
}

// Helper function to determine if the current viewport is desktop
export const isDesktopViewport = () => {
  if (typeof window === "undefined") return false
  return window.innerWidth >= breakpoints.lg
}

// Helper function to get the current viewport size category
export const getViewportSize = () => {
  if (typeof window === "undefined") return "unknown"

  if (window.innerWidth < breakpoints.sm) return "xs"
  if (window.innerWidth < breakpoints.md) return "sm"
  if (window.innerWidth < breakpoints.lg) return "md"
  if (window.innerWidth < breakpoints.xl) return "lg"
  if (window.innerWidth < breakpoints["2xl"]) return "xl"
  return "2xl"
}
