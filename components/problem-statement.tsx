import { Card } from "@/components/ui/card"
import { AlertTriangle, Clock, DollarSign } from "lucide-react"

export function ProblemStatement() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Safety Concerns",
      description:
        "Traditional drug testing methods often fail to predict nano-drug toxicity, leading to safety issues in clinical trials.",
    },
    {
      icon: Clock,
      title: "Time-Intensive Process",
      description:
        "Current drug development takes 10-15 years, with extensive animal testing and lengthy approval processes.",
    },
    {
      icon: DollarSign,
      title: "High Development Costs",
      description:
        "Pharmaceutical companies spend billions on drug development, with high failure rates in late-stage trials.",
    },
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
            The Challenge in <span className="text-primary">Nano-Drug Development</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Current pharmaceutical research faces critical challenges that NanoToxLab addresses with AI-powered
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
                  <problem.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-mono">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
