"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B0B0F] to-[#111111] pt-32 pb-20">
      {/* Subtle gold glow background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#C8A95A] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Run and manage your <span className="text-[#C8A95A]">programmes</span> from a single, structured system.
            </h1>
            <p className="text-lg text-[#A1A1AA] mb-8 leading-relaxed">
              Streamline programme delivery, participant management, and session tracking. 
              Built for training organisations, bootcamps, and corporate programmes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/app">
                <Button className="bg-[#C8A95A] hover:bg-[#D4B86A] text-black px-6 py-3 text-base w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
              <Link href="#pricing">
                <Button variant="outline" className="border-[#C8A95A] text-[#C8A95A] px-6 py-3 text-base w-full sm:w-auto">
                  Book a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Visual Placeholder */}
          <div className="relative h-96 rounded-2xl bg-gradient-to-br from-[#1F1F1F] to-[#121212] border border-[#1F1F1F] overflow-hidden shadow-2xl shadow-black/50">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-[#C8A95A] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-[#A1A1AA] font-medium">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
