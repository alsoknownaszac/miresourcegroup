import { getClient } from './sanity'
import { draftMode } from 'next/headers'
import type {
  CoreValue, CompanyStat, KeyCapability, Achievement,
  EquipmentCategory, WhyChooseUsReason, ServiceStep,
  Office, CTAContent, FAQItem, SocialLink,
  CaseStudy, MarqueeItem, ContactMethod,
} from '@/types/sanity'

async function client() {
  const { isEnabled } = await draftMode()
  return getClient(isEnabled)
}

const opts = { next: { revalidate: 30 } }

export async function getCoreValues(): Promise<CoreValue[]> {
  const c = await client()
  const doc = await c.fetch(`*[_type == "coreValues"][0]{ values }`, {}, opts)
  return doc?.values ?? []
}

export async function getCompanyStats(): Promise<CompanyStat[]> {
  const c = await client()
  const doc = await c.fetch(`*[_type == "companyStats"][0]{ stats }`, {}, opts)
  return doc?.stats ?? []
}

export async function getKeyCapabilities(): Promise<KeyCapability[]> {
  const c = await client()
  const doc = await c.fetch(`*[_type == "keyCapabilities"][0]{ capabilities }`, {}, opts)
  return doc?.capabilities ?? []
}

export async function getMajorAchievements(): Promise<Achievement[]> {
  const c = await client()
  const doc = await c.fetch(`*[_type == "majorAchievements"][0]{ achievements }`, {}, opts)
  return doc?.achievements ?? []
}

export async function getEquipmentFacilities(): Promise<EquipmentCategory[]> {
  const c = await client()
  const doc = await c.fetch(`*[_type == "equipmentFacilities"][0]{ categories }`, {}, opts)
  return doc?.categories ?? []
}

export async function getWhyChooseUs(): Promise<WhyChooseUsReason[]> {
  const c = await client()
  const doc = await c.fetch(`*[_type == "whyChooseUs"][0]{ reasons }`, {}, opts)
  return doc?.reasons ?? []
}

export async function getServiceApproach(): Promise<ServiceStep[]> {
  const c = await client()
  const doc = await c.fetch(`*[_type == "serviceApproach"][0]{ steps }`, {}, opts)
  return doc?.steps ?? []
}

export async function getOfficeLocations(): Promise<Office[]> {
  const c = await client()
  const doc = await c.fetch(`*[_type == "officeLocations"][0]{ offices }`, {}, opts)
  return doc?.offices ?? []
}

export async function getCTAContent(): Promise<CTAContent | null> {
  const c = await client()
  const doc = await c.fetch(
    `*[_type == "ctaSection"][0]{ heading, description, primaryButtonText, primaryButtonHref, phone, email }`,
    {},
    opts
  )
  return doc ?? null
}

export async function getFAQItems(): Promise<FAQItem[]> {
  const c = await client()
  const doc = await c.fetch(`*[_type == "faq"][0]{ items }`, {}, opts)
  return doc?.items ?? []
}

export async function getSocialLinks(): Promise<SocialLink[]> {
  const c = await client()
  const doc = await c.fetch(`*[_type == "footer"][0]{ socialLinks }`, {}, opts)
  return doc?.socialLinks ?? []
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const c = await client()
  const doc = await c.fetch(`*[_type == "caseStudies"][0]{ studies }`, {}, opts)
  return doc?.studies ?? []
}

export async function getMarqueeItems(): Promise<MarqueeItem[]> {
  const c = await client()
  const doc = await c.fetch(`*[_type == "marquee"][0]{ items }`, {}, opts)
  return doc?.items ?? []
}

export async function getContactMethods(): Promise<ContactMethod[]> {
  const c = await client()
  const doc = await c.fetch(`*[_type == "contactMethods"][0]{ methods }`, {}, opts)
  return doc?.methods ?? []
}
