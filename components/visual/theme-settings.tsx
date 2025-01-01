import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"

export function ThemeSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-2">테마</h2>
        <RadioGroup defaultValue="light">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="light" id="light" />
            <Label htmlFor="light">라이트 모드</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="dark" id="dark" />
            <Label htmlFor="dark">다크 모드</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">색상</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="primary-color">주 색상</Label>
            <Input type="color" id="primary-color" />
          </div>
          <div>
            <Label htmlFor="secondary-color">보조 색상</Label>
            <Input type="color" id="secondary-color" />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">레이아웃</h2>
        <RadioGroup defaultValue="default">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="default-layout" />
            <Label htmlFor="default-layout">기본 레이아웃</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="compact-layout" />
            <Label htmlFor="compact-layout">컴팩트 레이아웃</Label>
          </div>
        </RadioGroup>
      </div>

      <Button>변경 사항 저장</Button>
    </div>
  )
}

