import Image from "next/image"
import { DecorativeHeart } from "../decorative-heart"

export function VocationalTraining() {
  return (
    <div className="container mx-auto px-4">
      <div className="relative mx-auto max-w-3xl text-center mb-12">
        <DecorativeHeart className="absolute -left-16 top-0 opacity-50" />
        <DecorativeHeart className="absolute -right-16 top-0 opacity-50" direction="right" />

        <h2 className="font-poppins text-3xl font-bold text-primary mb-4">Vocational Training for Women</h2>
        <p className="font-raleway text-gray-600">
          Empowering women through skills development and economic opportunities.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <h3 className="font-poppins text-2xl font-bold text-primary mb-4">Initiative: Naaree Shakti</h3>
          <p className="font-raleway text-gray-600 mb-4">
            Naaree Shakti is aimed at empowering women from disadvantaged backgrounds by providing vocational training
            in beauty culture and tailoring. This initiative not only equips them with skills to earn a livelihood but
            also builds self-confidence and independence.
          </p>
          <p className="font-raleway text-gray-600">
            Our programs are developed in response to local market demands and opportunities, ensuring that the skills
            women acquire are relevant and valuable in their communities. Training is complemented by business
            development support, mentorship, and access to microfinance, creating a comprehensive pathway to sustainable
            livelihoods.
          </p>
        </div>

        <div className="order-1 md:order-2">
          <Image
            src="/images/naaree-shakti-training.jpg"
            alt="Women participating in a tailoring training session at Naaree Shakti center"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
          <p className="font-raleway text-sm text-gray-500 mt-2 italic text-center">
            Women learning tailoring skills at our Naaree Shakti vocational training center
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-4">
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
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </div>
          <h4 className="font-poppins text-xl font-bold text-primary mb-2">Tailoring & Textiles</h4>
          <p className="font-raleway text-gray-600">
            Our tailoring program teaches cutting, stitching, embroidery, and design skills, enabling women to produce
            marketable clothing and textiles. Over 2,000 women have established successful tailoring businesses.
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
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h4 className="font-poppins text-xl font-bold text-primary mb-2">Beauty & Wellness</h4>
          <p className="font-raleway text-gray-600">
            This program provides training in cosmetology, hair styling, and spa services, allowing women to offer
            in-demand beauty services. Graduates have opened over 500 beauty salons in their communities.
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
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </div>
          <h4 className="font-poppins text-xl font-bold text-primary mb-2">Food Production</h4>
          <p className="font-raleway text-gray-600">
            Women learn food preparation, preservation, packaging, and business skills to create sustainable food-based
            enterprises. This program has supported the launch of 800 food businesses.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4 h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
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
          <h4 className="font-poppins text-xl font-bold text-primary mb-2">Digital Skills</h4>
          <p className="font-raleway text-gray-600">
            This program teaches computer literacy, digital marketing, and e-commerce skills, opening up new economic
            opportunities in the digital economy. Over 1,200 women have gained employment in technology-related fields.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-primary/5 p-8 rounded-lg">
        <h3 className="font-poppins text-2xl font-bold text-primary mb-6">Comprehensive Support</h3>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-poppins text-lg font-bold text-primary mb-2">Business Development</h4>
            <p className="font-raleway text-gray-600">
              Beyond technical skills, we provide training in entrepreneurship, financial literacy, and business
              management to help women establish and grow successful enterprises.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-poppins text-lg font-bold text-primary mb-2">Market Linkages</h4>
            <p className="font-raleway text-gray-600">
              We connect program graduates with market opportunities, helping them access customers, suppliers, and
              business networks that support their economic success.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-poppins text-lg font-bold text-primary mb-2">Microfinance Access</h4>
            <p className="font-raleway text-gray-600">
              Through partnerships with financial institutions, we help women access the capital they need to start and
              expand their businesses on favorable terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
