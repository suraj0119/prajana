import { DecorativeHeart } from "../decorative-heart"
import { Subheading, Paragraph } from "../typography"

export function MissionVision() {
  return (
    <div className="container mx-auto px-4">
      <div className="relative mx-auto max-w-3xl text-center mb-12">
        <DecorativeHeart className="absolute -left-16 top-0 opacity-50" />
        <DecorativeHeart className="absolute -right-16 top-0 opacity-50" direction="right" />

        <Subheading className="mb-4 text-primary">Our Mission & Vision</Subheading>
        <Paragraph className="text-gray-600">Guiding principles that drive our work and shape our future.</Paragraph>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-6 flex justify-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
          </div>
          <h3 className="font-poppins text-2xl font-bold text-primary mb-4 text-center">Our Mission</h3>
          <p className="font-raleway text-gray-600 text-center">
            Prajna Foundation works towards holistic development and empowerment of underprivileged children, especially
            girls, by providing access to quality education, skills training, and a supportive environment for their
            personal growth.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-6 flex justify-center">
            <div className="h-16 w-16 rounded-full bg-accent-yellow/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent-yellow"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
          </div>
          <h3 className="font-poppins text-2xl font-bold text-primary mb-4 text-center">Our Vision</h3>
          <p className="font-raleway text-gray-600 text-center">
            A future where every child, particularly from marginalized communities, has access to education and
            opportunities to unlock their full potential.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-primary/5 p-8 rounded-lg">
        <h3 className="font-poppins text-2xl font-bold text-primary mb-4 text-center">Our Core Values</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="h-12 w-12 rounded-full bg-accent-pink/10 flex items-center justify-center">
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
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
            </div>
            <h4 className="font-poppins text-lg font-bold text-primary mb-2">Compassion</h4>
            <p className="font-raleway text-sm text-gray-600">
              We approach our work with empathy and understanding for the communities we serve.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="h-12 w-12 rounded-full bg-accent-yellow/10 flex items-center justify-center">
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
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
            </div>
            <h4 className="font-poppins text-lg font-bold text-primary mb-2">Integrity</h4>
            <p className="font-raleway text-sm text-gray-600">
              We maintain the highest ethical standards in all our operations and relationships.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
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
                  <path d="M12 2v4"></path>
                  <path d="M12 18v4"></path>
                  <path d="M4.93 4.93l2.83 2.83"></path>
                  <path d="M16.24 16.24l2.83 2.83"></path>
                  <path d="M2 12h4"></path>
                  <path d="M18 12h4"></path>
                  <path d="M4.93 19.07l2.83-2.83"></path>
                  <path d="M16.24 7.76l2.83-2.83"></path>
                </svg>
              </div>
            </div>
            <h4 className="font-poppins text-lg font-bold text-primary mb-2">Innovation</h4>
            <p className="font-raleway text-sm text-gray-600">
              We continuously seek new and effective ways to address complex social challenges.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
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
                  className="text-secondary"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            </div>
            <h4 className="font-poppins text-lg font-bold text-primary mb-2">Collaboration</h4>
            <p className="font-raleway text-sm text-gray-600">
              We believe in the power of partnerships to create sustainable and meaningful change.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
