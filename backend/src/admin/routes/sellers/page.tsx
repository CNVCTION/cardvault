import type { ReactElement } from "react"
import { Container, Heading, Button, Badge, toast, Text } from "@medusajs/ui"

interface Seller { id: string; name: string; store_slug: string; bio?: string | null; is_approved: boolean; commission_rate: number; created_at: string }

const SellersPage = (): ReactElement => {
  const [sellers, setSellers] = React.useState<Seller[]>([])
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    fetch("/admin/sellers").then((r) => r.json()).then((data) => { setSellers(data.sellers); setLoading(false) }).catch(() => { toast.error("Failed to load sellers"); setLoading(false) })
  }, [])
  const approveSeller = async (id: string) => {
    try { const res = await fetch(`/admin/sellers/${id}/approve`, { method: "POST" }); if (res.ok) { setSellers((prev) => prev.map((s) => (s.id === id ? { ...s, is_approved: true } : s))); toast.success("Seller approved") } } catch { toast.error("Failed to approve seller") }
  }
  const rejectSeller = async (id: string) => {
    try { const res = await fetch(`/admin/sellers/${id}/reject`, { method: "POST" }); if (res.ok) { setSellers((prev) => prev.filter((s) => s.id !== id)); toast.success("Seller rejected") } } catch { toast.error("Failed to reject seller") }
  }
  if (loading) return <Container><Text>Loading sellers...</Text></Container>
  return (
    <Container>
      <Heading level="h1">Sellers ({sellers.length})</Heading>
      <div className="mt-4">
        <table className="w-full text-left">
          <thead><tr className="border-b border-ui-border-base"><th className="py-3 px-4 font-medium">Name</th><th className="py-3 px-4 font-medium">Store Slug</th><th className="py-3 px-4 font-medium">Status</th><th className="py-3 px-4 font-medium">Commission</th><th className="py-3 px-4 font-medium">Actions</th></tr></thead>
          <tbody>
            {sellers.map((seller) => (
              <tr key={seller.id} className="border-b border-ui-border-base">
                <td className="py-3 px-4">{seller.name}</td>
                <td className="py-3 px-4">{seller.store_slug}</td>
                <td className="py-3 px-4"><Badge color={seller.is_approved ? "green" : "grey"} rounded="full" size="small">{seller.is_approved ? "Approved" : "Pending"}</Badge></td>
                <td className="py-3 px-4">{(seller.commission_rate * 100).toFixed(0)}%</td>
                <td className="py-3 px-4 space-x-2">{!seller.is_approved && <><Button variant="primary" size="small" onClick={() => approveSeller(seller.id)}>Approve</Button><Button variant="danger" size="small" onClick={() => rejectSeller(seller.id)}>Reject</Button></>}</td>
              </tr>
            ))}
            {sellers.length === 0 && <tr><td colSpan={5} className="py-8 text-center text-ui-fg-muted">No sellers found</td></tr>}
          </tbody>
        </table>
      </div>
    </Container>
  )
}

import React from "react"
import type { RouteConfig } from "@medusajs/admin-sdk"

export const config: RouteConfig = { label: "Sellers", path: "sellers" }
export default SellersPage
