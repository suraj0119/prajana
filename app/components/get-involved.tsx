"use client"

import { motion } from "framer-motion"
import { Heart, Users, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { DecorativeHeart } from "./decorative-heart"
import Link from "next/link"
// Import the typography components
import { Subheading, Paragraph } from "./typography"

export function GetInvolved() {
  return (
    <div className="relative flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8">
      {/* Decorative Hearts - hide on small screens */}
      <div className="hidden md:block">
        <DecorativeHeart className="absolute -left-16 -top-8 opacity-30" />
        <DecorativeHeart className="absolute -right-16 -top-8 opacity-30" direction="right" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="group relative overflow-hidden rounded-lg p-6 md:p-6 lg:p-8 text-white flex-1"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/volunteer-event.jpg"
            alt="Prajna Foundation event with volunteers and staff"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10">
          <Heart className="mb-4 h-10 w-10 md:h-10 md:w-10 lg:h-12 lg:w-12 text-white" />
          <Subheading className="mb-2 md:mb-3 text-xl md:text-xl lg:text-2xl text-white">Donation</Subheading>
          <Paragraph className="mb-4 md:mb-4 lg:mb-6 text-xs sm:text-sm md:text-sm lg:text-base text-white">
            Your contribution helps us continue our mission of empowering communities and transforming lives.
          </Paragraph>
          <Button size="sm" className="bg-accent-pink text-primary hover:bg-accent-pink/90 w-full md:w-auto" asChild>
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="group relative overflow-hidden rounded-lg p-6 md:p-6 lg:p-8 text-white flex-1"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/teaching-session.jpg"
            alt="Teacher conducting a music session with children at Prajna Foundation"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10">
          <Users className="mb-4 h-10 w-10 md:h-10 md:w-10 lg:h-12 lg:w-12 text-white" />
          <Subheading className="mb-2 md:mb-3 text-xl md:text-xl lg:text-2xl text-white">Volunteering</Subheading>
          <Paragraph className="mb-4 md:mb-4 lg:mb-6 text-xs sm:text-sm md:text-sm lg:text-base text-white">
            Join our community of dedicated volunteers and help make a real difference in people's lives.
          </Paragraph>
          <Button
            size="sm"
            className="bg-accent-yellow text-primary hover:bg-accent-yellow/90 w-full md:w-auto"
            asChild
          >
            <Link href="/get-involved">Volunteer with Us</Link>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="group relative overflow-hidden rounded-lg p-6 md:p-6 lg:p-8 text-white flex-1"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/children-group.jpg"
            alt="Smiling children at Prajna Foundation's education center"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10">
          <Mail className="mb-4 h-10 w-10 md:h-10 md:w-10 lg:h-12 lg:w-12 text-white" />
          <Subheading className="mb-2 md:mb-3 text-xl md:text-xl lg:text-2xl text-white">Contact Us</Subheading>
          <Paragraph className="mb-4 md:mb-4 lg:mb-6 text-xs sm:text-sm md:text-sm lg:text-base text-white">
            Have questions or want to learn more about our work? Get in touch with us.
          </Paragraph>
          <Button size="sm" className="bg-white text-primary hover:bg-white/90 w-full md:w-auto" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
