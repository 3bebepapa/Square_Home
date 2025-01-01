"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CreditCard, Settings, Monitor, Sun, Moon, Languages, Check } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

export function UserMenu() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2 px-2 py-1.5">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              width={32}
              height={32}
              className="rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-0.5"
              alt="Profile"
            />
            <div className="flex flex-col items-start">
              <span className="text-sm">jonharuya@gmail.com</span>
              <span className="text-xs text-emerald-500">Premium</span>
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/settings" className="w-full">
              <Settings className="mr-2 h-4 w-4" />
              {language === 'ko' ? '설정' : 'Settings'}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/billing" className="w-full flex items-center">
              <CreditCard className="mr-2 h-4 w-4" />
              {language === 'ko' ? '결제' : 'Billing'}
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            {language === 'ko' ? '환경설정' : 'Preferences'}
          </DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setTheme('light')} className={cn("flex items-center", theme === 'light' && "bg-accent text-accent-foreground")}>
            <Sun className="mr-2 h-4 w-4" />
            {language === 'ko' ? '라이트' : 'Light'}
            {theme === 'light' && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')} className={cn("flex items-center", theme === 'dark' && "bg-accent text-accent-foreground")}>
            <Moon className="mr-2 h-4 w-4" />
            {language === 'ko' ? '다크' : 'Dark'}
            {theme === 'dark' && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')} className={cn("flex items-center", theme === 'system' && "bg-accent text-accent-foreground")}>
            <Monitor className="mr-2 h-4 w-4" />
            {language === 'ko' ? '시스템' : 'System'}
            {theme === 'system' && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            {language === 'ko' ? '언어' : 'Language'}
          </DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setLanguage('ko')} className={cn("flex items-center", language === 'ko' && "bg-accent text-accent-foreground")}>
            <Languages className="mr-2 h-4 w-4" />
            한국어
            {language === 'ko' && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLanguage('en')} className={cn("flex items-center", language === 'en' && "bg-accent text-accent-foreground")}>
            <Languages className="mr-2 h-4 w-4" />
            English
            {language === 'en' && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600">
          {language === 'ko' ? '로그아웃' : 'Sign Out'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

