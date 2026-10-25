"use client";

export default function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "High-Intent Demand Capture & SEO",
      description: "We build data-driven paid search and local AI visibility campaigns optimized around what pet parents actually search for. No vanity traffic, just high-converting intent.",
    },
    {
      number: "02",
      title: "Quirky & Enthusiastic Creative Production",
      description: "From thumb-stopping creator videos and street interviews to stunning product photography. We turn your brand's messaging into native, relevant content that captures human attention.",
    },
    {
      number: "03",
      title: "Hyper-Targeted Influencer Networks",
      description: "We connect your brand with our proprietary network of micro-influencers and pet creators. Tap into 40,000+ creators ready to drive trust, engagement, and direct social sales.",
    },
    {
      number: "04",
      title: "Performance Measurement & Intake Analytics",
      description: "We track Return on Ad Spend (ROAS), customer acquisition costs, and conversion friction. If it doesn't move your bottom line or clear inventory, we don't buy it.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:py-24 sm:px-6 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            OUR SERVICES
          </h2>
          <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
            We don&apos;t just sell "SEO" or post cute pictures of golden retrievers. We build a synchronized, conversion-optimized ecosystem that treats your brand like the Best in Show.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="bg-cream-bg rounded-2xl p-8 sm:p-10 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex items-start mb-6">
                <span className="text-4xl font-bold text-purple-accent/30 mr-4">
                  {service.number}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                </div>
              </div>
              <p className="text-foreground/70 leading-relaxed text-lg">
                {service.description}
              </p>
              {/* Decorative paw print */}
              <div className="absolute right-8 bottom-8 text-purple-accent/10 text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block">
                🐾
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
