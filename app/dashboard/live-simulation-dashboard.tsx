"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, RotateCcw } from "lucide-react"

export function LiveSimulationDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-background/50 border-primary/20">
        <CardHeader>
          <CardTitle className="font-mono">Live Simulation Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="w-32 h-32 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary/60 to-primary/60 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Nanoparticle Visualization</p>
                <p className="text-sm text-muted-foreground">Real-time molecular dynamics</p>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  <Play className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Pause className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-background/50 border-primary/20">
        <CardHeader>
          <CardTitle className="font-mono">Simulation Parameters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">Temperature</label>
                <span className="text-sm text-primary">298K</span>
              </div>
              <Slider defaultValue={[298]} max={400} min={200} step={1} className="w-full" />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">Pressure</label>
                <span className="text-sm text-primary">1.0 atm</span>
              </div>
              <Slider defaultValue={[1]} max={5} min={0.1} step={0.1} className="w-full" />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">pH Level</label>
                <span className="text-sm text-primary">7.4</span>
              </div>
              <Slider defaultValue={[7.4]} max={14} min={0} step={0.1} className="w-full" />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">Ionic Strength</label>
                <span className="text-sm text-primary">0.15 M</span>
              </div>
              <Slider defaultValue={[0.15]} max={1} min={0} step={0.01} className="w-full" />
            </div>

            <div className="pt-4">
              <Button className="w-full animate-pulse-glow">Apply Parameters</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
