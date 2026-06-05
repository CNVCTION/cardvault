import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { ShieldCheck, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SellerPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-8">
      <Link href="/browse" className="inline-flex items-center gap-1 text-sm text-[#888888] hover:text-white mb-8 transition-colors"><ArrowLeft className="h-4 w-4" /> Back to browse</Link>
      <div className="bg-[#111111] border border-[#1f1f1f] rounded-[6px] p-6 mb-8">
        <div className="flex items-start gap-4"><Avatar className="h-16 w-16"><AvatarFallback className="bg-[#1a1a1a] text-[#888888] text-xl">SL</AvatarFallback></Avatar><div className="flex-1"><h1 className="text-2xl font-bold mb-1">SportsCardsLLC</h1><p className="text-sm text-[#888888] mb-3">Premium sports card dealer specializing in graded basketball and football cards.</p><div className="flex gap-6 text-sm"><div><span className="text-[#888888]">Listings</span><p className="font-semibold">156</p></div><div><span className="text-[#888888]">Member Since</span><p className="font-semibold">2024</p></div><div><span className="text-[#888888]">Rating</span><p className="font-semibold text-[#00c950] flex items-center gap-1"><ShieldCheck className="h-4 w-4" />Trusted</p></div></div></div></div>
      </div>
      <Separator className="bg-[#1f1f1f] mb-8" />
      <h2 className="text-xl font-bold mb-6">Active Listings</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1,2,3,4,5,6,7,8].map((i)=>(<div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-[6px] overflow-hidden animate-pulse"><div className="aspect-[3/4] bg-[#1a1a1a]" /><div className="p-3 space-y-2"><div className="h-4 bg-[#1a1a1a] rounded w-3/4" /><div className="h-3 bg-[#1a1a1a] rounded w-1/2" /><div className="h-5 bg-[#1a1a1a] rounded w-1/3" /></div></div>))}
      </div>
    </div>
  )
}
