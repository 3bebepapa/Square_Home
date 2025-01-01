import { SidebarNav } from "./sidebar-nav"
import { TopNav } from "./top-nav"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:block w-64 border-r">
        <SidebarNav className="fixed top-0 bottom-0 w-64" />
      </div>
      <div className="flex-1">
        <TopNav />
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

