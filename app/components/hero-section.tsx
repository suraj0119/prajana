"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Import the typography components
import { Title, Paragraph } from "./typography"

const heroImages = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20181125_164009.jpg-Xo6IMqJKMUZijbgJB6O1JJLCmLOjnE.jpeg",
    alt: "Children participating in a dance activity in a community center",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-31%20at%204.59.51%20PM-xTPkZyQXEchqIK4LJsxVAwveLMWOKH.jpeg",
    alt: "Group of young girls standing together on a platform",
  },
]

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden mt-0">
      {/* Rotating Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            currentImage === index ? "opacity-100" : "opacity-0",
          )}
        >
          <Image
            src={image.url || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover brightness-95 saturate-75"
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        </div>
      ))}

      {/* Solid Background Overlay */}
      <div className="absolute inset-0 bg-primary/75"></div>

      <div className="relative container mx-auto flex h-full items-center justify-center px-4 py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl text-center text-white px-4"
        >
          <Title className="mb-3 md:mb-4 lg:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Empowering the Future of Slum Children
          </Title>

          <Paragraph className="mx-auto mb-4 md:mb-6 lg:mb-8 max-w-2xl text-white/90 text-xs sm:text-sm md:text-base lg:text-lg">
            Prajna Foundation is a non-profit organization that empowers the lives of children and women living in the
            slums through education, vocational training, and community support.
          </Paragraph>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button
              size="lg"
              className="bg-accent-yellow text-primary hover:bg-accent-yellow/90 w-full sm:w-auto"
              asChild
            >
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white transition-colors hover:bg-white hover:text-primary w-full sm:w-auto mt-2 sm:mt-0"
              asChild
            >
              <Link href="/get-involved">Volunteer with Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
