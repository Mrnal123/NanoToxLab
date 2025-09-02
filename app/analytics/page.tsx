"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart3, TrendingUp, Users, FlaskConical, Activity, Target, Zap, Database } from "lucide-react"
import { Sidebar } from "../dashboard/sidebar"
import { Header } from "../dashboard/header"
import { DashboardFooter } from "../dashboard/footer"

export default function AnalyticsPage() {
  const simulationStats = [
    { name: "Total Simulations", value: "2,847", change: "+12%", icon: FlaskConical },
    { name: "Active Users", value: "1,234", change: "+8%", icon: Users },
    { name: "Success Rate", value: "94.2%", change: "+2.1%", icon: Target },
    { name: "Avg. Processing Time", value: "3.2s", change: "-15%", icon: Zap },
  ]

  const toxicityData = [
    { compound: "Carbon Nanotubes", toxicity: 85, samples: 342 },
    { compound: "Silver Nanoparticles", toxicity: 72, samples: 298 },
    { compound: "Titanium Dioxide", toxicity: 45, samples: 267 },
    { compound: "Zinc Oxide", toxicity: 38, samples: 189 },
    { compound: "Graphene Oxide", toxicity: 91, samples: 156 },
  ]

  const recentAnalytics = [
    { id: 1, type: "Cytotoxicity", compound: "CNT-COOH", result: "High Risk", confidence: 94 },
    { id: 2, type: "Genotoxicity", compound: "Ag-NPs", result: "Medium Risk", confidence: 87 },
    { id: 3, type: "Oxidative Stress", compound: "TiO2", result: "Low Risk", confidence: 92 },
    { id: 4, type: "Inflammation", compound: "ZnO", result: "Low Risk", confidence: 89 },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Header />
          <main className="p-6 space-y-8">
            {/* Page Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Analytics Dashboard
                </h1>
                <p className="text-muted-foreground mt-2">
                  Comprehensive insights into nanotoxicity simulations and research data
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="bg-primary/10">
                  <Activity className="w-3 h-3 mr-1" />
                  Live Data
                </Badge>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {simulationStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">{stat.name}</CardTitle>
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-muted-foreground">
                        <span className={stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                          {stat.change}
                        </span>
                        {' '}from last month
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Analytics Tabs */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="toxicity">Toxicity Analysis</TabsTrigger>
                <TabsTrigger value="trends">Trends</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Simulation Performance */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BarChart3 className="w-5 h-5 mr-2" />
                        Simulation Performance
                      </CardTitle>
                      <CardDescription>
                        Monthly simulation statistics and performance metrics
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Completed Simulations</span>
                          <span className="text-sm text-muted-foreground">2,847</span>
                        </div>
                        <Progress value={85} className="h-2" />
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Success Rate</span>
                          <span className="text-sm text-muted-foreground">94.2%</span>
                        </div>
                        <Progress value={94} className="h-2" />
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Average Processing Time</span>
                          <span className="text-sm text-muted-foreground">3.2s</span>
                        </div>
                        <Progress value={78} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Analytics */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Database className="w-5 h-5 mr-2" />
                        Recent Analytics
                      </CardTitle>
                      <CardDescription>
                        Latest toxicity analysis results
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentAnalytics.map((item) => (
                          <div key={item.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                            <div>
                              <p className="font-medium text-sm">{item.type}</p>
                              <p className="text-xs text-muted-foreground">{item.compound}</p>
                            </div>
                            <div className="text-right">
                              <Badge 
                                variant={item.result === 'High Risk' ? 'destructive' : 
                                        item.result === 'Medium Risk' ? 'secondary' : 'default'}
                                className="text-xs"
                              >
                                {item.result}
                              </Badge>
                              <p className="text-xs text-muted-foreground mt-1">{item.confidence}% confidence</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="toxicity" className="space-y-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle>Toxicity Analysis by Compound</CardTitle>
                    <CardDescription>
                      Comparative toxicity levels across different nanomaterials
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {toxicityData.map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{item.compound}</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-muted-foreground">{item.samples} samples</span>
                              <Badge 
                                variant={item.toxicity > 80 ? 'destructive' : 
                                        item.toxicity > 60 ? 'secondary' : 'default'}
                              >
                                {item.toxicity}% toxic
                              </Badge>
                            </div>
                          </div>
                          <Progress value={item.toxicity} className="h-3" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="trends" className="space-y-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Research Trends
                    </CardTitle>
                    <CardDescription>
                      Emerging patterns in nanotoxicity research
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-muted/50">
                        <h4 className="font-medium mb-2">Increasing Focus on Carbon-Based Nanomaterials</h4>
                        <p className="text-sm text-muted-foreground">
                          Research activity for carbon nanotubes and graphene oxide has increased by 45% this quarter.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/50">
                        <h4 className="font-medium mb-2">Improved Prediction Accuracy</h4>
                        <p className="text-sm text-muted-foreground">
                          Machine learning models show 12% improvement in toxicity prediction accuracy.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/50">
                        <h4 className="font-medium mb-2">Faster Processing Times</h4>
                        <p className="text-sm text-muted-foreground">
                          Average simulation time reduced by 28% due to algorithm optimizations.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reports" className="space-y-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle>Generated Reports</CardTitle>
                    <CardDescription>
                      Download comprehensive analysis reports
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "Monthly Toxicity Report", date: "January 2024", size: "2.4 MB" },
                        { name: "Quarterly Research Summary", date: "Q4 2023", size: "5.1 MB" },
                        { name: "Annual Analytics Overview", date: "2023", size: "12.8 MB" },
                      ].map((report, index) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                          <div>
                            <p className="font-medium">{report.name}</p>
                            <p className="text-sm text-muted-foreground">{report.date} • {report.size}</p>
                          </div>
                          <Button variant="outline" size="sm" className="hover:bg-primary/10">
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
          <DashboardFooter />
        </div>
      </div>
    </div>
  )
}