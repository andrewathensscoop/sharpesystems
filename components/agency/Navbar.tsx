"use client";

import { useState } from "react";
import { SharpeLogo } from "./Logo";

const products = [
  "Functional Website",
  "5-Star Magic Review Funnel",
  "Missed Call Text Back",
  "One-Click Marketing Campaigns",
  "On-Site SEO",
];

export function AgencyNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-agency-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          <SharpeLogo className="h-9 w-auto" dark />
        </a>

        {/* Right side */}
        <div className="flex items-center gap-6">
          {/* Products dropdown */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setOpen(!open)}
              onBlur={() => setTimeout(() => setOpen(false), 150)}
              className="text-sm font-sans font-semibold text-agency-text hover:text-agency-accent transition-colors flex items-center gap-1"
            >
              Products
              <svg className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {open && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-agency-border shadow-xl py-2">
                {products.map((p) => (
                  <a
                    key={p}
                    href="#features"
                    className="block px-4 py-2.5 text-sm text-agency-text hover:bg-agency-bg hover:text-agency-accent transition-colors"
                  >
                    {p}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Pricing */}
          <a href="#pricing" className="hidden sm:block text-sm font-sans font-semibold text-agency-text hover:text-agency-accent transition-colors">
            Pricing
          </a>

          {/* CTA */}
          <a
            href="#schedule"
            className="px-5 py-2.5 bg-agency-accent text-white text-sm font-sans font-bold hover:bg-agency-accent-hover transition-colors rounded"
          >
            Book A Call
          </a>
        </div>
      </div>
    </nav>
  );
}
