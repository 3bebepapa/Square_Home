import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, FileText, Type, Link2 } from 'lucide-react'
import { useLanguage } from "@/contexts/language-context"

export function TrainingDataStats() {
  const { language } = useLanguage()

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">{language === 'ko' ? '학습 데이터' : 'Training Data'}</h2>
      <p className="text-sm text-muted-foreground mb-6">
        {language === 'ko' 
          ? 'AI 에이전트가 학습한 소스를 확인하세요.' 
          : 'Review the sources your AI Agent has been trained on.'}
      </p>
      
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{language === 'ko' ? '링크' : 'Links'}</CardTitle>
            <Link2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1/10</div>
            <p className="text-xs text-muted-foreground">{language === 'ko' ? '링크 수' : 'Number of Links'}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{language === 'ko' ? '파일' : 'Files'}</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">283/1000</div>
            <p className="text-xs text-muted-foreground">{language === 'ko' ? '입력 문서 및 파일' : 'Input Documents & Files'}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{language === 'ko' ? '문자' : 'Characters'}</CardTitle>
            <Type className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6,827</div>
            <p className="text-xs text-muted-foreground">{language === 'ko' ? '입력 데이터' : 'Input Data'}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{language === 'ko' ? 'AI 연합' : 'AI Federation'}</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">854</div>
            <p className="text-xs text-muted-foreground">{language === 'ko' ? '블록체인 데이터' : 'Blockchain Data'}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

