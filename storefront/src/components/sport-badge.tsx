"use client"

import { Badge } from "@/components/ui/badge"

const SPORT_COLORS: Record<string, string> = { baseball: "#d4a574", basketball: "#ff6b35", football: "#8b5e3c", hockey: "#4dc9f6", soccer: "#2ecc71", other: "#888888" }

export function SportBadge({ sport }: { sport: string }) {
  return (
    <Badge variant="secondary" className="text-[10px] px-1.5 py-0 font-medium uppercase tracking-wider"
      style={{ backgroundColor: `${SPORT_COLORS[sport] || SPORT_COLORS.other}20`, color: SPORT_COLORS[sport] || SPORT_COLORS.other, borderColor: `${SPORT_COLORS[sport] || SPORT_COLORS.other}40` }}>
      {sport}
    </Badge>
  )
}
