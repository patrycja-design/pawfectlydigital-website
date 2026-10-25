"use client";

export default function PortfolioSection() {
  const caseStudies = [
    {
      metric: "279% Increase in New Inquiries",
      client: "For a premium DTC pet food client",
      result: "Achieved a 4.23x TikTok Shop ROAS in under 60 days.",
    },
    {
      metric: "895% Increase in Inbound Demand",
      client: "For an international pet tech brand",
      result: "Scaled organic campaign reach to over 5.6M pet lovers.",
    },
    {
      metric: "2,566% Increase in Qualified Leads",
      client: "For a multi-location pet resort",
      result: "Rebuilt local search framework to completely eliminate empty slots.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:py-24 sm:px-6 lg:py-32 bg-lavender-bg/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            PORTFOLIO & CASE STUDIES
          </h2>
          <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
            We measure our success in qualified leads, scaling revenue, and happy pets. Here is how we help pet brands grow:
          </p>
        </div>

        {/* Subheader */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Proven Growth Across the Pet Industry
          </h3>
        </div>

        {/* Case Studies */}
        <div className="space-y-8 mb-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <span className="text-5xl font-bold text-purple-accent">
                    {study.metric}
                  </span>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-lg font-semibold text-foreground mb-2">
                    {study.client}
                  </p>
                  <p className="text-foreground/70">{study.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-6xl text-purple-accent/30">"</span>
          </div>
          <blockquote className="text-xl sm:text-2xl font-semibold text-foreground mb-6 leading-relaxed">
            They understand what speaks to pet parents, but more importantly, they understand the spreadsheet behind the treats. Our ROAS climbed to 18.42x.
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-purple-accent/10 rounded-full flex items-center justify-center mr-4">
              <span className="text-2xl">👤</span>
            </div>
            <div className="text-left">
              <p className="font-bold text-foreground">Laura L.</p>
              <p className="text-foreground/70">VP of Growth at BarkBite Co.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
