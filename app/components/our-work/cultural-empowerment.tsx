import Image from "next/image"
import { DecorativeHeart } from "../decorative-heart"

export function CulturalEmpowerment() {
  return (
    <div className="container mx-auto px-4">
      <div className="relative mx-auto max-w-3xl text-center mb-12">
        <DecorativeHeart className="absolute -left-16 top-0 opacity-50" />
        <DecorativeHeart className="absolute -right-16 top-0 opacity-50" direction="right" />

        <h2 className="font-poppins text-3xl font-bold text-primary mb-4">Cultural Empowerment</h2>
        <p className="font-raleway text-gray-600">
          Preserving heritage and promoting cultural awareness among the younger generation.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <h3 className="font-poppins text-2xl font-bold text-primary mb-4">Initiative: Virasat</h3>
          <p className="font-raleway text-gray-600 mb-4">
            Virasat is a program aimed at promoting Indian culture and values among the younger generation. It includes
            sessions on storytelling, classical music, and traditional arts, helping children stay connected with their
            heritage and develop cultural awareness.
          </p>
          <p className="font-raleway text-gray-600">
            In an increasingly globalized world, we believe it's essential for children to understand and appreciate
            their cultural roots. Virasat creates opportunities for cultural expression and learning, fostering a sense
            of identity and pride in India's rich heritage.
          </p>
        </div>

        <div className="order-1 md:order-2">
          <Image
            src="/images/cultural-yoga-program.jpg"
            alt="Children performing yoga poses during a cultural program at Prajna Foundation"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
          <p className="font-raleway text-sm text-gray-500 mt-2 italic text-center">
            Children demonstrating yoga poses during our Virasat cultural program
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
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
          </div>
          <h4 className="font-poppins text-xl font-bold text-primary mb-2">Storytelling</h4>
          <p className="font-raleway text-gray-600">
            Through traditional stories and folklore, children learn about values, history, and cultural wisdom. Our
            storytelling sessions bring ancient tales to life in engaging and interactive ways.
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
              <circle cx="5.5" cy="17.5" r="2.5"></circle>
              <circle cx="18.5" cy="17.5" r="2.5"></circle>
              <path d="M5.5 17.5V6.5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v11"></path>
              <path d="M8 15h8"></path>
            </svg>
          </div>
          <h4 className="font-poppins text-xl font-bold text-primary mb-2">Classical Music</h4>
          <p className="font-raleway text-gray-600">
            Introduction to Indian classical music traditions helps children appreciate the depth and complexity of our
            musical heritage. We offer basic training in vocal and instrumental music.
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
              <path d="M12.5 3a17.8 17.8 0 0 0-10 5.5 17.8 17.8 0 0 0 10 5.5 17.8 17.8 0 0 0 10-5.5 17.8 17.8 0 0 0-10-5.5Z"></path>
              <circle cx="12.5" cy="8.5" r="2.5"></circle>
              <path d="M20 16.5c0 2.5-3.3 4.5-7.5 4.5S5 19 5 16.5"></path>
            </svg>
          </div>
          <h4 className="font-poppins text-xl font-bold text-primary mb-2">Yoga & Meditation</h4>
          <p className="font-raleway text-gray-600">
            We teach children traditional yoga and meditation practices, promoting physical health, mental well-being,
            and spiritual awareness while connecting them to ancient Indian wellness traditions.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-primary/5 p-8 rounded-lg">
        <h3 className="font-poppins text-2xl font-bold text-primary mb-6">Cultural Events</h3>
        <p className="font-raleway text-gray-600 mb-6">
          Throughout the year, we organize cultural celebrations and performances where children can showcase what
          they've learned and participate in traditional festivities. These events also engage parents and community
          members, strengthening cultural bonds across generations.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-poppins text-lg font-bold text-primary mb-2">Festival Celebrations</h4>
            <p className="font-raleway text-sm text-gray-600">
              Traditional celebrations of major Indian festivals with authentic customs and practices.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-poppins text-lg font-bold text-primary mb-2">Cultural Performances</h4>
            <p className="font-raleway text-sm text-gray-600">
              Regular showcases where children perform traditional dances, music, and theatrical pieces.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-poppins text-lg font-bold text-primary mb-2">Heritage Exhibitions</h4>
            <p className="font-raleway text-sm text-gray-600">
              Displays of children's artwork and crafts inspired by India's cultural heritage.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
