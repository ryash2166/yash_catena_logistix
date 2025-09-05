import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { CustomersSection } from "@/components/customers-section"
import { HowWeHelpSection } from "@/components/how-we-help-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { TransformSection } from "@/components/transform-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <StatsSection />
        <CustomersSection />
        <HowWeHelpSection />
        <IntegrationsSection />
        <TransformSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
