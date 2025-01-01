import { Card, CardContent } from "@/components/ui/card"

interface StatsCardProps {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  trend?: {
    value: string
    label: string
  }
}

export function StatsCard({ title, value, description, icon, trend }: StatsCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-2">{title}</p>
            <h3 className="text-2xl font-bold mb-1">{value}</h3>
            <p className="text-sm text-gray-500">{description}</p>
            {trend && (
              <div className="flex items-center gap-1 mt-2 text-sm">
                <span className="text-green-500">↑</span>
                <span className="text-green-500">{trend.value}</span>
                <span className="text-gray-500">{trend.label}</span>
              </div>
            )}
          </div>
          <div className="rounded-lg bg-gray-50 p-2">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

