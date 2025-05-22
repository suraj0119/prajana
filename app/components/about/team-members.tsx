"use client"

import { motion } from "framer-motion"
import { DecorativeHeart } from "../decorative-heart"
import Image from "next/image"
import { Subheading, Paragraph } from "../typography"

// Team member data with real information
const teamMembers = [
  {
    id: 1,
    name: "Dr. RK Sinha",
    title: "Chairman",
    affiliation: "Broadcast & Media Professional",
    image: "/images/team/dr-rk-sinha.jpg",
  },
  {
    id: 2,
    name: "Vandana Sinha",
    title: "Trustee",
    affiliation: "Educationist",
    image: "/images/team/vandana-sinha.jpg",
  },
  {
    id: 3,
    name: "Jai Raj Singh",
    title: "Trustee",
    affiliation: "Procurement Head",
    image: "/images/team/jai-raj-singh.jpg",
  },
  {
    id: 4,
    name: "Kriti Srivastava",
    title: "Advisor",
    affiliation: "Asst. Professor (Computer Engineering)",
    image: "/images/team/kriti-srivastava.jpg",
  },
  {
    id: 5,
    name: "Priytosh Wali",
    title: "Advisor",
    affiliation: "CEO, Stellar Global",
    image: "/images/team/priytosh-wali.jpg",
  },
  {
    id: 6,
    name: "Rajiv Chawla",
    title: "Advisor",
    affiliation: "Chairman, IamSME of India and Jairaj Group of Industries",
    image: "/images/team/rajiv-chawla.jpg",
  },
  {
    id: 7,
    name: "Manogya Sahay",
    title: "Advisor",
    affiliation: "Counselling Psychologist",
    image: "/images/team/manogya-sahay.jpg",
  },
  {
    id: 8,
    name: "Ravi Dayal",
    title: "Advisor",
    affiliation: "Architect",
    image: "/images/team/ravi-dayal.jpg",
  },
  {
    id: 9,
    name: "Dr. Harbansh Lal",
    title: "Advisor",
    affiliation: "Sr. Eye Surgeon, Sir Gangaram Hospital",
    image: "/images/team/dr-harbansh-lal.jpg",
  },
  {
    id: 10,
    name: "Dr. Anurag Batra",
    title: "Advisor",
    affiliation: "Chairman, Business World",
    image: "/images/team/dr-anurag-batra.jpg",
  },
]

// Custom positioning for specific team members to ensure faces are properly visible
const imagePositions: Record<number, string> = {
  1: "object-[center_top]", // Dr. RK Sinha
  2: "object-[center_20%]", // Vandana Sinha
  3: "object-[center_15%]", // Jai Raj Singh
  5: "object-[center_20%]", // Priytosh Wali
  6: "object-[center_20%]", // Rajiv Chawla
  9: "object-[center_15%]", // Dr. Harbansh Lal
  10: "object-[center_20%]", // Dr. Anurag Batra
}

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
        {teamMembers.map((member, index) => (
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
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className={`object-cover ${imagePositions[member.id] || "object-[center_15%]"}`}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 rounded-full"></div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-accent-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-accent-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="font-poppins text-lg font-bold text-primary mb-1 text-center">{member.name}</h3>
            <p className="font-raleway text-sm text-gray-600 text-center">{member.title}</p>
            <p className="font-raleway text-xs text-gray-500 text-center mt-1">{member.affiliation}</p>
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
