"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(0);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-foreground text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-purple-accent">Paw</span>fectlyDigital
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              The Data-Driven, Tail-Wagging Creative Agency for Pet Brands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-white/70 hover:text-purple-accent transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-white/70 hover:text-purple-accent transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-white/70 hover:text-purple-accent transition-colors text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-purple-accent transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-white/70 text-sm">High-Intent Demand Capture</li>
              <li className="text-white/70 text-sm">Creative Production</li>
              <li className="text-white/70 text-sm">Influencer Networks</li>
              <li className="text-white/70 text-sm">Performance Analytics</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white/70 text-sm">hello@pawfectlydigital.com</li>
              <li className="text-white/70 text-sm">(555) 123-4567</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 sm:mb-0">
            &copy; {currentYear} PawfectlyDigital. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            Made with &hearts; and &nbsp;
            <span role="img" aria-label="paw">
              🐾
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
