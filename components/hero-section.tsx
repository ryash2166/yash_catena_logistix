import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
                ✨ Efficient, Faster, Smarter for First Time Buyers
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Supply Chain <span className="text-primary">Visibility</span> Simplified
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-xl">
                CatenaLogistix is your go-to platform, designed for those new to supply chain management. We make it
                easy to bring everything together in one place.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group hover:scale-105 transition-all duration-300">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group bg-transparent hover:scale-105 transition-all duration-300"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Companies Trust Us</div>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative animate-fade-in-right">
            <div className="bg-card rounded-2xl shadow-2xl border border-border p-6 hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="bg-primary/10 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Supply Chain Dashboard</h3>
                  <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs animate-pulse">Live</div>
                </div>

                <div className="space-y-3">
                  <div
                    className="flex items-center justify-between p-3 bg-background rounded-lg hover:bg-muted/50 transition-colors duration-200 animate-fade-in-up"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm">Inventory Management</span>
                    </div>
                    <span className="text-sm font-medium">Active</span>
                  </div>

                  <div
                    className="flex items-center justify-between p-3 bg-background rounded-lg hover:bg-muted/50 transition-colors duration-200 animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-sm">Shipment Tracking</span>
                    </div>
                    <span className="text-sm font-medium">In Transit</span>
                  </div>

                  <div
                    className="flex items-center justify-between p-3 bg-background rounded-lg hover:bg-muted/50 transition-colors duration-200 animate-fade-in-up"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      <span className="text-sm">Supplier Coordination</span>
                    </div>
                    <span className="text-sm font-medium">Pending</span>
                  </div>

                  <div
                    className="flex items-center justify-between p-3 bg-background rounded-lg hover:bg-muted/50 transition-colors duration-200 animate-fade-in-up"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm">Risk Assessment</span>
                    </div>
                    <span className="text-sm font-medium">Complete</span>
                  </div>

                  <div
                    className="flex items-center justify-between p-3 bg-background rounded-lg hover:bg-muted/50 transition-colors duration-200 animate-fade-in-up"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-sm">Supply Chain Analysis</span>
                    </div>
                    <span className="text-sm font-medium">Optimized</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24,650</div>
                <div className="text-sm text-muted-foreground">Total Shipments Managed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
