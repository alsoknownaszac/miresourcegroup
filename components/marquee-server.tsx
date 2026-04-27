import { getMarqueeItems } from "@/lib/static-content-service"
import Marquee from "./marquee"
import type { MarqueeItem } from "@/types/sanity"

export async function MarqueeServer() {
  const items = await getMarqueeItems()

  return <Marquee items={items} />
}
