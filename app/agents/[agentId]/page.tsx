'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useChat } from 'ai/react'
import { ChevronDown, Link2, FileText, Type } from 'lucide-react'
import Image from 'next/image'

export default function ViewAgentPage({ params }: { params: { agentId: string } }) {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(`<script src="https://widget.galichat/embed.js" chat-hash="${params.agentId}" defer></script>`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-6">
        {/* Left and Middle Sections */}
        <div className="space-y-8">
          {/* Hooray Section */}
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              Hooray! <span role="img" aria-label="celebration">🎉</span>
            </h1>
            <p className="text-gray-600">
              Your chat has been trained and is ready to amaze!
            </p>
          </div>

          {/* View AI Agent Section */}
          <div>
            <h2 className="text-xl font-semibold">View AI Agent</h2>
            <p className="text-gray-600 mb-4">
              Your AI Agent is ready to be viewed and shared with the world.
            </p>
            <div className="flex gap-2 mb-4">
              <Button variant="outline" onClick={handleCopy}>
                Copy Link
              </Button>
              <Button variant="default">View AI Agent</Button>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <pre className="text-sm text-gray-600 whitespace-pre-wrap">
                {`<script
src="https://widget.galichat/embed.js"
chat-hash="${params.agentId}"
defer
></script>`}
              </pre>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={handleCopy}
              >
                Copy Script
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              To copy the script, you just need to press the copy script button.
            </p>
          </div>

          {/* Test AI Agent Section */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Test AI Agent</h2>
            <p className="text-gray-600 mb-4">
              Experience the appearance and functionality of your AI Agent by testing it with various questions.
            </p>
            
            {/* Chat Interface */}
            <Card className="border shadow-sm">
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Gali Bot"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="font-medium">Gali Bot</span>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </div>
              
              <div className="h-[400px] overflow-y-auto p-4">
                <div className="bg-gray-100 rounded-lg p-3 inline-block max-w-[80%]">
                  Hello! How can I help you today?
                </div>
                <div className="text-xs text-gray-500 mt-1">1/1/2025, 4:05 AM</div>
                
                {messages.map(message => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
                  >
                    <div
                      className={`rounded-lg px-4 py-2 max-w-[80%] ${
                        message.role === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask me anything..."
                    className="flex-1"
                  />
                  <Button type="submit" className="rounded-full w-8 h-8 p-0 flex items-center justify-center">
                    ↑
                  </Button>
                </form>
                <div className="text-center text-xs text-gray-500 mt-2">
                  Powered by GaliChat
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Section - Training Data */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Training Data</h2>
            <p className="text-gray-600 mb-6">
              Configure every aspect of your chatbot to meet your specific needs.
            </p>
          </div>

          {/* Usage Stats */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link2 className="w-5 h-5 text-gray-500" />
                <span className="font-medium">Links</span>
              </div>
              <div className="text-xl font-semibold">
                2 <span className="text-gray-400 text-base font-normal">/ 50</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-gray-500" />
                <span className="font-medium">Files</span>
              </div>
              <div className="text-xl font-semibold">
                0 <span className="text-gray-400 text-base font-normal">/ 20</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Type className="w-5 h-5 text-gray-500" />
                <span className="font-medium">Characters</span>
              </div>
              <div className="text-xl font-semibold">
                13.1K <span className="text-gray-400 text-base font-normal">/ 10M</span>
              </div>
            </div>
          </div>

          {/* Need More Section */}
          <div className="border-t pt-6">
            <h3 className="font-medium mb-2">Need more?</h3>
            <p className="text-gray-500 text-sm mb-4">
              Add more links, files, and characters.
            </p>
            <Button variant="outline" className="w-full">
              UPGRADE
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

