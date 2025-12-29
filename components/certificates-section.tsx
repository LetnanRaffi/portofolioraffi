"use client"
import { useState } from "react"
import { Award, ChevronLeft, ChevronRight, X, Maximize2, FileText } from "lucide-react"

const certificates = [
    {
        name: "Introduction to Information Security",
        file: "/assetpdf/Certificate-of-Completion-Introduction-to-Information-Security_copy.pdf",
        issuer: "Online Course",
    },
    {
        name: "Introduction to Modern AI",
        file: "/assetpdf/IntrotoModernAIUpdate20250910-30-xd0tvk.pdf",
        issuer: "Online Course",
    },
    {
        name: "IT Networking Webinar - 29 November 2025",
        file: "/assetpdf/Muhamad Raffi Pasha Sertifikat Webinar IT Networking 29 November 2025.pdf",
        issuer: "Webinar",
    },
    {
        name: "IT Webinar - 27 November 2025",
        file: "/assetpdf/Muhamad Raffi Pasha Sertifikat webinar 27 November 2025.pdf",
        issuer: "Webinar",
    },
    {
        name: "IT Webinar - 27 Oktober 2025",
        file: "/assetpdf/Muhamad Raffi Pasha Sertifikat webinar 27 Oktober 2025.pdf",
        issuer: "Webinar",
    },
    {
        name: "IT Webinar - 29 Oktober 2025",
        file: "/assetpdf/Muhamad Raffi Pasha Sertifikat webinar 29 Oktober 2025.pdf",
        issuer: "Webinar",
    },
    {
        name: "Jaringan Komputer Dasar - ID Networkers",
        file: "/assetpdf/Muhamad-Raffi-Pasha-Jaringan-Dasar-Sertifikat-Jaringan-Komputer-Dasar-LMS-ID-Networkers_copy.pdf",
        issuer: "ID Networkers",
    },
    {
        name: "Mikrotik Dasar - ID Networkers",
        file: "/assetpdf/Muhamad-Raffi-Pasha-Mikrotik-Dasar-Sertifikat-Mikrotik-Dasar-LMS-ID-Networkers_copy.pdf",
        issuer: "ID Networkers",
    },
    {
        name: "Professional Course Certificate",
        file: "/assetpdf/sertifikat_course_653_5142944_011025203850_copy.pdf",
        issuer: "Online Course",
    },
    {
        name: "RaffiTech Solutions Document",
        file: "/assetpdf/Document from RaffiTech Solutions.pdf",
        issuer: "RaffiTech Solutions",
    },
    {
        name: "AC Certificate",
        file: "/assetpdf/AC-820-66823520-25_copy.pdf",
        issuer: "Professional Certification",
    },
]

export function CertificatesSection() {
    const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null)
    const [isFullscreen, setIsFullscreen] = useState(false)

    const openCertificate = (index: number) => {
        setSelectedCertificate(index)
    }

    const closeCertificate = () => {
        setSelectedCertificate(null)
        setIsFullscreen(false)
    }

    const navigateCertificate = (direction: 'prev' | 'next') => {
        if (selectedCertificate === null) return
        if (direction === 'prev') {
            setSelectedCertificate(selectedCertificate === 0 ? certificates.length - 1 : selectedCertificate - 1)
        } else {
            setSelectedCertificate(selectedCertificate === certificates.length - 1 ? 0 : selectedCertificate + 1)
        }
    }

    return (
        <section className="py-32 px-6 bg-black text-white border-t border-gray-900">
            <div className="mx-auto max-w-7xl">
                <div className="mb-20">
                    <p className="text-xs tracking-widest text-gray-600 font-mono mb-4">/ 04. CREDENTIALS</p>
                    <h2 className="text-5xl md:text-6xl font-black">
                        CERTIFICATES & <span className="text-blue-500">ACHIEVEMENTS</span>
                    </h2>
                    <p className="text-gray-400 mt-6 max-w-2xl">
                        Professional certifications and credentials earned through continuous learning and dedication to excellence.
                    </p>
                </div>

                {/* Certificate Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            onClick={() => openCertificate(index)}
                            className="group border border-gray-800 p-6 hover:border-blue-500/50 transition-all duration-300 cursor-pointer bg-gray-900/30 hover:bg-gray-900/50"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 border border-gray-700 group-hover:border-blue-500/50 transition-colors">
                                    <Award className="size-6 text-blue-500" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-base mb-1 text-white group-hover:text-blue-400 transition-colors truncate">
                                        {cert.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 font-mono">{cert.issuer}</p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 group-hover:text-blue-400 transition-colors">
                                <FileText className="size-4" />
                                <span>Click to view certificate</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* PDF Viewer Modal */}
                {selectedCertificate !== null && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
                        <div className={`relative bg-gray-900 border border-gray-800 ${isFullscreen ? 'w-full h-full' : 'w-[95%] max-w-6xl h-[90vh]'} flex flex-col`}>
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-4 border-b border-gray-800">
                                <div className="flex items-center gap-4">
                                    <Award className="size-5 text-blue-500" />
                                    <div>
                                        <h3 className="font-bold text-white">{certificates[selectedCertificate].name}</h3>
                                        <p className="text-xs text-gray-500">{certificates[selectedCertificate].issuer}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setIsFullscreen(!isFullscreen)}
                                        className="p-2 hover:bg-gray-800 rounded transition-colors"
                                        title="Toggle Fullscreen"
                                    >
                                        <Maximize2 className="size-5 text-gray-400 hover:text-white" />
                                    </button>
                                    <button
                                        onClick={closeCertificate}
                                        className="p-2 hover:bg-gray-800 rounded transition-colors"
                                        title="Close"
                                    >
                                        <X className="size-5 text-gray-400 hover:text-white" />
                                    </button>
                                </div>
                            </div>

                            {/* PDF Embed */}
                            <div className="flex-1 relative bg-gray-950">
                                <iframe
                                    src={certificates[selectedCertificate].file}
                                    className="w-full h-full"
                                    title={certificates[selectedCertificate].name}
                                />
                            </div>

                            {/* Navigation Controls */}
                            <div className="flex items-center justify-between p-4 border-t border-gray-800">
                                <button
                                    onClick={() => navigateCertificate('prev')}
                                    className="flex items-center gap-2 px-4 py-2 border border-gray-700 hover:border-blue-500 hover:text-blue-500 transition-colors text-sm"
                                >
                                    <ChevronLeft className="size-4" />
                                    Previous
                                </button>
                                <span className="text-sm text-gray-500 font-mono">
                                    {selectedCertificate + 1} / {certificates.length}
                                </span>
                                <button
                                    onClick={() => navigateCertificate('next')}
                                    className="flex items-center gap-2 px-4 py-2 border border-gray-700 hover:border-blue-500 hover:text-blue-500 transition-colors text-sm"
                                >
                                    Next
                                    <ChevronRight className="size-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
