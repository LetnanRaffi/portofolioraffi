"use client"
import { Server, HardDrive, Network, Container, Settings, Shield, Database, Cpu } from "lucide-react"

const skills = [
  {
    icon: Server,
    name: "Linux Systems",
    description: "Debian, Ubuntu, CentOS, system administration",
  },
  {
    icon: Network,
    name: "Networking",
    description: "TCP/IP, routing, switching, network diagnostics",
  },
  {
    icon: Container,
    name: "Virtualization",
    description: "VirtualBox, VMware, hypervisor management",
  },
  {
    icon: HardDrive,
    name: "Storage Solutions",
    description: "RAID, NAS, SAN, backup strategies",
  },
  {
    icon: Settings,
    name: "System Optimization",
    description: "Performance tuning, resource management",
  },
  {
    icon: Shield,
    name: "Security",
    description: "Firewalls, access control, security hardening",
  },
  {
    icon: Database,
    name: "Server Management",
    description: "Web servers, database servers, application deployment",
  },
  {
    icon: Cpu,
    name: "Hardware",
    description: "Diagnostics, repairs, component optimization",
  },
]

export function SkillsSection() {
  return (
    <section className="py-32 px-6 bg-black text-white border-t border-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <p className="text-xs tracking-widest text-gray-600 font-mono mb-4">/ 02. EXPERTISE</p>
          <h2 className="text-5xl md:text-6xl font-black">
            TECHNICAL <span className="text-blue-500">SKILLS</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {skills.map((skill, index) => (
            <div key={index} className="border border-gray-800 p-6 hover:border-blue-500/50 transition-colors group">
              <div className="mb-4">
                <skill.icon className="size-8 text-blue-500 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-bold text-base mb-2 text-white">{skill.name}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="border border-gray-800 p-10">
          <h3 className="font-bold text-2xl mb-8 text-white font-mono tracking-wider">TOOLS & TECHNOLOGIES</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Linux",
              "Windows Server",
              "VirtualBox",
              "Debian",
              "Ubuntu",
              "CentOS",
              "Docker",
              "Nginx",
              "Apache",
              "MySQL",
              "PostgreSQL",
              "Git",
              "Bash",
              "Python",
              "PowerShell",
              "Active Directory",
              "DNS",
              "DHCP",
              "VPN",
              "Firewall",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 border border-gray-800 text-xs font-medium font-mono hover:border-blue-500 hover:text-blue-500 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
