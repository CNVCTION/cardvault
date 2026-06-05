"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function BecomeSellerPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-lg bg-[#111111] border-[#1f1f1f] text-white">
        <CardHeader className="text-center"><div className="w-12 h-12 rounded-full bg-[#00e5ff]/10 flex items-center justify-center mx-auto mb-4"><ShieldCheck className="h-6 w-6 text-[#00e5ff]" /></div><CardTitle className="text-2xl">Become a Seller</CardTitle><CardDescription className="text-[#888888]">Set up your store and start listing cards for sale. Applications are reviewed within 24 hours.</CardDescription></CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={(e)=>e.preventDefault()}>
            <div className="space-y-2"><Label htmlFor="storeName">Store Name</Label><Input id="storeName" type="text" placeholder="My Card Shop" className="bg-[#0a0a0a] border-[#1f1f1f]" /></div>
            <div className="space-y-2"><Label htmlFor="storeSlug">Store URL</Label><div className="flex items-center bg-[#0a0a0a] border border-[#1f1f1f] rounded-[6px] overflow-hidden"><span className="px-3 text-[#888888] text-sm border-r border-[#1f1f1f] py-2">cardvault.com/sellers/</span><Input id="storeSlug" type="text" placeholder="my-card-shop" className="border-0 bg-transparent flex-1 focus-visible:ring-0 focus-visible:ring-offset-0" /></div></div>
            <div className="space-y-2"><Label htmlFor="bio">Short Bio</Label><Textarea id="bio" placeholder="Tell buyers about your card collection and expertise..." className="bg-[#0a0a0a] border-[#1f1f1f] resize-none h-24" /></div>
            <div className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-[6px] p-3 text-xs text-[#888888] space-y-1"><p><strong className="text-white">Commission:</strong> 10% per sale</p><p><strong className="text-white">Payout:</strong> Weekly via Stripe</p><p><strong className="text-white">Review:</strong> 24-48 hours</p></div>
            <Button className="w-full bg-[#00e5ff] text-black hover:bg-[#00e5ff]/80 font-semibold">Submit Application</Button>
          </form>
          <p className="text-sm text-center text-[#888888] mt-4">Already a seller? <Link href="/dashboard" className="text-[#00e5ff] hover:underline">Go to dashboard</Link></p>
        </CardContent>
      </Card>
    </div>
  )
}
