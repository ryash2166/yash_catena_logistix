const stats = [
  { value: "500+", label: "Companies Served" },
  { value: "1M+", label: "Shipments Tracked" },
  { value: "99.9%", label: "System Uptime" },
  { value: "25%", label: "Average Cost Reduction" },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-primary-foreground/80 text-pretty max-w-2xl mx-auto">
            Join hundreds of companies that have transformed their supply chain operations with our platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
