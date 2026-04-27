"use client"

import { motion } from "framer-motion"
import type { MarqueeItem } from "@/types/sanity"

const defaultItems: MarqueeItem[] = [
  { _key: 'm1', text: 'No.1 Support Services Provider', order: 1 },
  { _key: 'm2', text: 'Oil & Gas Excellence', order: 2 },
  { _key: 'm3', text: 'Engineering & Procurement', order: 3 },
  { _key: 'm4', text: 'Supply Chain Management', order: 4 },
  { _key: 'm5', text: 'Trusted Partner', order: 5 },
]

export default function Marquee({ items = defaultItems }: { items?: MarqueeItem[] }) {
  const itemTexts = items.map(item => item.text)

  return (
    <div className="relative py-4 bg-primary/5 border-y border-primary/10 overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="flex gap-12 whitespace-nowrap"
      >
        {[...itemTexts, ...itemTexts, ...itemTexts, ...itemTexts].map((item, index) => (
          <span key={index} className="text-sm font-medium text-primary/80 flex items-center gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
