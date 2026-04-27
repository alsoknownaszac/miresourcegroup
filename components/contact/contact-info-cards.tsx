"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import type { ContactMethod } from "@/types/sanity"

const iconMap: Record<string, any> = { Phone, Mail, MapPin, Clock }

const defaultContactMethods: ContactMethod[] = [
  {
    _key: 'cm1',
    iconName: 'Phone',
    title: "Phone",
    details: ["+234 (0) 803 XXX XXXX", "+234 (0) 805 XXX XXXX"],
    description: "Mon-Fri from 8am to 6pm",
    order: 1,
  },
  {
    _key: 'cm2',
    iconName: 'Mail',
    title: "Email",
    details: ["info@miresourcegroup.com", "support@miresourcegroup.com"],
    description: "We'll respond within 24 hours",
    order: 2,
  },
  {
    _key: 'cm3',
    iconName: 'MapPin',
    title: "Office",
    details: ["Lagos Office", "Port Harcourt Office"],
    description: "Visit us during business hours",
    order: 3,
  },
  {
    _key: 'cm4',
    iconName: 'Clock',
    title: "Business Hours",
    details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
    description: "Closed on Sundays and public holidays",
    order: 4,
  }
]

export function ContactInfoCards({ methods = defaultContactMethods }: { methods?: ContactMethod[] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method, index) => {
            const IconComponent = iconMap[method.iconName] ?? Phone
            
            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 mb-4">
                    <IconComponent className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {method.title}
                  </h3>
                  
                  <div className="space-y-1 mb-3">
                    {method.details.map((detail, idx) => (
                      <p key={idx} className="text-sm font-medium text-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                  
                  <p className="text-xs text-muted-foreground">
                    {method.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
