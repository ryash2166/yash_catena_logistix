import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

export function TransformSection() {
  const transformSteps = [
    {
      step: "01",
      title: "Assessment",
      description: "We analyze your current supply chain processes and identify optimization opportunities.",
      duration: "1-2 weeks",
    },
    {
      step: "02",
      title: "Implementation",
      description: "Our team works with you to implement CatenaLogistix and integrate with your existing systems.",
      duration: "2-4 weeks",
    },
    {
      step: "03",
      title: "Optimization",
      description: "Fine-tune your processes with our AI-powered recommendations and best practices.",
      duration: "Ongoing",
    },
    {
      step: "04",
      title: "Scale",
      description: "Expand your optimized supply chain operations across all locations and partners.",
      duration: "3-6 months",
    },
  ]

  const benefits = [
    "Reduce operational costs by up to 25%",
    "Improve delivery times by 40%",
    "Increase inventory accuracy to 99%+",
    "Enhance supplier relationships",
    "Gain real-time visibility across operations",
    "Automate manual processes",
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Ready to Transform Your Supply Chain?</h2>
            <p className="text-lg text-muted-foreground text-pretty mb-8">
              Join hundreds of companies that have revolutionized their operations with CatenaLogistix. Our proven
              methodology ensures a smooth transition and measurable results.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center space-x-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group hover:scale-105 transition-all duration-300">
                Start Your Transformation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all duration-300 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Process Steps */}
          <div className="animate-fade-in-right">
            <div className="space-y-6">
              {transformSteps.map((step, index) => (
                <Card
                  key={step.step}
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                          <span className="text-sm text-accent font-medium">{step.duration}</span>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
