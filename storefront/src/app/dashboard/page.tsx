"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, Package, DollarSign, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const stats = [{ label: "Total Sales", value: "$12,450.00", icon: DollarSign, change: "+12.5%" },{ label: "Active Listings", value: "24", icon: Package, change: "3 new" },{ label: "Pending Orders", value: "2", icon: Clock, change: "1 shipped" },{ label: "Balance", value: "$1,245.00", icon: TrendingUp, change: "Available" }]
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-8">
      <div className="flex items-center justify-between mb-8"><h1 className="text-2xl font-bold">Seller Dashboard</h1><Button className="bg-[#00e5ff] text-black hover:bg-[#00e5ff]/80 font-semibold"><PlusCircle className="mr-2 h-4 w-4" />New Listing</Button></div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">{stats.map((stat)=>(<Card key={stat.label} className="bg-[#111111] border-[#1f1f1f] text-white"><CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0"><CardTitle className="text-xs font-medium text-[#888888] uppercase tracking-wider">{stat.label}</CardTitle><stat.icon className="h-4 w-4 text-[#888888]" /></CardHeader><CardContent><div className="text-2xl font-mono font-bold">{stat.value}</div><p className="text-xs text-[#00c950] mt-1">{stat.change}</p></CardContent></Card>))}</div>
      <div className="mb-8"><h2 className="text-xl font-bold mb-4">My Listings</h2><div className="bg-[#111111] border border-[#1f1f1f] rounded-[6px] overflow-hidden"><table className="w-full text-left"><thead><tr className="border-b border-[#1f1f1f]"><th className="py-3 px-4 text-xs font-medium text-[#888888] uppercase">Card</th><th className="py-3 px-4 text-xs font-medium text-[#888888] uppercase">Price</th><th className="py-3 px-4 text-xs font-medium text-[#888888] uppercase hidden md:table-cell">Listed</th><th className="py-3 px-4 text-xs font-medium text-[#888888] uppercase">Status</th></tr></thead><tbody>{[{name:"LeBron James RC",price:"$4,999",date:"2 days ago",status:"active"},{name:"Luka Doncic Prizm",price:"$1,200",date:"5 days ago",status:"active"},{name:"Tom Brady Auto",price:"$3,500",date:"1 week ago",status:"sold"}].map((l,i)=>(<tr key={i} className="border-b border-[#1f1f1f] last:border-0"><td className="py-3 px-4 text-sm font-medium">{l.name}</td><td className="py-3 px-4 text-sm font-mono">{l.price}</td><td className="py-3 px-4 text-sm text-[#888888] hidden md:table-cell">{l.date}</td><td className="py-3 px-4"><Badge className={`text-[10px] px-2 py-0 ${l.status==="active"?"bg-[#00c950]/20 text-[#00c950] border-[#00c950]/30":"bg-[#888888]/20 text-[#888888] border-[#888888]/30"}`}>{l.status}</Badge></td></tr>))}</tbody></table></div></div>
      <div><h2 className="text-xl font-bold mb-4">Recent Orders</h2><div className="bg-[#111111] border border-[#1f1f1f] rounded-[6px] p-8 text-center"><Package className="h-12 w-12 text-[#888888] mx-auto mb-3" /><p className="text-[#888888] text-sm">No orders yet</p><p className="text-xs text-[#888888] mt-1">Your recent orders will appear here</p></div></div>
    </div>
  )
}
