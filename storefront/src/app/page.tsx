import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Star, ShieldCheck } from "lucide-react"

const SPORTS = ["Baseball", "Basketball", "Football", "Hockey", "Soccer"]
const SPORT_SLUGS: Record<string, string> = { Baseball: "baseball", Basketball: "basketball", Football: "football", Hockey: "hockey", Soccer: "soccer" }

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-[#1f1f1f]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        <div className="relative mx-auto max-w-[1280px] px-6 py-24 md:py-36 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Buy &amp; Sell <span className="text-[#00e5ff]">Sports Cards</span></h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-xl mx-auto mb-8">The premium marketplace for collectors. Browse thousands of graded and raw cards from trusted sellers.</p>
          <div className="flex gap-3 justify-center">
            <Link href="/browse" className={buttonVariants({ size: "lg", className: "bg-[#00e5ff] text-black hover:bg-[#00e5ff]/80 font-semibold" })}>Browse Cards <ArrowRight className="ml-2 h-4 w-4" /></Link>
            <Link href="/auth/become-seller" className={buttonVariants({ size: "lg", variant: "outline", className: "border-[#1f1f1f] text-white hover:bg-[#111111]" })}>Start Selling</Link>
          </div>
        </div>
      </section>
      <section className="border-b border-[#1f1f1f]">
        <div className="mx-auto max-w-[1280px] px-6 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <Link href="/browse" className={buttonVariants({ variant: "secondary", size: "sm", className: "bg-[#00e5ff] text-black hover:bg-[#00e5ff]/80 shrink-0" })}>All Sports</Link>
            {SPORTS.map((sport) => (<Link key={sport} href={`/browse?sport=${SPORT_SLUGS[sport]}`} className={buttonVariants({ variant: "outline", size: "sm", className: "border-[#1f1f1f] text-[#888888] hover:text-white hover:border-[#333] shrink-0" })}>{sport}</Link>))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="flex items-center justify-between mb-8"><h2 className="text-2xl font-bold">Featured Listings</h2><Link href="/browse" className={buttonVariants({ variant: "link", className: "text-[#00e5ff]" })}>View All <ArrowRight className="ml-1 h-4 w-4" /></Link></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1,2,3,4,5,6,7,8].map((i) => (<div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-[6px] overflow-hidden animate-pulse"><div className="aspect-[3/4] bg-[#1a1a1a]" /><div className="p-3 space-y-2"><div className="h-4 bg-[#1a1a1a] rounded w-3/4" /><div className="h-3 bg-[#1a1a1a] rounded w-1/2" /><div className="h-5 bg-[#1a1a1a] rounded w-1/3" /></div></div>))}
        </div>
      </section>
      <section className="border-t border-[#1f1f1f] bg-[#111111]/50">
        <div className="mx-auto max-w-[1280px] px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center"><div className="w-12 h-12 rounded-full bg-[#00e5ff]/10 flex items-center justify-center mx-auto mb-4"><Star className="h-6 w-6 text-[#00e5ff]" /></div><h3 className="font-semibold mb-2">Sign Up</h3><p className="text-sm text-[#888888]">Create your buyer account, then apply to become a seller to start listing your cards.</p></div>
            <div className="text-center"><div className="w-12 h-12 rounded-full bg-[#00e5ff]/10 flex items-center justify-center mx-auto mb-4"><TrendingUp className="h-6 w-6 text-[#00e5ff]" /></div><h3 className="font-semibold mb-2">List Cards</h3><p className="text-sm text-[#888888]">Upload photos, set prices, and add card details. Your listings go live in seconds.</p></div>
            <div className="text-center"><div className="w-12 h-12 rounded-full bg-[#00e5ff]/10 flex items-center justify-center mx-auto mb-4"><ShieldCheck className="h-6 w-6 text-[#00e5ff]" /></div><h3 className="font-semibold mb-2">Get Paid</h3><p className="text-sm text-[#888888]">Secure payments through Stripe. We handle the transaction so you can focus on collecting.</p></div>
          </div>
        </div>
      </section>
    </div>
  )
}
