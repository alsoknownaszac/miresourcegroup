"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Truck, Wrench, HardHat, Container, Gauge, Cog, Package } from "lucide-react"
import type { EquipmentCategory } from "@/types/sanity"

const iconMap: Record<string, any> = { Truck, Wrench, HardHat, Container, Gauge, Cog, Package }

// Drill is not in lucide-react standard, fall back to Wrench
const DrillIcon = Wrench

export function EquipmentFacilities({ equipment }: { equipment: EquipmentCategory[] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-secondary/30" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Assets</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Equipment & <span className="text-primary">Facilities</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            State-of-the-art equipment and facilities positioned to deliver excellence in engineering, construction, and logistics operations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {equipment.map((cat, index) => {
            const IconComponent = iconMap[cat.iconName] ?? DrillIcon
            return (
              <motion.div
                key={cat._key}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <IconComponent className={`w-7 h-7 ${cat.textColor} group-hover:text-primary-foreground transition-colors`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{cat.category}</h3>
                  </div>
                  <div className="space-y-3">
                    {cat.items.map((item, idx) => (
                      <div key={idx} className="flex items-start justify-between p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{item.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">Qty: {item.quantity}</p>
                        </div>
                        <span className="inline-flex items-center px-2 py-1 bg-green-500/10 text-green-600 text-xs font-semibold rounded">
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center p-8 bg-primary/5 rounded-2xl border border-primary/20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Container className="w-6 h-6 text-primary" />
            <h4 className="text-xl font-bold text-foreground">All Equipment Located in Port Harcourt</h4>
          </div>
          <p className="text-muted-foreground mb-6">
            Our comprehensive fleet is strategically positioned and maintained to the highest standards, ready for immediate deployment across Nigeria
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors">
            <Gauge className="w-5 h-5" />
            Request Equipment Availability
          </a>
        </motion.div>
      </div>
    </section>
  )
}
