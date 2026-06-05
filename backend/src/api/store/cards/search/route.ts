import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const { sport, player, team, year_min, year_max, grade, grading_company, condition, is_rookie, is_autograph, is_patch, seller_id, sort, page = "1", limit = "24" } = req.query as Record<string, string>
  const productService = req.scope.resolve("product") as any
  const filters: Record<string, unknown> = { status: "published" }
  const metadataFilter: Record<string, unknown> = {}
  if (sport) metadataFilter.sport = sport
  if (player) metadataFilter.player_name = { $ilike: `%${player}%` }
  if (team) metadataFilter.team = { $ilike: `%${team}%` }
  if (year_min) metadataFilter.year = { $gte: parseInt(year_min) }
  if (year_max) metadataFilter.year = { ...(metadataFilter.year as object), $lte: parseInt(year_max) }
  if (grade) metadataFilter.grade = { $ilike: `%${grade}%` }
  if (grading_company) metadataFilter.grading_company = grading_company
  if (condition) metadataFilter.condition = condition
  if (is_rookie) metadataFilter.is_rookie = is_rookie === "true"
  if (is_autograph) metadataFilter.is_autograph = is_autograph === "true"
  if (is_patch) metadataFilter.is_patch = is_patch === "true"
  if (seller_id) metadataFilter.seller_id = seller_id
  if (Object.keys(metadataFilter).length > 0) filters.metadata = metadataFilter
  const [products, count] = await productService.listAndCount(filters, { order: { created_at: "DESC" }, skip: (parseInt(page) - 1) * parseInt(limit), take: parseInt(limit) })
  res.json({ products, total: count, page: parseInt(page), limit: parseInt(limit), totalPages: Math.ceil(count / parseInt(limit)) })
}
