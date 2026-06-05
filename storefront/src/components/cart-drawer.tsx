"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"

interface CartDrawerProps { open: boolean; onClose: () => void }

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md bg-[#111111] border-l border-[#1f1f1f] text-white">
        <SheetHeader><SheetTitle className="text-white flex items-center gap-2"><ShoppingBag className="h-5 w-5" />Cart</SheetTitle></SheetHeader>
        <Separator className="my-4 bg-[#1f1f1f]" />
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <ShoppingBag className="h-12 w-12 text-[#888888] mb-4" />
          <p className="text-[#888888] text-sm">Your cart is empty</p>
          <Link href="/browse" className={buttonVariants({ variant: "link", className: "text-[#00e5ff] mt-2" })} onClick={onClose}>Browse cards</Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
