"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Building, Globe } from "lucide-react"
import { DecorativeHeart } from "./decorative-heart"
// Import the typography components
import { Paragraph } from "./typography"

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
      className="flex flex-col items-center text-center px-4 py-6"
    >
      <div className="mb-3 md:mb-4 flex justify-center">
        <div className="h-[40px] w-[40px] md:h-[50px] md:w-[50px]" style={{ color }}>
          {icon}
        </div>
      </div>
      <h3 className="font-poppins mb-1 md:mb-2 text-3xl md:text-4xl font-bold" style={{ color }}>
        {count.toLocaleString()}
        {suffix}
      </h3>
      <p className="font-raleway text-gray-600 text-sm md:text-base">{label}</p>
    </motion.div>
  )
}

export function ImpactStats() {
  return (
    <>
      <div className="mx-auto mb-8 md:mb-12 max-w-3xl text-center px-4">
        {/* Decorative Hearts - hide on small screens */}
        <div className="hidden md:block relative">
          <DecorativeHeart className="absolute -left-16 top-0 opacity-50" />
          <DecorativeHeart className="absolute -right-16 top-0 opacity-50" direction="right" />
        </div>

        <Paragraph className="text-gray-600 text-sm md:text-base">
          Through our dedicated efforts, we've made significant progress in transforming lives and building stronger
          communities. Our impact is measured not just in numbers, but in the lasting change we create in the lives of
          children and women.
        </Paragraph>
      </div>
      <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
        <Stat
          icon={<GraduationCap size={40} />}
          value={5000}
          label="Children provided with quality education"
          suffix="+"
          color="#27437d" // Primary
        />
        <Stat
          icon={<Building size={40} />}
          value={1000}
          label="Women trained in vocational skills"
          suffix="+"
          color="#f4bee9" // Accent 1
        />
        <Stat
          icon={<Globe size={40} />}
          value={1000}
          label="Lives transformed through empowerment programs"
          suffix="s"
          color="#f9dc5c" // Accent 2
        />
      </div>
    </>
  )
}
