"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"

// Sample testimonial data - replace with your actual testimonials
const testimonials = [
  {
    id: 1,
    name: "Aarti",
    role: "HR Professional & Prajna Foundation Graduate",
    quote: `"𝙄 𝙣𝙚𝙫𝙚𝙧 𝙙𝙧𝙚𝙖𝙢𝙚𝙙 𝙖𝙗𝙤𝙪𝙩 𝙨𝙪𝙘𝙘𝙚𝙨𝙨..𝙄 𝙬𝙤𝙧𝙠𝙚𝙙 𝙛𝙤𝙧 𝙞𝙩.." Estee Lauder\n\nThough I faced challenges in my journey, the constant encouragement and guidance that I received at Prajna Foundation strengthened me as a person. I pursued my studies with sincerity & hardwork aiming for financial independence. I have not only completed my studies, but I am also working at a respectable position in the HR dept. of Vacation Private Ltd.`,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aarti%20%284%29-eAGINsSrWR7InFd7XCD4JjTIOe8FdU.jpeg",
    year: "2023",
  },
  {
    id: 2,
    name: "Antriksh",
    role: "Yoga Teacher & Athlete",
    quote: `My journey with yoga began in my school days when I joined Prajna Foundation, a passionate NGO dedicated to uplifting underprivileged communities. That's where I took my first steps as a yoga teacher—teaching what I loved and learning the joy of giving back.\n\nAfter completing my graduation from Gargi College, I pursued my Master's in Yoga Science at Patanjali University. I'm also honoured to say that I'm a national player and an open international yoga athlete myself.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Antriksh%20-ZPdZqtp8BKsHnOggH5LeamtyWZa2HB.jpeg",
    year: "2023",
  },
  {
    id: 3,
    name: "Gokila",
    role: "Education Graduate",
    quote: `I was born and raised in a slum area, where getting clean water or a peaceful night's sleep was often a challenge, let alone dreaming of a bright future. Life was tough, but my spirit was tougher.\n\nEverything became harder when I had to drop out of school in Class 9 due to severe financial problems in my family. It felt like my dreams were slipping away. That's when Prajna Foundation came into my life like a ray of hope. They believed in me when I had lost hope in myself.\n\nWith a new chance in hand, I promised myself I wouldn't waste it. I worked hard day and night, and to everyone's surprise, I secured first rank in both Class 11 and Class 12, scoring high marks in the CBSE board exams. That success gave me the wings to dream even bigger.`,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gokila_DSC1490.JPG-F4jhTr26Oqqno8CaVbP39dMkG7TVfe.jpeg",
    year: "2022",
  },
  {
    id: 4,
    name: "Reena",
    role: "Professional at Cadbury's India",
    quote: `"Her strength comes from being tested by life's unpredictability..." Matt Lauer\n\nI was among one of the many bright students who received value education at many levels at the Koshish centre. The healthy and encouraging atmosphere here contributed to my all round development and gave me much confidence.\n\nToday, it is a matter of immense pride that I have a decent job at Cadbury's India and move about on my scooty. All I needed was support and wings to fly high.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reena-ZObmUkRDDqaPo8tVuZEoDb2PdLXSWy.jpeg",
    year: "2022",
  },
]

export function TestimonialGallery() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-1/3 h-60 md:h-auto">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 md:w-2/3 relative">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
                <h3 className="font-poppins text-xl font-bold text-primary mb-1">{testimonial.name}</h3>
                <p className="font-raleway text-sm text-gray-500 mb-4">{testimonial.role}</p>
                <div className="font-raleway text-gray-700 whitespace-pre-line text-sm leading-relaxed max-h-[200px] overflow-y-auto pr-2">
                  {testimonial.quote}
                </div>
                <div className="mt-4 text-xs text-gray-400">{testimonial.year}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
