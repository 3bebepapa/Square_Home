"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Plus } from 'lucide-react'
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

export function PaymentMethods() {
  const [showAddCard, setShowAddCard] = useState(false)

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full p-2 bg-gray-100">
                <CreditCard className="w-4 h-4" />
              </div>
              <div>
                <p className="font-medium">•••• 4242</p>
                <p className="text-sm text-gray-500">만료: 12/24</p>
              </div>
            </div>
            <Button variant="ghost">수정</Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showAddCard} onOpenChange={setShowAddCard}>
        <DialogTrigger asChild>
          <Button className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            결제 수단 추가
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>새 결제 수단 추가</DialogTitle>
            <DialogDescription>
              신용카드 또는 체크카드를 추가하세요
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="card-number">카드 번호</Label>
              <Input id="card-number" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">만료일</Label>
                <Input id="expiry" placeholder="MM/YY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" />
              </div>
            </div>
            <Button className="w-full">카드 추가</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

