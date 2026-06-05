"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SlidersHorizontal, Grid2X2, List, Search, FilterX } from "lucide-react"

const SPORTS = [{ label: "All", value: "" },{ label: "Baseball", value: "baseball" },{ label: "Basketball", value: "basketball" },{ label: "Football", value: "football" },{ label: "Hockey", value: "hockey" },{ label: "Soccer", value: "soccer" }]
const GRADES = ["PSA 10", "PSA 9", "PSA 8", "BGS 10", "BGS 9.5", "BGS 9", "SGC 10", "Raw"]

const FILLER = [
  { name: "Mickey Mantle 1952 Topps", sport: "baseball", price: "$2,450", grade: "PSA 8", img: "https://image.pollinations.ai/prompt/baseball%20card%201952%20Topps%20Mickey%20Mantle%20action?width=600&height=800&model=flux&nologo=true&seed=101" },
  { name: "Michael Jordan 1986 Fleer", sport: "basketball", price: "$8,900", grade: "PSA 9", img: "https://image.pollinations.ai/prompt/basketball%20card%201986%20Fleer%20Michael%20Jordan%20rookie?width=600&height=800&model=flux&nologo=true&seed=202" },
  { name: "Tom Brady 2000 Contenders", sport: "football", price: "$3,500", grade: "PSA 9", img: "https://image.pollinations.ai/prompt/football%20card%202000%20Playoff%20Contenders%20Tom%20Brady?width=600&height=800&model=flux&nologo=true&seed=303" },
  { name: "Wayne Gretzky 1979 OPC", sport: "hockey", price: "$5,200", grade: "PSA 8", img: "https://image.pollinations.ai/prompt/hockey%20card%201979%20O-Pee-Chee%20Wayne%20Gretzky?width=600&height=800&model=flux&nologo=true&seed=404" },
  { name: "Messi 2022 Panini World Cup", sport: "soccer", price: "$1,100", grade: "PSA 10", img: "https://image.pollinations.ai/prompt/soccer%20card%202022%20Panini%20World%20Cup%20Messi?width=600&height=800&model=flux&nologo=true&seed=505" },
  { name: "Honus Wagner 1910 T206", sport: "baseball", price: "$12,000", grade: "PSA 4", img: "https://image.pollinations.ai/prompt/baseball%20card%201910%20Honus%20Wagner%20T206?width=600&height=800&model=flux&nologo=true&seed=606" },
  { name: "LeBron James 2003 Chrome", sport: "basketball", price: "$4,999", grade: "PSA 9", img: "https://image.pollinations.ai/prompt/basketball%20card%202003%20Topps%20Chrome%20LeBron%20James%20RC?width=600&height=800&model=flux&nologo=true&seed=707" },
  { name: "Joe Montana 1965 Topps", sport: "football", price: "$2,800", grade: "PSA 9", img: "https://image.pollinations.ai/prompt/football%20card%201965%20Topps%20Joe%20Montana?width=600&height=800&model=flux&nologo=true&seed=808" },
  { name: "Babe Ruth 1914 Baltimore News", sport: "baseball", price: "$8,500", grade: "PSA 3", img: "https://image.pollinations.ai/prompt/vintage%20baseball%20card%20Babe%20Ruth%201914%20Baltimore%20News?width=600&height=800&model=flux&nologo=true&seed=909" },
  { name: "Kobe Bryant 1996 Topps", sport: "basketball", price: "$3,200", grade: "PSA 9", img: "https://image.pollinations.ai/prompt/basketball%20card%201996%20Topps%20Kobe%20Bryant%20rookie?width=600&height=800&model=flux&nologo=true&seed=1010" },
  { name: "Jerry Rice 1985 Topps", sport: "football", price: "$1,800", grade: "PSA 9", img: "https://image.pollinations.ai/prompt/football%20card%201985%20Topps%20Jerry%20Rice%20rookie?width=600&height=800&model=flux&nologo=true&seed=1111" },
  { name: "Mario Lemieux 1984 OPC", sport: "hockey", price: "$2,100", grade: "PSA 9", img: "https://image.pollinations.ai/prompt/hockey%20card%201984%20O-Pee-Chee%20Mario%20Lemieux%20rookie?width=600&height=800&model=flux&nologo=true&seed=1212" },
  { name: "Shohei Ohtani 2018 Topps", sport: "baseball", price: "$950", grade: "BGS 9.5", img: "https://image.pollinations.ai/prompt/baseball%20card%202018%20Topps%20Shohei%20Ohtani%20rookie?width=600&height=800&model=flux&nologo=true&seed=1313" },
  { name: "Stephen Curry 2009 Topps", sport: "basketball", price: "$1,450", grade: "PSA 9", img: "https://image.pollinations.ai/prompt/basketball%20card%202009%20Topps%20Stephen%20Curry%20rookie?width=600&height=800&model=flux&nologo=true&seed=1414" },
  { name: "Patrick Mahomes 2017 Contenders", sport: "football", price: "$2,200", grade: "PSA 9", img: "https://image.pollinations.ai/prompt/football%20card%202017%20Playoff%20Contenders%20Patrick%20Mahomes?width=600&height=800&model=flux&nologo=true&seed=1515" },
  { name: "Sidney Crosby 2005 Young Guns", sport: "hockey", price: "$1,600", grade: "PSA 9", img: "https://image.pollinations.ai/prompt/hockey%20card%202005%20Young%20Guns%20Sidney%20Crosby%20rookie?width=600&height=800&model=flux&nologo=true&seed=1616" },
]

export default function BrowsePage() {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [gridView, setGridView] = useState(true)
  const [filterSport, setFilterSport] = useState("")
  const [sort, setSort] = useState("newest")
  const filtered = FILLER.filter(c => !filterSport || c.sport === filterSport)
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <div><h1 className="text-2xl font-bold">Browse Cards</h1><p className="text-sm text-[#888888] mt-0.5">{filtered.length} cards found</p></div>
        <div className="flex items-center gap-2">
          <Select value={sort} onValueChange={(v) => v && setSort(v)}><SelectTrigger className="w-40 h-9 bg-[#111111] border-[#1f1f1f] text-sm"><SelectValue /></SelectTrigger><SelectContent className="bg-[#111111] border-[#1f1f1f]"><SelectItem value="newest">Newest</SelectItem><SelectItem value="price-asc">Price: Low-High</SelectItem><SelectItem value="price-desc">Price: High-Low</SelectItem><SelectItem value="oldest">Oldest</SelectItem></SelectContent></Select>
          <Button variant="ghost" size="icon" className={gridView ? "text-white" : "text-[#888888]"} onClick={() => setGridView(true)}><Grid2X2 className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" className={!gridView ? "text-white" : "text-[#888888]"} onClick={() => setGridView(false)}><List className="h-4 w-4" /></Button>
          <Button variant="outline" size="icon" className="border-[#1f1f1f] lg:hidden" onClick={() => setFiltersOpen(!filtersOpen)}><SlidersHorizontal className="h-4 w-4" /></Button>
        </div>
      </div>
      <div className="flex gap-8">
        <aside className={`${filtersOpen ? "block" : "hidden"} lg:block w-full lg:w-64 shrink-0`}>
          <ScrollArea className="h-[calc(100vh-12rem)] space-y-4 pr-2">
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-[6px] p-4 space-y-3"><div className="flex items-center justify-between"><h3 className="font-semibold text-sm">Filters</h3><Button variant="ghost" size="xs" className="text-[#888888] h-6 text-xs" onClick={() => { setFilterSport(""); }}><FilterX className="h-3 w-3 mr-1" /> Clear</Button></div><div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#888888]" /><Input placeholder="Search..." className="pl-8 h-8 bg-[#0a0a0a] border-[#1f1f1f] text-xs" /></div></div>
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-[6px] p-4 space-y-3"><h3 className="font-semibold text-sm">Sport</h3><div className="space-y-2">{SPORTS.map((s) => (<label key={s.value} className={`flex items-center gap-2 text-sm cursor-pointer ${filterSport === s.value ? "text-white" : "text-[#888888]"}`}><input type="radio" name="sport" checked={filterSport === s.value} onChange={() => setFilterSport(s.value)} className="accent-[#00e5ff]" />{s.label}</label>))}</div></div>
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-[6px] p-4 space-y-3"><h3 className="font-semibold text-sm">Price Range</h3><div className="flex gap-2"><Input type="number" placeholder="Min" className="h-8 bg-[#0a0a0a] border-[#1f1f1f] text-sm" /><Input type="number" placeholder="Max" className="h-8 bg-[#0a0a0a] border-[#1f1f1f] text-sm" /></div></div>
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-[6px] p-4 space-y-3"><h3 className="font-semibold text-sm">Grade</h3><div className="space-y-2">{GRADES.map((g) => (<label key={g} className="flex items-center gap-2 text-sm text-[#888888] cursor-pointer"><Checkbox className="border-[#1f1f1f] data-[state=checked]:bg-[#00e5ff] data-[state=checked]:border-[#00e5ff]" />{g}</label>))}</div></div>
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-[6px] p-4 space-y-3"><h3 className="font-semibold text-sm">Attributes</h3><div className="space-y-2"><label className="flex items-center gap-2 text-sm text-[#888888] cursor-pointer"><Checkbox className="border-[#1f1f1f] data-[state=checked]:bg-[#00e5ff]" />Rookie Card</label><label className="flex items-center gap-2 text-sm text-[#888888] cursor-pointer"><Checkbox className="border-[#1f1f1f] data-[state=checked]:bg-[#00e5ff]" />Autograph</label><label className="flex items-center gap-2 text-sm text-[#888888] cursor-pointer"><Checkbox className="border-[#1f1f1f] data-[state=checked]:bg-[#00e5ff]" />Patch / Relic</label></div></div>
            <Button className="w-full bg-[#00e5ff] text-black hover:bg-[#00e5ff]/80 font-semibold">Apply Filters</Button>
          </ScrollArea>
        </aside>
        <div className="flex-1 min-w-0">
          <div className={gridView ? "grid grid-cols-2 md:grid-cols-3 gap-4" : "space-y-3"}>
            {filtered.map((card, i) => (
              gridView ? (
                <div key={i} className="group"><div className="bg-[#111111] border border-[#1f1f1f] rounded-[6px] overflow-hidden transition-all duration-150 hover:scale-[1.02] hover:border-[#00e5ff]"><div className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0a]"><img src={card.img} alt={card.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" /><Badge className="absolute top-2 left-2 text-[10px] bg-black/60 text-white border-0 backdrop-blur-sm">{card.grade}</Badge></div><div className="p-3 space-y-1.5"><h3 className="font-semibold text-white text-sm leading-tight line-clamp-1">{card.name}</h3><p className="text-xs text-[#888888] capitalize">{card.sport}</p><p className="font-mono text-base font-semibold text-white">{card.price}</p></div></div></div>
              ) : (
                <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-[6px] p-3 flex gap-4 items-center"><div className="w-16 h-20 rounded overflow-hidden shrink-0 bg-[#0a0a0a]"><img src={card.img} alt={card.name} className="w-full h-full object-cover" loading="lazy" /></div><div className="flex-1 min-w-0"><h3 className="font-medium text-sm text-white">{card.name}</h3><p className="text-xs text-[#888888] capitalize">{card.sport} &bull; {card.grade}</p></div><p className="font-mono font-semibold text-white text-right shrink-0">{card.price}</p></div>
              )
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 mt-8">
            <Button variant="outline" size="sm" className="border-[#1f1f1f] text-[#888888]" disabled>Previous</Button>
            <Button variant="outline" size="sm" className="border-[#1f1f1f] bg-[#111111] text-white">1</Button>
            <Button variant="outline" size="sm" className="border-[#1f1f1f] text-[#888888]">2</Button>
            <Button variant="outline" size="sm" className="border-[#1f1f1f] text-[#888888]">3</Button>
            <Button variant="outline" size="sm" className="border-[#1f1f1f] text-[#888888]">Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
