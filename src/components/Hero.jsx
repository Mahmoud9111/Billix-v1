"use client"

import { Button } from "../components/ui/Button"
import { motion } from "framer-motion"
import HeaderHero from "../components/HeaderHero"

export default function Hero() {
  return (
    <>
    <HeaderHero/>
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-950 to-gray-950 text-white overflow-hidden relative">
      {/* Decorative blob - adjusted positioning and visibility */}
      <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-br from-[#395F71] to-[#395F71] opacity-30 blur-3xl pointer-events-none z-[1]" />

      <div className="container mx-auto px-4 py-20">

        {/* Announcement banner */}
        <div className="flex justify-center mb-16 mt-20 relative z-10">
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <p className="text-sm md:text-base">
              We just raised $20M in Series B.{" "}
              <a href="#" className="underline underline-offset-2">
                Learn more
              </a>
            </p>
          </div>
        </div>

        {/* Hero content */}
        <div className="max-w-5xl mx-auto text-center mb-16 relative z-10"> 
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium mb-6 tracking-tight bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff] bg-clip-text text-transparent">
            Modern analytics
            <br />
            <span className="bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff] bg-clip-text text-transparent">for the modern world</span>
          </h1>
          <p className="text-lg md:text-xl text-[#ffffff] mb-10 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
            tristique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-black hover:bg-cyan-50 px-6 py-6 text-base">Download the app</Button>
            <Button variant="outline" className="border-white/30 hover:bg-white/10 px-6 py-6 text-base">
              Talk to an expert
            </Button>      

    {/* Decorative blob - adjusted positioning and visibility */}
    <div className="absolute top-60 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] rounded-full bg-gradient-to-br from-[#395F71] to-[#395F71] opacity-30 blur-3xl pointer-events-none z-[1]" />


          </div>

        </div>


        {/* Dashboard Image */}
        <div className="max-w-6xl mx-auto mt-20 relative z-10">
          <motion.div
            className="bg-white rounded-xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.img 
              src="../public/dash2.png"
              alt="Dashboard"
              className="w-full h-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
                {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-5/6 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none z-1" />
        </div>




      </div>






    </div>
    </>
  )
}

