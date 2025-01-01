'use client'

import { useState } from 'react'
import { CreateAgentHeader } from "@/components/create-agent-header"
import { SourceTabs } from "@/components/source-tabs"
import { UsageOverview } from "@/components/usage-overview"
import { SidebarNav } from "@/components/sidebar-nav"
import { AIAgentsList } from "@/components/ai-agents-list"
import { Button } from "@/components/ui/button"

export default function AIAgentsPage() {
  const [view, setView] = useState<'list' | 'create'>('list')

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:block w-64 border-r">
        <SidebarNav className="fixed top-0 bottom-0 w-64" />
      </div>
      <div className="flex-1">
        <CreateAgentHeader />
        
        <main className="p-8">
          {view === 'list' ? (
            <>
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-semibold">My AI Agents</h1>
                <Button onClick={() => setView('create')}>Create AI Agent</Button>
              </div>
              <AIAgentsList />
            </>
          ) : (
            <>
              <div className="mb-8">
                <h1 className="text-2xl font-semibold mb-2">
                  Create your AI Agent <span className="text-gray-400">- step 1/3</span>
                </h1>
                <p className="text-gray-500">
                  Here you can add the sources that your AI Agent will be trained on.
                </p>
              </div>

              <div className="flex gap-8">
                <SourceTabs />
                <UsageOverview links={0} files={0} characters={0} />
              </div>
            </>
          )}
        </main>

        <footer className="py-6 text-center text-sm text-gray-500">
          Copyright © 2025 Gali Chat. Made with ❤️ for better Customer Experience.
        </footer>
      </div>
    </div>
  )
}

