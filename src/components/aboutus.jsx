import React from 'react';
import { Apple, AppWindow as Windows, Store as PlayStore, Zap, ArrowRight } from 'lucide-react';

function Aboutus() {
  return (
    <>
      <div className="bg-black p-4 mt-40">
        <div className="max-w-6xl mx-auto">
          {/* New title section */}
          <div className="relative mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-700 mb-4">
              <Zap className="w-4 h-4 text-white" />
              <span className="text-white font-medium">Services</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-2">More Than AI</h2>
            <p className="text-gray-400 max-w-lg">
              Step into the future with AI, engineered to tackle the most complex challenges.
            </p>

            <div
              className="absolute top-15 right-30 text-[180px] font-bold select-none hidden lg:block z-0"
              style={{
                background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              SERVICES
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black flex items-center justify-center p-4">
        <div className="border border-neutral-600 bg-neutral-950 rounded-3xl p-2">

          <div className="flex flex-col md:flex-row gap-3 w-full max-w-6xl">
            {/* Desktop Section */}
            <div className="flex-1 relative h-[500px] w-full bg-neutral-900/60  backdrop-blur-xl rounded-[20px] shadow-[0_0_0_0,inset_0_0_30px_rgba(200,200,200,0.1)] border border-neutral-700 text-gray-100 p-4">
              <h2 className="text-4xl font-bold mb-4 text-white">AI-Powered Invoice Processing</h2>
              <p className="text-gray-400 mb-8">
              Upload invoices, and our AI will instantly extract, analyze, and organize key data with high accuracy. Convert the data into multiple file formats, including Excel, CSV, and JSON, for seamless integration into your workflow.
              </p>
              <div className="flex gap-4 mb-8">
                <button className="bg-black text-white hover:bg-gray-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.45)] group py-3 px-9 rounded-xl transition-all flex items-center justify-center gap-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              <div className="w-full h-60 rounded-lg"></div>
              <img 
                src="/public/imgs/chart.png" 
                alt="Desktop Preview" 
                className="absolute bottom-4 right-4 w-11/12 h-64 rounded-lg object-cover"
              />
            </div>

            {/* Mobile Section */}
            <div className="flex-1 relative h-[500px] w-full bg-neutral-900/60 backdrop-blur-xl rounded-[20px] shadow-[0_0_0_0,inset_0_0_30px_rgba(200,200,200,0.1)] border border-neutral-700 text-gray-100 p-4">
              <h2 className="text-4xl font-bold mb-4 text-white">AI Chatbot for Finance</h2>
              <p className="text-gray-400 mb-8">
              Interact with our AI chatbot to perform real-time calculations, generate financial reports, and analyze invoice data effortlessly. Get instant insights and automate complex financial tasks with ease.

</p>
              <div className="flex gap-4 mb-6">
                <button className="bg-black text-white hover:bg-gray-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.45)] group py-3 px-9 rounded-xl transition-all flex items-center justify-center gap-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              <div className="w-full h-60  rounded-lg"></div>
              <img 
                src="/public/imgs/phone.png" 
                alt="Mobile Preview" 
                className="absolute bottom-4 right-4 w-11/12 h-64 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;