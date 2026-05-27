import { getClient } from './sanity'
import { draftMode } from 'next/headers'
import type { ContactContent } from '@/types/sanity'

const CONTACT_PAGE_QUERY = `
  *[_type == "contact"][0] {
    seo,
    hero,
    badgeText,
    headline,
    highlightedText,
    description,
    contactInfo[] | order(order asc),
    formSettings,
    formFields,
    locationsSection,
    offices[] | order(order asc),
    socialSection {
      heading,
      description,
      links[] | order(order asc)
    },
    faqSection {
      badgeText,
      headline,
      headlineHighlight,
      subtitle,
      ctaText,
      ctaEmail,
      ctaButtonText,
      items[] | order(order asc)
    }
  }
`

async function getSanityClient() {
  const { isEnabled } = await draftMode()
  return getClient(isEnabled)
}

export async function getContactPageContent(): Promise<ContactContent | null> {
  try {
    const client = await getSanityClient()
    const content = await client.fetch<ContactContent | null>(
      CONTACT_PAGE_QUERY,
      {},
      { next: { revalidate: 30 } }
    )
    return content
  } catch (error) {
    console.error('❌ Failed to fetch contact page content:', error)
    return null
  }
}

/** @deprecated Use getContactPageContent */
export async function getContactContent(): Promise<ContactContent | null> {
  return getContactPageContent()
}
