import { TransparentHeader } from "../components/transparent-header"
import { Footer } from "../components/footer"
import { PageHeader } from "../components/page-header"
import { GalleryTabs } from "../components/gallery/gallery-tabs"

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TransparentHeader />

      <main className="flex-1">
        <PageHeader
          title="Gallery"
          subtitle="Explore our photos, videos, and testimonials showcasing our impact and community"
          backgroundImage="/images/children-craft-activity.jpg"
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <GalleryTabs />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
