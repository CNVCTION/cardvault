import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const sellerService = req.scope.resolve("seller") as any
  const sellers = await sellerService.listSellers({}, { order: { created_at: "DESC" } })
  res.json({ sellers })
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const sellerService = req.scope.resolve("seller") as any
  const { name, bio, store_slug } = req.body as { name: string; bio?: string; store_slug: string }
  if (!name || !store_slug) return res.status(400).json({ error: "name and store_slug are required" })
  const seller = await sellerService.createSellers({ name, bio: bio || null, store_slug, is_approved: false, commission_rate: 0.1 })
  res.status(201).json({ seller })
}
