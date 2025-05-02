import Image from "next/image"
import { DecorativeHeart } from "../decorative-heart"
// Import the typography components
import { Subheading, Paragraph } from "../typography"

export function OurStory() {
  return (
    <div className="container mx-auto px-4">
      <div className="relative mx-auto max-w-3xl text-center mb-8 md:mb-12">
        {/* Hide decorative hearts on mobile */}
        <div className="hidden md:block">
          <DecorativeHeart className="absolute -left-16 top-0 opacity-50" />
          <DecorativeHeart className="absolute -right-16 top-0 opacity-50" direction="right" />
        </div>

        <Subheading className="mb-3 md:mb-4 text-primary text-2xl md:text-3xl">Our Story</Subheading>
        <Paragraph className="text-gray-600 text-sm md:text-base">
          The journey of Prajna Foundation began with a powerful vision for children's education.
        </Paragraph>
      </div>

      <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
        <div>
          <Image
            src="/images/classroom-learning.jpg"
            alt="Teacher helping children with their studies at Prajna Foundation's learning center"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-[250px] sm:h-[300px] md:h-[400px]"
          />
        </div>

        <div>
          <h3 className="font-poppins text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">Our Founding</h3>
          <p className="font-raleway text-sm md:text-base text-gray-600 mb-3 md:mb-4">
            Prajna Foundation was founded in 1994 by a group of prominent individuals committed to the cause of
            children's education, with a focus on underprivileged children, especially girls, in slum areas. The
            organization was established with a mission to empower children and provide them access to quality
            education, vocational training, and holistic development.
          </p>
          <p className="font-raleway text-sm md:text-base text-gray-600">
            What started as a small initiative has grown into a comprehensive organization impacting thousands of lives
            across multiple communities. Throughout our journey, we have remained dedicated to our core belief that
            education is the most powerful tool for lasting change and social transformation.
          </p>
        </div>
      </div>

      <div className="mt-8 md:mt-12 grid gap-8 md:gap-12 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <h3 className="font-poppins text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">Growing Our Impact</h3>
          <p className="font-raleway text-sm md:text-base text-gray-600 mb-3 md:mb-4">
            Over the years, Prajna Foundation has expanded its reach and deepened its impact through innovative programs
            and dedicated service. We have established community learning centers in underserved areas, providing safe
            spaces where children can learn and grow.
          </p>
          <p className="font-raleway text-sm md:text-base text-gray-600 mb-3 md:mb-4">
            Our work has evolved to address the changing needs of the communities we serve, incorporating digital
            literacy, vocational training for women, and advocacy for girls' education. Through partnerships with local
            communities, government agencies, and other organizations, we have been able to create sustainable solutions
            to complex challenges.
          </p>
          <p className="font-raleway text-sm md:text-base text-gray-600">
            Today, Prajna Foundation stands as a testament to what can be achieved when compassion meets commitment. Our
            history is not just about organizational growth, but about the thousands of individual success stories that
            make up our collective journey.
          </p>
        </div>

        <div className="order-1 md:order-2">
          <Image
            src="/images/children-activity.jpg"
            alt="Children participating in group activities at Prajna Foundation's community center"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-[250px] sm:h-[300px] md:h-[400px]"
          />
        </div>
      </div>
    </div>
  )
}
