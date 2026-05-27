import { Metadata } from "next"
import Header from "@/components/header-simple"
import { PageHero } from "@/components/layouts/page-hero"
import { PageWrapper } from "@/components/layouts/page-wrapper"
import ContactClient from "@/components/contact-client"
import { OfficeLocations } from "@/components/contact/office-locations"
import { SocialMediaLinks } from "@/components/contact/social-media-links"
import { ContactFAQ } from "@/components/contact/contact-faq"
import Footer from "@/components/footer-simple"
import { getContactPageContent } from "@/lib/contact-content-service"
import { HeroErrorBoundary } from "@/components/hero-error-boundary"

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContactPageContent()
  const seo = content?.seo

  return {
    title: seo?.title,
    description: seo?.description,
    openGraph: {
      title: seo?.ogTitle ?? seo?.title,
      description: seo?.ogDescription ?? seo?.description,
      images: seo?.ogImage ? [seo.ogImage] : undefined,
    },
  }
}

export default async function ContactPage() {
  const content = await getContactPageContent()

  if (!content?.hero) {
    return (
      <PageWrapper>
        <Header />
        <div className="py-24 text-center text-muted-foreground">
          Contact page content is not available. Add content in Sanity Studio.
        </div>
        <Footer />
      </PageWrapper>
    )
  }

  const socialLinks = content.socialSection?.links ?? []
  const faqItems = content.faqSection?.items ?? []

  return (
    <PageWrapper>
      <Header />
      <PageHero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        backgroundImage={content.hero.backgroundImage}
        overlayOpacity={content.hero.overlayOpacity}
      />
      <HeroErrorBoundary>
        <ContactClient content={content} />
      </HeroErrorBoundary>
      {content.offices?.length > 0 && (
        <OfficeLocations
          section={content.locationsSection}
          offices={content.offices}
        />
      )}
      {socialLinks.length > 0 && (
        <SocialMediaLinks section={content.socialSection} links={socialLinks} />
      )}
      {faqItems.length > 0 && (
        <ContactFAQ section={content.faqSection} items={faqItems} />
      )}
      <Footer />
    </PageWrapper>
  )
}
