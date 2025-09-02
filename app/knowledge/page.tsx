"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Search, Download, ExternalLink, FileText, Video, Users, Calendar, Star, Filter } from "lucide-react"
import { Sidebar } from "../dashboard/sidebar"
import { Header } from "../dashboard/header"
import { DashboardFooter } from "../dashboard/footer"
import Link from "next/link"

export default function KnowledgeHubPage() {
  const featuredArticles = [
    {
      id: 1,
      title: "Advanced Machine Learning Approaches for Nanotoxicity Prediction",
      authors: "Dr. Sarah Chen, Prof. Michael Rodriguez",
      journal: "Nature Nanotechnology",
      date: "2024-01-15",
      category: "Research",
      readTime: "12 min",
      downloads: 1247,
      rating: 4.8,
      abstract: "This comprehensive study explores novel machine learning algorithms for predicting nanotoxicity with unprecedented accuracy..."
    },
    {
      id: 2,
      title: "Carbon Nanotube Toxicity: Mechanisms and Mitigation Strategies",
      authors: "Dr. James Wilson, Dr. Lisa Park",
      journal: "Toxicological Sciences",
      date: "2024-01-10",
      category: "Review",
      readTime: "18 min",
      downloads: 892,
      rating: 4.6,
      abstract: "An in-depth analysis of carbon nanotube toxicity mechanisms and potential strategies for reducing harmful effects..."
    },
    {
      id: 3,
      title: "Regulatory Guidelines for Nanomaterial Safety Assessment",
      authors: "FDA Nanotechnology Task Force",
      journal: "Regulatory Affairs",
      date: "2024-01-08",
      category: "Guidelines",
      readTime: "25 min",
      downloads: 2156,
      rating: 4.9,
      abstract: "Updated regulatory framework for assessing the safety of nanomaterials in consumer products and medical applications..."
    }
  ]

  const tutorials = [
    {
      id: 1,
      title: "Getting Started with NanoToxLab Platform",
      type: "Video",
      duration: "15 min",
      level: "Beginner",
      views: 3421
    },
    {
      id: 2,
      title: "Advanced Simulation Parameters",
      type: "Documentation",
      duration: "8 min read",
      level: "Advanced",
      views: 1876
    },
    {
      id: 3,
      title: "Interpreting Toxicity Results",
      type: "Interactive Guide",
      duration: "12 min",
      level: "Intermediate",
      views: 2543
    }
  ]

  const researchTopics = [
    { name: "Carbon Nanotubes", count: 156, trending: true },
    { name: "Silver Nanoparticles", count: 134, trending: false },
    { name: "Quantum Dots", count: 98, trending: true },
    { name: "Graphene Oxide", count: 87, trending: false },
    { name: "Titanium Dioxide", count: 76, trending: false },
    { name: "Zinc Oxide", count: 65, trending: true }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "International Nanotoxicology Conference 2024",
      date: "March 15-17, 2024",
      location: "Boston, MA",
      type: "Conference"
    },
    {
      id: 2,
      title: "Webinar: AI in Toxicity Prediction",
      date: "February 28, 2024",
      location: "Online",
      type: "Webinar"
    },
    {
      id: 3,
      title: "Workshop: Regulatory Compliance for Nanomaterials",
      date: "March 5, 2024",
      location: "Washington, DC",
      type: "Workshop"
    }
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
                  Knowledge Hub
                </h1>
                <p className="text-muted-foreground mt-2">
                  Comprehensive resources, research articles, and educational materials for nanotoxicology
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button>
                  <BookOpen className="w-4 h-4 mr-2" />
                  Submit Article
                </Button>
              </div>
            </div>

            {/* Search Bar */}
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input 
                      placeholder="Search articles, tutorials, guidelines..."
                      className="pl-10"
                    />
                  </div>
                  <Button>
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Knowledge Hub Tabs */}
            <Tabs defaultValue="articles" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="articles">Research Articles</TabsTrigger>
                <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
                <TabsTrigger value="topics">Research Topics</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>

              <TabsContent value="articles" className="space-y-6">
                <div className="grid gap-6">
                  {featuredArticles.map((article) => (
                    <Card key={article.id} className="border-primary/20 hover:border-primary/40 transition-colors">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge variant="outline">{article.category}</Badge>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                                {article.rating}
                              </div>
                            </div>
                            <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                            <CardDescription className="text-sm">
                              By {article.authors} • {article.journal} • {article.date}
                            </CardDescription>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{article.abstract}</p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-4">
                            <span>{article.readTime} read</span>
                            <span>{article.downloads} downloads</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            Read More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="tutorials" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tutorials.map((tutorial) => (
                    <Card key={tutorial.id} className="border-primary/20 hover:border-primary/40 transition-colors">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{tutorial.type}</Badge>
                          <Badge variant={tutorial.level === 'Beginner' ? 'default' : 
                                        tutorial.level === 'Intermediate' ? 'secondary' : 'destructive'}>
                            {tutorial.level}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <span>{tutorial.duration}</span>
                          <div className="flex items-center">
                            <Users className="w-3 h-3 mr-1" />
                            {tutorial.views} views
                          </div>
                        </div>
                        <Button className="w-full">
                          {tutorial.type === 'Video' ? (
                            <><Video className="w-4 h-4 mr-2" />Watch Tutorial</>
                          ) : (
                            <><FileText className="w-4 h-4 mr-2" />Read Guide</>
                          )}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="guidelines" className="space-y-6">
                <div className="grid gap-6">
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle>Regulatory Guidelines</CardTitle>
                      <CardDescription>
                        Official guidelines and standards for nanomaterial safety assessment
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { title: "FDA Guidance for Industry: Safety of Nanomaterials", org: "FDA", updated: "2024-01-15" },
                          { title: "OECD Guidelines for Testing of Chemicals", org: "OECD", updated: "2023-12-20" },
                          { title: "ISO/TS 80004 Nanotechnologies Vocabulary", org: "ISO", updated: "2023-11-30" },
                          { title: "EPA Nanomaterial Research Strategy", org: "EPA", updated: "2023-10-15" }
                        ].map((guideline, index) => (
                          <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-primary/20">
                            <div>
                              <p className="font-medium">{guideline.title}</p>
                              <p className="text-sm text-muted-foreground">{guideline.org} • Updated {guideline.updated}</p>
                            </div>
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="topics" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle>Popular Research Topics</CardTitle>
                      <CardDescription>
                        Most researched nanomaterials and their toxicity profiles
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {researchTopics.map((topic, index) => (
                          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">{topic.name}</span>
                              {topic.trending && (
                                <Badge variant="destructive" className="text-xs">
                                  Trending
                                </Badge>
                              )}
                            </div>
                            <span className="text-sm text-muted-foreground">{topic.count} articles</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle>Research Collaboration</CardTitle>
                      <CardDescription>
                        Connect with researchers and institutions worldwide
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-muted/50">
                          <h4 className="font-medium mb-2">Active Collaborations</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Join ongoing research projects and share your expertise
                          </p>
                          <Button size="sm" className="w-full">
                            View Projects
                          </Button>
                        </div>
                        <div className="p-4 rounded-lg bg-muted/50">
                          <h4 className="font-medium mb-2">Expert Network</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Connect with leading researchers in nanotoxicology
                          </p>
                          <Button size="sm" variant="outline" className="w-full">
                            Browse Experts
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="events" className="space-y-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Upcoming Events
                    </CardTitle>
                    <CardDescription>
                      Conferences, webinars, and workshops in nanotoxicology
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div key={event.id} className="flex items-center justify-between p-4 rounded-lg border border-primary/20">
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <Badge variant="outline">{event.type}</Badge>
                            </div>
                            <p className="font-medium">{event.title}</p>
                            <p className="text-sm text-muted-foreground">{event.date} • {event.location}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              Learn More
                            </Button>
                            <Button size="sm">
                              Register
                            </Button>
                          </div>
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