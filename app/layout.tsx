import "@/styles/globals.css"
import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils"
import { SidebarNav } from "@/components/layout/sidebar-nav"
import { TopNav } from "@/components/layout/top-nav"
import { Footer } from "@/components/layout/footer"
import { ThemeProvider } from "@/contexts/theme-context"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex min-h-screen">
              <SidebarNav className="hidden lg:block w-64 border-r" />
              <div className="flex-1 flex flex-col">
                <TopNav />
                <main className="flex-1 p-8">
                  {children}
                </main>
                <Footer />
              </div>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

