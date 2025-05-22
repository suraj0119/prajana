"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const images = [
  {
    url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1470&auto=format&fit=crop",
    title: "Empowering Dreams",
    subtitle: "Supporting education for underprivileged children",
  },
  {
    url: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1470&auto=format&fit=crop",
    title: "Building Communities",
    subtitle: "Creating sustainable change through local initiatives",
  },
  {
    url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1422&auto=format&fit=crop",
    title: "Transforming Lives",
    subtitle: "Making a difference one person at a time",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % images.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            currentSlide === index ? "opacity-100" : "opacity-0",
          )}
        >
          <Image
            src={image.url || "/placeholder.svg"}
            alt={image.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-primary/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="font-poppins mb-4 text-5xl font-bold animate-slideUp">{image.title}</h1>
              <p className="font-raleway mb-8 text-xl animate-slideUp animation-delay-200">{image.subtitle}</p>
              <div className="flex justify-center space-x-4 animate-fadeIn animation-delay-400">
                <Button size="lg" className="bg-accent-yellow text-primary hover:bg-accent-yellow/90">
                  Donate Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary"
                >
                  Volunteer
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white transition-colors hover:bg-black/40"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white transition-colors hover:bg-black/40"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return
              setIsAnimating(true)
              setCurrentSlide(index)
              setTimeout(() => setIsAnimating(false), 500)
            }}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              currentSlide === index ? "bg-white w-6" : "bg-white/50",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
