import { TransparentHeader } from "../components/transparent-header"
import { Footer } from "../components/footer"
import { PageHeader } from "../components/page-header"
import { EducationProgram } from "../components/our-work/education-program"
import { VocationalTraining } from "../components/our-work/vocational-training"
import { RefugeeSupport } from "../components/our-work/refugee-support"
import { CulturalEmpowerment } from "../components/our-work/cultural-empowerment"

export default function OurWorkPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TransparentHeader />

      <main className="flex-1">
        <PageHeader
          title="Our Work"
          subtitle="Discover the programs and initiatives that drive our mission forward"
          backgroundImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1470&auto=format&fit=crop"
        />

        <section id="education" className="py-16">
          <EducationProgram />
        </section>

        <section id="vocational-training" className="py-16 bg-gray-50">
          <VocationalTraining />
        </section>

        <section id="refugee-support" className="py-16">
          <RefugeeSupport />
        </section>

        <section id="cultural-empowerment" className="py-16">
          <CulturalEmpowerment />
        </section>
      </main>

      <Footer />
    </div>
  )
}
