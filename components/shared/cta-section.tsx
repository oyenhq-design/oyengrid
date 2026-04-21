"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-[#0B0B0F] relative overflow-hidden">
      {/* Subtle gold glow */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C8A95A] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to transform your programme management?
        </h2>
        <p className="text-lg text-[#A1A1AA] mb-8 max-w-2xl mx-auto">
          Join organisations already using OYEN Grid to streamline their operations and deliver better results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/app">
            <Button className="bg-[#C8A95A] text-black hover:bg-[#D4B86A] px-6 py-3 text-base">
              Get Started Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link href="#pricing">
            <Button 
              variant="outline" 
              className="border-[#C8A95A] text-[#C8A95A] hover:bg-[#C8A95A]/10 px-6 py-3 text-base"
            >
              See Pricing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
