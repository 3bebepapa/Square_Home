import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const guides = [
  {
    title: "Getting Started with AIWorks",
    description: "Learn the basics of AIWorks and how to create your first AI agent.",
    link: "/beginners-guide/getting-started"
  },
  {
    title: "Understanding AI Agents",
    description: "Dive deep into what AI agents are and how they can benefit your business.",
    link: "/beginners-guide/understanding-ai-agents"
  },
  {
    title: "Training Your AI Agent",
    description: "Learn how to effectively train your AI agent for optimal performance.",
    link: "/beginners-guide/training-ai-agents"
  },
  {
    title: "SQA Tokens and Rewards",
    description: "Understand the SQA token system and how you can earn rewards.",
    link: "/beginners-guide/sqa-tokens-rewards"
  }
]

export default function BeginnersGuidePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Beginner's Guide to AIWorks</h1>
      <p className="text-lg text-gray-600 mb-8">
        Welcome to AIWorks! This guide will help you get started with our platform and understand how to make the most of AI agents and SQA tokens.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {guides.map((guide, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{guide.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{guide.description}</p>
              <Link href={guide.link}>
                <Button variant="outline" className="w-full">
                  Read More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
        <p className="text-gray-600 mb-4">
          If you can't find what you're looking for in our beginner's guide, check out our FAQ section or contact our support team.
        </p>
        <div className="flex space-x-4">
          <Link href="/faq">
            <Button variant="outline">Visit FAQ</Button>
          </Link>
          <Link href="/support">
            <Button>Contact Support</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

