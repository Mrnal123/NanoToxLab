"use client"

import { Sidebar } from "./sidebar"
import { Header } from "./header"
import { HeroSection } from "./hero-section"
import { StatsCards } from "./stats-cards"
import { RecentSimulations } from "./recent-simulations"
import { LiveSimulationDashboard } from "./live-simulation-dashboard"
import { KnowledgeHub } from "./knowledge-hub"
import { DashboardFooter } from "./footer"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Header />
          <main className="p-6 space-y-8">
            <HeroSection />
            <StatsCards />
            <RecentSimulations />
            <LiveSimulationDashboard />
            <KnowledgeHub />
          </main>
          <DashboardFooter />
        </div>
      </div>
    </div>
  )
}
