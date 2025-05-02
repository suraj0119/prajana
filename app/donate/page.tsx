import { TransparentHeader } from "../components/transparent-header"
import { Footer } from "../components/footer"
import { PageHeader } from "../components/page-header"
import { WhyDonate } from "../components/donate/why-donate"
import { DonateButton } from "../components/donate/donate-button"
import { OtherOptions } from "../components/donate/other-options"

export default function DonatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TransparentHeader />

      <main className="flex-1">
        <PageHeader
          title="Donate"
          subtitle="Your contribution can make a lasting difference in someone's life"
          backgroundImage="/images/koshish-celebration.jpg"
        />

        <section id="why-donate" className="py-16">
          <WhyDonate />
        </section>

        <section id="donation-button" className="py-16">
          <DonateButton />
        </section>

        <section id="other-options" className="py-16 bg-gray-50">
          <OtherOptions />
        </section>
      </main>

      <Footer />
    </div>
  )
}
