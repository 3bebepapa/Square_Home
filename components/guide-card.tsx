import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface GuideCardProps {
  title: string
  description: string
  actionLabel: string
  href: string
}

export function GuideCard({ title, description, actionLabel, href }: GuideCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-4">{description}</p>
        <Link href={href}>
          <Button variant="ghost" className="px-0 text-blue-500 hover:text-blue-600">
            {actionLabel}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

