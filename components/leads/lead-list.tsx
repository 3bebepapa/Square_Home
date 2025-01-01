import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

const leads = [
  { id: 1, name: "김철수", email: "chulsoo@example.com", status: "활성" },
  { id: 2, name: "이영희", email: "younghee@example.com", status: "비활성" },
  { id: 3, name: "박민준", email: "minjun@example.com", status: "활성" },
]

export function LeadList() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>이름</TableHead>
            <TableHead>이메일</TableHead>
            <TableHead>상태</TableHead>
            <TableHead>작업</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell>{lead.name}</TableCell>
              <TableCell>{lead.email}</TableCell>
              <TableCell>{lead.status}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">상세 보기</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 flex justify-end">
        <Button>
          <Download className="w-4 h-4 mr-2" />
          리드 내보내기
        </Button>
      </div>
    </div>
  )
}

