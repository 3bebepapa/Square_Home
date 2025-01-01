import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Search } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export function TopNav() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 justify-between">
        <div>
          <Input
            type="search"
            placeholder="Search..."
            className="w-64"
          />
        </div>
        <div className="flex items-center space-x-4">
          <Button size="icon" variant="ghost">
            <Bell className="h-5 w-5" />
          </Button>
          <Link href="/billing" className="text-sm text-gray-600">
            Billing
          </Link>
          <div className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              width={32}
              height={32}
              className="rounded-full"
              alt="Avatar"
            />
            <Link href="/account" className="text-sm text-gray-600">
              Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

