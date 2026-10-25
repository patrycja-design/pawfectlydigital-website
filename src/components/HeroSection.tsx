"use client";

import Link from "next/link";

export default function HeroSection() {
  const publications = ["Wired", "TechCrunch", "Wall Street Journal", "Modern Dog Magazine"];

  return (
    <section className="bg-gradient-to-br from-cream-bg to-lavender-bg py-16 px-4 sm:py-24 sm:px-6 lg:py-32 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-purple-accent/10 text-purple-accent rounded-full text-sm font-semibold mb-8">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-accent"></span>
            </span>
            Data-Driven & Tail-Wagging
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            THE DATA-DRIVEN, TAIL-WAGGING CREATIVE AGENCY
            <br className="hidden sm:block" />
            <span className="text-purple-accent">FOR PET BRANDS</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed mb-10">
            We help you stop wasting marketing spend on empty clicks. Because double-taps don&apos;t pay the bills&mdash;purchases do. We blend hard metrics with content so good, it makes humans drop their treats.
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-purple-accent text-white font-bold text-lg rounded-lg hover:bg-purple-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
            >
              <span className="mr-2">🐾</span>
              Stop Chewing Your Budget. Book a Free Growth Audit Today!
            </Link>
          </div>

          {/* As Seen In */}
          <div className="border-t border-foreground/10 pt-12">
            <p className="text-sm text-foreground/60 uppercase tracking-wider mb-6">As seen in:</p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
              {publications.map((pub, index) => (
                <span
                  key={pub}
                  className="text-foreground/70 font-semibold text-sm sm:text-base hover:text-purple-accent transition-colors"
                >
                  {pub}
                  {index < publications.length - 1 && (
                    <span className="mx-2 text-foreground/30">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
