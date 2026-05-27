import ContactClient from "./contact-client"
import { HeroErrorBoundary } from "./hero-error-boundary"
import type { ContactContent } from "@/types/sanity"

/** @deprecated Prefer fetching on app/contact/page.tsx and rendering ContactClient directly */
export default function ContactSimple({ content }: { content: ContactContent }) {
  return (
    <HeroErrorBoundary>
      <ContactClient content={content} />
    </HeroErrorBoundary>
  )
}
