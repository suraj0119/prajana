"use client"

import { motion } from "framer-motion"
import { Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GetInvolvedCards() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="group relative overflow-hidden rounded-lg bg-primary p-8 text-white"
      >
        <div className="relative z-10">
          <Heart className="mb-4 h-12 w-12 text-accent-pink" />
          <h3 className="font-poppins mb-4 text-2xl font-bold">Make a Donation</h3>
          <p className="font-raleway mb-6">
            Your contribution helps us continue our mission of empowering communities and transforming lives.
          </p>
          <Button size="lg" className="bg-accent-pink text-primary hover:bg-accent-pink/90">
            Donate Now
          </Button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 transition-transform duration-300 group-hover:scale-110" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="group relative overflow-hidden rounded-lg bg-secondary p-8 text-white"
      >
        <div className="relative z-10">
          <Users className="mb-4 h-12 w-12 text-accent-yellow" />
          <h3 className="font-poppins mb-4 text-2xl font-bold">Become a Volunteer</h3>
          <p className="font-raleway mb-6">
            Join our community of dedicated volunteers and help make a real difference in people's lives.
          </p>
          <Button size="lg" className="bg-accent-yellow text-primary hover:bg-accent-yellow/90">
            Join Us
          </Button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/80 transition-transform duration-300 group-hover:scale-110" />
      </motion.div>
    </div>
  )
}
