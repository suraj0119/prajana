"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const programs = [
  {
    title: "More charity better lives",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6",
    color: "bg-[#40E0D0]",
    progress: 75,
  },
  {
    title: "How to become volunteer",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    color: "bg-[#FF6F61]",
    progress: 60,
  },
  {
    title: "Poor children education",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    color: "bg-[#FFB347]",
    progress: 85,
  },
]

export function ProgramCards() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-poppins mb-12 text-center text-3xl font-bold text-primary">Our Programs</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${program.color}/80`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <h3 className="font-poppins mb-4 text-2xl font-bold">{program.title}</h3>
                  <Button
                    variant="outline"
                    className="mt-auto border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary"
                  >
                    READ MORE
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/20 p-4">
                <Progress value={program.progress} className="h-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
