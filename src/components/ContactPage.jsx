import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 select-none">
        <h1 className="text-[20vw] font-bold tracking-tighter">CONTACT</h1>
      </div>



      <div className="container mx-auto px-4 py-20 relative z-10">


        <div className="grid lg:grid-cols-2 gap-12 mt-8">
          {/* Left column - Text and contact info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold">Get in touch</h1>
              <p className="text-gray-400 max-w-md">
                Have questions or ready to transform your business with AI automation?
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="relative bg-neutral-900/60 backdrop-blur-xl rounded-xl p-6 flex items-center shadow-[0_0_0_0,inset_0_0_30px_rgba(200,200,200,0.1)] border border-neutral-700">
                <div className="w-16 h-16 bg-neutral-950 rounded-lg flex items-center justify-center mr-6">
                  <Mail className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400">Email us</p>
                  <p className="font-medium text-lg">contact@billx.dev</p>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <ArrowUpRight className="w-6 h-6" />
                </Button>
              </div>

              {/* Phone */}
              <div className="relative bg-neutral-900/60 backdrop-blur-xl rounded-xl p-6 flex items-center shadow-[0_0_0_0,inset_0_0_30px_rgba(200,200,200,0.1)] border border-neutral-700">
                <div className="w-16 h-16 bg-neutral-950 rounded-lg flex items-center justify-center mr-6">
                  <Phone className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400">Call us</p>
                  <p className="font-medium text-lg">(+94) 76 576 8767</p>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <ArrowUpRight className="w-6 h-6" />
                </Button>
              </div>

              {/* Location */}
              <div className="relative bg-neutral-900/60 backdrop-blur-xl rounded-xl p-6 flex items-center shadow-[0_0_0_0,inset_0_0_30px_rgba(200,200,200,0.1)] border border-neutral-700">
                <div className="w-16 h-16 bg-neutral-950 rounded-lg flex items-center justify-center mr-6">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400">Our location</p>
                  <p className="font-medium text-lg">Crosby Street, NY, US</p>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <ArrowUpRight className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="relative bg-neutral-900/60 backdrop-blur-xl rounded-xl p-6 shadow-[0_0_0_0,inset_0_0_30px_rgba(200,200,200,0.1)] border border-neutral-700">
            <form className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Name"
                  className="bg-neutral-800/60 border-0 h-14 text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-neutral-800/60 border-0 h-14 text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Message"
                  className="bg-gray-800/60  min-h-[240px] border border-neutral-700 text-white placeholder:text-gray-500 resize-none"
                />
              </div>
              <Button className="w-full bg-white text-black hover:bg-gray-200 h-14 mt-4 font-medium">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

