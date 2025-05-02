"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Import the typography components
import { Subheading, Paragraph } from "./typography"

export function WhoWeAre() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full order-1"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_1975.JPG-5EuxUL0v57gQACI4INlAkgN6dCDJ4A.jpeg"
            alt="Girls learning computer skills at Prajna Foundation's digital center"
            fill
            className="rounded-lg object-cover"
          />
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-lg border-4 border-accent-yellow" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col justify-center order-2"
        >
          <Subheading className="mb-4 md:mb-6 text-primary text-2xl md:text-3xl">Who We Are</Subheading>
          <Paragraph className="mb-4 md:mb-6 text-gray-600 text-sm md:text-base">
            Prajna Foundation is committed to providing holistic development to children, with a special focus on girls
            from marginalized communities. Through community-driven educational initiatives and empowering women with
            skills, we aim to break the cycle of poverty.
          </Paragraph>
          <Paragraph className="mb-6 text-gray-600 text-sm md:text-base">
            We believe that education is the most powerful tool for transformation. By providing access to quality
            education and skills training, we help individuals break the cycle of poverty and build a brighter future
            for themselves and their communities.
          </Paragraph>
          <Button className="w-full sm:w-fit bg-primary text-white hover:bg-primary/90" asChild>
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
