import { Card, CardContent } from "@/components/ui/card"

export function CustomersSection() {
  const customers = [
    {
      name: "Global Manufacturing Corp",
      logo: "/manufacturing-company-logo.png",
      industry: "Manufacturing",
      description: "Streamlined their supply chain operations across 15 countries",
    },
    {
      name: "TechFlow Solutions",
      logo: "/abstract-tech-logo.png",
      industry: "Technology",
      description: "Reduced shipping costs by 30% with our optimization tools",
    },
    {
      name: "RetailMax Chain",
      logo: "/abstract-retail-logo.png",
      industry: "Retail",
      description: "Improved inventory accuracy to 99.8% across 200+ stores",
    },
    {
      name: "FreshFood Distributors",
      logo: "/food-distribution-logo.png",
      industry: "Food & Beverage",
      description: "Enhanced cold chain visibility and reduced waste by 25%",
    },
    {
      name: "AutoParts Express",
      logo: "/automotive-parts-logo.png",
      industry: "Automotive",
      description: "Accelerated delivery times by 40% with real-time tracking",
    },
    {
      name: "MedSupply Network",
      logo: "/medical-supply-logo.png",
      industry: "Healthcare",
      description: "Ensured 100% compliance with medical supply regulations",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            From small businesses to Fortune 500 companies, organizations worldwide trust CatenaLogistix to optimize
            their supply chain operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customers.map((customer, index) => (
            <Card
              key={customer.name}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={customer.logo || "/placeholder.svg"}
                    alt={`${customer.name} logo`}
                    className="h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-1">{customer.name}</h3>
                  <p className="text-sm text-accent font-medium mb-3">{customer.industry}</p>
                  <p className="text-sm text-muted-foreground">{customer.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
