"use client"

import Link from "next/link"
import { useState } from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { ArrowRight, TrendingUp, Star, ShieldCheck, Zap, Sparkles, Grid2X2, Clock } from "lucide-react"

const SPORTS = ["Baseball", "Basketball", "Football", "Hockey", "Soccer"]
const SPORT_SLUGS: Record<string, string> = { Baseball: "baseball", Basketball: "basketball", Football: "football", Hockey: "hockey", Soccer: "soccer" }

const FILLER_CARDS = [
  { name: "Mickey Mantle", year: 1952, set: "Topps", price: "$2,450", grade: "PSA 8", image: "https://image.pollinations.ai/prompt/baseball%20card%201952%20Topps%20Mickey%20Mantle%20action?width=600&height=800&model=flux&nologo=true&seed=101" },
  { name: "Michael Jordan", year: 1986, set: "Fleer", price: "$8,900", grade: "PSA 9", image: "https://image.pollinations.ai/prompt/basketball%20card%201986%20Fleer%20Michael%20Jordan%20rookie?width=600&height=800&model=flux&nologo=true&seed=202" },
  { name: "Tom Brady", year: 2000, set: "Playoff Contenders", price: "$3,500", grade: "PSA 9", image: "https://image.pollinations.ai/prompt/football%20card%202000%20Playoff%20Contenders%20Tom%20Brady?width=600&height=800&model=flux&nologo=true&seed=303" },
  { name: "Wayne Gretzky", year: 1979, set: "O-Pee-Chee", price: "$5,200", grade: "PSA 8", image: "https://image.pollinations.ai/prompt/hockey%20card%201979%20O-Pee-Chee%20Wayne%20Gretzky?width=600&height=800&model=flux&nologo=true&seed=404" },
  { name: "Lionel Messi", year: 2022, set: "Panini World Cup", price: "$1,100", grade: "PSA 10", image: "https://image.pollinations.ai/prompt/soccer%20card%202022%20Panini%20World%20Cup%20Messi?width=600&height=800&model=flux&nologo=true&seed=505" },
  { name: "Honus Wagner", year: 1910, set: "T206", price: "$12,000", grade: "PSA 4", image: "https://image.pollinations.ai/prompt/baseball%20card%201910%20Honus%20Wagner%20T206?width=600&height=800&model=flux&nologo=true&seed=606" },
  { name: "LeBron James", year: 2003, set: "Topps Chrome", price: "$4,999", grade: "PSA 9", image: "https://image.pollinations.ai/prompt/basketball%20card%202003%20Topps%20Chrome%20LeBron%20James%20RC?width=600&height=800&model=flux&nologo=true&seed=707" },
  { name: "Joe Montana", year: 1965, set: "Topps", price: "$2,800", grade: "PSA 9", image: "https://image.pollinations.ai/prompt/football%20card%201965%20Topps%20Joe%20Montana?width=600&height=800&model=flux&nologo=true&seed=808" },
]

const SPORT_COLORS: Record<string, string> = { Baseball: "#d4a574", Basketball: "#ff6b35", Football: "#8b5e3c", Hockey: "#4dc9f6", Soccer: "#2ecc71" }

export default function HomePage() {
  const [activeSport, setActiveSport] = useState<string | null>(null)
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-[#1f1f1f]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/10 via-[#0a0a0a] to-[#0a0a0a]" />
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, rgba(0,229,255,0.03) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(0,229,255,0.03) 0%, transparent 50%)",
        }} />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00e5ff]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00e5ff]/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-[1280px] px-6 py-24 md:py-36 text-center">
          <Badge className="mb-4 bg-[#00e5ff]/10 text-[#00e5ff] border-[#00e5ff]/20 px-3 py-1 text-xs font-semibold gap-1.5"><Sparkles className="h-3 w-3" /> Premium Card Marketplace</Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4"><span className="text-[#00e5ff]">RKIES</span><span className="text-white"> BRND</span></h1>
          <p className="text-lg md:text-xl text-[#888888] max-w-xl mx-auto mb-8 leading-relaxed">The premium marketplace for collectors. Browse thousands of graded and raw cards from trusted sellers worldwide.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/browse" className={buttonVariants({ size: "lg", className: "bg-[#00e5ff] text-black hover:bg-[#00e5ff]/80 font-semibold gap-2 h-11" })}>Browse Cards <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/auth/become-seller" className={buttonVariants({ size: "lg", variant: "outline", className: "border-[#1f1f1f] text-white hover:bg-[#111111] h-11" })}>Start Selling <Zap className="h-4 w-4" /></Link>
          </div>
          <div className="flex items-center justify-center gap-6 mt-10 text-xs text-[#888888]">
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-[#00c950]" /> Secure Payments</span>
            <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 text-[#f5a623]" /> Trusted Sellers</span>
            <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-[#00e5ff]" /> Instant Checkout</span>
          </div>
        </div>
      </section>
      <section className="border-b border-[#1f1f1f] bg-[#111111]/30">
        <div className="mx-auto max-w-[1280px] px-6 py-4">
          <div className="flex items-center gap-3">
            <Grid2X2 className="h-4 w-4 text-[#888888] shrink-0" />
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              <Button variant={activeSport === null ? "secondary" : "outline"} size="sm"
                className={activeSport === null ? "bg-[#00e5ff] text-black hover:bg-[#00e5ff]/80 shrink-0" : "border-[#1f1f1f] text-[#888888] hover:text-white hover:border-[#333] shrink-0"}
                onClick={() => setActiveSport(null)}>All Sports</Button>
              {SPORTS.map((sport) => (
                <Button key={sport} variant={activeSport === sport ? "secondary" : "outline"} size="sm"
                  className={activeSport === sport ? "bg-[#00e5ff] text-black hover:bg-[#00e5ff]/80 shrink-0" : "border-[#1f1f1f] text-[#888888] hover:text-white hover:border-[#333] shrink-0"}
                  onClick={() => setActiveSport(sport)}
                  style={activeSport === sport ? {} : { borderColor: `${SPORT_COLORS[sport]}30` }}>{sport}</Button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2"><Zap className="h-5 w-5 text-[#ff6b35]" /><h2 className="text-2xl font-bold">Trending Now</h2></div>
          <Link href="/browse" className={buttonVariants({ variant: "link", className: "text-[#00e5ff] text-sm" })}>View All <ArrowRight className="ml-1 h-4 w-4" /></Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {FILLER_CARDS.map((card, i) => (
            <HoverCard key={i}>
              <HoverCardTrigger>
                <Link href="/browse" className="group block">
                  <div className="bg-[#111111] border border-[#1f1f1f] rounded-[6px] overflow-hidden transition-all duration-150 hover:scale-[1.02] hover:border-[#00e5ff]">
                    <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0a]">
                      <img src={card.image} alt={card.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                      <div className="absolute top-2 left-2"><Badge className="text-[10px] px-1.5 py-0 font-medium bg-black/60 text-white border-0 backdrop-blur-sm">{card.grade}</Badge></div>
                      <div className="absolute bottom-2 left-2"><Badge className="text-[10px] px-1.5 py-0 font-bold bg-[#00e5ff] text-black border-0">RC</Badge></div>
                    </div>
                    <div className="p-3 space-y-1.5">
                      <h3 className="font-semibold text-white text-sm leading-tight line-clamp-1">{card.name}</h3>
                      <p className="text-xs text-[#888888]">{card.year} {card.set}</p>
                      <p className="font-mono text-base font-semibold text-white">{card.price}</p>
                    </div>
                  </div>
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-64 bg-[#111111] border-[#1f1f1f] text-white" side="top">
                <div className="space-y-1.5">
                  <h4 className="text-sm font-semibold">{card.name} - {card.price}</h4>
                  <p className="text-xs text-[#888888]">{card.year} {card.set} &bull; {card.grade}</p>
                  <p className="text-xs text-[#00c950]">&#10003; Verified seller &bull; Free shipping</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </section>
      <section className="border-t border-[#1f1f1f] bg-[#111111]/30">
        <div className="mx-auto max-w-[1280px] px-6 py-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2"><Clock className="h-5 w-5 text-[#00e5ff]" /><h2 className="text-2xl font-bold">Recently Added</h2></div>
            <Link href="/browse" className={buttonVariants({ variant: "link", className: "text-[#00e5ff] text-sm" })}>View All <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...FILLER_CARDS].reverse().slice(0, 4).map((card, i) => (
              <Link key={i} href="/browse" className="group block">
                <div className="bg-[#111111] border border-[#1f1f1f] rounded-[6px] overflow-hidden transition-all duration-150 hover:scale-[1.02] hover:border-[#00e5ff]">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0a]">
                    <img src={card.image} alt={card.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div className="p-3 space-y-1.5">
                    <h3 className="font-semibold text-white text-sm leading-tight line-clamp-1">{card.name}</h3>
                    <p className="text-xs text-[#888888]">{card.year} {card.set}</p>
                    <p className="font-mono text-base font-semibold text-white">{card.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-14 h-14 rounded-full bg-[#00e5ff]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200"><Star className="h-7 w-7 text-[#00e5ff]" /></div>
            <h3 className="font-semibold mb-2 text-lg">Sign Up</h3>
            <p className="text-sm text-[#888888] leading-relaxed">Create your RKIES BRND account, then apply to become a seller to start listing your cards instantly.</p>
          </div>
          <div className="text-center group">
            <div className="w-14 h-14 rounded-full bg-[#00e5ff]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200"><TrendingUp className="h-7 w-7 text-[#00e5ff]" /></div>
            <h3 className="font-semibold mb-2 text-lg">List Cards</h3>
            <p className="text-sm text-[#888888] leading-relaxed">Upload photos, set prices, and add card details. Your listings go live and reach thousands of collectors.</p>
          </div>
          <div className="text-center group">
            <div className="w-14 h-14 rounded-full bg-[#00e5ff]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200"><ShieldCheck className="h-7 w-7 text-[#00e5ff]" /></div>
            <h3 className="font-semibold mb-2 text-lg">Get Paid</h3>
            <p className="text-sm text-[#888888] leading-relaxed">Secure payments through Stripe. We handle the transaction so you can focus on collecting.</p>
          </div>
        </div>
      </section>
      <section className="border-t border-[#1f1f1f] bg-[#111111]/50">
        <div className="mx-auto max-w-[1280px] px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{ value: "12K+", label: "Cards Listed" },{ value: "2.5K+", label: "Active Sellers" },{ value: "99.2%", label: "Positive Feedback" },{ value: "48hr", label: "Avg Payout Time" }].map((stat, i) => (
              <div key={i}><p className="text-2xl font-bold font-mono text-[#00e5ff]">{stat.value}</p><p className="text-xs text-[#888888] mt-1">{stat.label}</p></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
