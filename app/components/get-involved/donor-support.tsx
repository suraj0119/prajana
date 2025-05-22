import Image from "next/image"
import { DecorativeHeart } from "../decorative-heart"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function DonorSupport() {
  return (
    <div className="container mx-auto px-4">
      <div className="relative mx-auto max-w-3xl text-center mb-12">
        <DecorativeHeart className="absolute -left-16 top-0 opacity-50" />
        <DecorativeHeart className="absolute -right-16 top-0 opacity-50" direction="right" />

        <h2 className="font-poppins text-3xl font-bold text-primary mb-4">Support as a Donor</h2>
        <p className="font-raleway text-gray-600">
          Your generosity can transform lives and create lasting positive change in communities around the world.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div>
          <h3 className="font-poppins text-2xl font-bold text-primary mb-4">The Impact of Your Support</h3>
          <p className="font-raleway text-gray-600 mb-4">
            When you donate to Prajna Foundation, you become a partner in our mission to empower underprivileged
            communities through education, vocational training, and sustainable development initiatives. Your
            contribution directly supports programs that create opportunities for individuals to build better futures
            for themselves and their families.
          </p>
          <p className="font-raleway text-gray-600 mb-6">
            We are committed to transparency and accountability in the use of donor funds. Through regular reporting and
            impact assessments, we ensure that your donation is used effectively to create meaningful change.
          </p>

          <div className="bg-primary/5 p-6 rounded-lg mb-6">
            <h4 className="font-poppins text-xl font-bold text-primary mb-4">How Your Donation Helps</h4>
            <ul className="font-raleway text-gray-600 space-y-2">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-accent-pink mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>
                  <strong>$25</strong> provides school supplies for a child for a full academic year
                </span>
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
                <span>
                  <strong>$50</strong> supports a woman in vocational training for one month
                </span>
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
                <span>
                  <strong>$100</strong> provides emergency relief supplies for a refugee family
                </span>
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
                <span>
                  <strong>$250</strong> funds a community digital literacy workshop for 20 participants
                </span>
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
                <span>
                  <strong>$500</strong> provides a scholarship for a child's education for a full year
                </span>
              </li>
            </ul>
          </div>

          <Button className="w-full bg-accent-pink text-primary hover:bg-accent-pink/90">Donate Now</Button>
        </div>

        <div>
          <Image
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1470&auto=format&fit=crop"
            alt="Children in classroom"
            width={600}
            height={400}
            className="rounded-lg object-cover mb-8"
          />

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-white">
              <CardContent className="p-6">
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
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                  </svg>
                </div>
                <h4 className="font-poppins text-lg font-bold text-primary mb-2">One-Time Donation</h4>
                <p className="font-raleway text-sm text-gray-600">
                  Make an immediate impact with a one-time contribution of any amount.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
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
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h4 className="font-poppins text-lg font-bold text-primary mb-2">Monthly Giving</h4>
                <p className="font-raleway text-sm text-gray-600">
                  Provide sustained support through recurring monthly donations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
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
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h4 className="font-poppins text-lg font-bold text-primary mb-2">Targeted Giving</h4>
                <p className="font-raleway text-sm text-gray-600">
                  Direct your donation to a specific program or initiative.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
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
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h4 className="font-poppins text-lg font-bold text-primary mb-2">Corporate Giving</h4>
                <p className="font-raleway text-sm text-gray-600">
                  Partner with us through corporate donations and sponsorships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
