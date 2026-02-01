"use client"

import { motion } from "framer-motion"
import { 
  Award, 
  MapPin, 
  Handshake, 
  Package, 
  Truck, 
  Car, 
  Zap, 
  Construction,
  Users
} from "lucide-react"

const capabilities = [
  {
    id: 1,
    icon: Award,
    title: "ISO 9001 Certified",
    description: "We have adopted international ISO:9001 standards as our standard for quality management and assurance.",
    category: "Quality",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600"
  },
  {
    id: 2,
    icon: MapPin,
    title: "Indigenous Company",
    description: "Privately owned Nigerian company with deep understanding of local market dynamics.",
    category: "Local Expertise",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-600"
  },
  {
    id: 3,
    icon: Handshake,
    title: "Strategic Alliances",
    description: "Collaborating alliances with specialized companies to deliver comprehensive solutions.",
    category: "Partnerships",
    gradient: "from-purple-500/10 to-violet-500/10",
    iconColor: "text-purple-600"
  },
  {
    id: 4,
    icon: Package,
    title: "Turnkey Solutions",
    description: "Complete project management from design to delivery, ensuring execution costs meet budgets.",
    category: "Project Management",
    gradient: "from-orange-500/10 to-red-500/10",
    iconColor: "text-orange-600"
  },
  {
    id: 5,
    icon: Truck,
    title: "Heavy Construction Equipment",
    description: "Excavators, CAT 966C Wheel Loaders, and specialized construction machinery for large-scale projects.",
    category: "Equipment",
    gradient: "from-amber-500/10 to-yellow-500/10",
    iconColor: "text-amber-600"
  },
  {
    id: 6,
    icon: Car,
    title: "Transportation Fleet",
    description: "Toyota Hilux trucks, Hiace buses, self-loader trucks, and specialized trailers for logistics operations.",
    category: "Logistics",
    gradient: "from-teal-500/10 to-cyan-500/10",
    iconColor: "text-teal-600"
  },
  {
    id: 7,
    icon: Zap,
    title: "Welding & Fabrication",
    description: "280-400AMP welding machines and fabrication equipment for structural and pipeline work.",
    category: "Manufacturing",
    gradient: "from-indigo-500/10 to-blue-500/10",
    iconColor: "text-indigo-600"
  },
  {
    id: 8,
    icon: Construction,
    title: "Road Construction",
    description: "Dynapac pavers, vibrating rollers, and road maintenance equipment for infrastructure projects.",
    category: "Infrastructure",
    gradient: "from-slate-500/10 to-gray-500/10",
    iconColor: "text-slate-600"
  },
  {
    id: 9,
    icon: Users,
    title: "Professional Organization",
    description: "Structured organization with CEO, MD, specialized managers for Procurement, Operations, Business Development, Supply Chain, HR, and dedicated project teams.",
    category: "Management",
    gradient: "from-rose-500/10 to-pink-500/10",
    iconColor: "text-rose-600"
  }
]

export function CompanyCapabilities() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(var(--primary)) 0%, transparent 50%)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Our Capabilities
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            What Sets Us <span className="text-primary">Apart</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive capabilities and resources that enable us to deliver exceptional results across all aspects of Oil & Gas operations.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            
            return (
              <motion.div
                key={capability.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`relative h-full p-8 bg-linear-to-br ${capability.gradient} backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2`}>
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  <div className="relative z-10">
                    {/* Category Badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full text-xs font-medium text-muted-foreground mb-4">
                      {capability.category}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-background/80 transition-all duration-300 mb-6`}>
                      <Icon className={`w-8 h-8 ${capability.iconColor} transition-colors`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {capability.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>

                    {/* Decorative element */}
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Ready to deploy for your next project
              </span>
            </div>
            <a
              href="/contact"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}