import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'

interface AgentCardProps {
  title: string
  id: string
  createdDate: string
  onCreateClick: () => void
}

export function AgentCard({ title, id, createdDate, onCreateClick }: AgentCardProps) {
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600" />
      <CardContent className="relative p-6">
        <div className="aspect-[4/3] flex flex-col items-center justify-center text-white">
          <div className="rounded-full bg-white/20 p-3 mb-4">
            <Plus className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-white/80 mb-1">ID: {id}</p>
          <p className="text-sm text-white/80 mb-4">Created: {createdDate}</p>
          <Button 
            variant="secondary" 
            className="bg-white text-purple-600 hover:bg-white/90"
            onClick={onCreateClick}
          >
            Create AI Agent
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

