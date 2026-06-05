"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <Card className="w-full max-w-md bg-[#111111] border-[#1f1f1f] text-white">
        <CardHeader className="text-center"><CardTitle className="text-2xl">Create Account</CardTitle><CardDescription className="text-[#888888]">Join CardVault and start collecting</CardDescription></CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={(e)=>e.preventDefault()}>
            <div className="space-y-2"><Label htmlFor="name">Full Name</Label><Input id="name" type="text" placeholder="John Doe" className="bg-[#0a0a0a] border-[#1f1f1f]" /></div>
            <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="you@example.com" className="bg-[#0a0a0a] border-[#1f1f1f]" /></div>
            <div className="space-y-2"><Label htmlFor="password">Password</Label><Input id="password" type="password" placeholder="Create a strong password" className="bg-[#0a0a0a] border-[#1f1f1f]" /></div>
            <Button className="w-full bg-[#00e5ff] text-black hover:bg-[#00e5ff]/80 font-semibold">Create Account</Button>
          </form>
          <p className="text-sm text-center text-[#888888] mt-4">Already have an account? <Link href="/auth/login" className="text-[#00e5ff] hover:underline">Sign in</Link></p>
        </CardContent>
      </Card>
    </div>
  )
}
