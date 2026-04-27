import { getCaseStudies } from "@/lib/static-content-service"
import { CaseStudiesClient } from "./case-studies-client"
import type { CaseStudy } from "@/types/sanity"

export async function CaseStudies() {
  const studies = await getCaseStudies()

  return <CaseStudiesClient studies={studies} />
}
