"use client"

import { useEffect, useState } from "react"

interface PreloaderProps {
  onComplete?: () => void
  duration?: number
}

export default function Preloader({ onComplete, duration = 3000 }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log("[v0] Preloader started, duration:", duration)

    const timer = setTimeout(() => {
      console.log("[v0] Preloader finishing...")
      setIsLoading(false)
      // Start fade out animation
      setTimeout(() => {
        setIsVisible(false)
        onComplete?.()
        console.log("[v0] Preloader completed")
      }, 500) // Allow fade out animation to complete
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onComplete])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Animated molecular background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-float blur-sm" />
        <div
          className="absolute top-1/3 right-1/4 w-6 h-6 bg-secondary/40 rounded-full animate-float blur-sm"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent/50 rounded-full animate-float blur-sm"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-primary/25 rounded-full animate-float blur-sm"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Orbiting particles around center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-64 h-64">
            {/* Orbit ring 1 */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2 shadow-lg shadow-primary/50" />
              <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-secondary rounded-full -translate-x-1/2 shadow-lg shadow-secondary/50" />
            </div>

            {/* Orbit ring 2 */}
            <div
              className="absolute inset-4 animate-spin-slow"
              style={{ animationDirection: "reverse", animationDuration: "12s" }}
            >
              <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-accent rounded-full -translate-x-1/2 shadow-md shadow-accent/50" />
              <div className="absolute right-0 top-1/2 w-1.5 h-1.5 bg-primary rounded-full -translate-y-1/2 shadow-md shadow-primary/50" />
              <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-secondary rounded-full -translate-x-1/2 shadow-md shadow-secondary/50" />
              <div className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-accent rounded-full -translate-y-1/2 shadow-md shadow-accent/50" />
            </div>

            {/* Orbit ring 3 */}
            <div className="absolute inset-8 animate-spin-slow" style={{ animationDuration: "6s" }}>
              <div className="absolute top-0 left-1/2 w-1 h-1 bg-primary/80 rounded-full -translate-x-1/2" />
              <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-secondary/80 rounded-full" />
              <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-accent/80 rounded-full" />
              <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-primary/80 rounded-full -translate-x-1/2" />
              <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-secondary/80 rounded-full" />
              <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-accent/80 rounded-full" />
            </div>
          </div>
        </div>

        {/* Drifting particles */}
        <div className="absolute top-1/6 left-1/6 w-2 h-2 bg-primary/20 rounded-full animate-particle-drift" />
        <div
          className="absolute top-2/3 right-1/5 w-1.5 h-1.5 bg-secondary/30 rounded-full animate-particle-drift"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute bottom-1/5 left-2/3 w-1 h-1 bg-accent/40 rounded-full animate-particle-drift"
          style={{ animationDelay: "6s" }}
        />
      </div>

      {/* Central logo and text */}
      <div className="relative z-10 text-center">
        {/* Pulsing logo container */}
        <div className="mb-8 animate-pulse-glow">
          <div className="relative mx-auto w-24 h-24 mb-6">
            {/* Central molecular structure */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-primary rounded-full shadow-lg shadow-primary/50 animate-pulse" />
            </div>

            {/* Surrounding atoms */}
            <div className="absolute top-0 left-1/2 w-4 h-4 bg-secondary rounded-full -translate-x-1/2 shadow-md shadow-secondary/50" />
            <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 shadow-md shadow-accent/50" />
            <div className="absolute left-0 top-1/2 w-4 h-4 bg-primary/80 rounded-full -translate-y-1/2 shadow-md shadow-primary/40" />
            <div className="absolute right-0 top-1/2 w-4 h-4 bg-secondary/80 rounded-full -translate-y-1/2 shadow-md shadow-secondary/40" />

            {/* Connecting lines */}
            <div className="absolute top-1/2 left-1/2 w-0.5 h-12 bg-gradient-to-b from-secondary to-accent -translate-x-1/2 -translate-y-1/2 opacity-60" />
            <div className="absolute top-1/2 left-1/2 w-12 h-0.5 bg-gradient-to-r from-primary to-secondary -translate-x-1/2 -translate-y-1/2 opacity-60" />
          </div>
        </div>

        {/* Logo text */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold font-orbitron text-primary animate-pulse">NanoToxLab</h1>
          <p className="text-lg text-muted-foreground animate-fade-in-up">AI Virtual Lab</p>

          {/* Loading indicator */}
          <div className="mt-6 flex items-center justify-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
              <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
            </div>
            <span className="text-sm text-muted-foreground ml-3">Loading...</span>
          </div>
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(101, 163, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(101, 163, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </div>
  )
}
