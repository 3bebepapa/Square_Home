import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const addons = [
  { id: 1, name: "다국어 지원", description: "AI 에이전트에 다국어 지원 기능을 추가합니다." },
  { id: 2, name: "음성 인식", description: "음성 명령을 통해 AI 에이전트와 상호작용할 수 있습니다." },
  { id: 3, name: "이미지 분석", description: "AI 에이전트가 이미지를 분석하고 설명할 수 있습니다." },
]

export default function AddonsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">애드온</h1>
      <p className="text-sm text-muted-foreground mb-8">
        AI 에이전트의 추가 기능을 관리합니다.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {addons.map((addon) => (
          <Card key={addon.id}>
            <CardHeader>
              <CardTitle>{addon.name}</CardTitle>
              <CardDescription>{addon.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline">설치</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

