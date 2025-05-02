import { TransparentHeader } from "../components/transparent-header"
import { Footer } from "../components/footer"
import { PageHeader } from "../components/page-header"
import { EmbeddedForm } from "../components/contact/embedded-form"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TransparentHeader />

      <main className="flex-1">
        <PageHeader
          title="Contact Us"
          subtitle="Get in touch with us to learn more about our work or how you can get involved"
          backgroundImage="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1470&auto=format&fit=crop"
        />

        <section id="contact" className="py-16">
          <EmbeddedForm />
        </section>
      </main>

      <Footer />
    </div>
  )
}
