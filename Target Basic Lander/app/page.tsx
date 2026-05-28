"use client"

import { useState, useEffect } from "react"
import { ArrowRight, CheckCircle2, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const [visitorCount, setVisitorCount] = useState(1251)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    // Check if device is mobile/tablet
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkDevice()
    window.addEventListener("resize", checkDevice)
    
    return () => window.removeEventListener("resize", checkDevice)
  }, [])

  useEffect(() => {
    // Update visitor count every 2-3 seconds
    const interval = setInterval(() => {
      const change = Math.floor(Math.random() * 21) - 10 // Random change between -10 and +10
      setVisitorCount((prev) => Math.max(1000, prev + change))
    }, 2000 + Math.random() * 1000) // Random interval between 2-3 seconds

    return () => clearInterval(interval)
  }, [])

  // Desktop view - Mobile Only message
  if (!isMobile) {
    return (
      <div className="min-h-screen bg-[#CC0000] flex items-center justify-center p-4">
        <div className="bg-[#F8F5F0] rounded-3xl p-8 max-w-md w-full text-center shadow-xl">
          <div className="w-20 h-20 mx-auto mb-6 border-2 border-[#CC0000] rounded-2xl flex items-center justify-center">
            <Smartphone className="w-10 h-10 text-[#CC0000]" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Mobile Only</h1>
          
          <p className="text-gray-600 mb-6">
            This website is designed exclusively for mobile devices.
          </p>
          
          <div className="bg-gray-100 rounded-lg p-4">
            <p className="text-gray-500 text-sm">
              Please access this site from your smartphone or tablet for the best experience.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Mobile/Tablet view - Main landing page
  return (
    <div className="min-h-screen bg-[#F0EFED] flex flex-col">
      {/* Header with visitor count */}
      <div className="pt-8 pb-4 flex justify-center">
        <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-gray-800 font-medium text-sm">
            {visitorCount.toLocaleString()} online now
          </span>
        </div>
      </div>

      {/* Target Logo */}
      <div className="flex justify-center py-8">
        <div className="w-24 h-24 relative">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="#CC0000" />
            <circle cx="50" cy="50" r="30" fill="white" />
            <circle cx="50" cy="50" r="15" fill="#CC0000" />
          </svg>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="flex-1 flex items-center justify-center px-4 pb-8">
        <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-lg">
          {/* Exclusive Offer Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-red-50 rounded-full px-4 py-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#CC0000] rounded-full" />
              <span className="text-[#CC0000] font-medium text-sm">Exclusive Offer</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-center text-2xl font-bold text-gray-900 mb-4 leading-tight">
            Get a <span className="text-[#CC0000]">$750</span> discount on all products at Target
          </h1>

          {/* Subtext */}
          <p className="text-center text-gray-500 mb-6">
            Complete a short survey to unlock your exclusive reward.
          </p>

          {/* CTA Button */}
          <Button 
            asChild
            className="w-full bg-[#CC0000] hover:bg-[#A30000] text-white py-6 rounded-xl text-lg font-semibold flex items-center justify-center gap-2"
          >
            <a href="https://linkthem.net/aff_c?offer_id=250&aff_id=4877">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="pb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-gray-500 text-sm">Expect More. Pay Less.</span>
          <div className="flex items-center gap-1 text-green-600">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-medium">Verified Offer</span>
          </div>
        </div>
        <p className="text-gray-400 text-xs px-4 text-center">*Voucher valid upon completion of program requirements. Subject to terms and conditions. Not sponsored or endorsed by Target.</p>
      </div>
    </div>
  )
}
