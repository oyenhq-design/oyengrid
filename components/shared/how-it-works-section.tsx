"use client"

import { HOW_IT_WORKS } from "@/lib/constants"

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How it works
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            Get started in minutes, not months. Simple, intuitive, powerful.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOW_IT_WORKS.map((item, idx) => (
            <div key={idx} className="relative">
              {/* Step Number */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#C8A95A] text-black font-bold text-lg shadow-lg shadow-[#C8A95A]/30">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#A1A1AA]">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              {idx < HOW_IT_WORKS.length - 1 && (
                <div className="hidden md:block absolute top-6 left-20 w-24 h-0.5 bg-[#C8A95A]/30 transform translate-x-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )\n