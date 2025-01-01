import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Download, Clock, ArrowUpRight, Wallet, Plus } from 'lucide-react'
import { WalletConnect } from "@/components/wallet/wallet-connect"
import { PaymentMethods } from "@/components/billing/payment-methods"
import { SQABalance } from "@/components/billing/sqa-balance"

export default function BillingPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">결제 및 구독</h1>
        <p className="text-gray-500">구독 및 결제 정보를 관리하세요</p>
      </div>

      <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>현재 플랜</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">프로 플랜</h3>
                  <p className="text-gray-500">$29/월</p>
                </div>
                <Button>플랜 변경</Button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>AI 에이전트 사용량</span>
                    <span>3/10</span>
                  </div>
                  <Progress value={30} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>월간 메시지</span>
                    <span>2,831/10,000</span>
                  </div>
                  <Progress value={28} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="payment-methods">
            <TabsList>
              <TabsTrigger value="payment-methods">결제 수단</TabsTrigger>
              <TabsTrigger value="invoices">청구 내역</TabsTrigger>
            </TabsList>
            
            <TabsContent value="payment-methods">
              <PaymentMethods />
            </TabsContent>
            
            <TabsContent value="invoices" className="space-y-4">
              {[1, 2, 3].map((invoice) => (
                <Card key={invoice}>
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full p-2 bg-gray-100">
                        <CreditCard className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium">청구서 #{invoice}</p>
                        <p className="text-sm text-gray-500">2024년 12월 1일</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-medium">$29.00</span>
                      <Button variant="ghost" size="icon">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <SQABalance />

          <Card>
            <CardHeader>
              <CardTitle>사용 요약</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>현재 기간</span>
                </div>
                <span>12월 1일 - 12월 31일</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>다음 결제</span>
                </div>
                <span>$29.00</span>
              </div>
            </CardContent>
          </Card>

          <WalletConnect />
        </div>
      </div>
    </div>
  )
}

