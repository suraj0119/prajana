import Image from "next/image"
import { DecorativeHeart } from "../decorative-heart"

export function EducationProgram() {
  return (
    <div className="container mx-auto px-4">
      <div className="relative mx-auto max-w-3xl text-center mb-8 md:mb-12">
        {/* Hide decorative hearts on mobile */}
        <div className="hidden md:block">
          <DecorativeHeart className="absolute -left-16 top-0 opacity-50" />
          <DecorativeHeart className="absolute -right-16 top-0 opacity-50" direction="right" />
        </div>

        <h2 className="font-poppins text-2xl md:text-3xl font-bold text-primary mb-3 md:mb-4">
          Education for Children
        </h2>
        <p className="font-raleway text-sm md:text-base text-gray-600">
          Providing quality education to underprivileged children to break the cycle of poverty.
        </p>
      </div>

      <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
        <div>
          <Image
            src="/images/koshish-education-program.jpg"
            alt="Children attending a class at Prajna Foundation's Koshish education center"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-[250px] sm:h-[300px] md:h-[400px]"
          />
          <p className="font-raleway text-xs md:text-sm text-gray-500 mt-2 italic text-center">
            Students engaged in learning at one of our Koshish education centers
          </p>
        </div>

        <div>
          <h3 className="font-poppins text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">Initiative: Koshish</h3>
          <p className="font-raleway text-sm md:text-base text-gray-600 mb-3 md:mb-4">
            Koshish is the Foundation's flagship education initiative, launched in 2006. It runs informal education
            centers in slums, providing supplementary education to children who are school dropouts or first-generation
            learners. These centers offer a safe, clean and supportive learning environment, focusing on the holistic
            development of the child.
          </p>
          <p className="font-raleway text-sm md:text-base text-gray-600">
            We work with communities to identify barriers to education and develop tailored solutions that address local
            challenges. Our approach emphasizes quality, inclusivity, and relevance, ensuring that children receive an
            education that prepares them for future opportunities.
          </p>
        </div>
      </div>

      <div className="mt-8 md:mt-12 grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <div className="mb-3 md:mb-4 h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
          <h4 className="font-poppins text-lg md:text-xl font-bold text-primary mb-2">Primary Education Support</h4>
          <p className="font-raleway text-sm md:text-base text-gray-600">
            We provide scholarships, learning materials, and supplementary classes to ensure children can access and
            succeed in primary education. Our programs have supported over 10,000 children in completing their primary
            education.
          </p>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <div className="mb-3 md:mb-4 h-10 w-10 md:h-12 md:w-12 rounded-full bg-accent-yellow/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
          <h4 className="font-poppins text-lg md:text-xl font-bold text-primary mb-2">After-School Programs</h4>
          <p className="font-raleway text-sm md:text-base text-gray-600">
            Our after-school programs provide a safe and enriching environment where children can receive homework help,
            participate in arts and sports activities, and develop important social skills. These programs currently
            serve 3,000 children annually.
          </p>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md sm:col-span-2 md:col-span-1">
          <div className="mb-3 md:mb-4 h-10 w-10 md:h-12 md:w-12 rounded-full bg-accent-pink/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
          <h4 className="font-poppins text-lg md:text-xl font-bold text-primary mb-2">Teacher Training</h4>
          <p className="font-raleway text-sm md:text-base text-gray-600">
            We invest in teacher development, providing training in modern pedagogical methods, inclusive education
            practices, and child-centered learning approaches. Our teacher training programs have reached over 1,500
            educators.
          </p>
        </div>
      </div>

      <div className="mt-8 md:mt-12 bg-primary/5 p-4 md:p-8 rounded-lg">
        <h3 className="font-poppins text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6 text-center">
          Success Stories
        </h3>
        <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <blockquote className="font-raleway text-sm md:text-base text-gray-600 italic mb-4">
              "The scholarship from Prajna Foundation changed my life. I was able to complete my education and become
              the first person in my family to attend university. Now I'm a teacher, giving back to my community."
            </blockquote>
            <div className="flex items-center">
              <div className="mr-3 md:mr-4 h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Priya"
                  width={50}
                  height={50}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-poppins font-bold text-primary text-sm md:text-base">Priya Sharma</p>
                <p className="font-raleway text-xs md:text-sm text-gray-500">Education Program Graduate</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <blockquote className="font-raleway text-sm md:text-base text-gray-600 italic mb-4">
              "As a teacher who received training from Prajna Foundation, I've seen a remarkable change in my classroom.
              The new teaching methods have increased student engagement and improved learning outcomes."
            </blockquote>
            <div className="flex items-center">
              <div className="mr-3 md:mr-4 h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Rajesh"
                  width={50}
                  height={50}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-poppins font-bold text-primary text-sm md:text-base">Rajesh Kumar</p>
                <p className="font-raleway text-xs md:text-sm text-gray-500">Teacher Training Participant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
