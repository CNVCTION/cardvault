"use client"

import Link from "next/link"
import { useState } from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { ShoppingCart, Search, Menu, X, Sparkles } from "lucide-react"
import { CartDrawer } from "./cart-drawer"

export function Navbar() {
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[#1f1f1f] bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-1.5 font-bold text-lg tracking-tight group">
            <div className="w-7 h-7 rounded bg-[#00e5ff] flex items-center justify-center"><Sparkles className="h-4 w-4 text-black" /></div>
            <span className="text-[#00e5ff] group-hover:brightness-110 transition-all">RKIES</span>
            <span className="text-white group-hover:text-gray-200 transition-all"> BRND</span>
          </Link>
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#888888]" />
              <Input placeholder="Search cards, players, teams..." className="pl-9 h-9 bg-[#111111] border-[#1f1f1f] text-sm focus-visible:ring-[#00e5ff]/30" />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#888888] border border-[#1f1f1f] rounded px-1.5 py-0.5 pointer-events-none">Ctrl+K</kbd>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <Link href="/browse" className={buttonVariants({ variant: "ghost", size: "sm", className: "text-sm text-[#888888] hover:text-white hover:bg-[#1a1a1a]" })}>Browse</Link>
            <Tooltip><TooltipTrigger><Link href="/auth/become-seller" className={buttonVariants({ size: "sm", className: "bg-[#00e5ff] text-black hover:bg-[#00e5ff]/80 text-sm h-8 font-semibold" })}>Sell Cards</Link></TooltipTrigger><TooltipContent className="bg-[#111111] border-[#1f1f1f] text-white text-xs">Start selling in minutes</TooltipContent></Tooltip>
            <Tooltip><TooltipTrigger><Button variant="ghost" size="icon" className="relative text-[#888888] hover:text-white hover:bg-[#1a1a1a]" onClick={() => setCartOpen(true)}><ShoppingCart className="h-5 w-5" /><span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#00e5ff] text-[10px] font-bold text-black">0</span></Button></TooltipTrigger><TooltipContent className="bg-[#111111] border-[#1f1f1f] text-white text-xs">View cart</TooltipContent></Tooltip>
            <Link href="/auth/login" className={buttonVariants({ variant: "ghost", size: "sm", className: "text-sm hover:bg-[#1a1a1a]" })}><Avatar className="h-7 w-7 mr-1.5"><AvatarFallback className="text-xs bg-[#111111] text-[#888888]">?</AvatarFallback></Avatar>Sign In</Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</Button>
        </div>
        {mobileMenuOpen && (<div className="md:hidden border-t border-[#1f1f1f] bg-[#0a0a0a] px-6 py-4 space-y-3 animate-in slide-in-from-top-2 duration-150"><div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#888888]" /><Input placeholder="Search cards..." className="pl-9 h-9 bg-[#111111] border-[#1f1f1f]" /></div><Link href="/browse" className={buttonVariants({ variant: "ghost", className: "w-full justify-start text-[#888888]" })}>Browse Cards</Link><Link href="/auth/become-seller" className={buttonVariants({ className: "w-full bg-[#00e5ff] text-black hover:bg-[#00e5ff]/80" })}>Sell Cards</Link><Button variant="ghost" className="w-full justify-start text-[#888888]" onClick={() => setCartOpen(true)}>Cart (0)</Button><Link href="/auth/login" className={buttonVariants({ variant: "ghost", className: "w-full justify-start" })}>Sign In</Link></div>)}
      </header>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
