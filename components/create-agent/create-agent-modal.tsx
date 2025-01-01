'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Globe, FileText, Type, Upload, Plus } from 'lucide-react'
import { cn } from "@/lib/utils"

interface CreateAgentModalProps {
  onClose: () => void
}

export function CreateAgentModal({ onClose }: CreateAgentModalProps) {
  const [activeSource, setActiveSource] = useState<'website' | 'files' | 'text'>('website')
  const [text, setText] = useState('')
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [manualLinks, setManualLinks] = useState<string[]>([''])

  const addManualLink = () => {
    setManualLinks([...manualLinks, ''])
  }

  const updateManualLink = (index: number, value: string) => {
    const newLinks = [...manualLinks]
    newLinks[index] = value
    setManualLinks(newLinks)
  }

  const sourceButtons = [
    {
      id: 'website',
      icon: <Globe className="w-5 h-5" />,
      title: 'Website Links',
      description: 'Crawl your website'
    },
    {
      id: 'files',
      icon: <FileText className="w-5 h-5" />,
      title: 'Files',
      description: 'Upload .pdf, .txt, .doc'
    },
    {
      id: 'text',
      icon: <Type className="w-5 h-5" />,
      title: 'Text',
      description: 'Write your own content'
    }
  ]

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button variant="secondary" className="w-full bg-white text-purple-600 hover:bg-white/90">
          AI 에이전트 생성
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">Create your AI Agent - step 1/3</h2>
          <p className="text-gray-500">
            Here you can add the sources that your AI Agent will be trained on.
          </p>
        </div>

        <div className="flex gap-6 p-6">
          <div className="flex-1">
            <div className="flex gap-4 mb-6">
              {sourceButtons.map((source) => (
                <button
                  key={source.id}
                  onClick={() => setActiveSource(source.id as any)}
                  className={cn(
                    "flex-1 p-4 rounded-lg text-left transition-colors",
                    activeSource === source.id 
                      ? "bg-gray-900 text-white" 
                      : "bg-gray-100 hover:bg-gray-200"
                  )}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {source.icon}
                    <span className="font-medium">{source.title}</span>
                  </div>
                  <p className="text-sm opacity-70">{source.description}</p>
                </button>
              ))}
            </div>

            {activeSource === 'website' && (
              <div className="space-y-6">
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Your Website</label>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="https://..." 
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                    />
                    <Button variant="secondary">Crawl</Button>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Add manual links</label>
                  <div className="space-y-2">
                    {manualLinks.map((link, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          placeholder="https://..."
                          value={link}
                          onChange={(e) => updateManualLink(index, e.target.value)}
                        />
                        {index === manualLinks.length - 1 && (
                          <Button variant="outline" size="icon" onClick={addManualLink}>
                            <Plus className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSource === 'files' && (
              <div className="border-2 border-dashed rounded-lg p-8 text-center">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-gray-600 mb-2">Click to upload files or Drag & Drop</p>
                  <p className="text-gray-400 text-sm">.pdf, .doc, .docx, .csv or .txt (max. 5MB)</p>
                </div>
              </div>
            )}

            {activeSource === 'text' && (
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  Write here any extra text that you consider relevant for your audience
                </p>
                <Textarea 
                  placeholder="Write your text here..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="min-h-[300px]"
                />
                <div className="text-sm text-gray-500">
                  Total Characters: {text.length}
                </div>
              </div>
            )}
          </div>

          <div className="w-[240px] shrink-0">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold mb-4">Usage Overview</h3>
              <div className="space-y-4">
                <UsageItem label="Links" current={manualLinks.filter(l => l).length} max={50} />
                <UsageItem label="Files" current={0} max={20} />
                <UsageItem label="Characters" current={text.length} max={10000000} />
              </div>
              <div className="mt-8 pt-4 border-t">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">Need more resources?</span>
                  <Button variant="outline" size="sm">
                    Upgrade+
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t p-6">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              {activeSource === 'website' && 'Initiate Training with Links:'}
              {activeSource === 'files' && 'Initiate Training with Files:'}
              {activeSource === 'text' && 'Initiate Training with a text:'}
            </div>
            <Button>Create Chat & Train</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function UsageItem({ label, current, max }: { label: string; current: number; max: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{current} /{max.toLocaleString()}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${Math.min((current / max) * 100, 100)}%` }}
        />
      </div>
    </div>
  )
}

