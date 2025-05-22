import Image from "next/image"
import { DecorativeHeart } from "../decorative-heart"
// Import the typography components
import { Subheading, Paragraph } from "../typography"

export function OurApproach() {
  return (
    <div className="container mx-auto px-4">
      <div className="relative mx-auto max-w-3xl text-center mb-12">
        <DecorativeHeart className="absolute -left-16 top-0 opacity-50" />
        <DecorativeHeart className="absolute -right-16 top-0 opacity-50" direction="right" />

        <Subheading className="mb-4 text-primary">Our Approach</Subheading>
        <Paragraph className="text-gray-600">How we create lasting change in the communities we serve.</Paragraph>
      </div>

      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <Image
            src="/images/prajna-team.jpg"
            alt="Prajna Foundation team members standing together under the foundation banner"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
          <p className="font-raleway text-sm text-gray-500 mt-2 italic text-center">
            Our dedicated team working together to implement our community-centered approach
          </p>
        </div>

        <div>
          <h3 className="font-poppins text-2xl font-bold text-primary mb-4">Community-Centered Development</h3>
          <p className="font-raleway text-gray-600 mb-4">
            Prajna focuses on community-based initiatives aimed at breaking the cycle of poverty through education. By
            providing both digital and practical skills, Prajna empowers children and women in underserved communities,
            ensuring they are prepared for a better future.
          </p>
          <p className="font-raleway text-gray-600">
            The foundation runs community learning centers equipped with modern technology, and they advocate for girls'
            education in the face of cultural barriers. Our approach begins with listening to community members and
            understanding their unique challenges, strengths, and aspirations.
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
          <h4 className="font-poppins text-xl font-bold text-primary mb-2">Education First</h4>
          <p className="font-raleway text-gray-600">
            We believe that education is the foundation for all sustainable development. Our programs prioritize quality
            education that is accessible, inclusive, and relevant to the needs of the communities we serve.
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
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h4 className="font-poppins text-xl font-bold text-primary mb-2">Girl Child Focus</h4>
          <p className="font-raleway text-gray-600">
            We place special emphasis on empowering girls through education, recognizing that when girls are educated,
            entire communities benefit. We work to overcome cultural barriers and create supportive environments for
            girls to learn and grow.
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
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
              <rect x="9" y="9" width="6" height="6"></rect>
              <line x1="9" y1="1" x2="9" y2="4"></line>
              <line x1="15" y1="1" x2="15" y2="4"></line>
              <line x1="9" y1="20" x2="9" y2="23"></line>
              <line x1="15" y1="20" x2="15" y2="23"></line>
              <line x1="20" y1="9" x2="23" y2="9"></line>
              <line x1="20" y1="14" x2="23" y2="14"></line>
              <line x1="1" y1="9" x2="4" y2="9"></line>
              <line x1="1" y1="14" x2="4" y2="14"></line>
            </svg>
          </div>
          <h4 className="font-poppins text-xl font-bold text-primary mb-2">Digital Empowerment</h4>
          <p className="font-raleway text-gray-600">
            In today's digital world, we integrate technology into our programs to ensure that the communities we serve
            are not left behind. Our community learning centers are equipped with modern technology to provide digital
            literacy and skills.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-primary/5 p-8 rounded-lg">
        <h3 className="font-poppins text-2xl font-bold text-primary mb-6 text-center">Our Impact Framework</h3>
        <div className="grid gap-6 md:grid-cols-4">
          <div className="text-center">
            <div className="mb-4 mx-auto h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
              1
            </div>
            <h4 className="font-poppins text-lg font-bold text-primary mb-2">Assess</h4>
            <p className="font-raleway text-sm text-gray-600">
              Understand community needs and assets through participatory research and dialogue.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 mx-auto h-16 w-16 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xl">
              2
            </div>
            <h4 className="font-poppins text-lg font-bold text-primary mb-2">Design</h4>
            <p className="font-raleway text-sm text-gray-600">
              Co-create programs with community members that address identified priorities.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 mx-auto h-16 w-16 rounded-full bg-accent-pink flex items-center justify-center text-white font-bold text-xl">
              3
            </div>
            <h4 className="font-poppins text-lg font-bold text-primary mb-2">Implement</h4>
            <p className="font-raleway text-sm text-gray-600">
              Execute programs with local partners, building capacity and ownership.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 mx-auto h-16 w-16 rounded-full bg-accent-yellow flex items-center justify-center text-white font-bold text-xl">
              4
            </div>
            <h4 className="font-poppins text-lg font-bold text-primary mb-2">Evaluate</h4>
            <p className="font-raleway text-sm text-gray-600">
              Measure outcomes, learn from experiences, and adapt for continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
