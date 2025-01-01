'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CreateAgentContent() {
  const [activeTab, setActiveTab] = useState('website')

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Create your AI Agent</h2>
      <p className="text-gray-600 mb-6">Here you can add the sources that your AI Agent will be trained on.</p>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="website">Website Links</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="text">Text</TabsTrigger>
        </TabsList>
        <TabsContent value="website">
          <div className="space-y-4">
            <Input placeholder="https://..." />
            <Button>Crawl</Button>
          </div>
        </TabsContent>
        <TabsContent value="files">
          <div className="border-2 border-dashed rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-2">Click to upload files or Drag & Drop</p>
            <p className="text-gray-400 text-sm">.pdf, .doc, .docx, .csv or .txt (max. 5MB)</p>
          </div>
        </TabsContent>
        <TabsContent value="text">
          <Textarea placeholder="Write your text here..." className="min-h-[200px]" />
        </TabsContent>
      </Tabs>

      <div className="mt-6">
        <Button className="w-full">Create & Train Bot</Button>
      </div>
    </div>
  )
}

