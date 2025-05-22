import { TransparentHeader } from "./components/transparent-header"
import { HeroSection } from "./components/hero-section"
import { ImpactStats } from "./components/impact-stats"
import { WhoWeAre } from "./components/who-we-are"
import { SuccessStories } from "./components/success-stories"
import { GetInvolved } from "./components/get-involved"
import { Footer } from "./components/footer"

// Import the typography components
import { Subheading } from "./components/typography"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Transparent Header */}
      <TransparentHeader />

      <main>
        {/* Hero Section */}
        <section id="home" className="w-full">
          <HeroSection />
        </section>

        {/* Impact Statistics Section */}
        <section id="impact" className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <Subheading className="mb-8 md:mb-12 text-center text-primary text-2xl md:text-3xl">Our Impact</Subheading>
            <ImpactStats />
          </div>
        </section>

        {/* Who We Are Section */}
        <section id="about" className="py-12 md:py-16">
          <WhoWeAre />
        </section>

        {/* Success Stories Section */}
        <section id="stories">
          <SuccessStories />
        </section>

        {/* Get Involved Section */}
        <section id="get-involved" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Subheading className="mb-8 md:mb-12 text-center text-primary text-2xl md:text-3xl">
              Get Involved
            </Subheading>
            <GetInvolved />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
