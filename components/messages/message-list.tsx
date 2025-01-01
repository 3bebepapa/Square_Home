import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, User, Download } from 'lucide-react'

const messages = [
  { id: 1, user: "사용자1", content: "안녕하세요, 제품에 대해 문의하고 싶습니다.", time: "10:30 AM" },
  { id: 2, user: "AI 에이전트", content: "네, 안녕하세요. 어떤 제품에 대해 알고 싶으신가요?", time: "10:31 AM" },
  { id: 3, user: "사용자1", content: "최신 스마트폰 모델에 대해 알고 싶습니다.", time: "10:32 AM" },
]

export function MessageList() {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <Card key={message.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              {message.user === "AI 에이전트" ? <MessageSquare className="w-4 h-4 mr-2" /> : <User className="w-4 h-4 mr-2" />}
              {message.user}
            </CardTitle>
            <span className="text-xs text-muted-foreground">{message.time}</span>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{message.content}</p>
          </CardContent>
        </Card>
      ))}
      <div className="flex justify-end">
        <Button>
          <Download className="w-4 h-4 mr-2" />
          대화 내보내기
        </Button>
      </div>
    </div>
  )
}

