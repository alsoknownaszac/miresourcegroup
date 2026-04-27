import { Suspense } from "react"
import { CaseStudies } from "./case-studies"

export default function CaseStudiesSimple() {
  return (
    <Suspense fallback={<div className="py-24" />}>
      <CaseStudies />
    </Suspense>
  )
}
