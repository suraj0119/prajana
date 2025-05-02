import Image from "next/image"
import { DecorativeHeart } from "../decorative-heart"
import { Button } from "@/components/ui/button"

export function VolunteerSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="relative mx-auto max-w-3xl text-center mb-8 md:mb-12">
        {/* Hide decorative hearts on mobile */}
        <div className="hidden md:block">
          <DecorativeHeart className="absolute -left-16 top-0 opacity-50" />
          <DecorativeHeart className="absolute -right-16 top-0 opacity-50" direction="right" />
        </div>

        <h2 className="font-poppins text-2xl md:text-3xl font-bold text-primary mb-3 md:mb-4">Volunteer With Us</h2>
        <p className="font-raleway text-sm md:text-base text-gray-600">
          Join our community of dedicated volunteers and help make a real difference in people's lives.
        </p>
      </div>

      <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-start">
        <div>
          <Image
            src="/images/volunteer-teaching.jpg"
            alt="Volunteer teaching and helping children with their studies at Prajna Foundation"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-[250px] sm:h-[300px] md:h-[400px] mb-6 md:mb-8"
          />

          <h3 className="font-poppins text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">Why Volunteer?</h3>
          <p className="font-raleway text-sm md:text-base text-gray-600 mb-3 md:mb-4">
            You can volunteer your time and skills to help educate children or conduct sessions on health, hygiene, or
            life skills. Volunteers play an essential role in supporting our team, from helping with events to mentoring
            children at our centers.
          </p>
          <p className="font-raleway text-sm md:text-base text-gray-600 mb-3 md:mb-4">
            Volunteering with Prajna Foundation offers a meaningful way to contribute your skills, time, and compassion
            to create positive change in communities around the world. Our volunteers are essential partners in our
            mission, bringing diverse perspectives and talents that enhance our work.
          </p>

          <h4 className="font-poppins text-lg md:text-xl font-bold text-primary mb-2 mt-5 md:mt-6">
            Volunteer Opportunities
          </h4>
          <ul className="font-raleway text-sm md:text-base text-gray-600 space-y-2 mb-6">
            <li className="flex items-start">
              <svg
                className="h-5 w-5 text-accent-yellow mr-2 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>
                <strong>Teaching & Tutoring:</strong> Share your knowledge in subjects like English, math, science, or
                computer skills.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-5 w-5 text-accent-yellow mr-2 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>
                <strong>Health & Hygiene Workshops:</strong> Conduct sessions on important health practices and hygiene
                awareness.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-5 w-5 text-accent-yellow mr-2 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>
                <strong>Life Skills Training:</strong> Help children develop essential life skills like communication,
                problem-solving, and decision-making.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-5 w-5 text-accent-yellow mr-2 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>
                <strong>Event Support:</strong> Assist with organizing and running fundraising events, awareness
                campaigns, and community activities.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-5 w-5 text-accent-yellow mr-2 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>
                <strong>Mentoring:</strong> Provide guidance and support to children at our centers, helping them
                develop confidence and aspirations.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-5 md:p-8 rounded-lg shadow-md">
          <h3 className="font-poppins text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6 text-center">
            How to Get Involved
          </h3>

          <p className="font-raleway text-sm md:text-base text-gray-600 mb-4 md:mb-6">
            We're always looking for passionate volunteers to join our team. If you're interested in volunteering with
            Prajna Foundation, please get in touch with us using the contact form below or by reaching out directly via
            email or phone.
          </p>

          <div className="bg-primary/5 p-4 md:p-6 rounded-lg mb-4 md:mb-6">
            <h4 className="font-poppins text-base md:text-lg font-bold text-primary mb-2">
              What to Include in Your Inquiry:
            </h4>
            <ul className="font-raleway text-sm md:text-base text-gray-600 space-y-2">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-accent-pink mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Your name and contact information</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-accent-pink mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Areas of interest or expertise</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-accent-pink mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Availability (days/hours per week)</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-accent-pink mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Any relevant experience or skills</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-accent-pink mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Why you're interested in volunteering with us</span>
              </li>
            </ul>
          </div>

          <p className="font-raleway text-sm md:text-base text-gray-600 mb-4 md:mb-6">
            Our team will review your inquiry and get back to you to discuss potential volunteer opportunities that
            match your interests and our current needs.
          </p>

          <div className="flex justify-center">
            <Button className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90" asChild>
              <a href="#contact">Contact Us to Volunteer</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
