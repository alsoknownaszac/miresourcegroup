"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Zap, Target, Users, Gauge, Lightbulb, Globe, Award, TrendingUp } from "lucide-react"
import type { KeyCapability } from "@/types/sanity"

const iconMap: Record<string, any> = { Shield, Zap, Target, Users, Gauge, Lightbulb, Globe, Award, TrendingUp }

export function KeyCapabilities({ capabilities }: { capabilities: KeyCapability[] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Operational Excellence
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance">
            Our Competitive <span className="text-primary">Advantages</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Delivering excellence through proven methodologies, safety-first culture, and continuous improvement
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((cap, index) => {
            const IconComponent = iconMap[cap.iconName] ?? Shield
            return (
              <motion.div
                key={cap._key}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-6 sm:p-8 bg-card rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 mb-4 sm:mb-6">
                      <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 ${cap.textColor} group-hover:text-primary-foreground transition-colors`} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{cap.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{cap.description}</p>
                  </div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
