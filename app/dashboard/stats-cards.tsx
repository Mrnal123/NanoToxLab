"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

export function StatsCards() {
  const stats = [
    {
      value: "201",
      label: "Total Simulations",
      change: "+12%",
      trend: "up",
    },
    {
      value: "234",
      label: "Active Projects",
      change: "+8%",
      trend: "up",
    },
    {
      value: "14",
      label: "Research Papers",
      change: "+2",
      trend: "up",
    },
    {
      value: "99.2",
      label: "Accuracy Rate",
      change: "+0.3%",
      trend: "up",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-background/50 border-primary/20 hover:border-primary/40 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold font-mono text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
              <div className="flex items-center space-x-1 text-green-400">
                {stat.trend === "up" ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                <span className="text-sm">{stat.change}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
