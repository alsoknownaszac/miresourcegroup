"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Users, Lightbulb, Award, Heart, Zap, Target, Globe } from "lucide-react"
import type { CoreValue } from "@/types/sanity"

const iconMap: Record<string, any> = { Shield, Users, Award, Heart, Zap, Lightbulb, Target, Globe }

export function CoreValues({ values }: { values: CoreValue[] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Core Values & Principles
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Our Commitment to <span className="text-primary">Excellence</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            The principles that guide every decision we make and define our company culture
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {values.map((value, index) => {
            const IconComponent = iconMap[value.iconName] ?? Shield
            return (
              <motion.div
                key={value._key}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex gap-6 p-6 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                  <div className={`shrink-0 w-14 h-14 rounded-xl ${value.bgColor} flex items-center justify-center`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
