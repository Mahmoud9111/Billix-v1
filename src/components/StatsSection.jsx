import { Star } from "lucide-react"

export default function StatsSection() {
  return (
    <div className="relative w-full bg-[#000000] py-20 px-4 md:px-6 lg:px-8 overflow-hidden mt-40">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Left to right gradient overlay */}
        <div className="absolute inset-0 bg-black opacity-75 z-10"></div>

        {/* Blob */}

        {/* Square Grid - Bigger cells */}
        <div className="h-full w-full">
          <div
            className="h-full w-full grid"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
              gridTemplateRows: "repeat(auto-fill, minmax(130px, 1fr))",
              
              gridAutoFlow: "row",
            }}
          >
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="border border-[#454545]"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Content with gray-950 background */}
      <div className="relative z-20 max-w-6xl mx-auto">
      <div className="p-8 md:p-12 rounded-t-2xl grid md:grid-cols-2 gap-12 items-center bg-black">
      <div className="flex flex-col items-center md:items-start gap-8">
            <div className="flex items-center gap-2 text-[#ffffff] text-sm">
              <div className="h-px w-6 bg-[#395F71]"></div>
              <span>indicator</span>
              <div className="h-px w-6 bg-[#395F71]"></div>
            </div>

            <h2 className="text-white text-3xl md:text-4xl font-bold text-center md:text-left leading-tight">
              We Are Proud To Have
              <br />A Great Indicator.
            </h2>

            <div className="bg-[#00000]/60 backdrop-blur-xl rounded-xl p-4 flex items-center gap-3 shadow-[0_0_0_0,inset_0_0_30px_rgba(200,200,200,0.20)] border border-neutral-700">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold">4.9/5</span>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <span className="text-gray-400 text-xs">Based on 34 reviews on Clutch</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Only */}
          <div className="grid grid-cols-2 gap-8 relative">
            {/* Large decorative blob */}
            <div className="absolute right-2/4 top-1/2 -translate-y-1/2 w-[100px] h-[300px] rounded-full bg-[#395F71] blur-[80px] pointer-events-none"></div>

            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-[#8EACBB] to-[#395F71] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(142,172,187,0.3)]">
                11.5M<span className="text-white">+</span>
              </span>
              <span className="text-gray-400 text-sm mt-2">Clients Revenue</span>
            </div>

            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-[#395F71] to-[#26414F] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(57,95,113,0.3)]">
                11.5M<span className="text-white">+</span>
              </span>
              <span className="text-gray-400 text-sm mt-2">Clients Revenue</span>
            </div>

            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-[#26414F] to-[#8EACBB] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(38,65,79,0.3)]">
                21.9M<span className="text-white">+</span>
              </span>
              <span className="text-gray-400 text-sm mt-2">Transactions recorded</span>
            </div>

            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-[#8EACBB] to-[#26414F] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(142,172,187,1.2)]">
                300<span className="text-white">+</span>
              </span>
              <span className="text-gray-400 text-sm mt-2">Project Done</span>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="text-center max-w-7xl mx-auto rounded-b-2xl bg-black py-16 px-8 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-transparent after:via-[#395F71] after:via-50% after:to-transparent -z-[10]">
        <p className="text-gray-300 text-md mb-16">Trusted by 500+ Brands & Companies</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-14">
            {["Upglam", "Nutrilix", "Investify", "Knewish", "SIKKA", "SEKORO"].map((brand) => (
              <div key={brand} className="text-gray-300 opacity-70 font-semibold text-xl">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

