import { MessageList } from "@/components/messages/message-list"

export default function MessagesPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">메시지</h1>
      <p className="text-sm text-muted-foreground mb-8">
        AI 에이전트의 메시지 기록을 확인하고 관리합니다.
      </p>
      <MessageList />
    </div>
  )
}

