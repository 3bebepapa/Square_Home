import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const popularAgents = [
  { id: 1, name: "고객 서비스 봇", description: "24/7 고객 지원을 제공하는 AI 에이전트" },
  { id: 2, name: "영업 지원 AI", description: "영업 프로세스를 자동화하고 최적화하는 AI 에이전트" },
  { id: 3, name: "데이터 분석 봇", description: "복잡한 데이터를 분석하고 인사이트를 제공하는 AI 에이전트" },
]

export default function DiscoverPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">탐색</h1>
      <p className="text-sm text-muted-foreground mb-8">
        인기 있는 AI 에이전트를 탐색하고 커뮤니티와 연결하세요.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {popularAgents.map((agent) => (
          <Card key={agent.id}>
            <CardHeader>
              <CardTitle>{agent.name}</CardTitle>
              <CardDescription>{agent.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline">자세히 보기</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

