'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CreateAgentContentProps {
  onClose: () => void
}

export function CreateAgentContent({ onClose }: CreateAgentContentProps) {
  const [activeTab, setActiveTab] = useState('website')

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">AI 에이전트 생성</h2>
        <Button variant="ghost" onClick={onClose}>X</Button>
      </div>
      <p className="text-gray-600 mb-6">AI 에이전트를 학습시킬 소스를 추가하세요.</p>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="website">웹사이트 링크</TabsTrigger>
          <TabsTrigger value="files">파일</TabsTrigger>
          <TabsTrigger value="text">텍스트</TabsTrigger>
        </TabsList>
        <TabsContent value="website">
          <div className="space-y-4">
            <Input placeholder="https://..." />
            <Button>크롤링</Button>
          </div>
        </TabsContent>
        <TabsContent value="files">
          <div className="border-2 border-dashed rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-2">클릭하여 파일 업로드 또는 드래그 앤 드롭</p>
            <p className="text-gray-400 text-sm">.pdf, .doc, .docx, .csv 또는 .txt (최대 5MB)</p>
          </div>
        </TabsContent>
        <TabsContent value="text">
          <Textarea placeholder="여기에 텍스트를 입력하세요..." className="min-h-[200px]" />
        </TabsContent>
      </Tabs>

      <div className="mt-6">
        <Button className="w-full">AI 에이전트 생성 및 학습</Button>
      </div>
    </div>
  )
}

