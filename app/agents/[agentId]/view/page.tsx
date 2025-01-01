'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useChat } from 'ai/react'
import { ChevronDown, Link2, FileText, Type } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from "@/contexts/language-context"

export default function ViewAgentPage({ params }: { params: { agentId: string } }) {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  const [copied, setCopied] = useState(false)
  const { language } = useLanguage()

  const handleCopy = () => {
    navigator.clipboard.writeText(`<script src="https://widget.galichat/embed.js" chat-hash="${params.agentId}" defer></script>`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-6">
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              {language === 'ko' ? '환영합니다!' : 'Hooray!'} <span role="img" aria-label="celebration">🎉</span>
            </h1>
            <p className="text-muted-foreground">
              {language === 'ko' 
                ? 'AI 에이전트가 학습을 완료했습니다!' 
                : 'Your chat has been trained and is ready to amaze!'}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">
              {language === 'ko' ? 'AI 에이전트 보기' : 'View AI Agent'}
            </h2>
            <p className="text-muted-foreground mb-4">
              {language === 'ko'
                ? 'AI 에이전트를 확인하고 공유할 준비가 되었습니다.'
                : 'Your AI Agent is ready to be viewed and shared with the world.'}
            </p>
            <div className="flex gap-2 mb-4">
              <Button variant="outline" onClick={handleCopy}>
                {language === 'ko' ? '링크 복사' : 'Copy Link'}
              </Button>
              <Button variant="default">
                {language === 'ko' ? 'AI 에이전트 보기' : 'View AI Agent'}
              </Button>
            </div>
            <Card className="bg-card">
              <CardContent className="p-4">
                <pre className="text-sm text-card-foreground font-mono whitespace-pre-wrap bg-muted p-4 rounded-lg">
                  {`<script
src="https://widget.galichat/embed.js"
chat-hash="${params.agentId}"
defer
></script>`}
                </pre>
                <Button 
                  variant="outline" 
                  className="mt-4 w-full"
                  onClick={handleCopy}
                >
                  {language === 'ko' ? '스크립트 복사' : 'Copy Script'}
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  {language === 'ko'
                    ? '스크립트를 복사하려면 위 버튼을 클릭하세요.'
                    : 'To copy the script, you just need to press the copy script button.'}
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="overflow-hidden">
            <div className="p-4 border-b bg-card flex items-center justify-between">
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
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </div>
            
            <div className="h-[400px] overflow-y-auto p-4 bg-background">
              <div className="bg-muted rounded-lg p-3 inline-block max-w-[80%]">
                {language === 'ko' 
                  ? '안녕하세요! 어떻게 도와드릴까요?' 
                  : 'Hello! How can I help you today?'}
              </div>
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t bg-card">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder={language === 'ko' ? '무엇이든 물어보세요...' : 'Ask me anything...'}
                  className="flex-1"
                />
                <Button type="submit" variant="default">
                  {language === 'ko' ? '전송' : 'Send'}
                </Button>
              </form>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">
                {language === 'ko' ? '사용량 통계' : 'Usage Stats'}
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2">
                    <Link2 className="w-5 h-5 text-muted-foreground" />
                    <span>{language === 'ko' ? '링크' : 'Links'}</span>
                  </div>
                  <div className="text-xl font-semibold">
                    2 <span className="text-muted-foreground text-base font-normal">/ 50</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-muted-foreground" />
                    <span>{language === 'ko' ? '파일' : 'Files'}</span>
                  </div>
                  <div className="text-xl font-semibold">
                    0 <span className="text-muted-foreground text-base font-normal">/ 20</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2">
                    <Type className="w-5 h-5 text-muted-foreground" />
                    <span>{language === 'ko' ? '문자' : 'Characters'}</span>
                  </div>
                  <div className="text-xl font-semibold">
                    13.1K <span className="text-muted-foreground text-base font-normal">/ 10M</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

