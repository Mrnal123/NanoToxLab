"use client"

import { Sidebar } from "@/app/dashboard/sidebar"
import { Header } from "@/app/dashboard/header"
import { DashboardFooter } from "@/app/dashboard/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, TrendingUp, Download, Share2, RotateCcw, Beaker, Activity, Target, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

const drugReleaseData = [
  { time: 0, release: 0 },
  { time: 2, release: 25 },
  { time: 6, release: 45 },
  { time: 12, release: 68 },
  { time: 24, release: 85 },
  { time: 48, release: 95 },
  { time: 72, release: 98 },
]

const toxicityComparisonData = [
  { category: "Cytotoxicity", current: 15, standard: 30 },
  { category: "Genotoxicity", current: 8, standard: 25 },
  { category: "Hemolysis", current: 35, standard: 40 },
  { category: "Oxidative Stress", current: 12, standard: 35 },
]

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Header />
          <main className="p-6 space-y-8">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <Link href="/dashboard">
                    <Button
                      variant="outline"
                      className="border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Dashboard
                    </Button>
                  </Link>
                  <div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                      Simulation Results
                    </h1>
                    <p className="text-muted-foreground text-lg">Analysis complete for 0D Nanoparticle simulation</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="border-border/50 bg-transparent hover:bg-primary/10 transition-all duration-300"
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary/30 bg-primary/5 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Results
                  </Button>
                  <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    New Simulation
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card className="border-green-500/30 bg-green-500/10 hover:bg-green-500/15 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-green-500/20">
                        <CheckCircle className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Drug Delivery Efficiency</p>
                        <p className="text-2xl font-bold text-green-400">92.5%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/15 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-blue-500/20">
                        <Beaker className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Toxicity Score</p>
                        <p className="text-2xl font-bold text-blue-400">2.1/10</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/15 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-purple-500/20">
                        <Target className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Off-target Effects</p>
                        <p className="text-2xl font-bold text-purple-400">Low Risk</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/15 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-cyan-500/20">
                        <Activity className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Release Rate</p>
                        <p className="text-2xl font-bold text-cyan-400">Optimal</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Drug Release Chart */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/60 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Activity className="h-5 w-5" />
                      Drug Release Over Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={drugReleaseData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                          <XAxis dataKey="time" stroke="#9CA3AF" />
                          <YAxis stroke="#9CA3AF" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#1F2937",
                              border: "1px solid #374151",
                              borderRadius: "8px",
                            }}
                          />
                          <Line
                            type="monotone"
                            dataKey="release"
                            stroke="#3B82F6"
                            strokeWidth={3}
                            dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Toxicity Comparison Chart */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/60 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Beaker className="h-5 w-5" />
                      Toxicity Comparison
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={toxicityComparisonData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                          <XAxis dataKey="category" stroke="#9CA3AF" />
                          <YAxis stroke="#9CA3AF" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#1F2937",
                              border: "1px solid #374151",
                              borderRadius: "8px",
                            }}
                          />
                          <Bar dataKey="current" fill="#10B981" name="Current Sample" />
                          <Bar dataKey="standard" fill="#6B7280" name="Safety Standard" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/60 transition-all duration-300 lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Target className="h-5 w-5" />
                      Nanomaterial Visualization
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse"></div>
                      <div className="text-center z-10">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center animate-spin-slow">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/50 to-secondary/50 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse"></div>
                          </div>
                        </div>
                        <p className="text-lg font-semibold text-primary mb-2">0D Nanoparticle</p>
                        <p className="text-sm text-muted-foreground">Interactive 3D Model</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Simulation Parameters */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/60 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-primary">Simulation Parameters</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Concentration</span>
                        <span className="text-sm font-medium">50 μg/mL</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Temperature</span>
                        <span className="text-sm font-medium">37°C</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">pH Level</span>
                        <span className="text-sm font-medium">7.4</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Drug Loading</span>
                        <span className="text-sm font-medium">15%</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-sm text-muted-foreground mb-2">Test Types:</p>
                      <div className="space-y-1">
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400 mr-2">
                          Toxicity Prediction
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 mr-2">
                          Drug Release
                        </Badge>
                        <Badge variant="secondary" className="bg-purple-500/20 text-purple-400">
                          Off-target Effects
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed Results */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Toxicity Analysis */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Beaker className="h-5 w-5" />
                      Toxicity Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Cytotoxicity</span>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                          Low (15%)
                        </Badge>
                      </div>
                      <Progress value={15} className="h-2" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Genotoxicity</span>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                          Low (8%)
                        </Badge>
                      </div>
                      <Progress value={8} className="h-2" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Hemolysis</span>
                        <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400">
                          Moderate (35%)
                        </Badge>
                      </div>
                      <Progress value={35} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                {/* Drug Release Profile */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Activity className="h-5 w-5" />
                      Drug Release Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="h-48 bg-muted/20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <TrendingUp className="h-12 w-12 text-primary mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Release curve visualization</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Initial Release</p>
                        <p className="font-semibold">25% in 2h</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Sustained Release</p>
                        <p className="font-semibold">75% in 24h</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Off-target Effects */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Target className="h-5 w-5" />
                      Off-target Effects Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-4 rounded-lg bg-muted/20">
                        <div className="text-2xl font-bold text-green-500 mb-1">92%</div>
                        <p className="text-sm text-muted-foreground">Target Specificity</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/20">
                        <div className="text-2xl font-bold text-yellow-500 mb-1">3</div>
                        <p className="text-sm text-muted-foreground">Potential Interactions</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/20">
                        <div className="text-2xl font-bold text-primary mb-1">Low</div>
                        <p className="text-sm text-muted-foreground">Risk Assessment</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
          <DashboardFooter />
        </div>
      </div>
    </div>
  )
}
