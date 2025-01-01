import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'

interface AgentCardProps {
  onCreateClick: () => void
}

export function AgentCard({ onCreateClick }: AgentCardProps) {
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600" />
      <CardContent className="relative p-6">
        <div className="aspect-video flex flex-col items-center justify-center text-white">
          <div className="rounded-full bg-white/20 p-3 mb-4">
            <Plus className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">AI 에이전트 생성</h3>
          <p className="text-sm text-white/80 mb-4">ID: ewbr64y9jebk8ssch8gp4</p>
          <p className="text-sm text-white/80 mb-4">생성일: 2024/06/12</p>
          <Button 
            variant="secondary" 
            className="bg-white text-purple-600 hover:bg-white/90"
            onClick={onCreateClick}
          >
            AI 에이전트 생성
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

