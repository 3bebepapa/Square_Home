import { StatsCard } from "@/components/dashboard/stats-card"
import { GuideCard } from "@/components/guide-card"
import { AgentCard } from "@/components/dashboard/agent-card"
import { Bot, MessageSquare, Users2, RefreshCw } from 'lucide-react'
import { CreateAgentModal } from "@/components/create-agent/create-agent-modal"
import { Dialog } from "@/components/ui/dialog"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  const [showCreateAgent, setShowCreateAgent] = useState(false)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Welcome Jason X</h1>
        <p className="text-gray-500">
          Here is the information about all your AI agents
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total AI Agents"
          value="1/10"
          description="Number of AI Agents created."
          icon={<Bot className="h-4 w-4 text-blue-500" />}
        />
        <StatsCard
          title="Total Messages"
          value="283/1000"
          description="Consumed messages this month."
          icon={<MessageSquare className="h-4 w-4 text-green-500" />}
        />
        <StatsCard
          title="Total Leads"
          value="6,827"
          description="Number of leads captured."
          icon={<Users2 className="h-4 w-4 text-orange-500" />}
        />
        <StatsCard
          title="SQA Refunded"
          value="124,854"
          description="This week"
          icon={<RefreshCw className="h-4 w-4 text-purple-500" />}
          trend={{
            value: "720",
            label: "+1.51% this week"
          }}
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Build your AI Agent</h2>
          <select className="text-sm border rounded-md px-2 py-1">
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Button
            variant="outline"
            className="h-auto aspect-[4/3] bg-gradient-to-br from-purple-600 to-pink-600 border-0 p-6 flex flex-col items-center justify-center gap-4 text-white hover:from-purple-700 hover:to-pink-700"
            onClick={() => setShowCreateAgent(true)}
          >
            <div className="rounded-full bg-white/20 p-3">
              <Bot className="h-6 w-6" />
            </div>
            <span className="text-lg font-medium">Create AI Agent</span>
          </Button>

          <Link href="/agents/square-bot/view">
            <Button
              variant="outline"
              className="w-full h-auto aspect-[4/3] border-2 p-6 flex flex-col items-center justify-center gap-4 hover:bg-gray-50"
          >
            <div className="rounded-full bg-gray-100 p-3">
              <Bot className="h-6 w-6 text-gray-500" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-1">Square Bot</h3>
              <p className="text-sm text-gray-500">ID: ewbr64y9jebk8ssch8gp4</p>
              <p className="text-sm text-gray-500">Created: 12/06/2024</p>
            </div>
          </Button>
        </Link>

        <div className="border-2 border-dashed rounded-xl aspect-[4/3]" />
      </div>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      <GuideCard
        title="Our Beginner's Guide"
        description="Get started with AIWorks. Learn how to create and manage your AI agents effectively."
        actionLabel="Start Learning"
        href="/beginners-guide"
      />
      <GuideCard
        title="FAQ Section"
        description="Find answers to common questions about AIWorks, AI agents, and SQA tokens."
        actionLabel="View FAQs"
        href="/faq"
      />
      <GuideCard
        title="SQA Whitepaper"
        description="Dive deep into the Square project, AIWorks platform, and SQA token ecosystem."
        actionLabel="Read Whitepaper"
        href="/sqa-whitepaper"
      />
    </div>

    {showCreateAgent && (
      <CreateAgentModal onClose={() => setShowCreateAgent(false)} />
    )}
  </div>
)
}

