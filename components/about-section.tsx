"use client"
import { Code2, Wrench, Network } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 bg-black text-white border-t border-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <p className="text-xs tracking-widest text-gray-600 font-mono mb-4">/ 01. TENTANG</p>
          <h2 className="text-5xl md:text-6xl font-black">
            CERITA <span className="text-blue-500">SAYA</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p className="text-base">
              Nama saya <span className="font-bold text-white">Muhamad Raffi Pasha</span>. Saya tumbuh dengan rasa ingin
              tahu yang kuat terhadap teknologi — rasa ingin tahu yang membuat saya mengeksplorasi bagaimana sistem
              bekerja, bagaimana jaringan terhubung, dan mengapa perangkat bisa gagal atau berhasil.
            </p>
            <p className="text-base">
              Saya mulai dengan memperbaiki masalah hardware kecil dan bereksperimen dengan berbagai sistem operasi.
              Seiring waktu, saya beralih ke networking, Linux, server, dan virtualisasi. Saya belajar sebagian besar
              melalui pengalaman langsung: merusak sistem, memperbaikinya, dan memahami semuanya secara detail.
            </p>
            <p className="text-base">
              Hari ini, saya terus berkembang di bidang IT dengan komitmen untuk perbaikan dan pemecahan masalah nyata.
              Tujuan saya sederhana: membangun sistem yang stabil, efisien, dan andal — dan terus mendorong kemampuan
              saya ke depan.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-800 p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-500/10">
                  <Code2 className="size-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-white">Ahli Sistem</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Keahlian mendalam dalam lingkungan Linux, optimasi Windows, dan troubleshooting tingkat sistem
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-800 p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-500/10">
                  <Network className="size-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-white">Network Engineer</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Terampil dalam konfigurasi jaringan, diagnostik, dan desain infrastruktur
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-800 p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-500/10">
                  <Wrench className="size-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-white">Problem Solver</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Pendekatan hands-on untuk memecahkan tantangan teknis dunia nyata dengan presisi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
