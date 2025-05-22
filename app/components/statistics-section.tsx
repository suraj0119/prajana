"use client"

import { motion } from "framer-motion"
import { CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StatisticsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {/* Results Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[#40E0D0] p-8 text-white">
        <h3 className="font-poppins mb-4 text-xl font-bold">
          THANK TO THE RESULTS
          <br />
          ACHIEVED WITH YOU!
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="font-poppins text-4xl font-bold">6893</div>
            <div className="text-sm opacity-90">HELPED PEOPLE</div>
          </div>
          <div>
            <div className="font-poppins text-4xl font-bold">1200</div>
            <div className="text-sm opacity-90">VOLUNTEERS</div>
          </div>
        </div>
      </motion.div>

      {/* Next Goals */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-accent-yellow p-8"
      >
        <h3 className="font-poppins mb-4 text-xl font-bold text-primary">NEXT GOALS</h3>
        <ul className="space-y-4">
          {[
            { event: "New Hospital", date: "26 May" },
            { event: "New Orphanage", date: "09 June" },
            { event: "Water Wells", date: "14 April" },
          ].map((item) => (
            <li key={item.event} className="flex items-center justify-between">
              <span className="font-raleway text-primary">{item.event}</span>
              <div className="flex items-center text-sm text-primary/70">
                <CalendarDays className="mr-2 h-4 w-4" />
                {item.date}
              </div>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Donate Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-[#FF6F61] p-8 text-white"
      >
        <h3 className="font-poppins mb-4 text-xl font-bold">HELP US</h3>
        <h2 className="font-poppins mb-6 text-3xl font-bold">DONATE NOW</h2>
        <Button
          size="lg"
          variant="outline"
          className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#FF6F61]"
        >
          CHECK IT
        </Button>
      </motion.div>
    </div>
  )
}
