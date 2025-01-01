import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDownRight, ArrowUpRight, Clock, Wallet } from 'lucide-react'

const transactions = [
  {
    id: 1,
    type: 'earned',
    amount: 245,
    description: 'Earned from AI Agent interactions',
    date: '2024-01-01 14:30',
  },
  {
    id: 2,
    type: 'spent',
    amount: 100,
    description: 'Spent on model training',
    date: '2024-01-01 12:15',
  },
  {
    id: 3,
    type: 'refunded',
    amount: 50,
    description: 'Refunded from unused credits',
    date: '2024-01-01 10:00',
  },
]

export default function SQAPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">SQA Management</h1>
        <p className="text-gray-500">Track your SQA tokens and transaction history</p>
      </div>

      <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Total Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="rounded-full p-2 bg-purple-100">
                    <Wallet className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">124,854 SQA</p>
                    <p className="text-sm text-gray-500">≈ $12,485.40 USD</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Earned</span>
                    <span className="text-green-600">+1,245 SQA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Spent</span>
                    <span className="text-red-600">-245 SQA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Refunded</span>
                    <span className="text-blue-600">+50 SQA</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="earned">Earned</TabsTrigger>
                  <TabsTrigger value="spent">Spent</TabsTrigger>
                  <TabsTrigger value="refunded">Refunded</TabsTrigger>
                </TabsList>
                <div className="mt-4 space-y-4">
                  {transactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-4 rounded-lg border"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`rounded-full p-2 ${
                          transaction.type === 'earned' ? 'bg-green-100' :
                          transaction.type === 'spent' ? 'bg-red-100' : 'bg-blue-100'
                        }`}>
                          {transaction.type === 'earned' ? (
                            <ArrowUpRight className={`w-4 h-4 text-green-600`} />
                          ) : transaction.type === 'spent' ? (
                            <ArrowDownRight className={`w-4 h-4 text-red-600`} />
                          ) : (
                            <Clock className={`w-4 h-4 text-blue-600`} />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <p className="text-sm text-gray-500">{transaction.date}</p>
                        </div>
                      </div>
                      <div className={`font-medium ${
                        transaction.type === 'earned' ? 'text-green-600' :
                        transaction.type === 'spent' ? 'text-red-600' : 'text-blue-600'
                      }`}>
                        {transaction.type === 'spent' ? '-' : '+'}
                        {transaction.amount} SQA
                      </div>
                    </div>
                  ))}
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full" variant="outline">
                Buy SQA Tokens
              </Button>
              <Button className="w-full" variant="outline">
                Transfer SQA
              </Button>
              <Button className="w-full" variant="outline">
                Connect Wallet
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SQA Price</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Current Price</span>
                  <span className="font-medium">$0.10 USD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">24h Change</span>
                  <span className="text-green-600">+5.2%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

