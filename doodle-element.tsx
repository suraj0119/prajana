import type { HTMLAttributes } from "react"

interface DoodleElementProps extends HTMLAttributes<HTMLDivElement> {
  type: "star" | "heart" | "circle" | "triangle" | "sun"
}

export function DoodleElement({ type, className, ...props }: DoodleElementProps) {
  const renderDoodle = () => {
    switch (type) {
      case "star":
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0L24.4903 13.8197H39.0211L27.2654 22.3607L31.7557 36.1803L20 27.6393L8.2443 36.1803L12.7346 22.3607L0.97887 13.8197H15.5097L20 0Z" />
          </svg>
        )
      case "heart":
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z" />
          </svg>
        )
      case "circle":
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="4" fill="none" />
          </svg>
        )
      case "triangle":
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0L40 40H0L20 0Z" />
          </svg>
        )
      case "sun":
        return (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="10" />
            <line x1="20" y1="2" x2="20" y2="8" strokeWidth="2" />
            <line x1="20" y1="32" x2="20" y2="38" strokeWidth="2" />
            <line x1="2" y1="20" x2="8" y2="20" strokeWidth="2" />
            <line x1="32" y1="20" x2="38" y2="20" strokeWidth="2" />
            <line x1="6" y1="6" x2="10" y2="10" strokeWidth="2" />
            <line x1="30" y1="30" x2="34" y2="34" strokeWidth="2" />
            <line x1="6" y1="34" x2="10" y2="30" strokeWidth="2" />
            <line x1="30" y1="10" x2="34" y2="6" strokeWidth="2" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className={className} {...props}>
      {renderDoodle()}
    </div>
  )
}
