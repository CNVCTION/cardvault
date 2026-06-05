"use client"

import { buttonVariants } from "@/components/ui/button"
import { ShoppingBag, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CartPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <ShoppingBag className="h-16 w-16 text-[#888888] mb-4" />
        <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
        <p className="text-[#888888] text-sm mb-6">Looks like you haven&apos;t added any cards to your cart yet.</p>
        <Link href="/browse" className={buttonVariants({ className: "bg-[#00e5ff] text-black hover:bg-[#00e5ff]/80 font-semibold" })}>Browse Cards <ArrowRight className="ml-2 h-4 w-4" /></Link>
      </div>
    </div>
  )
}
