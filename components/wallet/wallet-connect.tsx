"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wallet } from 'lucide-react'
import { useState } from "react"

export function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)

  const handleConnect = async () => {
    setIsConnecting(true)
    // Implement wallet connection logic here
    setTimeout(() => {
      setIsConnected(true)
      setIsConnecting(false)
    }, 1000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>지갑 연결</CardTitle>
      </CardHeader>
      <CardContent>
        {isConnected ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wallet className="w-4 h-4" />
                <span className="font-medium">연결됨</span>
              </div>
              <span className="text-sm text-gray-500">0x1234...5678</span>
            </div>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setIsConnected(false)}
            >
              연결 해제
            </Button>
          </div>
        ) : (
          <Button 
            className="w-full" 
            onClick={handleConnect}
            disabled={isConnecting}
          >
            {isConnecting ? "연결 중..." : "지갑 연결하기"}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

