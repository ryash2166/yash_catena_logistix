import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function IntegrationsSection() {
  const integrations = [
    {
      name: "SAP",
      logo: "/sap-logo.png",
      category: "ERP Systems",
      description: "Seamlessly connect with SAP for unified business operations",
    },
    {
      name: "Oracle",
      logo: "/oracle-logo.png",
      category: "Database & Cloud",
      description: "Integrate Oracle systems for comprehensive data management",
    },
    {
      name: "Microsoft Dynamics",
      logo: "/microsoft-dynamics-logo.png",
      category: "Business Applications",
      description: "Connect with Dynamics 365 for complete business visibility",
    },
    {
      name: "Salesforce",
      logo: "/salesforce-logo.png",
      category: "CRM",
      description: "Sync customer data and orders with Salesforce CRM",
    },
    {
      name: "Amazon Web Services",
      logo: "/aws-logo.png",
      category: "Cloud Infrastructure",
      description: "Deploy and scale on AWS cloud infrastructure",
    },
    {
      name: "FedEx",
      logo: "/fedex-logo.png",
      category: "Shipping Carriers",
      description: "Real-time tracking and shipping with FedEx services",
    },
    {
      name: "UPS",
      logo: "/generic-delivery-logo.png",
      category: "Shipping Carriers",
      description: "Integrated UPS shipping and logistics solutions",
    },
    {
      name: "DHL",
      logo: "/dhl-logo.png",
      category: "International Shipping",
      description: "Global shipping and tracking with DHL integration",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Powerful Integrations</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Connect with your existing tools and systems. Our platform integrates seamlessly with leading ERP, CRM, and
            logistics providers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <Card
              key={integration.name}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img
                    src={integration.logo || "/placeholder.svg"}
                    alt={`${integration.name} logo`}
                    className="h-12 w-auto mx-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{integration.name}</h3>
                <p className="text-xs text-accent font-medium mb-2">{integration.category}</p>
                <p className="text-sm text-muted-foreground">{integration.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Button size="lg" className="group hover:scale-105 transition-all duration-300">
            View All Integrations
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
