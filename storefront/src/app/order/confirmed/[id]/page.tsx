import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function OrderConfirmedPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <Card className="w-full max-w-lg bg-[#111111] border-[#1f1f1f] text-white text-center">
        <CardContent className="py-12">
          <div className="w-16 h-16 rounded-full bg-[#00c950]/10 flex items-center justify-center mx-auto mb-6"><CheckCircle className="h-8 w-8 text-[#00c950]" /></div>
          <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-[#888888] mb-2">Thank you for your purchase. Your order has been confirmed.</p>
          <p className="text-sm text-[#888888] mb-8">Order #CV-2026-0001 &bull; A confirmation email has been sent to your inbox.</p>
          <div className="flex gap-3 justify-center">
            <Link href="/browse" className={buttonVariants({ className: "bg-[#00e5ff] text-black hover:bg-[#00e5ff]/80 font-semibold" })}>Continue Shopping <ArrowRight className="ml-2 h-4 w-4" /></Link>
            <Link href="/dashboard" className={buttonVariants({ variant: "outline", className: "border-[#1f1f1f] text-white hover:bg-[#1a1a1a]" })}>View Dashboard</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
