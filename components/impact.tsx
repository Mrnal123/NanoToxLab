import { Card } from "@/components/ui/card"
import { Users, GraduationCap, Building2, TrendingUp } from "lucide-react"

export function Impact() {
  const impacts = [
    {
      icon: Users,
      title: "For Researchers",
      benefits: [
        "Accelerate research timelines by 80%",
        "Reduce experimental costs significantly",
        "Access to advanced AI prediction models",
        "Collaborative research platform",
      ],
      color: "text-blue-400",
    },
    {
      icon: GraduationCap,
      title: "For Students",
      benefits: [
        "Hands-on experience with cutting-edge tools",
        "Virtual lab access 24/7",
        "Interactive learning modules",
        "Real-world research projects",
      ],
      color: "text-green-400",
    },
    {
      icon: Building2,
      title: "For Pharmaceutical Companies",
      benefits: [
        "Reduce drug development costs by 60%",
        "Minimize late-stage trial failures",
        "Regulatory compliance support",
        "Faster time-to-market",
      ],
      color: "text-purple-400",
    },
  ]

  const stats = [
    { value: "95%", label: "Prediction Accuracy" },
    { value: "80%", label: "Time Reduction" },
    { value: "60%", label: "Cost Savings" },
    { value: "500+", label: "Research Projects" },
  ]

  return (
    <section className="py-24 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
            Transforming <span className="text-secondary">Research Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering the next generation of pharmaceutical research across academia and industry.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-mono text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full bg-primary/10 border border-primary/20`}>
                    <impact.icon className={`h-6 w-6 ${impact.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold font-mono">{impact.title}</h3>
                </div>
                <ul className="space-y-3">
                  {impact.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-3">
                      <TrendingUp className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
