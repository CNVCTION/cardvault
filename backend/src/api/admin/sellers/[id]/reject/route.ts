import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const sellerService = req.scope.resolve("seller") as any
  const { id } = req.params as { id: string }
  const sellers = await sellerService.listSellers({ id })
  if (sellers.length === 0) return res.status(404).json({ error: "Seller not found" })
  await sellerService.deleteSellers(id)
  res.json({ message: "Seller rejected and removed" })
}
