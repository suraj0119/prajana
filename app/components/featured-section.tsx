"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function FeaturedSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid items-center gap-8 md:grid-cols-2"
        >
          <div>
            <h2 className="font-poppins mb-6 text-3xl font-bold text-primary md:text-4xl">
              Featured Story: Empowering Girls Through Education
            </h2>
            <p className="font-raleway mb-8 text-gray-600">
              In the heart of a small village, a young girl named Aisha dreamed of getting an education. With the
              support of Prajna Foundation, Aisha's dream became a reality. She excelled in her studies and is now a
              role model for other girls in her community.
            </p>
            <Button className="bg-[#FF6F61] text-white hover:bg-[#FF6F61]/90">Read More</Button>
          </div>
          <div className="relative aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1422&auto=format&fit=crop"
              alt="Girl studying"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
