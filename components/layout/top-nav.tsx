import { Input } from "@/components/ui/input"
import { Bell, Search } from 'lucide-react'
import Link from "next/link"
import { UserMenu } from "../user-menu"
import { Button } from "../ui/button"
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context"

export function TopNav() {
  const { language } = useLanguage()

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 justify-between">
        <div className="flex-1" />
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Input
              type="search"
              placeholder={language === 'ko' ? "검색..." : "Search..."}
              className="w-64"
            />
            <Button size="icon" variant="ghost">
              <Search className="h-5 w-5" />
            </Button>
          </div>
          <Link href="/notifications">
            <Button size="icon" variant="ghost">
              <Bell className="h-5 w-5" />
            </Button>
          </Link>
          <UserMenu />
        </div>
      </div>
    </div>
  )
}

