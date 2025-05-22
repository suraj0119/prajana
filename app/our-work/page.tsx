import { TransparentHeader } from "../components/transparent-header"
import { Footer } from "../components/footer"
import { PageHeader } from "../components/page-header"
import { EducationProgram } from "../components/our-work/education-program"
import { VocationalTraining } from "../components/our-work/vocational-training"
import { RefugeeSupport } from "../components/our-work/refugee-support"
import { CulturalEmpowerment } from "../components/our-work/cultural-empowerment"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="font-poppins text-3xl font-bold text-primary mb-4">Our Programs</h2>
              <p className="font-raleway text-gray-600 max-w-3xl mx-auto">
                At Prajna Foundation, we run various programs to address different aspects of community development and
                empowerment. Explore our initiatives below to learn more about our work.
              </p>
            </div>

            <Tabs defaultValue="education" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-primary/5 p-1 rounded-lg">
                  <TabsTrigger
                    value="education"
                    className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-2 rounded-md transition-all"
                  >
                    Education for Children
                  </TabsTrigger>
                  <TabsTrigger
                    value="vocational"
                    className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-2 rounded-md transition-all"
                  >
                    Vocational Training
                  </TabsTrigger>
                  <TabsTrigger
                    value="refugee"
                    className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-2 rounded-md transition-all"
                  >
                    Refugee Support
                  </TabsTrigger>
                  <TabsTrigger
                    value="cultural"
                    className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-2 rounded-md transition-all"
                  >
                    Cultural Empowerment
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="education" className="focus-visible:outline-none focus-visible:ring-0">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <EducationProgram />
                </div>
              </TabsContent>

              <TabsContent value="vocational" className="focus-visible:outline-none focus-visible:ring-0">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <VocationalTraining />
                </div>
              </TabsContent>

              <TabsContent value="refugee" className="focus-visible:outline-none focus-visible:ring-0">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <RefugeeSupport />
                </div>
              </TabsContent>

              <TabsContent value="cultural" className="focus-visible:outline-none focus-visible:ring-0">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <CulturalEmpowerment />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
