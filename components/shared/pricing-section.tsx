"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { PRICING_TIERS } from "@/lib/constants"

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the perfect plan for your organisation
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRICING_TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 flex flex-col ${
                tier.popular
                  ? "bg-blue-600 text-white ring-2 ring-blue-600 transform scale-105"
                  : "bg-white border border-gray-200"
              }`}
            >
              {/* Badge */}
              {tier.popular && (
                <span className="inline-block bg-blue-400 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                  Most Popular
                </span>
              )}

              {/* Title */}
              <h3 className={`text-lg font-semibold mb-2 ${tier.popular ? "text-white" : "text-gray-900"}`}>
                {tier.name}
              </h3>

              {/* Description */}
              <p className={`text-sm mb-4 ${tier.popular ? "text-blue-100" : "text-gray-600"}`}>
                {tier.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className={`text-3xl font-bold ${tier.popular ? "text-white" : "text-gray-900"}`}>
                  {tier.price}
                </span>
                {tier.price !== "Custom" && (
                  <p className={`text-sm mt-1 ${tier.popular ? "text-blue-100" : "text-gray-600"}`}>
                    per month
                  </p>
                )}
              </div>

              {/* CTA */}
              <Button
                className={`w-full mb-6 ${
                  tier.popular
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Get Started
              </Button>

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {tier.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-2">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.popular ? "text-blue-100" : "text-blue-600"}`} />
                    <span className={`text-sm ${tier.popular ? "text-blue-50" : "text-gray-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
