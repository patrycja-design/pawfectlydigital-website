"use client";

import { useState, FormEvent } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    petName: "",
    roadblock: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const roadblockOptions = [
    "We need more traffic and brand awareness",
    "We have traffic, but people aren't buying/booking",
    "Our current agency is giving us clicks instead of customers",
    "Our pet told us to change agencies",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({
      name: "",
      company: "",
      email: "",
      petName: "",
      roadblock: "",
      message: "",
    });
    
    // Scroll to top of contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="contact" className="py-16 px-4 sm:py-24 sm:px-6 lg:py-32 bg-lavender-bg/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            CONTACT FORM
          </h2>
          <p className="text-lg sm:text-xl text-foreground/80">
            Let&apos;s Talk About Your Growth Strategy
          </p>
          <p className="text-lg sm:text-xl text-foreground/80 mt-4">
            Ready to increase your orders, fill your capacity, and capture the market? Drop us your details, and we&apos;ll run a comprehensive, no-BS audit on your current digital presence.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl">
          {submitStatus === "success" ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎉</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Woof-tastic! We&apos;ve received your request!
              </h3>
              <p className="text-foreground/70 text-lg">
                Our team of growth engineers will review your submission and get back to you faster than a greyhound chasing a squirrel.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Your Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:ring-2 focus:ring-purple-accent focus:border-transparent outline-none transition-all text-foreground bg-cream-bg"
                    placeholder="John Smith"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:ring-2 focus:ring-purple-accent focus:border-transparent outline-none transition-all text-foreground bg-cream-bg"
                    placeholder="PawfectlyDigital Inc."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Your Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:ring-2 focus:ring-purple-accent focus:border-transparent outline-none transition-all text-foreground bg-cream-bg"
                    placeholder="john@pawfect.com"
                  />
                </div>

                {/* Your Pet's Name & Species */}
                <div>
                  <label htmlFor="petName" className="block text-sm font-semibold text-foreground mb-2">
                    Your Pet&apos;s Name & Species (Critical Data point)
                  </label>
                  <input
                    type="text"
                    id="petName"
                    name="petName"
                    value={formData.petName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:ring-2 focus:ring-purple-accent focus:border-transparent outline-none transition-all text-foreground bg-cream-bg"
                    placeholder="Buddy, Golden Retriever"
                  />
                </div>
              </div>

              {/* What's your biggest roadblock */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  What&apos;s your biggest roadblock right now?
                </label>
                <select
                  name="roadblock"
                  value={formData.roadblock}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:ring-2 focus:ring-purple-accent focus:border-transparent outline-none transition-all text-foreground bg-cream-bg"
                >
                  <option value="" disabled className="text-foreground/50">
                    Select an option...
                  </option>
                  {roadblockOptions.map((option) => (
                    <option key={option} value={option} className="text-foreground">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:ring-2 focus:ring-purple-accent focus:border-transparent outline-none transition-all text-foreground bg-cream-bg resize-none"
                  placeholder="Tell us about your business and marketing goals..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-purple-accent text-white font-bold text-lg rounded-lg hover:bg-purple-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <span className="mr-2">🐾</span>
                    Fetch My Free Digital Marketing Audit!
                  </span>
                )}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
