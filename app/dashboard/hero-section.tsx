"use client"

import { Button } from "@/components/ui/button"
import { Play, Plus } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 p-8">
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold font-mono">
              Advanced Nano
              <br />
              <span className="text-primary">materials Simulation</span>
              <br />
              Platform
            </h1>
            <p className="text-muted-foreground max-w-md">
              Harness the power of AI to simulate and analyze nano-drug interactions with unprecedented accuracy and
              efficiency.
            </p>
            <div className="flex space-x-4">
              <Button className="animate-pulse-glow">
                <Plus className="w-4 h-4 mr-2" />
                New Simulation
              </Button>
              <Button variant="outline" className="border-primary/30 hover:bg-primary/10 bg-transparent">
                <Play className="w-4 h-4 mr-2" />
                View Tutorial
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="w-64 h-64 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-full animate-spin-reverse"></div>
              <div className="absolute inset-8 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
