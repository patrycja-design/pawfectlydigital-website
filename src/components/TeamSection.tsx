"use client";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Captain Barkmedes",
      role: "Co-Founder & Chief Analytics Officer",
      description: "Ex-performance marketing director with 10+ years optimizing multi-million dollar ad spend budgets.",
      behindTheScenes: "Spends 90% of his day digging into conversion funnels and the other 10% chasing laser pointers.",
      emoji: "🐕",
    },
    {
      name: "Sir Wag-a-Lot",
      role: "Creative Director & Influencer Strategist",
      description: "Social strategist specializing in viral short-form video and mobilizing creator networks.",
      behindTheScenes: "Has an infectious enthusiasm that keeps the content energetic and the creator networks highly engaged.",
      emoji: "🐕",
    },
    {
      name: "Lady Fetchington",
      role: "Head of Conversion Rate Optimization (CRO)",
      description: "UX/UI specialist obsessed with removing friction from checkout pages and booking forms.",
      behindTheScenes: "If you throw a conversion problem at her, she will bring back a data-driven solution every single time.",
      emoji: "🐕",
    },
    {
      name: "Professor Paws",
      role: "Lead SEO & AI Search Architect",
      description: "Engineer focused on local search maps, intent targeting, and making sure your brand dominates AI search engines.",
      behindTheScenes: "Fluent in Google's algorithm changes and highly sensitive to sudden loud noises.",
      emoji: "🐕",
    },
    {
      name: "Baron von Scruffles",
      role: "Paid Media & Acquisition Lead",
      description: "Media buyer tracking ROAS, customer acquisition costs, and testing high-intent ad variations.",
      behindTheScenes: "Refuses to chase empty clicks. If an ad campaign doesn't fetch real profit, he buries it in the backyard.",
      emoji: "🐕",
    },
    {
      name: "Chief Angus",
      role: "Chief Executive Officer (CEO)",
      description: "An eerily self-possessed Brussels Griffon who sits on laps, looks imperious, and actively judges our quarterly conversion rates.",
      behindTheScenes: "The true boss. Demands all agency retainers be paid in freeze-dried liver.",
      emoji: "🐕",
    },
  ];

  return (
    <section className="py-16 px-4 sm:py-24 sm:px-6 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            MEET THE TEAM
          </h2>
          <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
            Run by Growth Engineers, Content Wizards, and Absolute Good Boys.
          </p>
          <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto mt-4">
            We are a specialized team of marketers who look at performance data all day, but still measure our success in belly rubs and scaling revenue.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="bg-cream-bg rounded-2xl p-8 sm:p-10 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-accent/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-purple-accent/20 transition-colors">
                  <span className="text-3xl">{member.emoji}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-purple-accent font-semibold text-sm">{member.role}</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Role:</p>
                <p className="text-foreground/70 text-sm">{member.description}</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Behind the Scenes:</p>
                <p className="text-foreground/70 text-sm italic">{member.behindTheScenes}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
