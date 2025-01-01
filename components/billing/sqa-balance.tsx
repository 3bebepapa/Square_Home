"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wallet, ArrowUpRight, ArrowDownLeft } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function SQABalance() {
  const [showWithdraw, setShowWithdraw] = useState(false)
  
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>SQA 잔액</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="rounded-full p-2 bg-purple-100">
              <Wallet className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">124,854 SQA</p>
              <p className="text-sm text-gray-500">≈ $12,485.40 USD</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">이번 달 획득</span>
              <span className="text-green-500">+1,245 SQA</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">이번 달 사용</span>
              <span className="text-red-500">-245 SQA</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <Button variant="outline" className="w-full">
              <ArrowDownLeft className="w-4 h-4 mr-2" />
              충전
            </Button>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full" onClick={() => setShowWithdraw(true)}>
                <ArrowUpRight className="w-4 h-4 mr-2" />
                출금
              </Button>
            </DialogTrigger>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showWithdraw} onOpenChange={setShowWithdraw}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>SQA 출금</DialogTitle>
            <DialogDescription>
              출금할 SQA 수량을 입력하세요
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">수량</Label>
              <Input id="amount" placeholder="0 SQA" />
              <p className="text-sm text-gray-500">
                출금 가능: 124,854 SQA
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="wallet">지갑 주소</Label>
              <Input id="wallet" placeholder="0x..." />
            </div>
            <Button className="w-full">출금하기</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

