"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Phone, Mail } from "lucide-react"
import Link from "next/link"
import type { CTAContent } from "@/types/sanity"

interface CTASectionProps {
  content?: CTAContent | null
}

const defaults: CTAContent = {
  heading: 'Ready to Get Started?',
  description: "Let's discuss how we can support your next project with our comprehensive Oil & Gas services.",
  primaryButtonText: 'Contact Us Today',
  primaryButtonHref: '/contact',
  phone: '+2348071173927',
  email: 'info@miresourcegroup.com',
}

export function CTASection({ content }: CTASectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const c = content ?? defaults

  return (
    <section className="py-24 bg-primary relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)`, backgroundSize: '50px 50px' }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            {c.heading}
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            {c.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={c.primaryButtonHref}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-background text-foreground rounded-full font-semibold flex items-center gap-2 hover:bg-background/90 transition-colors shadow-xl"
              >
                {c.primaryButtonText}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            <div className="flex items-center gap-6 text-primary-foreground">
              <a href={`tel:${c.phone}`} className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-medium">Call Us</span>
              </a>
              <a href={`mailto:${c.email}`} className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="font-medium">Email Us</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
