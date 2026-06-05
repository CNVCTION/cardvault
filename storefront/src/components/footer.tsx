import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] bg-[#0a0a0a] mt-auto">
      <div className="mx-auto max-w-[1280px] px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div><h4 className="font-semibold text-white text-sm mb-4">Marketplace</h4><ul className="space-y-2"><li><Link href="/browse" className="text-sm text-[#888888] hover:text-white transition-colors">Browse Cards</Link></li><li><Link href="/browse?sport=baseball" className="text-sm text-[#888888] hover:text-white transition-colors">Baseball</Link></li><li><Link href="/browse?sport=basketball" className="text-sm text-[#888888] hover:text-white transition-colors">Basketball</Link></li><li><Link href="/browse?sport=football" className="text-sm text-[#888888] hover:text-white transition-colors">Football</Link></li></ul></div>
          <div><h4 className="font-semibold text-white text-sm mb-4">Sell</h4><ul className="space-y-2"><li><Link href="/auth/become-seller" className="text-sm text-[#888888] hover:text-white transition-colors">Start Selling</Link></li><li><Link href="/dashboard" className="text-sm text-[#888888] hover:text-white transition-colors">Seller Dashboard</Link></li><li><Link href="/help" className="text-sm text-[#888888] hover:text-white transition-colors">How It Works</Link></li></ul></div>
          <div><h4 className="font-semibold text-white text-sm mb-4">Support</h4><ul className="space-y-2"><li><Link href="/help" className="text-sm text-[#888888] hover:text-white transition-colors">Help Center</Link></li><li><Link href="/terms" className="text-sm text-[#888888] hover:text-white transition-colors">Terms of Service</Link></li><li><Link href="/privacy" className="text-sm text-[#888888] hover:text-white transition-colors">Privacy Policy</Link></li></ul></div>
          <div><h4 className="font-semibold text-sm mb-4"><span className="text-[#00e5ff]">Card</span><span className="text-white">Vault</span></h4><p className="text-sm text-[#888888]">The premier marketplace for sports card collectors and sellers.</p></div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#1f1f1f] text-center text-xs text-[#888888]">&copy; {new Date().getFullYear()} CardVault. All rights reserved.</div>
      </div>
    </footer>
  )
}
