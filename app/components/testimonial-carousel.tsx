"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Education Program Graduate",
    quote:
      "Prajna Foundation changed my life. I was able to complete my education and now I'm the first person in my family to attend college. The support and guidance I received has opened doors I never thought possible.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "Digital Literacy Program Student",
    quote:
      "Learning computer skills has transformed my future. I now have a job at a tech company and can support my family. Prajna didn't just teach me skills - they gave me confidence and hope.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Meera Joshi",
    role: "Vocational Training Graduate",
    quote:
      "The vocational training program taught me tailoring skills that have allowed me to start my own small business. I can now provide for my children and give them the education I never had.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const next = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((current + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 8000)

    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-[#f4bee9] opacity-50">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="4" fill="none" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-[#f9dc5c] opacity-50">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0L24.4903 13.8197H39.0211L27.2654 22.3607L31.7557 36.1803L20 27.6393L8.2443 36.1803L12.7346 22.3607L0.97887 13.8197H15.5097L20 0Z" />
        </svg>
      </div>

      <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-lg md:p-10">
        <Quote className="absolute top-6 left-6 h-12 w-12 text-[#f4bee9]/30 md:h-16 md:w-16" />

        <div className="relative z-10">
          <div className="transition-opacity duration-500" style={{ opacity: isAnimating ? 0 : 1 }}>
            <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-6">
              <div className="mb-4 flex-shrink-0 md:mb-0">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-[#f9dc5c]">
                  <Image
                    src={testimonials[current].image || "/placeholder.svg"}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <blockquote className="font-raleway mb-4 text-lg italic text-gray-700 md:text-xl">
                  "{testimonials[current].quote}"
                </blockquote>
                <div className="text-center md:text-left">
                  <h4 className="font-poppins text-lg font-bold text-[#191970]">{testimonials[current].name}</h4>
                  <p className="font-raleway text-sm text-gray-500">{testimonials[current].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center space-x-2 md:justify-end">
          <button
            onClick={prev}
            className="rounded-full bg-[#191970]/10 p-2 text-[#191970] transition-colors hover:bg-[#191970]/20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="rounded-full bg-[#191970]/10 p-2 text-[#191970] transition-colors hover:bg-[#191970]/20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 flex justify-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isAnimating) return
                setIsAnimating(true)
                setCurrent(index)
                setTimeout(() => setIsAnimating(false), 500)
              }}
              className={`mx-1 h-2 w-2 rounded-full ${current === index ? "bg-[#191970]" : "bg-[#191970]/30"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCarousel
