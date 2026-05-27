"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Phone, Mail, User, Clock } from "lucide-react"
import type { ContactLocationsSection, ContactOffice } from "@/types/sanity"
import { highlightText } from "@/lib/highlight-text"

interface OfficeLocationsProps {
  section: ContactLocationsSection
  offices: ContactOffice[]
}

export function OfficeLocations({ section, offices }: OfficeLocationsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const emergency = section.emergency

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              {section.subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={office._key}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="h-full p-8 bg-card rounded-3xl border border-border hover:border-primary/40 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{office.name}</h3>
                    {office.type && (
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {office.type}
                      </span>
                    )}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="mb-6 pb-6 border-b border-border">
                  <p className="text-muted-foreground leading-relaxed">{office.address}</p>
                </div>

                <div className="space-y-4">
                  {office.phone && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">{section.phoneLabel}</p>
                        <a
                          href={`tel:${office.phone}`}
                          className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {office.email && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">{section.emailLabel}</p>
                        <a
                          href={`mailto:${office.email}`}
                          className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {office.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {office.hours && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">{section.hoursLabel}</p>
                        <p className="text-sm font-medium text-foreground">{office.hours}</p>
                      </div>
                    </div>
                  )}

                  {office.contactPerson && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <User className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground mb-1">{section.contactPersonLabel}</p>
                          {office.contactPerson.name && (
                            <p className="text-sm font-bold text-foreground">{office.contactPerson.name}</p>
                          )}
                          {office.contactPerson.title && (
                            <p className="text-xs text-muted-foreground mb-2">{office.contactPerson.title}</p>
                          )}
                          <div className="space-y-1">
                            {office.contactPerson.phone && (
                              <a
                                href={`tel:${office.contactPerson.phone}`}
                                className="block text-xs text-primary hover:underline"
                              >
                                {office.contactPerson.phone}
                              </a>
                            )}
                            {office.contactPerson.email && (
                              <a
                                href={`mailto:${office.contactPerson.email}`}
                                className="block text-xs text-primary hover:underline"
                              >
                                {office.contactPerson.email}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {emergency?.title && emergency?.phone && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20"
          >
            <div className="text-center">
              <h4 className="text-xl font-bold text-foreground mb-2">{emergency.title}</h4>
              {emergency.description && (
                <p className="text-muted-foreground mb-4">{emergency.description}</p>
              )}
              <a
                href={`tel:${emergency.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {emergency.buttonText}
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
