"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import type { ContactFaqItem, ContactFaqSection } from "@/types/sanity"
import { highlightText } from "@/lib/highlight-text"

interface ContactFAQProps {
  section: ContactFaqSection
  items: ContactFaqItem[]
}

export function ContactFAQ({ section, items }: ContactFAQProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-secondary/20" ref={ref}>
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {section.badgeText && (
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              {section.badgeText}
            </span>
          )}
          {section.headline && (
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
              {highlightText(section.headline, section.headlineHighlight)}
            </h2>
          )}
          {section.subtitle && (
            <p className="mt-6 text-lg text-muted-foreground">{section.subtitle}</p>
          )}
        </motion.div>

        <div className="space-y-3">
          {items.map((faq, index) => (
            <motion.div
              key={faq._key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 text-left flex items-center justify-between hover:bg-secondary/30 transition-colors"
              >
                <span className="text-base font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-5 pb-5 text-muted-foreground leading-relaxed text-sm">{faq.answer}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {section.ctaText && section.ctaEmail && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center p-8 bg-primary/5 rounded-2xl border border-primary/20"
          >
            <p className="text-foreground font-medium mb-4">{section.ctaText}</p>
            <a
              href={`mailto:${section.ctaEmail}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              {section.ctaButtonText}
            </a>
          </motion.div>
        )}
      </div>
    </section>
  )
}
