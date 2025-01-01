'use client'

import { StatsCard } from "@/components/dashboard/stats-card"
import { AnalyticsChart } from "@/components/dashboard/analytics-chart"
import { RewardChart } from "@/components/dashboard/reward-chart"
import { TrainingDataStats } from "@/components/analytics/training-data-stats"
import { Bot, MessageSquare, Users2, Wallet } from 'lucide-react'
import { useLanguage } from "@/contexts/language-context"

export default function AnalyticsPage() {
  const { language } = useLanguage()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">{language === 'ko' ? '분석' : 'Analytics'}</h1>
        <p className="text-sm text-muted-foreground">
          {language === 'ko' 
            ? 'AI 에이전트의 통계와 성능 지표를 확인하세요.' 
            : 'View statistics and performance metrics for your AI agents.'}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title={language === 'ko' ? "총 AI 에이전트" : "Total AI Agents"}
          value="1/10"
          description={language === 'ko' ? "생성된 AI 에이전트 수" : "Number of AI Agents created"}
          icon={<Bot className="h-4 w-4 text-blue-500" />}
        />
        <StatsCard
          title={language === 'ko' ? "총 메시지" : "Total Messages"}
          value="283/1000"
          description={language === 'ko' ? "이번 달 사용된 메시지" : "Messages used this month"}
          icon={<MessageSquare className="h-4 w-4 text-green-500" />}
        />
        <StatsCard
          title={language === 'ko' ? "총 리드" : "Total Leads"}
          value="6,827"
          description={language === 'ko' ? "캡처된 리드 수" : "Number of leads captured"}
          icon={<Users2 className="h-4 w-4 text-orange-500" />}
        />
        <StatsCard
          title={language === 'ko' ? "SQA 환불" : "SQA Refunded"}
          value="124,854"
          description={language === 'ko' ? "이번 주" : "This week"}
          icon={<Wallet className="h-4 w-4 text-purple-500" />}
          trend={{
            value: "720",
            label: language === 'ko' ? "+1.51% 이번 주" : "+1.51% this week"
          }}
        />
      </div>
      
      <TrainingDataStats />

      <div className="grid gap-4 md:grid-cols-7">
        <div className="col-span-5">
          <AnalyticsChart />
        </div>
        <div className="col-span-2">
          <RewardChart />
        </div>
      </div>
    </div>
  )
}

