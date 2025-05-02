"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function BelieveSection() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="container mx-auto px-4">
        {/* Decorative Hearts */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="absolute left-10 top-10"
        >
          <Heart className="h-16 w-16 text-[#FF6F61]/20" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute right-10 bottom-10"
        >
          <Heart className="h-16 w-16 text-[#40E0D0]/20" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center">
          <h2 className="font-poppins mb-6 text-4xl font-bold text-primary md:text-5xl">
            We Believe that We can Save
            <br />
            More Lives with you
          </h2>
          <p className="font-raleway mx-auto max-w-2xl text-gray-600">
            Join us in our mission to create positive change and transform lives. Together, we can make a difference in
            communities around the world.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
