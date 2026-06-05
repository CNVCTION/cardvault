import { Badge } from "@/components/ui/badge"

const GRADE_STYLES: Record<string, { bg: string; text: string }> = {
  "PSA 10": { bg: "#f5a62320", text: "#f5a623" }, "PSA 9": { bg: "#c0c0c020", text: "#c0c0c0" }, "PSA 8": { bg: "#cd7f3220", text: "#cd7f32" },
  "BGS 10": { bg: "#f5a62320", text: "#f5a623" }, "BGS 9.5": { bg: "#c0c0c020", text: "#c0c0c0" }, "BGS 9": { bg: "#cd7f3220", text: "#cd7f32" },
  "SGC 10": { bg: "#f5a62320", text: "#f5a623" }, "SGC 9.5": { bg: "#c0c0c020", text: "#c0c0c0" }, "SGC 9": { bg: "#cd7f3220", text: "#cd7f32" },
  "CGC 10": { bg: "#f5a62320", text: "#f5a623" }, "CGC 9.5": { bg: "#c0c0c020", text: "#c0c0c0" }, "CGC 9": { bg: "#cd7f3220", text: "#cd7f32" },
}

export function GradeBadge({ grade }: { grade?: string | null }) {
  if (!grade || grade === "Raw") {
    return <Badge variant="secondary" className="text-[10px] px-1.5 py-0 font-medium uppercase tracking-wider" style={{ backgroundColor: "#88888820", color: "#888888", borderColor: "#88888840" }}>Raw</Badge>
  }
  const style = GRADE_STYLES[grade] || { bg: "#88888820", text: "#888888" }
  return <Badge variant="secondary" className="text-[10px] px-1.5 py-0 font-medium uppercase tracking-wider" style={{ backgroundColor: style.bg, color: style.text, borderColor: `${style.text}40` }}>{grade}</Badge>
}
