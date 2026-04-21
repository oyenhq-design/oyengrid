"use client"

import { FEATURES } from "@/lib/constants"
import {
  Briefcase,
  Calendar,
  MessageSquare,
  Film,
  BarChart3,
  Award,
} from "lucide-react"

const iconMap = {
  Briefcase,
  Calendar,
  MessageSquare,
  Film,
  BarChart3,
  Award,
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to run programmes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            All the tools you need in one integrated platform. No more switching between tools.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <div key={idx} className="p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
