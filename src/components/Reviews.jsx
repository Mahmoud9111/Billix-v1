"use client"

import { useEffect, useRef } from "react"
import createGlobe from "cobe"
import { Avatar } from "../components/ui/avatar"
import { motion } from "framer-motion"

// Testimonial card component
const Reviews = ({ avatar, name, username, text }) => {
  return (
    <motion.div
      className="bg-[#000000]/80  rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm border border-zinc-700/30 h-full min-w-[280px] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px] mx-2 sm:mx-3 md:mx-4 shadow-[0_0_0_0,inset_0_0_30px_rgba(57,95,113,0.5)]"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="h-12 w-12 rounded-full overflow-hidden">
          <img src={avatar || "/placeholder.svg"} alt={name} className="h-full w-full object-cover" />
        </Avatar>
        <div>
          <h4 className="font-medium text-white text-base">{name}</h4>
          <p className="text-gray-400 text-sm">@{username}</p>
        </div>
      </div>
      <p className="text-gray-300 text-base leading-relaxed">{text}</p>
    </motion.div>
  )
}

export default function TestimonialsSection() {
  const canvasRef = useRef(null)
  const pointerInteracting = useRef(null)
  const pointerInteractionMovement = useRef(0)
  const fadeInRef = useRef(0)

  // Testimonial data
  const testimonials = [
    {
      avatar: "https://v0.dev/placeholder.svg?height=40&width=40",
      name: "CindyCandy",
      username: "CindyC688",
      text: "This AI tool has completely transformed the way I handle invoices! It extracts data instantly and lets me export it in any format I need. A must-have for businesses!",
    },
    {
      avatar: "https://v0.dev/placeholder.svg?height=40&width=40",
      name: "Leodo17",
      username: "leodo17",
      text: "The integration capabilities are top-notch! This tool seamlessly connects with my accounting software, saving me hours of manual work.",
    },
    {
      avatar: "https://v0.dev/placeholder.svg?height=40&width=40",
      name: "JohnD",
      username: "JohnD456",
      text: "Managing invoices has never been easier. The AI chatbot even helps me with complex calculations on the spot—absolute game-changer!",
    },
    {
      avatar: "https://v0.dev/placeholder.svg?height=40&width=40",
      name: "SarahM",
      username: "SarahM99",
      text: "The ability to create custom forms and templates is fantastic. Now, I can automate my entire invoicing process with ease!",
    },
    {
      avatar: "https://v0.dev/placeholder.svg?height=40&width=40",
      name: "MarkT",
      username: "MarkT987",
      text: "This AI-powered tool makes invoice processing seamless. Upload, analyze, and export with just a few clicks—brilliant!",
    },
  ];
  

  useEffect(() => {
    let phi = 0
    let width = 0
    const onResize = () => {
      const container = canvasRef.current?.parentElement
      width = container ? Math.min(container.offsetWidth * 1.1, 900) : 900
      if (canvasRef.current) {
        canvasRef.current.width = width
        canvasRef.current.height = width
      }
    }
    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 1,
      height: width * 2,
      phi: Math.PI / 4, // Center the globe horizontally
      theta: Math.PI / 15, // Adjust vertical view of the globe
      dark: 3,
      diffuse: 1.2,
      mapSamples: 24000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1],
      markerColor: [0, 1, 1],  
      glowColor: [0.22, 0.37, 0.44],
      markers: [
        { location: [37.7749, -122.4194], size: 0.04 }, // San Francisco
      ],
      onRender: (state) => {
        if (fadeInRef.current < 1) {
          fadeInRef.current += 0.01
          state.phi = phi
        }
        state.phi = phi + pointerInteractionMovement.current
        phi += 0.0003 // Slower rotation
        state.width = width * 2
        state.height = width * 2
      },
    })

    const onPointerDown = (e) => {
      pointerInteracting.current = e.clientX - pointerInteractionMovement.current
      canvasRef.current.style.cursor = "grabbing"
    }

    const onPointerUp = () => {
      pointerInteracting.current = null
      canvasRef.current.style.cursor = "grab"
    }

    const onPointerOut = () => {
      pointerInteracting.current = null
      canvasRef.current.style.cursor = "grab"
    }

    const onPointerMove = (e) => {
      if (pointerInteracting.current !== null) {
        const delta = e.clientX - pointerInteracting.current
        pointerInteractionMovement.current = delta * 0.01
      }
    }

    canvasRef.current.addEventListener("pointerdown", onPointerDown)
    canvasRef.current.addEventListener("pointerup", onPointerUp)
    canvasRef.current.addEventListener("pointerout", onPointerOut)
    canvasRef.current.addEventListener("pointermove", onPointerMove)

    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <div className="bg-black text-white py-16  flex flex-col items-center overflow-hidden mt-40 mb-40">
      
      {/* Globe placed directly under the title */}
      <div className="relative w-full max-w-7xl mx-auto ">
        <div className="relative w-full h-[400px] flex items-center justify-center z-10 ">
          {/* Globe canvas */}

      {/* Title with gradient and background glow */}
      <div className="w-full text-center z-20 relative">
        <div className="absolute left-2/4 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[50px] rounded-full bg-[#395F71] opacity-99 blur-3xl pointer-events-none" />
        <h1 className="ml-72 mb-60 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl mx-auto px-4 bg-gradient-to-b from-white via-zinc-100 to-zinc-800 text-transparent bg-clip-text drop-shadow-lg relative">
          What Our Clients Say
        </h1>
      </div>


          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[600px] h-[600px] relative mt-10">
              <canvas
                ref={canvasRef}
                style={{
                  width: '100%',
                  height: '100%',
                  margin: '80px 10px 80px 0px',
                  cursor: 'grab',
                  contain: 'layout paint size',
                }}
              />
              {/* Adjusted gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-[110%] bg-gradient-to-t from-black via-black to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials below the globe */}
      <div className="max-w-full w-full overflow-hidden -mt-60 z-40">
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 w-[50%] h-full bg-gradient-to-r from-[#000000] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-[50%] h-full bg-gradient-to-l from-[#000000] to-transparent z-10"></div>
          
          {/* Top row - left to right */}
          <motion.div
            className="flex py-4"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <Reviews key={`top-${index}`} {...testimonial} />
              ))}
            </div>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <Reviews key={`top-duplicate-${index}`} {...testimonial} />
              ))}
            </div>
          </motion.div>

          {/* Bottom row - right to left */}
          <motion.div
            className="flex py-4 "
            animate={{
              x: [-1000, 0],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <Reviews key={`bottom-${index}`} {...testimonial} />
              ))}
            </div>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <Reviews key={`bottom-duplicate-${index}`} {...testimonial} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}