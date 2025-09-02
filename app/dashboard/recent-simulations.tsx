"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Play } from "lucide-react"

export function RecentSimulations() {
  const simulations = [
    {
      name: "Gold Nanoparticles",
      type: "Toxicity Analysis",
      status: "Completed",
      progress: 100,
      time: "2h 34m",
    },
    {
      name: "Carbon Nanotubes",
      type: "Drug Release",
      status: "Running",
      progress: 67,
      time: "1h 12m",
    },
    {
      name: "Silver Nanowires",
      type: "Off-target Effects",
      status: "Queued",
      progress: 0,
      time: "Pending",
    },
  ]

  return (
    <Card className="bg-background/50 border-primary/20">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-mono">Recent Simulations</CardTitle>
        <Button variant="outline" size="sm" className="border-primary/30 bg-transparent">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {simulations.map((sim, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-lg bg-background/30 border border-primary/10"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg flex items-center justify-center">
                  <Play className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">{sim.name}</p>
                  <p className="text-sm text-muted-foreground">{sim.type}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Badge
                  variant={sim.status === "Completed" ? "default" : sim.status === "Running" ? "secondary" : "outline"}
                >
                  {sim.status}
                </Badge>
                <div className="text-right">
                  <p className="text-sm font-medium">{sim.progress}%</p>
                  <p className="text-xs text-muted-foreground">{sim.time}</p>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
