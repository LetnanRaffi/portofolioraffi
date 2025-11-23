"use client"
import { Mail, Github, ArrowUpRight, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 bg-black text-white border-t border-gray-900">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest text-gray-600 font-mono mb-6">/ 04. KONTAK</p>
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            MARI BANGUN
            <br />
            <span className="text-blue-500">SESUATU YANG HEBAT</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Saya selalu tertarik untuk mendiskusikan peluang baru, proyek yang menantang, atau solusi IT yang inovatif.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <a
            href="mailto:muhamadraffipasha@gmail.com"
            className="border border-gray-800 p-8 hover:border-blue-500 transition-colors group"
          >
            <Mail className="size-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-sm text-gray-400 break-all mb-2">muhamadraffipasha@gmail.com</p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              Hubungi saya <ArrowUpRight className="size-4" />
            </p>
          </a>

          <a
            href="https://wa.me/6289532894934"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-800 p-8 hover:border-blue-500 transition-colors group"
          >
            <Phone className="size-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
            <p className="text-sm text-gray-400 mb-2">+62 895-3289-49434</p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              Chat langsung <ArrowUpRight className="size-4" />
            </p>
          </a>

          <a
            href="https://github.com/LetnanRaffi"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-800 p-8 hover:border-blue-500 transition-colors group"
          >
            <Github className="size-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-lg mb-2">GitHub</h3>
            <p className="text-sm text-gray-400 mb-2">github.com/LetnanRaffi</p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              Lihat project saya <ArrowUpRight className="size-4" />
            </p>
          </a>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-xs text-gray-600 font-mono">
            © 2025 MUHAMAD RAFFI PASHA — MEMBANGUN INFRASTRUKTUR IT YANG ANDAL
          </p>
        </div>
      </div>
    </section>
  )
}
