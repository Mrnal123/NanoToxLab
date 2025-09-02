import { Card } from "@/components/ui/card"
import { Brain, Shield, Microscope, BarChart3 } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI Prediction Models",
      description: "Advanced machine learning algorithms predict nano-drug behavior and toxicity with 95% accuracy.",
      gradient: "from-primary to-blue-400",
    },
    {
      icon: Shield,
      title: "Toxicity Evaluation",
      description: "Comprehensive safety assessment using virtual biomarkers and cellular response modeling.",
      gradient: "from-secondary to-purple-400",
    },
    {
      icon: Microscope,
      title: "Virtual Simulations",
      description: "High-fidelity molecular dynamics simulations for drug-target interactions and cellular uptake.",
      gradient: "from-green-400 to-teal-400",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description:
        "Interactive dashboards and detailed reports for comprehensive research insights and decision-making.",
      gradient: "from-orange-400 to-red-400",
    },
  ]

  return (
    <section className="py-24 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
            Cutting-Edge <span className="text-secondary">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Harness the power of artificial intelligence to revolutionize nano-drug research and development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:rotate-1"
            >
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold font-mono group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
