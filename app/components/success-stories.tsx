"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Import the typography components
import { Subheading, Paragraph } from "./components/typography"

const testimonials = [
  {
    id: 1,
    quote: `"𝙄 𝙣𝙚𝙫𝙚𝙧 𝙙𝙧𝙚𝙖𝙢𝙚𝙙 𝙖𝙗𝙤𝙪𝙩 𝙨𝙪𝙘𝙘𝙚𝙨𝙨..𝙄 𝙬𝙤𝙧𝙠𝙚𝙙 𝙛𝙤𝙧 𝙞𝙩.." Estee Lauder\n\nThough I faced challenges in my journey, the constant encouragement and guidance that I received at Prajna Foundation strengthened me as a person. I pursued my studies with sincerity & hardwork aiming for financial independence. I have not only completed my studies, but I am also working at a respectable position in the HR dept. of Vacation Private Ltd.`,
    author: "Aarti",
    role: "HR Professional & Prajna Foundation Graduate",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aarti%20%284%29-eAGINsSrWR7InFd7XCD4JjTIOe8FdU.jpeg",
    objectPosition: "center 30%",
    year: "2023",
  },
  {
    id: 2,
    quote: `My journey with yoga began in my school days when I joined Prajna Foundation, a passionate NGO dedicated to uplifting underprivileged communities. That's where I took my first steps as a yoga teacher—teaching what I loved and learning the joy of giving back.\n\nAfter completing my graduation from Gargi College, I pursued my Master's in Yoga Science at Patanjali University. I'm also honoured to say that I'm a national player and an open international yoga athlete myself.`,
    author: "Antriksh",
    role: "Yoga Teacher & Athlete",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Antriksh%20-ZPdZqtp8BKsHnOggH5LeamtyWZa2HB.jpeg",
    objectPosition: "center 20%",
    year: "2023",
  },
  {
    id: 3,
    quote: `I was born and raised in a slum area, where getting clean water or a peaceful night's sleep was often a challenge, let alone dreaming of a bright future. Life was tough, but my spirit was tougher.\n\nEverything became harder when I had to drop out of school in Class 9 due to severe financial problems in my family. It felt like my dreams were slipping away. That's when Prajna Foundation came into my life like a ray of hope. They believed in me when I had lost hope in myself.\n\nWith a new chance in hand, I promised myself I wouldn't waste it. I worked hard day and night, and to everyone's surprise, I secured first rank in both Class 11 and Class 12, scoring high marks in the CBSE board exams. That success gave me the wings to dream even bigger.`,
    author: "Gokila",
    role: "Education Graduate",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gokila_DSC1490.JPG-F4jhTr26Oqqno8CaVbP39dMkG7TVfe.jpeg",
    objectPosition: "center 25%",
    year: "2022",
  },
  {
    id: 4,
    quote: `"Her strength comes from being tested by life's unpredictability..." Matt Lauer\n\nI was among one of the many bright students who received value education at many levels at the Koshish centre. The healthy and encouraging atmosphere here contributed to my all round development and gave me much confidence.\n\nToday, it is a matter of immense pride that I have a decent job at Cadbury's India and move about on my scooty. All I needed was support and wings to fly high.`,
    author: "Reena",
    role: "Professional at Cadbury's India",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reena-ZObmUkRDDqaPo8tVuZEoDb2PdLXSWy.jpeg",
    objectPosition: "center 15%",
    year: "2022",
  },
]

export function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const next = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((current) => (current + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 10000) // Longer interval for reading the detailed stories

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section className="relative bg-accent-yellow py-10 w-full">
      {/* Background Pattern - Removed the balloon-like structure */}
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <div className="mb-6 md:mb-8">
          <Subheading className="mb-3 md:mb-4 text-center text-primary text-2xl md:text-3xl">
            Success Stories: Lives Transformed
          </Subheading>
          <Paragraph className="mx-auto max-w-3xl text-center text-primary/80 text-sm md:text-base">
            Meet the remarkable individuals whose lives have been transformed through their journey with Prajna
            Foundation. These stories of resilience, determination, and achievement inspire us to continue our mission.
          </Paragraph>
        </div>

        {/* Testimonials */}
        <div className="mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="grid gap-6 md:grid-cols-2 items-stretch">
                {/* Image */}
                <div className="relative h-full overflow-hidden rounded-lg shadow-md mx-auto w-full max-w-md flex flex-col">
                  <div className="aspect-[3/4] relative flex-grow">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].author}
                      fill
                      className="object-cover"
                      style={{ objectPosition: testimonials[currentIndex].objectPosition || "center" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-poppins text-lg font-bold text-white">{testimonials[currentIndex].author}</h3>
                      <p className="font-raleway text-xs md:text-sm text-white/90">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>

                {/* Quote Card */}
                <div className="rounded-lg bg-white p-4 md:p-6 shadow-md mx-auto w-full max-w-md h-full flex flex-col justify-center">
                  <blockquote className="font-raleway whitespace-pre-line text-sm leading-relaxed text-primary max-h-[300px] md:max-h-none overflow-y-auto">
                    {testimonials[currentIndex].quote}
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="mt-6 flex items-center justify-center space-x-4">
            <button
              onClick={prev}
              className="rounded-full bg-primary/10 p-2 md:p-1.5 text-primary transition-colors hover:bg-primary/20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 md:h-4 md:w-4" />
            </button>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return
                    setIsAnimating(true)
                    setCurrentIndex(index)
                    setTimeout(() => setIsAnimating(false), 500)
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    currentIndex === index ? "w-5 bg-primary" : "w-2 bg-primary/30",
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="rounded-full bg-primary/10 p-2 md:p-1.5 text-primary transition-colors hover:bg-primary/20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 md:h-4 md:w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessStories
