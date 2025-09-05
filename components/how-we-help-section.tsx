import { Card, CardContent } from "@/components/ui/card"
import { Truck, BarChart3, Shield, Clock, Users, Zap } from "lucide-react"

export function HowWeHelpSection() {
  const helpItems = [
    {
      icon: Truck,
      title: "End-to-End Visibility",
      description: "Track your shipments from origin to destination with real-time updates and predictive analytics.",
      image: "/logistics-tracking-dashboard.png",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description:
        "Make informed decisions with comprehensive analytics and performance metrics across your supply chain.",
      image: "/supply-chain-analytics-charts.png",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description:
        "Identify and mitigate potential disruptions before they impact your operations with our AI-powered risk assessment.",
      image: "/risk-management-dashboard.png",
    },
    {
      icon: Clock,
      title: "Process Optimization",
      description:
        "Streamline your workflows and reduce operational costs with automated processes and smart recommendations.",
      image: "/process-optimization-workflow.png",
    },
    {
      icon: Users,
      title: "Supplier Collaboration",
      description: "Enhance communication and coordination with your supplier network through our integrated platform.",
      image: "/supplier-collaboration-network.png",
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Get up and running quickly with our intuitive setup process and dedicated onboarding support.",
      image: "/quick-setup-implementation.png",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">How We Help Your Business Succeed</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Our comprehensive platform addresses every aspect of supply chain management, from visibility to
            optimization, ensuring your operations run smoothly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {helpItems.map((item, index) => (
            <Card
              key={item.title}
              className="group hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
