"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-8">
      <Link href="/cart" className="inline-flex items-center gap-1 text-sm text-[#888888] hover:text-white mb-8 transition-colors"><ArrowLeft className="h-4 w-4" />Back to cart</Link>
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <div><h2 className="text-lg font-bold mb-4">Shipping Address</h2><div className="grid grid-cols-2 gap-4"><div className="space-y-2 col-span-2"><Label htmlFor="name">Full Name</Label><Input id="name" className="bg-[#111111] border-[#1f1f1f]" /></div><div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" className="bg-[#111111] border-[#1f1f1f]" /></div><div className="space-y-2"><Label htmlFor="phone">Phone</Label><Input id="phone" className="bg-[#111111] border-[#1f1f1f]" /></div><div className="space-y-2 col-span-2"><Label htmlFor="address">Address</Label><Input id="address" className="bg-[#111111] border-[#1f1f1f]" /></div><div className="space-y-2"><Label htmlFor="city">City</Label><Input id="city" className="bg-[#111111] border-[#1f1f1f]" /></div><div className="space-y-2"><Label htmlFor="zip">ZIP Code</Label><Input id="zip" className="bg-[#111111] border-[#1f1f1f]" /></div></div></div>
          <Separator className="bg-[#1f1f1f]" />
          <div><h2 className="text-lg font-bold mb-4">Payment</h2><div className="bg-[#111111] border border-[#1f1f1f] rounded-[6px] p-6 text-center"><ShieldCheck className="h-10 w-10 text-[#00c950] mx-auto mb-2" /><p className="text-sm font-medium">Secure Payment via Stripe</p><p className="text-xs text-[#888888] mt-1">Card details entered on Stripe&apos;s secure checkout</p></div></div>
        </div>
        <div className="lg:col-span-2"><div className="bg-[#111111] border border-[#1f1f1f] rounded-[6px] p-6 sticky top-20"><h2 className="text-lg font-bold mb-4">Order Summary</h2><div className="space-y-3 mb-4"><div className="flex justify-between text-sm"><span className="text-[#888888]">Subtotal</span><span className="font-mono">$0.00</span></div><div className="flex justify-between text-sm"><span className="text-[#888888]">Shipping</span><span className="font-mono">Calculated at next step</span></div><div className="flex justify-between text-sm"><span className="text-[#888888]">Tax</span><span className="font-mono">Calculated at next step</span></div></div><Separator className="bg-[#1f1f1f] mb-4" /><div className="flex justify-between font-bold text-lg mb-6"><span>Total</span><span className="font-mono">$0.00</span></div><Button className="w-full bg-[#00e5ff] text-black hover:bg-[#00e5ff]/80 font-semibold h-12">Place Order</Button><p className="text-[10px] text-[#888888] text-center mt-3">By placing your order, you agree to CardVault&apos;s Terms of Service and Privacy Policy.</p></div></div>
      </div>
    </div>
  )
}
