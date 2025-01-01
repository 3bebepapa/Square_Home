'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Copy, AlertTriangle } from 'lucide-react'

export default function SettingsPage() {
  const [vibe, setVibe] = useState('neutral')
  const [model, setModel] = useState('gpt-3.5')

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-[1000px]">
        <h1 className="text-2xl font-semibold mb-2">Settings</h1>
        <p className="text-gray-500 mb-6">
          Manage your AI Agent settings and details.
        </p>

        <Tabs defaultValue="general">
          <TabsList className="mb-6">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="danger">Danger Zone</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h2 className="text-sm font-medium mb-1">AI Agent Name</h2>
                  <p className="text-sm text-gray-500 mb-2">Only you can see this name</p>
                  <Input defaultValue="Gali Bot" />
                </div>

                <div>
                  <h2 className="text-sm font-medium mb-1">AI Agent ID</h2>
                  <p className="text-sm text-gray-500 mb-2">Unique Bot Identifier</p>
                  <div className="flex gap-2">
                    <Input defaultValue="ewbr64y9jebk8ssch8gp4" readOnly />
                    <Button variant="outline" size="icon">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <h2 className="text-sm font-medium mb-1">Vibe Response</h2>
                  <p className="text-sm text-gray-500 mb-4">Select the tonality of the answers</p>
                  <RadioGroup value={vibe} onValueChange={setVibe} className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="friendly" id="friendly" />
                      <Label htmlFor="friendly">Friendly</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="neutral" id="neutral" />
                      <Label htmlFor="neutral">Neutral</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="corporate" id="corporate" />
                      <Label htmlFor="corporate">Corporate</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-sm font-medium mb-1">Prompt</h2>
                  <p className="text-sm text-gray-500 mb-2">
                    Adaptive AI Agent roles. Transform your bot into an assistant or seller
                  </p>
                  <Textarea 
                    className="min-h-[150px]"
                    defaultValue="All the responses should be understood by general people. Respond with simple answers that have maxim 3-4 sentences and could be understood by general people."
                  />
                </div>

                <div>
                  <h2 className="text-sm font-medium mb-1">Model</h2>
                  <p className="text-sm text-gray-500 mb-4">Select the model to base on</p>
                  <RadioGroup value={model} onValueChange={setModel} className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="gpt-3.5" id="gpt-3.5" />
                      <Label htmlFor="gpt-3.5">GPT-3.5</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="gpt-4" id="gpt-4" disabled />
                      <Label htmlFor="gpt-4" className="text-gray-400">GPT-4 (Soon)</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="appearance">
            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-medium mb-2">Theme</h2>
                <div className="flex items-center space-x-4">
                  <RadioGroup defaultValue="light" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="light" id="light" />
                      <Label htmlFor="light">Light</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dark" id="dark" />
                      <Label htmlFor="dark">Dark</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="system" id="system" />
                      <Label htmlFor="system">System</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div>
                <h2 className="text-sm font-medium mb-2">Chat Bubble Position</h2>
                <RadioGroup defaultValue="right" className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="left" id="left" />
                    <Label htmlFor="left">Left</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="right" id="right" />
                    <Label htmlFor="right">Right</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notifications">
            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-medium mb-4">Email Notifications</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="new-chat">New Chat</Label>
                      <p className="text-sm text-gray-500">Get notified when a new chat starts</p>
                    </div>
                    <Switch id="new-chat" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="reports">Weekly Reports</Label>
                      <p className="text-sm text-gray-500">Receive weekly usage reports</p>
                    </div>
                    <Switch id="reports" />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="privacy">
            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-medium mb-4">Data Collection</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="analytics">Analytics</Label>
                      <p className="text-sm text-gray-500">Allow collection of usage data</p>
                    </div>
                    <Switch id="analytics" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="chat-history">Chat History</Label>
                      <p className="text-sm text-gray-500">Store chat history</p>
                    </div>
                    <Switch id="chat-history" />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="billing">
            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-medium mb-4">Current Plan</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Pro Plan</h3>
                        <p className="text-sm text-gray-500">$29/month</p>
                      </div>
                      <Button variant="outline">Change Plan</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="danger">
            <div className="space-y-6">
              <Card className="border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-red-500 mb-4">
                    <AlertTriangle className="w-5 h-5" />
                    <h3 className="font-medium">Danger Zone</h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    Once you delete your AI Agent, there is no going back. Please be certain.
                  </p>
                  <Button variant="destructive">Delete AI Agent</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  )
}

