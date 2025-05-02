"use client"

import { CalendarDays, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const events = [
  {
    title: "Clean Water Initiative",
    date: "26 May 2024",
    location: "Rural Communities",
    description: "Providing clean water access to rural communities.",
  },
  {
    title: "Education Workshop",
    date: "09 June 2024",
    location: "Community Center",
    description: "Teaching essential skills to underprivileged youth.",
  },
  {
    title: "Healthcare Camp",
    date: "14 April 2024",
    location: "Mobile Clinic",
    description: "Free medical checkups and healthcare services.",
  },
]

export function UpcomingEvents() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-poppins mb-12 text-center text-3xl font-bold text-primary">Upcoming Events</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="rounded-lg bg-white p-6 shadow-lg"
            >
              <div className="mb-4 flex items-center text-sm text-gray-500">
                <CalendarDays className="mr-2 h-4 w-4" />
                {event.date}
              </div>
              <h3 className="font-poppins mb-2 text-xl font-bold text-primary">{event.title}</h3>
              <div className="mb-4 flex items-center text-sm text-gray-500">
                <MapPin className="mr-2 h-4 w-4" />
                {event.location}
              </div>
              <p className="font-raleway mb-6 text-gray-600">{event.description}</p>
              <Button className="w-full bg-[#40E0D0] text-white hover:bg-[#40E0D0]/90">JOIN EVENT</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
