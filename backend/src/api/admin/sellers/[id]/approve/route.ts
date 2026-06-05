import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const sellerService = req.scope.resolve("seller") as any
  const { id } = req.params as { id: string }
  const sellers = await sellerService.listSellers({ id })
  if (sellers.length === 0) return res.status(404).json({ error: "Seller not found" })
  const seller = await sellerService.updateSellers({ id, is_approved: true })
  res.json({ seller })
}
