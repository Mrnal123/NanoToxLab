"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Clock } from "lucide-react"

export function KnowledgeHub() {
  const articles = [
    {
      title: "Nanotoxicology in Drug Delivery Systems",
      description: "Latest research on toxicity assessment of nano-drug carriers and their biological interactions.",
      category: "Research",
      readTime: "8 min read",
      image: "/nanotechnology-research-lab.png",
    },
    {
      title: "AI-Powered Molecular Simulations",
      description: "How machine learning is revolutionizing molecular dynamics simulations for drug discovery.",
      category: "Technology",
      readTime: "12 min read",
      image: "/ai-molecular-simulation.png",
    },
    {
      title: "Regulatory Guidelines for Nanomedicine",
      description: "Understanding FDA and EMA guidelines for nanomedicine development and approval processes.",
      category: "Regulatory",
      readTime: "15 min read",
      image: "/placeholder-l3bbc.png",
    },
    {
      title: "Carbon Nanotube Functionalization",
      description: "Advanced techniques for functionalizing carbon nanotubes for targeted drug delivery applications.",
      category: "Methods",
      readTime: "10 min read",
      image: "/carbon-nanotube.png",
    },
  ]

  return (
    <Card className="bg-background/50 border-primary/20">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-mono">Knowledge Hub</CardTitle>
        <Button variant="outline" size="sm" className="border-primary/30 bg-transparent">
          View All Articles
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="bg-background/30 border-primary/10 hover:border-primary/30 transition-colors group cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  <h3 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs text-muted-foreground line-clamp-3">{article.description}</p>

                  <Button variant="ghost" size="sm" className="w-full justify-between text-xs">
                    <span>Read More</span>
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
