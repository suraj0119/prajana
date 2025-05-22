"use client"

import { useState } from "react"
import { DecorativeHeart } from "../decorative-heart"

export function EmbeddedForm() {
  const [isLoading, setIsLoading] = useState(true)
  const formUrl =
    "https://ccf5f61a.sibforms.com/serve/MUIFACxC10R1fTZpoaNfRMc1YIVYhEjnTbrf03mUfuaCcJx4wYg4NN2qn74vjMH-gP0P-3hDkbwlbyMGiwV-8e4YubHn4z1KdapHmYdAvM30yqz-Oykpos1mAQq2x7Iu6DgFZB0YT0mQSbzZ6vqZkBTO21pf5yU1LNeo49zAkno_XfIgqcULJdQOZYxzSUgBp1CYnoOeZkJ6XPw-"

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="container mx-auto px-4">
      <div className="relative mx-auto max-w-3xl text-center mb-8 md:mb-12">
        {/* Hide decorative hearts on mobile */}
        <div className="hidden md:block">
          <DecorativeHeart className="absolute -left-16 top-0 opacity-50" />
          <DecorativeHeart className="absolute -right-16 top-0 opacity-50" direction="right" />
        </div>

        <h2 className="font-poppins text-2xl md:text-3xl font-bold text-primary mb-3 md:mb-4">Contact Us</h2>
        <p className="font-raleway text-sm md:text-base text-gray-600">
          Have questions or want to learn more about our work? We'd love to hear from you.
        </p>
      </div>

      <div className="bg-white p-4 md:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-8 md:py-12">
            <div className="h-8 w-8 md:h-10 md:w-10 border-4 border-primary border-t-transparent rounded-full animate-spin mb-3 md:mb-4"></div>
            <p className="font-raleway text-sm md:text-base text-gray-600">Loading form...</p>
          </div>
        )}

        <div className={`${isLoading ? "opacity-0 h-0" : "opacity-100"} transition-opacity duration-300`}>
          <iframe
            src={formUrl}
            width="100%"
            height="800px"
            frameBorder="0"
            scrolling="auto"
            onLoad={handleIframeLoad}
            title="Contact Form"
            className="w-full"
            style={{ minHeight: "500px", height: "80vh", maxHeight: "800px" }}
          ></iframe>
        </div>
      </div>
    </div>
  )
}
