export interface CardMetadata {
  sport: "baseball" | "basketball" | "football" | "hockey" | "soccer" | "other"
  player_name: string
  team: string
  year: number
  card_set: string
  card_number: string
  grade?: string
  grading_company?: "PSA" | "BGS" | "SGC" | "CGC" | "Raw"
  condition?: "Mint" | "Near Mint" | "Excellent" | "Good" | "Poor"
  is_rookie: boolean
  is_autograph: boolean
  is_patch: boolean
  serial_number?: string
  seller_id: string
}

export const SPORTS = [
  "baseball",
  "basketball",
  "football",
  "hockey",
  "soccer",
  "other",
] as const

export const GRADING_COMPANIES = ["PSA", "BGS", "SGC", "CGC", "Raw"] as const

export const CONDITIONS = [
  "Mint",
  "Near Mint",
  "Excellent",
  "Good",
  "Poor",
] as const

export const SPORT_LABELS: Record<string, string> = {
  baseball: "Baseball",
  basketball: "Basketball",
  football: "Football",
  hockey: "Hockey",
  soccer: "Soccer",
  other: "Other",
}

export const GRADE_COLORS: Record<string, string> = {
  "PSA 10": "#f5a623",
  "PSA 9": "#c0c0c0",
  "PSA 8": "#cd7f32",
  "BGS 10": "#f5a623",
  "BGS 9.5": "#c0c0c0",
  "BGS 9": "#cd7f32",
  "SGC 10": "#f5a623",
  "SGC 9.5": "#c0c0c0",
  "SGC 9": "#cd7f32",
  "CGC 10": "#f5a623",
  "CGC 9.5": "#c0c0c0",
  "CGC 9": "#cd7f32",
}
