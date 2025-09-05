import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Package, BarChart3, Shield, Globe, Zap } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Transportation Management",
    description: "Optimize your shipping routes and reduce transportation costs with our advanced logistics platform.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Real-time inventory tracking and automated reordering to prevent stockouts and overstock.",
  },
  {
    icon: BarChart3,
    title: "Supply Chain Analytics",
    description: "Data-driven insights to optimize your supply chain performance and identify bottlenecks.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Proactive risk assessment and mitigation strategies to protect your supply chain.",
  },
  {
    icon: Globe,
    title: "Global Logistics",
    description: "Seamless international shipping and customs management for global operations.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Automate repetitive tasks and streamline workflows for maximum efficiency.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Comprehensive Logistics Solutions</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            From transportation to inventory management, we provide end-to-end logistics solutions tailored to your
            business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
