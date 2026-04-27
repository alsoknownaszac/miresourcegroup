import { getContactMethods } from "@/lib/static-content-service"
import { ContactInfoCards } from "./contact/contact-info-cards"
import type { ContactMethod } from "@/types/sanity"

export async function ContactInfoCardsServer() {
  const methods = await getContactMethods()

  return <ContactInfoCards methods={methods} />
}
