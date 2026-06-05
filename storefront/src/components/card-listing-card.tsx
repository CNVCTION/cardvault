import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { SportBadge } from "./sport-badge"
import { GradeBadge } from "./grade-badge"
import type { CardMetadata } from "@/types/card"

function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(cents / 100)
}

interface CardListingProps {
  id: string; title: string; thumbnail?: string; metadata?: CardMetadata
  variants?: Array<{ prices?: Array<{ amount: number; currency_code: string }> }>; handle?: string
}

export function CardListingCard({ product }: { product: CardListingProps }) {
  const metadata = product.metadata as CardMetadata | undefined
  const price = product.variants?.[0]?.prices?.[0]?.amount ?? 0

  return (
    <Link href={`/cards/${product.id}`} className="group block">
      <div className="bg-[#111111] border border-[#1f1f1f] rounded-[6px] overflow-hidden transition-all duration-150 hover:scale-[1.02] hover:border-[#00e5ff]">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0a]">
          {product.thumbnail ? (<img src={product.thumbnail} alt={product.title} className="w-full h-full object-cover" />) : (<div className="w-full h-full flex items-center justify-center text-[#888888] text-sm">No Image</div>)}
          {metadata?.sport && (<div className="absolute top-2 left-2"><SportBadge sport={metadata.sport} /></div>)}
          {metadata?.grade && (<div className="absolute top-2 right-2"><GradeBadge grade={metadata.grade} /></div>)}
          <div className="absolute bottom-2 left-2 flex gap-1 flex-wrap">
            {metadata?.is_rookie && <Badge className="text-[10px] px-1.5 py-0 font-bold bg-[#f5a623] text-black border-0">RC</Badge>}
            {metadata?.is_autograph && <Badge className="text-[10px] px-1.5 py-0 font-bold bg-[#00e5ff] text-black border-0">AUTO</Badge>}
            {metadata?.is_patch && <Badge className="text-[10px] px-1.5 py-0 font-bold bg-[#9b59b6] text-white border-0">PATCH</Badge>}
            {metadata?.serial_number && <Badge className="text-[10px] px-1.5 py-0 font-bold bg-[#ff4444] text-white border-0">{metadata.serial_number}</Badge>}
          </div>
        </div>
        <div className="p-3 space-y-1.5">
          <h3 className="font-semibold text-white text-sm leading-tight line-clamp-1">{metadata?.player_name || product.title}</h3>
          <p className="text-xs text-[#888888]">{metadata?.team && `${metadata.team} | `}{metadata?.year && `${metadata.year} | `}{metadata?.card_set}</p>
          <p className="font-mono text-base font-semibold text-white">{formatPrice(price)}</p>
          {metadata?.seller_id && <p className="text-[11px] text-[#888888] truncate">{metadata.seller_id.substring(0, 8)}...</p>}
        </div>
      </div>
    </Link>
  )
}
