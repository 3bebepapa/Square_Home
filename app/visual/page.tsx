import { ThemeSettings } from "@/components/visual/theme-settings"

export default function VisualPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">시각적 모습</h1>
      <p className="text-sm text-muted-foreground mb-8">
        AI 에이전트의 UI/UX를 커스터마이즈합니다.
      </p>
      <ThemeSettings />
    </div>
  )
}

