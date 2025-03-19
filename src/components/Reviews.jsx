"use client"

import { useEffect, useRef } from "react"
import createGlobe from "cobe"
import { Avatar } from "../components/ui/avatar"
import { motion } from "framer-motion"

// Testimonial card component
const Reviews = ({ avatar, name, username, text }) => {
  return (
    <motion.div
      className="bg-[#0a0a20]/80 rounded-xl p-4 sm:p-6 md:p-8 backdrop-blur-sm border border-[#1a1a3a]/30 h-full min-w-[280px] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px] mx-2 sm:mx-3 md:mx-4"
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
      text: "This app is a testament to the potential of AI. The image generation is mind-blowing.",
    },
    {
      avatar: "https://v0.dev/placeholder.svg?height=40&width=40",
      name: "Leodo17",
      username: "leodo17",
      text: "The integration capabilities of this AI app are unparalleled.",
    },
    {
      avatar: "https://v0.dev/placeholder.svg?height=40&width=40",
      name: "CindyCandy",
      username: "CindyC688",
      text: "I've never experienced such seamless text to image and text-to-video transformations.",
    },
    {
      avatar: "https://v0.dev/placeholder.svg?height=40&width=40",
      name: "JohnD",
      username: "JohnD456",
      text: "This AI app seamlessly blends innovation with user-friendly design. From image generation to data analysis.",
    },
    {
      avatar: "https://v0.dev/placeholder.svg?height=40&width=40",
      name: "CindyCandy",
      username: "CindyC688",
      text: "This app is a testament to the potential of AI. The image generation is mind-blowing.",
    },
    {
      avatar: "https://v0.dev/placeholder.svg?height=40&width=40",
      name: "Leodo17",
      username: "leodo17",
      text: "The integration capabilities of this AI app are unparalleled.",
    },
  ]

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
      glowColor: [1, 1, 1],
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
    <div className="bg-gray-950 text-white py-16 min-h-screen flex flex-col items-center overflow-hidden">
      {/* Title first */}
      <div className="w-full text-center  z-20 ">
        <h1 className=" mt-40 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl mx-auto px-4 text-white drop-shadow-lg">
          What Our Clients Say
        </h1>
      </div>
      
      {/* Globe placed directly under the title */}
      <div className="relative w-full max-w-7xl mx-auto ">
        <div className="relative w-full h-[400px] flex items-center justify-center z-10 ">
          {/* Globe canvas */}
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
              <div className="absolute bottom-0 left-0 right-0 h-[110%] bg-gradient-to-t from-gray-950 via-gray-950 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials below the globe */}
      <div className="max-w-full w-full overflow-hidden -mt-60 z-40">
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 w-[50%] h-full bg-gradient-to-r from-[#030318] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-[50%] h-full bg-gradient-to-l from-[#030318] to-transparent z-10"></div>
          
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