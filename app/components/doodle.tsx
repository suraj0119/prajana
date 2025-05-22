import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface DoodleProps extends HTMLAttributes<HTMLDivElement> {
  type: "empowerment" | "star" | "growth" | "heart"
}

export function Doodle({ type, className, ...props }: DoodleProps) {
  const renderDoodle = () => {
    switch (type) {
      case "empowerment":
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 10C50 10 60 25 80 25C80 25 65 40 65 60C65 80 50 90 50 90C50 90 35 80 35 60C35 40 20 25 20 25C20 25 40 25 50 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M50 30C50 30 55 40 65 40C65 40 55 50 55 60C55 70 50 75 50 75C50 75 45 70 45 60C45 50 35 40 35 40C35 40 45 40 50 30Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case "star":
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 10L61 35H87L66 50L77 75L50 60L23 75L34 50L13 35H39L50 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case "growth":
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 80H80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M50 80V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M50 20L70 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M50 40L30 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M50 60L70 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )
      case "heart":
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 80C50 80 80 60 80 35C80 25 70 15 60 15C50 15 50 25 50 25C50 25 50 15 40 15C30 15 20 25 20 35C20 60 50 80 50 80Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className={cn(className)} {...props}>
      {renderDoodle()}
    </div>
  )
}
