'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Bot, BarChart3, MessageSquare, Users2, FileText, Palette, Code, Puzzle, HelpCircle, Settings, LogOut } from 'lucide-react'

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarNav({ className, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  const navigationItems = [
    { title: "My AI Agents", href: "/", icon: Bot, isMain: true },
    { title: "View AI Agent", href: "/agents/square-bot/view", icon: Bot },
    { title: "Analytics", href: "/analytics", icon: BarChart3, badge: "4" },
    { title: "Messages", href: "/messages", icon: MessageSquare, badge: "2" },
    { title: "Leads", href: "/leads", icon: Users2 },
    { title: "Training Sources", href: "/training", icon: FileText },
    { title: "Visual Look", href: "/visual", icon: Palette },
    { title: "Embedded", href: "/embedded", icon: Code },
    { title: "Add-ons", href: "/addons", icon: Puzzle },
    { title: "Discover", href: "/discover", icon: HelpCircle, badge: "7" },
    { title: "Settings", href: "/settings", icon: Settings },
  ]

  return (
    <div className={cn("pb-12", className)} {...props}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <Link href="/" className="flex items-center mb-14">
            <div className="bg-blue-500 text-white p-2 rounded">
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
            <span className="ml-2 text-xl font-bold text-blue-500">AIWORKS</span>
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
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start text-gray-500 gap-2">
              <MessageSquare className="h-4 w-4" />
              Contact us
            </Button>
            <Button variant="ghost" className="w-full justify-start text-red-500 gap-2">
              <LogOut className="h-4 w-4" />
              Log out
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

