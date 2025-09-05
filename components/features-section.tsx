import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

const features = [
  "Real-time shipment tracking",
  "Automated inventory alerts",
  "Supplier performance monitoring",
  "Cost optimization tools",
  "Compliance management",
  "Mobile accessibility",
]

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                Everything You Need to <span className="text-primary">Streamline</span> Your Operations
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Our comprehensive platform brings together all the tools you need to manage your supply chain
                efficiently, from procurement to delivery.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="group">
              Explore All Features
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Shipment Status</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">On Time</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-3/4"></div>
                  </div>
                </div>

                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Inventory Levels</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Optimal</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-8 bg-primary/20 rounded"></div>
                    <div className="h-12 bg-primary/40 rounded"></div>
                    <div className="h-6 bg-primary/30 rounded"></div>
                  </div>
                </div>

                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Cost Savings</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">+15%</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">$24,500</div>
                  <div className="text-xs text-muted-foreground">This month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
