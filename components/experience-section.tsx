"use client"
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Users, Code2, Server } from "lucide-react"

// Experience data with PT Askara internship
const experiences = [
  {
    id: 1,
    type: "internship",
    company: "PT Askara Internal",
    role: "IT Infrastructure Intern",
    division: "IT Infrastructure Division",
    location: "Indonesia",
    period: "2025",
    startDate: "February 2025",
    endDate: "Mei 2025",
    description: "Gained hands-on experience in enterprise IT infrastructure management, network administration, and system maintenance in a professional corporate environment.",
    responsibilities: [
      "Managed and maintained corporate network infrastructure including routers, switches, and access points",
      "Assisted in server administration and virtualization using VMware/Proxmox",
      "Performed troubleshooting and technical support for end-user devices and systems",
      "Implemented network security measures and monitoring solutions",
      "Documented IT procedures and maintained system inventory",
      "Collaborated with senior engineers on infrastructure improvement projects",
    ],
    technologies: ["MikroTik", "Cisco", "Windows Server", "Linux", "VMware", "Active Directory", "Network Security"],
    achievements: [
      "Successfully maintained 99.9% network uptime during internship period",
      "Streamlined help desk ticket resolution time by 40%",
      "Implemented automated backup solution for critical systems",
    ],
  },
]

// Journey milestones
const journeyMilestones = [
  {
    period: "Present",
    title: "Continuous Learning & Development",
    description: "Actively expanding knowledge in cloud technologies, automation, and modern infrastructure practices.",
    highlights: [
      "Exploring containerization and orchestration (Docker, Kubernetes)",
      "Learning infrastructure as code (Terraform, Ansible)",
      "Studying cloud platforms (AWS, Azure, GCP)",
    ],
    icon: Code2,
  },
  {
    period: "2024",
    title: "Professional Experience at PT Askara",
    description: "Applied practical skills in a real-world corporate IT environment, managing infrastructure and providing technical support.",
    highlights: [
      "Enterprise network administration",
      "Server management and virtualization",
      "Technical support and documentation",
    ],
    icon: Building2,
  },
  {
    period: "2023-2024",
    title: "Advanced System Administration",
    description: "Deepened expertise in Linux systems, virtualization, and network infrastructure.",
    highlights: [
      "Managed virtual machine environments",
      "Optimized system performance and security",
      "Implemented backup and disaster recovery solutions",
    ],
    icon: Server,
  },
  {
    period: "Earlier",
    title: "Foundation Building",
    description: "Started with hardware troubleshooting and basic system administration, building the core skills needed for IT infrastructure.",
    highlights: [
      "Hardware diagnostics and repairs",
      "OS installation and configuration",
      "Network setup and troubleshooting",
    ],
    icon: Users,
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6 bg-black text-white border-t border-gray-900">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-xs tracking-widest text-gray-600 font-mono mb-4">/ 03. JOURNEY</p>
          <h2 className="text-5xl md:text-6xl font-black">
            PROFESSIONAL <span className="text-blue-500">PATH</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl">
            My journey from self-taught exploration to professional IT infrastructure management.
          </p>
        </div>

        {/* Featured Experience Card - PT Askara */}
        {experiences.map((exp) => (
          <div key={exp.id} className="mb-20">
            <div className="relative border border-gray-800 bg-gradient-to-br from-gray-900/80 via-gray-900/40 to-gray-950 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl" />

              {/* Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-wider">
                {exp.type === "internship" ? "INTERNSHIP" : "FULL-TIME"}
              </div>

              <div className="relative p-8 md:p-10">
                {/* Company Header */}
                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                  <div className="p-4 border border-gray-700 bg-gray-900/50 w-fit">
                    <Building2 className="size-8 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-blue-400 font-bold">
                        <Briefcase className="size-4" />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Users className="size-4" />
                        {exp.division}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 font-mono">
                        <Calendar className="size-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin className="size-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-8 text-lg border-l-2 border-blue-500/50 pl-4">
                  {exp.description}
                </p>

                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 mb-4 tracking-wider">RESPONSIBILITIES</h4>
                    <div className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="size-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 mb-4 tracking-wider">KEY ACHIEVEMENTS</h4>
                    <div className="space-y-3">
                      {exp.achievements.map((ach, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 border border-gray-800 bg-gray-900/30">
                          <div className="text-blue-500 font-black text-lg">0{idx + 1}</div>
                          <span className="text-sm text-gray-300">{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-8 pt-8 border-t border-gray-800">
                  <h4 className="text-sm font-bold text-gray-400 mb-4 tracking-wider">TECHNOLOGIES & TOOLS</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:border-blue-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Timeline Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-black mb-10 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-blue-500"></span>
            Career Timeline
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-500/50 to-gray-800 hidden md:block" />

            <div className="space-y-6">
              {journeyMilestones.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="relative flex gap-6 group">
                    {/* Timeline Dot */}
                    <div className="relative z-10 hidden md:block">
                      <div className="w-11 h-11 rounded-full bg-gray-900 border-2 border-gray-700 group-hover:border-blue-500 transition-colors flex items-center justify-center">
                        <Icon className="size-5 text-blue-500" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 border border-gray-800 p-6 hover:border-blue-500/50 transition-all duration-300 bg-gray-900/20 hover:bg-gray-900/40">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                        <span className="text-xs font-mono text-blue-500 font-bold bg-blue-500/10 px-2 py-1 w-fit">{item.period}</span>
                        <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      </div>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, idx) => (
                          <span key={idx} className="text-xs text-gray-500 bg-gray-800/50 px-2 py-1">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
