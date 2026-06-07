"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import { HttpTypes } from "@medusajs/types"
import { medusa } from "@/lib/medusa"

interface AuthContextValue {
  customer: HttpTypes.StoreCustomer | null
  status: "loading" | "authenticated" | "unauthenticated"
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, firstName?: string, lastName?: string) => Promise<void>
  signOut: () => Promise<void>
  refresh: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [customer, setCustomer] = useState<HttpTypes.StoreCustomer | null>(null)
  const [status, setStatus] = useState<"loading" | "authenticated" | "unauthenticated">("loading")

  const refresh = useCallback(async () => {
    try {
      const { customer } = await medusa.store.customer.retrieve()
      setCustomer(customer)
      setStatus("authenticated")
    } catch {
      setCustomer(null)
      setStatus("unauthenticated")
    }
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refresh()
  }, [refresh])

  const signIn = useCallback(async (email: string, password: string) => {
    await medusa.auth.login("customer", "emailpass", { email, password })
    await refresh()
  }, [refresh])

  const signUp = useCallback(
    async (email: string, password: string, firstName?: string, lastName?: string) => {
      await medusa.auth.register("customer", "emailpass", { email, password })
      const { customer: created } = await medusa.store.customer.create({
        email,
        first_name: firstName ?? "",
        last_name: lastName ?? "",
      })
      setCustomer(created)
      setStatus("authenticated")
    },
    []
  )

  const signOut = useCallback(async () => {
    await medusa.auth.logout()
    setCustomer(null)
    setStatus("unauthenticated")
  }, [])

  return (
    <AuthContext.Provider value={{ customer, status, signIn, signUp, signOut, refresh }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
