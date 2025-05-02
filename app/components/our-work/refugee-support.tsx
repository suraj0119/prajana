import Image from "next/image"
import { DecorativeHeart } from "../decorative-heart"

export function RefugeeSupport() {
  return (
    <div className="container mx-auto px-4">
      <div className="relative mx-auto max-w-3xl text-center mb-12">
        <DecorativeHeart className="absolute -left-16 top-0 opacity-50" />
        <DecorativeHeart className="absolute -right-16 top-0 opacity-50" direction="right" />

        <h2 className="font-poppins text-3xl font-bold text-primary mb-4">Refugee Support</h2>
        <p className="font-raleway text-gray-600">
          Providing essential services and integration support for displaced communities.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div>
          <Image
            src="/images/refugee-support-family.jpg"
            alt="A family receiving food supplies through Prajna Foundation's refugee support program"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
          <p className="font-raleway text-sm text-gray-500 mt-2 italic text-center">
            A family receiving essential supplies through our refugee support initiative
          </p>
        </div>

        <div>
          <h3 className="font-poppins text-2xl font-bold text-primary mb-4">Emergency Relief & Sustainable Support</h3>
          <p className="font-raleway text-gray-600 mb-4">
            Our Refugee Support program provides comprehensive assistance to displaced individuals and families, helping
            them rebuild their lives with dignity and hope. We focus on both immediate relief and long-term integration
            support.
          </p>
          <p className="font-raleway text-gray-600 mb-4">
            Through this initiative, we provide essential supplies including food, clothing, and hygiene items to
            families in need. Beyond meeting immediate needs, we work to create pathways to self-sufficiency through
            education, vocational training, and community integration programs.
          </p>
          <p className="font-raleway text-gray-600">
            We believe in a holistic approach that addresses not only physical needs but also the psychological and
            social aspects of displacement, helping families rebuild their sense of community and belonging.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
            </svg>
          </div>
          <h4 className="font-poppins text-xl font-bold text-primary mb-2">Emergency Relief</h4>
          <p className="font-raleway text-gray-600">
            We provide immediate assistance with food, shelter, clothing, and healthcare to displaced families in crisis
            situations, ensuring their basic needs are met during difficult transitions.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4 h-12 w-12 rounded-full bg-accent-yellow/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent-yellow"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
            </svg>
          </div>
          <h4 className="font-poppins text-xl font-bold text-primary mb-2">Education Access</h4>
          <p className="font-raleway text-gray-600">
            We help refugee children continue their education by providing school supplies, tutoring, and support for
            enrollment in local schools, preventing educational disruption during displacement.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4 h-12 w-12 rounded-full bg-accent-pink/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent-pink"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h4 className="font-poppins text-xl font-bold text-primary mb-2">Community Integration</h4>
          <p className="font-raleway text-gray-600">
            We facilitate integration into new communities through language classes, cultural orientation, and community
            events that build connections between displaced families and host communities.
          </p>
        </div>
      </div>
    </div>
  )
}
