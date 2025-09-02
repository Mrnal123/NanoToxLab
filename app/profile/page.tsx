"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, MapPin, Calendar, Award, BookOpen, FlaskConical, TrendingUp, Edit, Camera, Download, Share2, Star } from "lucide-react"
import { Sidebar } from "../dashboard/sidebar"
import { Header } from "../dashboard/header"
import { DashboardFooter } from "../dashboard/footer"

export default function ProfilePage() {
  const userStats = [
    { label: "Simulations Run", value: "247", icon: FlaskConical },
    { label: "Research Papers", value: "12", icon: BookOpen },
    { label: "Citations", value: "89", icon: Award },
    { label: "Collaborations", value: "15", icon: User }
  ]

  const recentActivity = [
    {
      id: 1,
      type: "simulation",
      title: "Carbon Nanotube Toxicity Analysis",
      date: "2024-01-20",
      status: "completed"
    },
    {
      id: 2,
      type: "publication",
      title: "Novel Approaches to Nanoparticle Safety Assessment",
      date: "2024-01-18",
      status: "published"
    },
    {
      id: 3,
      type: "collaboration",
      title: "Joint Research with MIT Nanotechnology Lab",
      date: "2024-01-15",
      status: "active"
    },
    {
      id: 4,
      type: "simulation",
      title: "Silver Nanoparticle Cytotoxicity Study",
      date: "2024-01-12",
      status: "completed"
    }
  ]

  const achievements = [
    {
      id: 1,
      title: "First Simulation",
      description: "Completed your first nanotoxicity simulation",
      date: "2023-06-15",
      earned: true
    },
    {
      id: 2,
      title: "Research Pioneer",
      description: "Published 10 research papers",
      date: "2023-12-01",
      earned: true
    },
    {
      id: 3,
      title: "Collaboration Expert",
      description: "Participated in 10+ collaborative projects",
      date: "2024-01-10",
      earned: true
    },
    {
      id: 4,
      title: "Simulation Master",
      description: "Run 500+ simulations",
      date: null,
      earned: false
    }
  ]

  const publications = [
    {
      id: 1,
      title: "Machine Learning Approaches for Predicting Nanoparticle Toxicity",
      journal: "Nature Nanotechnology",
      year: "2024",
      citations: 23,
      coAuthors: ["Dr. Sarah Chen", "Prof. Michael Rodriguez"]
    },
    {
      id: 2,
      title: "Comparative Analysis of Carbon Nanotube Cytotoxicity",
      journal: "Toxicological Sciences",
      year: "2023",
      citations: 45,
      coAuthors: ["Dr. James Wilson", "Dr. Lisa Park"]
    },
    {
      id: 3,
      title: "Novel Biomarkers for Nanomaterial Safety Assessment",
      journal: "Environmental Health Perspectives",
      year: "2023",
      citations: 31,
      coAuthors: ["Prof. Anna Thompson"]
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Header />
          <main className="p-6 space-y-8">
            {/* Profile Header */}
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src="/placeholder-user.jpg" alt="Profile" />
                      <AvatarFallback className="text-2xl">JD</AvatarFallback>
                    </Avatar>
                    <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold">Dr. John Doe</h1>
                        <p className="text-lg text-muted-foreground">Senior Research Scientist</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline">
                          <Share2 className="w-4 h-4 mr-2" />
                          Share Profile
                        </Button>
                        <Button>
                          <Edit className="w-4 h-4 mr-2" />
                          Edit Profile
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Mail className="w-4 h-4 mr-2" />
                        john.doe@university.edu
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        Boston, MA
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        Joined June 2023
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Award className="w-4 h-4 mr-2" />
                        Verified Researcher
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Experienced nanotoxicologist specializing in machine learning applications for predicting 
                      nanomaterial safety. Research focus on carbon-based nanomaterials and their biological interactions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {userStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card key={index} className="border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                          <p className="text-2xl font-bold">{stat.value}</p>
                        </div>
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Profile Tabs */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="publications">Publications</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Research Interests */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle>Research Interests</CardTitle>
                      <CardDescription>
                        Areas of expertise and current research focus
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Nanotoxicology",
                          "Machine Learning",
                          "Carbon Nanotubes",
                          "Cytotoxicity",
                          "Risk Assessment",
                          "Biomarkers",
                          "Environmental Safety"
                        ].map((interest, index) => (
                          <Badge key={index} variant="secondary">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Current Projects */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle>Current Projects</CardTitle>
                      <CardDescription>
                        Active research and collaboration projects
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            name: "AI-Driven Toxicity Prediction",
                            progress: 75,
                            collaborators: 3
                          },
                          {
                            name: "Graphene Oxide Safety Study",
                            progress: 45,
                            collaborators: 5
                          },
                          {
                            name: "Regulatory Framework Development",
                            progress: 90,
                            collaborators: 8
                          }
                        ].map((project, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">{project.name}</span>
                              <span className="text-sm text-muted-foreground">
                                {project.collaborators} collaborators
                              </span>
                            </div>
                            <Progress value={project.progress} className="h-2" />
                            <p className="text-xs text-muted-foreground">{project.progress}% complete</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="activity" className="space-y-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Recent Activity
                    </CardTitle>
                    <CardDescription>
                      Your latest simulations, publications, and collaborations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-center space-x-4 p-4 rounded-lg border border-primary/20">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            {activity.type === 'simulation' && <FlaskConical className="w-5 h-5" />}
                            {activity.type === 'publication' && <BookOpen className="w-5 h-5" />}
                            {activity.type === 'collaboration' && <User className="w-5 h-5" />}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{activity.title}</p>
                            <p className="text-sm text-muted-foreground">{activity.date}</p>
                          </div>
                          <Badge 
                            variant={activity.status === 'completed' ? 'default' : 
                                    activity.status === 'published' ? 'secondary' : 'outline'}
                          >
                            {activity.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="publications" className="space-y-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Publications
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Export CV
                      </Button>
                    </CardTitle>
                    <CardDescription>
                      Your published research papers and articles
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {publications.map((publication) => (
                        <div key={publication.id} className="p-4 rounded-lg border border-primary/20">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium text-lg">{publication.title}</h4>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Star className="w-3 h-3 mr-1" />
                              {publication.citations} citations
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-2">
                            {publication.journal} • {publication.year}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1">
                              {publication.coAuthors.map((author, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {author}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                              <Button variant="outline" size="sm">
                                <Download className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      Achievements & Badges
                    </CardTitle>
                    <CardDescription>
                      Milestones and recognition for your contributions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {achievements.map((achievement) => (
                        <div 
                          key={achievement.id} 
                          className={`p-4 rounded-lg border transition-colors ${
                            achievement.earned 
                              ? 'border-primary/40 bg-primary/5' 
                              : 'border-muted bg-muted/20 opacity-60'
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              achievement.earned ? 'bg-primary text-primary-foreground' : 'bg-muted'
                            }`}>
                              <Award className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">{achievement.title}</h4>
                              <p className="text-sm text-muted-foreground mb-2">
                                {achievement.description}
                              </p>
                              {achievement.earned && achievement.date && (
                                <p className="text-xs text-muted-foreground">
                                  Earned on {achievement.date}
                                </p>
                              )}
                              {!achievement.earned && (
                                <Badge variant="outline" className="text-xs">
                                  In Progress
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <div className="grid gap-6">
                  {/* Profile Information */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle>Profile Information</CardTitle>
                      <CardDescription>
                        Update your personal and professional information
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" defaultValue="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" defaultValue="Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="title">Professional Title</Label>
                        <Input id="title" defaultValue="Senior Research Scientist" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea 
                          id="bio" 
                          defaultValue="Experienced nanotoxicologist specializing in machine learning applications for predicting nanomaterial safety."
                          rows={3}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" defaultValue="Boston, MA" />
                      </div>
                      <Button className="w-full">
                        Save Changes
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Privacy Settings */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle>Privacy Settings</CardTitle>
                      <CardDescription>
                        Control who can see your profile and activity
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="profileVisibility">Profile Visibility</Label>
                        <select className="w-full p-2 border rounded-md">
                          <option value="public">Public</option>
                          <option value="colleagues">Colleagues Only</option>
                          <option value="private">Private</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="activityVisibility">Activity Visibility</Label>
                        <select className="w-full p-2 border rounded-md">
                          <option value="public">Public</option>
                          <option value="colleagues">Colleagues Only</option>
                          <option value="private">Private</option>
                        </select>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </main>
          <DashboardFooter />
        </div>
      </div>
    </div>
  )
}