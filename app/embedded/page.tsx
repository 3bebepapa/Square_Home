import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function EmbeddedPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">임베디드</h1>
      <p className="text-sm text-muted-foreground mb-8">
        AI 에이전트를 웹사이트에 임베드하기 위한 코드를 얻습니다.
      </p>
      <Textarea 
        className="mb-4" 
        rows={5} 
        value="<script src='https://aiworks.com/embed.js'></script>"
        readOnly
      />
      <Button>코드 복사</Button>
    </div>
  )
}

