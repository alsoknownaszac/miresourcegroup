import { Metadata } from "next"
import Header from "@/components/header-simple"
import { PageHero } from "@/components/layouts/page-hero"
import { PageWrapper } from "@/components/layouts/page-wrapper"
import { ServiceDetailSection } from "@/components/services/service-detail-section"
import { EquipmentFacilities } from "@/components/services/equipment-facilities"
import { QualitySafety } from "@/components/services/quality-safety"
import { CTASection } from "@/components/home/cta-section"
import Footer from "@/components/footer-simple"
import { getServicesContent } from "@/lib/services-content-service"

export const metadata: Metadata = {
  title: "Our Services | M.I Resource Services Ltd",
  description: "Comprehensive Oil & Gas support services including Engineering, Procurement, Supply Chain Management, and more.",
}

export default async function ServicesPage() {
  const servicesContent = await getServicesContent()
  
  return (
    <PageWrapper>
      <Header />
      <PageHero
        title="Our Services"
        subtitle="Comprehensive support services for Nigeria's Oil & Gas industry"
        backgroundImage="/view-male-engineer-work-engineers-day-celebration.jpg"
      />
      
      {/* Service Overview Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What We <span className="text-primary">Do</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              M.I Resource Services Limited is a multi-disciplinary company with a global standard in perspective. 
              We offer fully integrated solutions to problems in Engineering, Oil & Gas, Logistics and Management Services sectors, 
              unlocking great value by managing the complexity of each work-scope to deliver desired results.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <ServiceDetailSection services={servicesContent.services} />
      
      {/* Equipment & Facilities */}
      <EquipmentFacilities />
      
      {/* Quality & Safety */}
      <QualitySafety />
      
      {/* CTA */}
      <CTASection />
      
      <Footer />
    </PageWrapper>
  )
}