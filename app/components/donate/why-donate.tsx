import Image from "next/image"
import { DecorativeHeart } from "../decorative-heart"

export function WhyDonate() {
  return (
    <div className="container mx-auto px-4">
      <div className="relative mx-auto max-w-3xl text-center mb-12">
        <DecorativeHeart className="absolute -left-16 top-0 opacity-50" />
        <DecorativeHeart className="absolute -right-16 top-0 opacity-50" direction="right" />

        <h2 className="font-poppins text-3xl font-bold text-primary mb-4">Why Donate?</h2>
        <p className="font-raleway text-gray-600">
          Your contribution makes a real difference in the lives of those we serve.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div>
          <Image
            src="/images/children-awareness-campaign.jpg"
            alt="Children participating in a drug awareness campaign, holding educational posters"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
          <p className="font-raleway text-sm text-gray-500 mt-2 italic text-center">
            Children from our program participating in a community awareness campaign
          </p>
        </div>

        <div>
          <h3 className="font-poppins text-2xl font-bold text-primary mb-4">Creating Lasting Change</h3>
          <p className="font-raleway text-gray-600 mb-4">
            Your donations help us run community centers, provide vocational training to women, and empower children
            through education. Each contribution supports real change and provides opportunities to those who need them
            most.
          </p>
          <p className="font-raleway text-gray-600">
            When you donate to Prajna Foundation, you're not just giving money – you're investing in human potential.
            Your contribution helps create lasting change by empowering individuals with the knowledge, skills, and
            resources they need to improve their lives and contribute to their communities.
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
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
            </svg>
          </div>
          <h4 className="font-poppins text-xl font-bold text-primary mb-2">Education</h4>
          <p className="font-raleway text-gray-600">
            Your donation helps provide quality education to underprivileged children, giving them the foundation they
            need to build a better future for themselves and their communities.
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
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </div>
          <h4 className="font-poppins text-xl font-bold text-primary mb-2">Vocational Training</h4>
          <p className="font-raleway text-gray-600">
            We provide women with skills training that enables them to achieve financial independence and support their
            families, creating a ripple effect of positive change in their communities.
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
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h4 className="font-poppins text-xl font-bold text-primary mb-2">Community Centers</h4>
          <p className="font-raleway text-gray-600">
            Our community centers serve as safe spaces for learning, growth, and connection. They provide essential
            services and support to children and families in underserved areas.
          </p>
        </div>
      </div>
    </div>
  )
}
