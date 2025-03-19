import React from 'react';

const cards = [
  {
    title: "Deep Learning Models",
    description: "Leverage the power of deep neural networks for complex data processing and decision-making.",
    image: "/public/deskimg.PNG"
  },
  {
    title: "Cognitive Automation",
    description: "Transform your business processes with cognitive automation.",
    image: "/images/cognitive.png"
  },
  {
    title: "Advanced NLP",
    description: "Go beyond basic NLP with our advanced NLP capabilities.",
    image: "/images/nlp.png"
  },
  {
    title: "AI-Powered Predictive Maintenance",
    description: "Prevent costly downtime with our AI-driven predictive maintenance feature. By analyzing equipment data in real-time.",
    image: "/images/maintenance.png"
  },
  {
    title: "Computer Vision & Image Recognition",
    description: "Unlock new possibilities with our cutting-edge computer vision technology. Our AI can analyze and interpret visual data.",
    image: "/images/vision.png"
  }
];

function Benefits() {
  return (
    <div className="bg-black text-white py-10 px-4 mt- relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-neutral-800 rounded-full px-3 py-1">
            <span className="text-xs font-medium">Top Features</span>
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-3">More Than AI</h1>
          <p className="text-lg text-gray-400">Step into the future with AI, engineered to tackle the most complex challenges.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
          {cards.slice(0, 3).map((card, index) => (
            <div key={index} className="relative h-full bg-neutral-900/60 backdrop-blur-xl rounded-[20px] overflow-hidden shadow-[0_0_0_0,inset_0_0_30px_rgba(200,200,200,0.1)] border border-neutral-700 p-4">
              <div className="h-40 rounded-[20px] mb-3 flex items-center justify-center overflow-hidden border border-neutral-700">
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