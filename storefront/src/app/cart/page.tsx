"use client"

import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-context"
import { toast } from "sonner"
import { ShoppingBag, ArrowRight, X, Trash2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CartPage() {
  const { items, removeItem, clearCart } = useCart()

  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ""))
    return sum + (isNaN(price) ? 0 : price)
  }, 0)

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-[1280px] px-6 py-10">
        <h1 className="font-display-xl text-white mb-10">Shopping Cart</h1>
        <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in-up">
          <ShoppingBag className="h-20 w-20 text-border mb-6" />
          <h2 className="font-display-md text-white mb-3">Your cart is empty</h2>
          <p className="font-body-md text-muted-foreground mb-8 max-w-sm">Looks like you haven&apos;t added any cards to your cart yet.</p>
          <Link href="/browse" className={buttonVariants({ size: "lg", className: "font-cta rounded-none h-12 px-8" })}>
            Browse Cards <ArrowRight />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-10">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h1 className="font-display-xl text-white">Shopping Cart</h1>
          <p className="font-body-md text-muted-foreground mt-2">{items.length} item{items.length > 1 ? "s" : ""}</p>
        </div>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-destructive cursor-pointer" onClick={() => { clearCart(); toast.success("Cart cleared") }}><Trash2 className="h-4 w-4" /> Clear</Button>
      </div>

      <div className="space-y-3">
        {items.map((item, i) => (
          <Card key={item.id} className="rounded-none p-4 flex gap-4 items-center animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="relative w-20 h-[106px] overflow-hidden shrink-0 bg-background">
              <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-title-sm text-white">{item.name}</h3>
              <p className="font-body-sm text-muted-foreground">{item.sport && <span className="capitalize">{item.sport} &bull; </span>}{item.team} &bull; {item.grade}</p>
            </div>
            <div className="font-mono font-semibold text-white text-lg">{item.price}</div>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive cursor-pointer shrink-0" onClick={() => { removeItem(item.id); toast.success(`Removed ${item.name}`) }}><X className="h-5 w-5" /></Button>
          </Card>
        ))}
      </div>

      <Separator className="my-8" />

      <div className="flex justify-end">
        <div className="w-full max-w-sm space-y-4">
          <div className="flex justify-between font-title-md text-white text-lg">
            <span>Total</span>
            <span className="font-mono">${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
          </div>
          <div className="flex gap-3">
            <Link href="/browse" className={buttonVariants({ variant: "outline", size: "lg", className: "flex-1 font-cta rounded-none h-12" })}>Continue Shopping</Link>
            <Button size="lg" className="flex-1 font-cta rounded-none h-12 cursor-pointer" onClick={() => toast.success("Order placed!", { description: "This is a demo. Stripe integration coming soon." })}>
              Checkout <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
