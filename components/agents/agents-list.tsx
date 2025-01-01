import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, MessageSquare, Users2 } from 'lucide-react'

const agents = [
  { id: 1, name: "고객 지원 봇", messages: 2400, users: 1200 },
  { id: 2, name: "영업 지원 봇", messages: 1800, users: 900 },
  { id: 3, name: "제품 추천 봇", messages: 3200, users: 1600 },
]

export function AgentsList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {agents.map((agent) => (
        <Card key={agent.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{agent.name}</CardTitle>
            <Bot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mt-2">
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-1 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{agent.messages}</span>
                </div>
                <div className="flex items-center">
                  <Users2 className="w-4 h-4 mr-1 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{agent.users}</span>
                </div>
              </div>
              <Button variant="ghost" size="sm">관리</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

