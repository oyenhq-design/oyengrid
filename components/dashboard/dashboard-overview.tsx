"use client"

import { Button } from "@/components/ui/button"
import { BarChart3, Users, Calendar, Film } from "lucide-react"

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back to your control panel</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">Create Programme</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Active Programmes", value: "12", icon: BarChart3, color: "blue" },
          { label: "Total Participants", value: "1,240", icon: Users, color: "green" },
          { label: "Upcoming Sessions", value: "8", icon: Calendar, color: "orange" },
          { label: "Recordings", value: "156", icon: Film, color: "purple" },
        ].map((stat, idx) => {
          const Icon = stat.icon
          const colorClasses = {
            blue: "bg-blue-50 text-blue-600",
            green: "bg-green-50 text-green-600",
            orange: "bg-orange-50 text-orange-600",
            purple: "bg-purple-50 text-purple-600",
          }
          return (
            <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200">
              <div className={`w-12 h-12 rounded-lg ${colorClasses[stat.color as keyof typeof colorClasses]} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
            </div>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Programmes */}
        <div className="lg:col-span-2 bg-white rounded-lg p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Programmes</h2>
          <div className="space-y-3">
            {[
              { name: "Advanced Python Bootcamp", participants: 24, status: "Active" },
              { name: "Leadership Development", participants: 18, status: "Active" },
              { name: "Data Science Intensive", participants: 32, status: "Completed" },
            ].map((prog, idx) => (
              <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0">
                <div>
                  <p className="font-medium text-gray-900">{prog.name}</p>
                  <p className="text-sm text-gray-500">{prog.participants} participants</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  prog.status === "Active"
                    ? "bg-green-50 text-green-700"
                    : "bg-gray-100 text-gray-700"
                }`}>
                  {prog.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-base py-2">
              Create Programme
            </Button>
            <Button variant="outline" className="w-full border-gray-200 text-base py-2">
              Schedule Session
            </Button>
            <Button variant="outline" className="w-full border-gray-200 text-base py-2">
              Invite Participants
            </Button>
            <Button variant="outline" className="w-full border-gray-200 text-base py-2">
              View Media Library
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
