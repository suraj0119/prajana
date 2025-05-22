"use client"

import { useState, useEffect } from "react"
import { mediaQueries } from "@/lib/breakpoints"

/**
 * Hook to detect if the current viewport matches a media query
 * @param query The media query to match against
 * @returns Boolean indicating if the media query matches
 */
export const useMediaQuery = (query: string): boolean => {
  // Default to false on the server
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window === "undefined") return

    // Create the media query list
    const mediaQuery = window.matchMedia(query)

    // Set initial value
    setMatches(mediaQuery.matches)

    // Define the event listener
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Add event listener with modern API
    try {
      // Modern browsers
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    } catch (e) {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange)
      return () => mediaQuery.removeListener(handleChange)
    }
  }, [query])

  return matches
}

/**
 * Hook to detect if the current device is a mobile device
 * @returns Boolean indicating if the current device is mobile
 */
export const useIsMobile = (): boolean => {
  return useMediaQuery(mediaQueries.mobile)
}

/**
 * Hook to detect if the current device is a tablet
 * @returns Boolean indicating if the current device is a tablet
 */
export const useIsTablet = (): boolean => {
  return useMediaQuery(mediaQueries.tablet)
}

/**
 * Hook to detect if the current device is a desktop
 * @returns Boolean indicating if the current device is a desktop
 */
export const useIsDesktop = (): boolean => {
  return useMediaQuery(mediaQueries.desktop)
}
