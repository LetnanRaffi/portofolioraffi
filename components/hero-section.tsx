/* eslint-disable @next/next/no-img-element */
"use client"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen bg-black text-white relative flex items-center justify-center px-6 py-12">
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Name and info */}
          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-widest text-gray-600 font-mono mb-8">EST. 1998</p>

              <h1 className="text-6xl md:text-7xl xl:text-8xl font-black leading-none mb-8">
                <span className="block text-blue-500">MUHAMAD</span>
                <span className="block text-blue-500">RAFFI PASHA</span>
              </h1>
            </div>

            <div className="space-y-3 text-sm font-mono border-l-2 border-gray-800 pl-6">
              <p className="text-gray-300">/ LINUX SYSTEMS</p>
              <p className="text-gray-300">/ NETWORK & SERVERS</p>
              <p className="text-gray-300">/ VIRTUALIZATION</p>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
              Growing up with curiosity for technology, I explore systems, networks, and infrastructure. Building stable
              and reliable solutions through hands-on experience.
            </p>

            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-blue-500 hover:bg-blue-600 text-white font-mono text-sm px-8"
            >
              GET IN TOUCH
            </Button>
          </div>

          {/* Right side - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-[380px] h-[520px] border-2 border-gray-800 overflow-hidden">
                <img
                  src="/images/6131821227232922887.jpg"
                  alt="Muhamad Raffi Pasha"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-black border border-gray-800 px-6 py-3">
                <p className="text-xs tracking-widest text-gray-600 font-mono">IT PROFESSIONAL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
