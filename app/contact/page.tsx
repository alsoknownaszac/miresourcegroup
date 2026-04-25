import { Metadata } from "next"
import Header from "@/components/header-simple"
import { PageHero } from "@/components/layouts/page-hero"
import { PageWrapper } from "@/components/layouts/page-wrapper"
import Contact from "@/components/contact-simple"
import { OfficeLocations } from "@/components/contact/office-locations"
import { SocialMediaLinks } from "@/components/contact/social-media-links"
import { ContactFAQ } from "@/components/contact/contact-faq"
import Footer from "@/components/footer-simple"
import { getOfficeLocations, getSocialLinks, getFAQItems } from "@/lib/static-content-service"

export const metadata: Metadata = {
  title: "Contact Us | M.I Resource Services Ltd",
  description: "Get in touch with M.I Resource Services Ltd. We're here to support your Oil & Gas operations. Visit our offices in Lagos and Port Harcourt.",
  openGraph: {
    title: "Contact Us | M.I Resource Services Ltd",
    description: "Get in touch with Nigeria's leading Oil & Gas support services provider",
    images: ["/MIResourcesLogo.png"],
  },
}

export default async function ContactPage() {
  const [offices, socialLinks, faqItems] = await Promise.all([
    getOfficeLocations(),
    getSocialLinks(),
    getFAQItems(),
  ])

  return (
    <PageWrapper>
      <Header />
      <PageHero
        title="Contact Us"
        subtitle="Let's discuss how we can support your operations"
        backgroundImage="/oil-platform-ocean-with-sun-setting-it.jpg"
      />
      <Contact />
      <OfficeLocations offices={offices} />
      {socialLinks.length > 0 && <SocialMediaLinks links={socialLinks} />}
      {faqItems.length > 0 && <ContactFAQ items={faqItems} />}
      <Footer />
    </PageWrapper>
  )
}
