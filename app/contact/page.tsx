import { Metadata } from "next"
import Header from "@/components/header-simple"
import { PageHero } from "@/components/layouts/page-hero"
import { PageWrapper } from "@/components/layouts/page-wrapper"
import Contact from "@/components/contact-simple"
import Footer from "@/components/footer-simple"

export const metadata: Metadata = {
  title: "Contact Us | M.I Resource Services Ltd",
  description: "Get in touch with M.I Resource Services Ltd. We're here to support your Oil & Gas operations.",
}

export default function ContactPage() {
  return (
    <PageWrapper>
      <Header />
      <PageHero
        title="Contact Us"
        subtitle="Let's discuss how we can support your operations"
        backgroundImage="/landscape-port-operations.jpg"
      />
      <Contact />
      <Footer />
    </PageWrapper>
  )
}
