import { TrainingSources } from "@/components/training/training-sources"

export default function TrainingPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">학습 소스</h1>
      <p className="text-sm text-muted-foreground mb-8">
        AI 에이전트의 학습 데이터를 추가하고 관리합니다.
      </p>
      <TrainingSources />
    </div>
  )
}

