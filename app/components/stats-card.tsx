"use client"

import { useEffect, useState } from "react"

interface StatsCardProps {
  icon: string
  number: string
  label: string
  color: string
}

export function StatsCard({ icon, number, label, color }: StatsCardProps) {
  const [count, setCount] = useState(0)
  const numericValue = Number.parseInt(number.replace(/\D/g, ""))
  const suffix = number.replace(/[0-9]/g, "")

  useEffect(() => {
    const duration = 2000
    const interval = 20
    const steps = duration / interval
    const increment = numericValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, interval)

    return () => clearInterval(timer)
  }, [numericValue])

  const renderIcon = () => {
    switch (icon) {
      case "globe":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        )
      case "graduation-cap":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
          </svg>
        )
      case "briefcase":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        )
      case "home":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md transition-transform hover:scale-105">
      <div className="mb-4">{renderIcon()}</div>
      <h3 className="font-poppins mb-2 text-3xl font-bold" style={{ color }}>
        {count}
        {suffix}
      </h3>
      <p className="font-raleway text-gray-600">{label}</p>
    </div>
  )
}

export default function StatsSection() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <StatsCard icon="globe" number="30+" label="Years of empowering communities" color="#191970" />
      <StatsCard icon="graduation-cap" number="10,000+" label="Children educated" color="#f4bee9" />
      <StatsCard icon="briefcase" number="5,000+" label="Women trained in vocational skills" color="#f9dc5c" />
      <StatsCard icon="home" number="2,000+" label="Refugees supported" color="#191970" />
    </div>
  )
}
