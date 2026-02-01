import { Metadata } from "next"
import Header from "@/components/header-simple"
import { PageHero } from "@/components/layouts/page-hero"
import { PageWrapper } from "@/components/layouts/page-wrapper"
import Testimonials from "@/components/testimonials-simple"
import { CTASection } from "@/components/home/cta-section"
import Footer from "@/components/footer-simple"

export const metadata: Metadata = {
  title: "Testimonials | M.I Resource Services Ltd",
  description: "What our clients say about M.I Resource Services Ltd's exceptional Oil & Gas support services.",
}

export default function TestimonialsPage() {
  return (
    <PageWrapper>
      <Header />
      <PageHero
        title="Testimonials"
        subtitle="What our clients say about our exceptional service delivery"
        backgroundImage="/portrait-smiling-male-worker-wearing-hard-hat-warehouse.jpg"
      />
      <Testimonials />
      <CTASection />
      <Footer />
    </PageWrapper>
  )
}