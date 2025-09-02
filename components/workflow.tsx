import { Card } from "@/components/ui/card"
import { Upload, Cpu, Download } from "lucide-react"

export function Workflow() {
  const steps = [
    {
      icon: Upload,
      number: "01",
      title: "Upload Molecular Data",
      description:
        "Input your nano-drug molecular structure, composition, and target specifications into our secure platform.",
    },
    {
      icon: Cpu,
      number: "02",
      title: "AI Analysis & Simulation",
      description:
        "Our AI models perform comprehensive toxicity analysis, molecular dynamics simulations, and safety predictions.",
    },
    {
      icon: Download,
      number: "03",
      title: "Download Results",
      description:
        "Receive detailed reports with safety assessments, optimization recommendations, and regulatory insights.",
    },
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
            Simple <span className="text-primary">3-Step Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From molecular input to comprehensive safety analysis in minutes, not months.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2 z-0" />
          <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-secondary to-primary transform -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative z-10 p-8 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-4 animate-pulse-glow">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-sm font-bold font-mono flex items-center justify-center">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold font-mono">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
