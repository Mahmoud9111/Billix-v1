import React from 'react';
import { Zap } from 'lucide-react';

const cards = [
  {
    title: " Ultra-Fast AI Processing ",
    description: " Instantly extract, categorize, and process invoice data with cutting-edge AI, saving you time.",
    image: "/public/imgs/board.png"
  },
  {
    title: " Seamless File Export",
    description: "Effortlessly convert invoices into Excel, PDF, or text formats, ensuring smooth integration with your existing systems.",
    image: "/public/imgs/click.png"
  },
  {
    title: "Supports All Invoice Types",
    description: "Our AI adapts to any invoice format, allowing you to process multiple types without limitations.",
    image: "/public/imgs/cpuout.png"
  },
  {
    title: "Powerful Analysis & Custom Forms",
    description: "Generate insightful reports, create custom forms, and unlock financial trends with AI-driven analytics.",
    image: "/public/imgs/chart4.png"
  },
  {
    title: "User-Friendly & AI-Driven",
    description: "Enjoy an intuitive, easy-to-use platform with an integrated AI chatbot for instant calculations and smart assistance.",
    image: "/public/imgs/drag&drop.png"
  }
];

function Benefits() {
  return (
    <div className="bg-black text-white py-10 px-4 mt-40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* New title section */}
        <div className="relative mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-700 mb-4">
            <Zap className="w-4 h-4 text-white" />
            <span className="text-white font-medium">Our Benefits</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-2">Why Us ?</h2>
          <p className="text-gray-400 max-w-lg">
          Smarter Invoicing, Faster Decisions, Seamless Automation.
          </p>

          <div
            className="absolute top-2 right-40 text-[180px] font-bold select-none hidden lg:block z-0"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            BENEFITS
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
          {cards.slice(0, 3).map((card, index) => (
            <div key={index} className="relative h-full bg-neutral-900/60 backdrop-blur-xl rounded-[20px] overflow-hidden shadow-[0_0_0_0,inset_0_0_30px_rgba(200,200,200,0.1)] border border-neutral-700 p-4">
              <div className="h-60 rounded-[20px] mb-3 flex items-center justify-center overflow-hidden border border-neutral-700">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-2">
                <h3 className="text-lg font-bold mb-1">{card.title}</h3>
                <p className="text-sm text-gray-400">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative">
          {cards.slice(3).map((card, index) => (
            <div key={index} className="relative h-full bg-neutral-900/60 backdrop-blur-xl rounded-[20px] overflow-hidden shadow-[0_0_0_0,inset_0_0_30px_rgba(200,200,200,0.1)] border border-neutral-700 p-4">
              <div className="border-neutral-700 h-48 rounded-[20px] mb-4 flex items-center justify-center overflow-hidden ">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover " 
                />
              </div>
              <div className="p-2">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-400">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-1/2 top-3/4 -translate-x-1/2 w-[100px] h-[150px] rounded-full bg-gradient-to-br from-[#ffffff] to-[#ffffff] opacity-20 blur-3xl pointer-events-none" />
      </div>
    </div>
  );
}

export default Benefits;