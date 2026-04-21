"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { PRICING_TIERS } from "@/lib/constants"

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-[#A1A1AA]">
            Choose the perfect plan for your organisation
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRICING_TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 flex flex-col transition-all duration-300 ${ tier.popular
                  ? "bg-[#121212] border-2 border-[#C8A95A] transform scale-105 shadow-lg shadow-[#C8A95A]/20"
                  : "bg-[#121212] border border-[#1F1F1F] hover:border-[#C8A95A]/50"
              }`}
            >
              {/* Badge */}
              {tier.popular && (
                <span className="inline-block bg-[#C8A95A] text-black text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit\">\n                  Most Popular\n                </span>\n              )}\n\n              {/* Title */}\n              <h3 className={`text-lg font-semibold mb-2 ${tier.popular ? "text-[#C8A95A]" : "text-white"}`}>\n                {tier.name}\n              </h3>\n\n              {/* Description */}\n              <p className={`text-sm mb-4 ${tier.popular ? "text-[#A1A1AA]" : "text-[#A1A1AA]"}`}>\n                {tier.description}\n              </p>\n\n              {/* Price */}\n              <div className=\"mb-6\">\n                <span className={`text-3xl font-bold ${tier.popular ? "text-[#C8A95A]" : "text-white"}`}>\n                  {tier.price}\n                </span>\n                {tier.price !== \"Custom\" && (\n                  <p className=\"text-sm mt-1 text-[#A1A1AA]\">\n                    per month\n                  </p>\n                )}\n              </div>\n\n              {/* CTA */}\n              <Button\n                className={`w-full mb-6 ${\n                  tier.popular\n                    ? \"bg-[#C8A95A] text-black hover:bg-[#D4B86A]\"\n                    : \"bg-[#C8A95A] text-black hover:bg-[#D4B86A]\"\n                }`}\n              >\n                Get Started\n              </Button>\n\n              {/* Features */}\n              <ul className=\"space-y-3 flex-1\">\n                {tier.features.map((feature, fidx) => (\n                  <li key={fidx} className=\"flex items-start gap-2\">\n                    <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.popular ? \"text-[#C8A95A]\" : \"text-[#C8A95A]\"}`} />\n                    <span className=\"text-sm text-[#A1A1AA]\">\n                      {feature}\n                    </span>\n                  </li>\n                ))}\n              </ul>\n            </div>\n          ))}\n        </div>\n      </div>\n    </section>\n  )\n}
