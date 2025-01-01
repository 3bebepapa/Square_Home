"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MoreHorizontal } from 'lucide-react'
import { Button } from "@/components/ui/button"

const data = [
  { month: "Jan", reward: 20, contribution: 25, performance: 35 },
  { month: "Feb", reward: 30, contribution: 35, performance: 40 },
  { month: "Mar", reward: 45, contribution: 40, performance: 45 },
  { month: "Apr", reward: 55, contribution: 45, performance: 50 },
  { month: "May", reward: 50, contribution: 40, performance: 45 },
  { month: "Jun", reward: 45, contribution: 35, performance: 40 },
  { month: "Jul", reward: 60, contribution: 45, performance: 45 },
]

export function AnalyticsChart() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>AI Agent Analytics</CardTitle>
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="monthly">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="month" stroke="#888888" fontSize={12} />
              <YAxis stroke="#888888" fontSize={12} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="reward"
                stroke="#4ade80"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="contribution"
                stroke="#60a5fa"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="performance"
                stroke="#f97316"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

