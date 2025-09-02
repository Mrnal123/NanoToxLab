import { Hero } from "@/components/hero"
import { ProblemStatement } from "@/components/problem-statement"
import { Features } from "@/components/features"
import { Workflow } from "@/components/workflow"
import { Impact } from "@/components/impact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ProblemStatement />
      <Features />
      <Workflow />
      <Impact />
      <Footer />
    </main>
  )
}
