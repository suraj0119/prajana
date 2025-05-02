import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary pt-12 md:pt-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* About Column */}
          <div>
            <h3 className="font-poppins mb-4 md:mb-6 text-lg md:text-xl font-bold text-white">About Prajna</h3>
            <p className="font-raleway mb-6 text-sm md:text-base text-white/80">
              Prajna Foundation is dedicated to empowering underprivileged children through education, vocational
              training, and community support.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/prajnafoundation.in"
                className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-accent-pink text-primary transition-colors hover:bg-accent-pink/90"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="https://twitter.com/prajnaindia?lang=en"
                className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-accent-yellow text-primary transition-colors hover:bg-accent-yellow/90"
                aria-label="X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="https://www.instagram.com/prajnafoundation/"
                className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-secondary text-primary transition-colors hover:bg-secondary/90"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/prajna-foundation/?viewAsMember=true"
                className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-primary/80 text-white transition-colors hover:bg-primary/70"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 md:h-5 md:w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/prajnafoundation"
                className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-red-600 text-white transition-colors hover:bg-red-700"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 md:h-5 md:w-5"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-poppins mb-4 md:mb-6 text-lg md:text-xl font-bold text-white">Quick Links</h3>
            <ul className="font-raleway space-y-2 md:space-y-3 text-sm md:text-base text-white/80">
              <li>
                <Link href="/" className="inline-block transition-colors hover:text-accent-pink">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="inline-block transition-colors hover:text-accent-pink">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="inline-block transition-colors hover:text-accent-pink">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="inline-block transition-colors hover:text-accent-pink">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/donate" className="inline-block transition-colors hover:text-accent-pink">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-poppins mb-4 md:mb-6 text-lg md:text-xl font-bold text-white">Contact</h3>
            <ul className="font-raleway space-y-3 md:space-y-4 text-sm md:text-base text-white/80">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-accent-pink flex-shrink-0 mt-0.5" />
                <span>206 Raj Tower-1, Alaknanda Comm. Centre, New Delhi-110019</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-accent-pink flex-shrink-0" />
                <span>+91 11 41602977</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-accent-pink flex-shrink-0" />
                <span>info@prajnafoundation.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 md:mt-12 border-t border-white/10 py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p className="font-raleway text-xs md:text-sm text-white/60 text-center md:text-left">
              &copy; {new Date().getFullYear()} Prajna Foundation. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <Link
                href="/privacy-policy"
                className="font-raleway text-xs md:text-sm text-white/60 hover:text-accent-pink"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="font-raleway text-xs md:text-sm text-white/60 hover:text-accent-pink"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/legal-compliance"
                className="font-raleway text-xs md:text-sm text-white/60 hover:text-accent-pink"
              >
                Legal & Compliance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
