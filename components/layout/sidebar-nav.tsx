'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Bot, BarChart3, MessageSquare, Users2, FileText, Palette, Code, Puzzle, HelpCircle } from 'lucide-react'
import { useLanguage } from "@/contexts/language-context"

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarNav({ className, ...props }: SidebarNavProps) {
  const pathname = usePathname()
  const { language } = useLanguage()

  const navigationItems = [
    { 
      title: language === 'ko' ? "내 AI 에이전트" : "My AI Agents",
      href: "/",
      icon: Bot,
      isMain: true 
    },
    { 
      title: language === 'ko' ? "AI 에이전트 보기" : "View AI Agent",
      href: "/agents/square-bot/view",
      icon: Bot 
    },
    { 
      title: language === 'ko' ? "분석" : "Analytics",
      href: "/analytics",
      icon: BarChart3,
      badge: "4" 
    },
    { 
      title: language === 'ko' ? "메시지" : "Messages",
      href: "/messages",
      icon: MessageSquare,
      badge: "2" 
    },
    { 
      title: language === 'ko' ? "리드" : "Leads",
      href: "/leads",
      icon: Users2 
    },
    { 
      title: language === 'ko' ? "학습 소스" : "Training Sources",
      href: "/training",
      icon: FileText 
    },
    { 
      title: language === 'ko' ? "시각적 모습" : "Visual Look",
      href: "/visual",
      icon: Palette 
    },
    { 
      title: language === 'ko' ? "임베디드" : "Embedded",
      href: "/embedded",
      icon: Code 
    },
    { 
      title: language === 'ko' ? "애드온" : "Add-ons",
      href: "/addons",
      icon: Puzzle 
    },
    { 
      title: language === 'ko' ? "탐색" : "Discover",
      href: "/discover",
      icon: HelpCircle,
      badge: "7" 
    },
  ]

  return (
    <div className={cn("pb-12", className)} {...props}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <Link href="/" className="flex items-center mb-14">
            <div className="bg-background border text-foreground p-2 rounded">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="ml-2 text-xl font-bold text-foreground">AIWORKS</span>
          </Link>
          <div className="space-y-1">
            {navigationItems.map((item) => (
              <Link href={item.href} key={item.title}>
                <Button 
                  variant={pathname === item.href ? "secondary" : "ghost"} 
                  className={cn(
                    "w-full justify-start gap-2",
                    item.isMain && "text-blue-500"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                  {item.badge && (
                    <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

