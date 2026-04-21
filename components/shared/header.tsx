"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NAV_ITEMS } from "@/lib/constants"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-[#0B0B0F]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0B0B0F]/60 z-50 border-b border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#C8A95A] rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">OG</span>
            </div>
            <span className="font-semibold text-white">OYEN Grid</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#A1A1AA] hover:text-[#C8A95A] transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" className="hidden sm:inline-flex">
                Login
              </Button>
            </Link>
            <Link href="/app">
              <Button className="bg-[#C8A95A] hover:bg-[#D4B86A] text-black">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
