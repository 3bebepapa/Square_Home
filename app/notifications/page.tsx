import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, Settings, Mail, MessageSquare, Bot, AlertCircle } from 'lucide-react'
import Link from 'next/link'

const notifications = [
  {
    id: 1,
    title: "New AI Agent Training Complete",
    description: "Your AI agent 'Customer Support Bot' has completed training.",
    time: "2 hours ago",
    icon: Bot,
    type: "success"
  },
  {
    id: 2,
    title: "SQA Refund Processed",
    description: "Your SQA refund of 245 tokens has been processed.",
    time: "5 hours ago",
    icon: AlertCircle,
    type: "info"
  },
  {
    id: 3,
    title: "New Message Received",
    description: "You have a new message from a customer.",
    time: "1 day ago",
    icon: MessageSquare,
    type: "default"
  }
]

export default function NotificationsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Notifications</h1>
          <p className="text-gray-500">Manage your notification preferences and view updates</p>
        </div>
        <Link href="/account">
          <Button variant="outline" className="gap-2">
            <Settings className="w-4 h-4" />
            계정 설정
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card key={notification.id}>
              <CardContent className="flex items-start gap-4 p-4">
                <div className={`rounded-full p-2 ${
                  notification.type === 'success' ? 'bg-green-100' :
                  notification.type === 'info' ? 'bg-blue-100' : 'bg-gray-100'
                }`}>
                  <notification.icon className={`w-4 h-4 ${
                    notification.type === 'success' ? 'text-green-600' :
                    notification.type === 'info' ? 'text-blue-600' : 'text-gray-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{notification.title}</h3>
                  <p className="text-sm text-gray-500">{notification.description}</p>
                  <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                </div>
                <Button variant="ghost" size="sm">Mark as read</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Email Notifications</span>
                </div>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  <span>Push Notifications</span>
                </div>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                Mark all as read
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Clear all notifications
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

