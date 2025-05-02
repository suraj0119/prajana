import { TransparentHeader } from "../components/transparent-header"
import { Footer } from "../components/footer"
import { PageHeader } from "../components/page-header"
import { VolunteerSection } from "../components/get-involved/volunteer-section"
import { ContactSection } from "../components/get-involved/contact-section"

export default function GetInvolvedPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TransparentHeader />

      <main className="flex-1">
        <PageHeader
          title="Get Involved"
          subtitle="Join us in our mission to create positive change in communities around the world"
          backgroundImage="/images/children-craft-activity.jpg"
        />

        <section id="volunteer" className="py-16">
          <VolunteerSection />
        </section>

        <section id="contact" className="py-16 bg-gray-50">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  )
}
