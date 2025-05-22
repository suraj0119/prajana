import { TransparentHeader } from "../components/transparent-header"
import { Footer } from "../components/footer"
import { PageHeader } from "../components/page-header"
import { OurStory } from "../components/about/our-story"
import { MissionVision } from "../components/about/mission-vision"
import { OurApproach } from "../components/about/our-approach"
import { OurTeam } from "../components/about/our-team"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TransparentHeader />

      <main className="flex-1">
        <PageHeader
          title="About Us"
          subtitle="Learn about our journey, mission, and the people behind Prajna Foundation"
          backgroundImage="/images/community-celebration.jpg"
        />

        <section id="our-story" className="py-16">
          <OurStory />
        </section>

        <section id="mission-vision" className="py-16 bg-gray-50">
          <MissionVision />
        </section>

        <section id="our-approach" className="py-16">
          <OurApproach />
        </section>

        <section id="our-team" className="py-16 bg-gray-50">
          <OurTeam />
        </section>
      </main>

      <Footer />
    </div>
  )
}
