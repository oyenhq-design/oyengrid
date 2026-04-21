"use client"

import { TARGET_USERS } from "@/lib/constants"
import { Building2, Zap, Briefcase } from "lucide-react"

const iconMap = {
  Building2,
  Zap,
  Briefcase,
}

export function TargetUsersSection() {
  return (
    <section id="for" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for organisations like yours
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're running professional training, intensive bootcamps, or corporate programmes, OYEN Grid has you covered.
          </p>
        </div>

        {/* User Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TARGET_USERS.map((user, idx) => {
            const Icon = iconMap[user.icon as keyof typeof iconMap]
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {user.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {user.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
