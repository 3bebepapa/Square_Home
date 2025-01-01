'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useChat } from 'ai/react'
import { ChevronDown, Link2, FileText, Type } from 'lucide-react'
import Image from 'next/image'

export default function AgentsPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(`<script src="https://widget.galichat/embed.js" chat-hash="square-bot" defer></script>`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-[1200px] mx-auto space-y-8">
        {/* Training Data Section */}
        <div className="bg-white rounded-xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-2">Training Data</h2>
          <p className="text-gray-600 mb-6">
            Configure every aspect of your chatbot to meet your specific needs.
          </p>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Link2 className="w-5 h-5 text-gray-500" />
                <div>
                  <span className="font-medium">Links</span>
                </div>
              </div>
              <div className="text-xl font-semibold">
                2 <span className="text-gray-400 text-base font-normal">/ 50</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-gray-500" />
                <div>
                  <span className="font-medium">Files</span>
                </div>
              </div>
              <div className="text-xl font-semibold">
                0 <span className="text-gray-400 text-base font-normal">/ 20</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Type className="w-5 h-5 text-gray-500" />
                <div>
                  <span className="font-medium">Characters</span>
                </div>
              </div>
              <div className="text-xl font-semibold">
                13.1K <span className="text-gray-400 text-base font-normal">/ 10M</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Test AI Agent */}
          <div className="bg-white rounded-xl border shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-2">Test AI Agent</h2>
            <p className="text-gray-600 mb-6">
              Experience the appearance and functionality of your AI Agent by testing it with various questions.
            </p>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="p-4 border-b flex items-center justify-between bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Square Bot"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="font-medium">Square Bot</span>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </div>
              
              <div className="h-[300px] overflow-y-auto p-4">
                <div className="bg-gray-100 rounded-lg p-3 inline-block max-w-[80%]">
                  Hello! How can I help you today?
                </div>
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
              
              <div className="p-4 border-t bg-white">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask me anything..."
                    className="flex-1"
                  />
                  <Button type="submit">Send</Button>
                </form>
              </div>
            </div>
          </div>

          {/* View AI Agent */}
          <div className="bg-white rounded-xl border shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-2">View AI Agent</h2>
            <p className="text-gray-600 mb-6">
              Your AI Agent is ready to be viewed and shared with the world.
            </p>
            
            <div className="flex gap-2 mb-6">
              <Button variant="outline" onClick={handleCopy}>
                Copy Link
              </Button>
              <Button variant="default">View AI Agent</Button>
            </div>

            <div className="font-mono text-sm bg-gray-50 p-4 rounded-lg mb-4">
              <pre className="whitespace-pre-wrap text-gray-600">
{`<script
src="https://widget.galichat/embed.js"
chat-hash="square-bot"
defer
></script>`}
              </pre>
            </div>

            <Button 
              variant="outline" 
              className="w-full"
              onClick={handleCopy}
            >
              Copy Script
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

