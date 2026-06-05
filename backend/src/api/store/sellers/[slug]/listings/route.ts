import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const sellerService = req.scope.resolve("seller") as any
  const { slug } = req.params as { slug: string }

  const sellers = await sellerService.listSellers({
    store_slug: slug,
    is_approved: true,
  })

  if (sellers.length === 0) {
    return res.status(404).json({ error: "Seller not found" })
  }

  const productService = req.scope.resolve("product") as any

  const [listings] = await productService.listAndCount(
    { status: "published", metadata: { seller_id: sellers[0].id } },
    { order: { created_at: "DESC" }, take: 50 }
  )

  res.json({ seller: sellers[0], listings })
}
