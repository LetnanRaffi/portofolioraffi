"use client"
import { CheckCircle2 } from "lucide-react"

const timeline = [
  {
    period: "Present",
    title: "Continuous Learning & Development",
    description: "Actively expanding knowledge in cloud technologies, automation, and modern infrastructure practices.",
    highlights: [
      "Exploring containerization and orchestration",
      "Learning infrastructure as code",
      "Studying cloud platforms (AWS, Azure, GCP)",
    ],
  },
  {
    period: "Recent Years",
    title: "Advanced System Administration",
    description: "Deepened expertise in Linux systems, virtualization, and network infrastructure.",
    highlights: [
      "Managed virtual machine environments",
      "Optimized system performance and security",
      "Implemented backup and disaster recovery solutions",
    ],
  },
  {
    period: "Early Career",
    title: "Foundation Building",
    description: "Started with hardware troubleshooting and basic system administration.",
    highlights: [
      "Hardware diagnostics and repairs",
      "OS installation and configuration",
      "Network setup and troubleshooting",
    ],
  },
  {
    period: "The Beginning",
    title: "Discovery & Curiosity",
    description: "Developed a passion for understanding how technology works.",
    highlights: [
      "Self-taught exploration of Linux",
      "Understanding computer architecture",
      "Building first home lab environment",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section className="py-32 px-6 bg-black text-white border-t border-gray-900">
      <div className="mx-auto max-w-5xl">
        <div className="mb-20">
          <p className="text-xs tracking-widest text-gray-600 font-mono mb-4">/ 03. JOURNEY</p>
          <h2 className="text-5xl md:text-6xl font-black">
            PROFESSIONAL <span className="text-blue-500">PATH</span>
          </h2>
        </div>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-gray-800 pb-8 last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />

              <div className="border border-gray-800 p-6 hover:border-blue-500/50 transition-colors">
                <span className="text-xs font-mono text-blue-500 font-bold">{item.period}</span>
                <h3 className="text-xl font-bold mb-2 mt-1 text-white">{item.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{item.description}</p>
                <div className="space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="size-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-400">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
