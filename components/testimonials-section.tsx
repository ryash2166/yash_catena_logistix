import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Supply Chain Director",
    company: "TechCorp Industries",
    content:
      "CatenaLogistix transformed our supply chain visibility. We reduced costs by 30% and improved delivery times significantly.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    company: "Global Manufacturing",
    content:
      "The real-time tracking and analytics have been game-changers for our operations. Highly recommend this platform.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Logistics Coordinator",
    company: "FastShip Solutions",
    content: "User-friendly interface and powerful features. Our team was up and running in just a few days.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry professionals say about our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-pretty">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
