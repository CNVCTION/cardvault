"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { GradeBadge } from "@/components/grade-badge"
import { SportBadge } from "@/components/sport-badge"
import { useCart } from "@/lib/cart-context"
import { toast } from "sonner"
import { ShieldCheck, ArrowLeft, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const CARD = {
  id: "card-003",
  name: "Nolan Ryan",
  year: 2024,
  set: "Topps",
  price: "$4,200.00",
  grade: "PSA 9",
  sport: "baseball",
  team: "Houston Astros",
  image: "/img/cards/card_003.jpg",
  cardNum: "#1",
}

export default function CardDetailPage() {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const [offerAmount, setOfferAmount] = useState("")
  const [showOffer, setShowOffer] = useState(false)

  const handleAddToCart = () => {
    addItem({
      id: CARD.id,
      name: `${CARD.name} ${CARD.year} ${CARD.set}`,
      price: CARD.price,
      image: CARD.image,
      grade: CARD.grade,
      sport: CARD.sport,
      team: CARD.team,
    })
    setAdded(true)
    toast.success("Added to cart", { description: `${CARD.name} has been added to your cart.` })
    setTimeout(() => setAdded(false), 2000)
  }

  const handleOffer = (e: React.FormEvent) => {
    e.preventDefault()
    if (!offerAmount) return
    toast.success("Offer submitted", { description: `Your offer of $${offerAmount} has been sent to the seller.` })
    setOfferAmount("")
    setShowOffer(false)
  }

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-10">
      <Link href="/browse" className="inline-flex items-center gap-1.5 font-body-sm text-muted-foreground hover:text-white mb-8 transition-colors"><ArrowLeft className="h-4 w-4" /> Back to browse</Link>

      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <Card className="rounded-none border-border overflow-hidden aspect-[3/4] mb-4 relative p-0 animate-scale-in">
            <Image src={CARD.image} alt={`${CARD.name} — ${CARD.team}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
          </Card>
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-20 h-20 bg-card border border-border overflow-hidden cursor-pointer hover:border-primary transition-colors relative">
                <Image src={`/img/cards/card_00${i}.jpg`} alt={`Thumbnail ${i}`} fill className="object-cover" sizes="80px" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 animate-slide-in-right">
          <div className="flex gap-2">
            <SportBadge sport={CARD.sport} />
            <GradeBadge grade={CARD.grade} />
            <Badge variant="secondary" className="rounded-none bg-[#f5a623] text-black font-bold cursor-default">RC</Badge>
            <Badge variant="secondary" className="rounded-none bg-primary text-primary-foreground font-bold cursor-default">/99</Badge>
          </div>

          <div>
            <h1 className="font-display-xl text-white mb-2">{CARD.name}</h1>
            <p className="font-body-md text-muted-foreground">{CARD.year} {CARD.set} {CARD.cardNum} {CARD.team}</p>
          </div>

          <div className="font-mono text-4xl font-bold text-white">{CARD.price}</div>
          <Separator />

          <div className="grid grid-cols-2 gap-4">
            {[{ label: "Sport", value: CARD.sport },{ label: "Player", value: CARD.name },{ label: "Team", value: CARD.team },{ label: "Year", value: String(CARD.year) },{ label: "Set", value: CARD.set },{ label: "Card #", value: CARD.cardNum },{ label: "Grade", value: "PSA 9 MINT" },{ label: "Condition", value: "Mint" }].map((spec) => (
              <div key={spec.label}><span className="font-caption-upper text-muted-foreground">{spec.label}</span><p className="font-body-md text-white font-medium mt-1">{spec.value}</p></div>
            ))}
          </div>
          <Separator />

          <div className="flex gap-3">
            <Button className="flex-1 font-cta rounded-none h-12 cursor-pointer" onClick={handleAddToCart} disabled={added}>
              <ShoppingCart className="h-4 w-4" /> {added ? "Added!" : "Add to Cart"}
            </Button>
            <Button variant="outline" className="flex-1 font-cta rounded-none h-12 cursor-pointer" onClick={() => setShowOffer(!showOffer)}>
              {showOffer ? "Cancel" : "Make Offer"}
            </Button>
          </div>

          {showOffer && (
            <form onSubmit={handleOffer} className="bg-card p-4 space-y-3 animate-scale-in">
              <h4 className="font-title-sm text-white">Make an Offer</h4>
              <div className="flex gap-3">
                <Input
                  type="number"
                  placeholder="Your offer ($)"
                  value={offerAmount}
                  onChange={(e) => setOfferAmount(e.target.value)}
                  className="flex-1 h-12 rounded-none text-lg"
                  autoFocus
                />
                <Button type="submit" className="font-cta rounded-none h-12 cursor-pointer" disabled={!offerAmount}>
                  Send Offer
                </Button>
              </div>
            </form>
          )}

          <Separator />

          <Link href="/sellers/example-seller" className="flex items-center gap-4 p-4 bg-card hover:bg-muted transition-colors rounded-none cursor-pointer block">
            <Avatar className="h-12 w-12"><AvatarFallback className="bg-background text-muted-foreground rounded-none">SL</AvatarFallback></Avatar>
            <div className="flex-1"><p className="font-title-sm text-white">SportsCardsLLC</p><p className="font-body-sm text-muted-foreground">156 listings &bull; Member since 2024</p></div>
            <div className="flex items-center gap-1.5 font-body-sm text-success"><ShieldCheck className="h-4 w-4" /> Trusted</div>
          </Link>

          <Accordion className="w-full">
            <AccordionItem className="border-border">
              <AccordionTrigger className="font-title-sm hover:no-underline text-white cursor-pointer">Description &amp; Details</AccordionTrigger>
              <AccordionContent className="font-body-md text-muted-foreground leading-relaxed">
                2024 Topps Nolan Ryan Houston Astros #1. Graded PSA 9 MINT. Iconic pitcher and Hall of Famer. Sharp corners, clean surface, and excellent centering. Comes in a tamper-proof PSA slab.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div>
            <h3 className="font-title-md text-white mb-4">More from this seller</h3>
            <div className="grid grid-cols-3 gap-[1px] bg-border">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-background overflow-hidden relative aspect-[3/4]">
                  <Image src={`/img/cards/card_00${i}.jpg`} alt={`Card ${i}`} fill className="object-cover" sizes="120px" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
