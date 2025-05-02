"use client"

import { DecorativeHeart } from "../decorative-heart"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function DonateButton() {
  return (
    <div className="container mx-auto px-4">
      <div className="relative mx-auto max-w-3xl text-center mb-8 md:mb-12">
        {/* Hide decorative hearts on mobile */}
        <div className="hidden md:block">
          <DecorativeHeart className="absolute -left-16 top-0 opacity-50" />
          <DecorativeHeart className="absolute -right-16 top-0 opacity-50" direction="right" />
        </div>

        <h2 className="font-poppins text-2xl md:text-3xl font-bold text-primary mb-3 md:mb-4">Make a Donation</h2>
        <p className="font-raleway text-sm md:text-base text-gray-600 mb-6 md:mb-8">
          Your generosity helps us create lasting positive change in communities around the world. Every contribution,
          no matter the size, makes a meaningful difference in the lives of those we serve.
        </p>
      </div>

      <div className="bg-white p-5 md:p-8 rounded-lg shadow-md max-w-3xl mx-auto text-center">
        <h3 className="font-poppins text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">
          Ready to Make a Difference?
        </h3>

        <p className="font-raleway text-sm md:text-base text-gray-600 mb-6 md:mb-8">
          Click the button below to proceed to our secure donation platform where you can make your contribution. Your
          support enables us to continue our mission of empowering underprivileged children and communities.
        </p>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-accent-pink text-primary hover:bg-accent-pink/90 text-base md:text-lg px-6 md:px-10 py-5 md:py-6 h-auto shadow-lg transition-transform hover:scale-105"
            onClick={() => window.open("https://prajnafoundation.in/donate/", "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            Donate Now
          </Button>
        </div>

        <p className="font-raleway text-xs md:text-sm text-gray-500 mt-4 md:mt-6">
          You will be redirected to our secure donation platform where you can complete your contribution.
        </p>
      </div>
    </div>
  )
}
