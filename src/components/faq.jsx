"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// FaqSection Component
const FaqSection = React.forwardRef(({ className, title, description, items, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn("py-12 md:py-16 w-full bg-black text-white", className)}
      {...props}
    >
      <div className="container max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16" // Removed max-w-3xl mx-auto text-center
        >
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-white">
            {title}
          </h2>
          {description && <p className="text-base text-gray-300 max-w-2xl">{description}</p>}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-5xl mx-auto space-y-3">
          {items.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
})
FaqSection.displayName = "FaqSection"

// Internal FaqItem component
const FaqItem = React.forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { question, answer, index } = props

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className={cn(
        "group rounded-xl",
        "transition-all duration-200 ease-in-out",
        "border border-neutral-600",
        isOpen ? "bg-neutral-900" : "hover:bg-neutral-900/50",
      )}
    >
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 h-auto justify-between hover:bg-transparent text-white"
      >
        <h3
          className={cn(
            "text-lg font-medium transition-colors duration-200 text-left",
            "text-gray-300",
            isOpen && "text-white",
          )} 
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "p-0.5 rounded-full flex-shrink-0",
            "transition-colors duration-200",
            isOpen ? "text-primary" : "text-muted-foreground",
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </Button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
          >
            <div className="px-6 pb-4 pt-2">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-sm text-gray-400 leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
})
FaqItem.displayName = "FaqItem"

// Main FAQ Component with example data
function FAQ() {
  // Example FAQ items
  const faqItems = [
    {
      question: "What is Next.js?",
      answer:
        "Next.js is a React framework that enables functionality such as server-side rendering, static site generation, and API routes. It provides a great developer experience with features like fast refresh and file-based routing.",
    },
    {
      question: "How do I get started with Next.js?",
      answer:
        "To get started with Next.js, you can use the create-next-app command: 'npx create-next-app@latest'. This will set up a new Next.js project with all the necessary configurations.",
    },
    {
      question: "What is the App Router?",
      answer:
        "The App Router is Next.js's new routing system introduced in version 13. It uses a file-system based router built on React Server Components, supporting layouts, nested routing, loading states, error handling, and more.",
    },
    {
      question: "What are Server Components?",
      answer:
        "Server Components are a new type of React component that render on the server. They can fetch data directly, access backend resources securely, and reduce the client-side JavaScript bundle size.",
    },
    {
      question: "How do I deploy a Next.js application?",
      answer:
        "Next.js applications can be easily deployed on Vercel with zero configuration. You can also deploy to other platforms like Netlify, AWS, or any Node.js hosting service.",
    },
  ]

  return (
    <main className="min-h-screen py-12 bg-black">
      <FaqSection
        title="Frequently Asked Questions"
        description="Find answers to commonly asked questions about our platform and services."
        items={faqItems}
      />
    </main>
  )
}

// Export both components
export { FaqSection }
export default FAQ

