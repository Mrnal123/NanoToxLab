"use client"

import { Button } from "@/components/ui/button"
import { MolecularBackground } from "@/components/molecular-background"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MolecularBackground />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono tracking-tight">
            <span className="block text-foreground">NanoToxLab</span>
            <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text animate-pulse-glow">
              AI-Powered Virtual Lab
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Revolutionary AI-powered virtual laboratory for safe nano-drug design and toxicity evaluation. Accelerate
            pharmaceutical research with cutting-edge molecular simulations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="text-lg px-8 py-6 animate-pulse-glow hover:scale-105 transition-transform duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Try Demo
            </Button>
            <Link href="/auth">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 bg-transparent"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40 pointer-events-none" />
    </section>
  )
}
