import { LeadList } from "@/components/leads/lead-list"

export default function LeadsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">리드</h1>
      <p className="text-sm text-muted-foreground mb-8">
        리드 데이터를 관리하고 내보냅니다.
      </p>
      <LeadList />
    </div>
  )
}

