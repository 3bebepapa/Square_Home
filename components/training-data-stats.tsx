import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, FileText, Type, Coins } from 'lucide-react'

export function TrainingDataStats() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Training Data</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Here you can check the sources that your AI Agent is trained on.
      </p>
      
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Links</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1/10</div>
            <p className="text-xs text-muted-foreground">Number of Links.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Files</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">283/1000</div>
            <p className="text-xs text-muted-foreground">Input Document & Files</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Characters</CardTitle>
            <Type className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6,827</div>
            <p className="text-xs text-muted-foreground">Input Data</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Federate</CardTitle>
            <Coins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">854</div>
            <p className="text-xs text-muted-foreground">Blockchain Data</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

