"use client"

import { motion } from "framer-motion"
import { DecorativeHeart } from "../decorative-heart"
import Image from "next/image"
import { Subheading, Paragraph } from "../typography"

// Team member placeholder data
const teamPlaceholders = [
  { id: 1, name: "Team Member Name", title: "Position / Role" },
  { id: 2, name: "Team Member Name", title: "Position / Role" },
  { id: 3, name: "Team Member Name", title: "Position / Role" },
  { id: 4, name: "Team Member Name", title: "Position / Role" },
  { id: 5, name: "Team Member Name", title: "Position / Role" },
  { id: 6, name: "Team Member Name", title: "Position / Role" },
  { id: 7, name: "Team Member Name", title: "Position / Role" },
  { id: 8, name: "Team Member Name", title: "Position / Role" },
  { id: 9, name: "Team Member Name", title: "Position / Role" },
  { id: 10, name: "Team Member Name", title: "Position / Role" },
  { id: 11, name: "Team Member Name", title: "Position / Role" },
]

export function TeamMembers() {
  return (
    <div className="container mx-auto px-4">
      <div className="relative mx-auto max-w-3xl text-center mb-12">
        <DecorativeHeart className="absolute -left-16 top-0 opacity-50" />
        <DecorativeHeart className="absolute -right-16 top-0 opacity-50" direction="right" />

        <Subheading className="mb-4 text-primary">Our Team</Subheading>
        <Paragraph className="text-gray-600">
          Meet the dedicated professionals who drive our mission forward and make our work possible.
        </Paragraph>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {teamPlaceholders.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-4 group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-200 overflow-hidden relative">
                <Image
                  src={`/placeholder.svg?height=160&width=160&query=person silhouette`}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 rounded-full"></div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-accent-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-accent-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="font-poppins text-lg font-bold text-primary mb-1 text-center">{member.name}</h3>
            <p className="font-raleway text-sm text-gray-600 text-center">{member.title}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-primary/5 p-8 rounded-lg text-center">
        <p className="font-raleway text-gray-600">
          Our team consists of passionate educators, social workers, and administrators who are committed to creating
          positive change in the lives of underprivileged children. Each team member brings unique skills and
          perspectives to our work, united by a shared commitment to our mission and values.
        </p>
      </div>
    </div>
  )
}
