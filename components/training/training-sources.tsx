import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TrainingSources() {
  return (
    <Tabs defaultValue="website">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="website">웹사이트 링크</TabsTrigger>
        <TabsTrigger value="files">파일</TabsTrigger>
        <TabsTrigger value="text">텍스트</TabsTrigger>
      </TabsList>
      <TabsContent value="website">
        <div className="space-y-4">
          <Input placeholder="https://..." />
          <Button>크롤링</Button>
        </div>
      </TabsContent>
      <TabsContent value="files">
        <div className="border-2 border-dashed rounded-lg p-8 text-center">
          <p className="text-gray-600 mb-2">클릭하여 파일 업로드 또는 드래그 앤 드롭</p>
          <p className="text-gray-400 text-sm">.pdf, .doc, .docx, .csv 또는 .txt (최대 5MB)</p>
        </div>
      </TabsContent>
      <TabsContent value="text">
        <Textarea placeholder="여기에 텍스트를 입력하세요..." className="min-h-[200px]" />
      </TabsContent>
    </Tabs>
  )
}

