"use client"

import { Sidebar } from "@/app/dashboard/sidebar"
import { Header } from "@/app/dashboard/header"
import { SimulationForm } from "@/components/simulations/simulation-form"
import { DashboardFooter } from "@/app/dashboard/footer"

export default function SimulationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Header />
          <main className="p-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  Start a New Simulation
                </h1>
                <p className="text-muted-foreground text-lg">
                  Configure your nanomaterial simulation parameters and run advanced AI-powered analysis
                </p>
              </div>
              <SimulationForm />
            </div>
          </main>
          <DashboardFooter />
        </div>
      </div>
    </div>
  )
}
