"use client"

import React from "react"
import { useState } from "react"
import { ArrowRight, Check, Circle, Diamond, Flame } from "lucide-react"

export default function Plans() {
  const [billingCycle, setBillingCycle] = useState("monthly")

  // Pricing data with monthly and yearly options
  const plans = {
    basic: {
      monthly: 39.99,
      yearly: 399.9, // 10 months price (2 months free)
    },
    standard: {
      monthly: 69.99,
      yearly: 699.9,
    },
  }

  return (
    <section className="w-full py-16 md:py-24 bg-gray-950 relative overflow-hidden">
      {/* Grid background overlay */}

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-purple-300 text-sm">Subscription</span>
            <div className="h-px w-6 bg-purple-400/50"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Choose your plan</h2>
          <p className="text-purple-200/80 text-sm">All plans come with a 60-day money-back guarantee.</p>

          <div className="mt-8 mb-16 inline-flex items-center bg-[#1a0b3b]/50 p-1 rounded-full border border-purple-900/50">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${billingCycle === "monthly" ? "bg-[#3a1f7a] text-white" : "text-purple-200"}`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${billingCycle === "yearly" ? "bg-[#3a1f7a] text-white" : "text-purple-200"}`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8 backdrop-blur-sm max-w-xs mx-auto w-full">
            <div className="absolute -top-5 left-6">
              <div className="w-10 h-10 rounded-full bg-[#1a0b3b] border border-purple-700/50 flex items-center justify-center">
                <Flame className="w-5 h-5 text-purple-400" />
              </div>
            </div>
            <div className="pt-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-3">Basic</h3>
              <p className="text-sm text-purple-200/70">
                Harnessing the power of artificial intelligence to revolutionize industries and enhance human
                experiences.
              </p>
            </div>

            <ul className="space-y-3 mb-12">
              <FeatureItem>30+ Features</FeatureItem>
              <FeatureItem>Priority Support</FeatureItem>
              <FeatureItem>4 Team Members</FeatureItem>
              <FeatureItem>Premium Features</FeatureItem>
              <FeatureItem>Data Insights</FeatureItem>
            </ul>

            <div className="mt-auto">
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold text-white">${plans.basic[billingCycle]}</span>
                <span className="text-sm text-purple-300/70 ml-2">
                  /per {billingCycle === "monthly" ? "month" : "year"}
                </span>
              </div>
              <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-purple-700/50 text-white text-sm font-medium hover:bg-purple-900/20 transition-colors">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="relative rounded-2xl border border-indigo-500/50 bg-gray-900/50 p-6 backdrop-blur-sm ring-2 ring-indigo-500/20 transform -translate-y-16 max-w-xs mx-auto w-full shadow-[0_0_30px_-5px] shadow-indigo-500/30">
            <div className="absolute -top-5 left-6">
              <div className="w-10 h-10 rounded-full bg-[#1a0b3b] border border-purple-500/50 flex items-center justify-center">
                <Diamond className="w-5 h-5 text-purple-400" />
              </div>
            </div>
            <div className="pt-6 mb-2">
              <h3 className="text-xl font-bold text-white mb-3">Standard</h3>
              <p className="text-sm text-purple-200/70">
                Harnessing the power of artificial intelligence to revolutionize industries and enhance human
                experiences.
              </p>
            </div>

            <ul className="space-y-3 mb-12">
              <FeatureItem>Access 80+ Enterprise Features</FeatureItem>
              <FeatureItem>Priority Support</FeatureItem>
              <FeatureItem>10 Team Members</FeatureItem>
              <FeatureItem>Premium Features</FeatureItem>
              <FeatureItem>Unlimited Data Insights</FeatureItem>
            </ul>

            <div className="mt-auto">
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold text-white">${plans.standard[billingCycle]}</span>
                <span className="text-sm text-purple-300/70 ml-2">
                  /per {billingCycle === "monthly" ? "month" : "year"}
                </span>
              </div>
              <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-all hover:shadow-[0_0_20px_-5px] hover:shadow-indigo-500/50">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm max-w-xs mx-auto w-full">
            <div className="absolute -top-5 left-6">
              <div className="w-10 h-10 rounded-full bg-[#1a0b3b] border border-purple-700/50 flex items-center justify-center">
                <Circle className="w-5 h-5 text-purple-400 fill-purple-400" />
              </div>
            </div>
            <div className="pt-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-3">Enterprise</h3>
              <p className="text-sm text-purple-200/70">
                Harnessing the power of artificial intelligence to revolutionize industries and enhance human
                experiences.
              </p>
            </div>

            <ul className="space-y-3 mb-12">
              <FeatureItem>Access All Features</FeatureItem>
              <FeatureItem>Priority Support</FeatureItem>
              <FeatureItem>Unlimited Members</FeatureItem>
              <FeatureItem>Premium Features</FeatureItem>
              <FeatureItem>Unlimited Data Insights</FeatureItem>
            </ul>

            <div className="mt-auto">
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold text-white">Contact</span>
              </div>
              <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-purple-700/50 text-white text-sm font-medium hover:bg-purple-900/20 transition-colors">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ children }) {
  return (
    <li className="flex items-center gap-2 text-sm text-purple-100">
      <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
      <span>{children}</span>
    </li>
  )
}

