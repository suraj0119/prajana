"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, GraduationCap, Building, Globe } from "lucide-react"

interface StatProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
  color: string
}

function Stat({ icon, value, label, suffix = "", color }: StatProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [value, isInView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center"
    >
      <div className="mb-4 rounded-full p-4" style={{ backgroundColor: `${color}20` }}>
        <div className="h-12 w-12" style={{ color }}>
          {icon}
        </div>
      </div>
      <h3 className="font-poppins mb-2 text-4xl font-bold" style={{ color }}>
        {count.toLocaleString()}
        {suffix}
      </h3>
      <p className="font-raleway text-gray-600">{label}</p>
    </motion.div>
  )
}

export function AnimatedStats() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <Stat icon={<Users />} value={50000} label="Lives Impacted" suffix="+" color="#27437d" />
      <Stat icon={<GraduationCap />} value={10000} label="Children Educated" suffix="+" color="#aecb26" />
      <Stat icon={<Building />} value={5000} label="Women Trained" suffix="+" color="#f4bee9" />
      <Stat icon={<Globe />} value={2000} label="Refugees Supported" suffix="+" color="#f9dc5c" />
    </div>
  )
}
