'use client'

import Image from "next/image"
import Link from "next/link"
import { Bot, CreditCard, Star, User } from 'lucide-react'

export function CreateAgentHeader() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-black text-white p-1 rounded">G</div>
          <span className="font-semibold">GaliChat</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/ai-agents" className="flex items-center gap-2 text-sm text-gray-600">
            <Bot className="h-4 w-4" />
            My AI Agents
          </Link>
          <Link href="/partner" className="flex items-center gap-2 text-sm text-gray-600">
            <Star className="h-4 w-4" />
            Become a partner
          </Link>
          <Link href="/billing" className="flex items-center gap-2 text-sm text-gray-600">
            <CreditCard className="h-4 w-4" />
            Billing
          </Link>
          <Link href="/account" className="flex items-center gap-2 text-sm text-gray-600">
            <User className="h-4 w-4" />
            Account
          </Link>
        </nav>
      </div>
    </header>
  )
}

