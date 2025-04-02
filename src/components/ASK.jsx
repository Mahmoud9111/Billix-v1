"use client"

import React, { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ASK() {
  const [question, setQuestion] = useState("")

  /** @param {React.FormEvent} e */
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle the submission logic here
    console.log("Question submitted:", question)
    setQuestion("")
  }

  return (
    <div className="relative flex h-[900px] flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Top gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent z-10" />
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Dots background pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-20 w-full max-w-3xl px-4">
        <h1 className="mb-16 text-center text-4xl font-bold">Ask Billix AI Anything</h1>

        <form onSubmit={handleSubmit} className="relative">
          <Input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="What's the first rule of Fight Club?"
            className="h-14 rounded-full bg-neutral-800 px-6 pr-14 text-white placeholder:text-gray-400 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button
            type="submit"
            size="icon"
            className="absolute right-1.5 top-1.5 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 border-0"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  )
}

