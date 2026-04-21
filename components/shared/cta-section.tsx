"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to transform your programme management?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Join organisations already using OYEN Grid to streamline their operations and deliver better results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/app">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 text-base">
              Get Started Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link href="#pricing">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-blue-600/50 px-6 py-3 text-base"
            >
              See Pricing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
