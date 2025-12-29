"use client"
import { useState, useRef, useEffect } from "react"
import { Award, X, Maximize2, ChevronLeft, ChevronRight, Grid3X3, FileText, ExternalLink } from "lucide-react"

// Deduplicated certificates based on OCR content analysis
// Removed duplicates: files with "(1)" suffix that have same content
const certificates = [
    {
        id: 1,
        name: "Google IT Support Professional Certificate",
        file: "/assetpdf/AC-820-66823520-25_copy.pdf",
        image: "/images/certificate/AC-820-66823520-25_copy/AC-820-66823520-25_copy_page-0001.jpg",
        issuer: "Google / Coursera",
        date: "2024",
        category: "Professional",
    },
    {
        id: 2,
        name: "Introduction to Information Security",
        file: "/assetpdf/Certificate-of-Completion-Introduction-to-Information-Security_copy.pdf",
        image: "/images/certificate/Certificate-of-Completion-Introduction-to-Information-Security_copy/Certificate-of-Completion-Introduction-to-Information-Security_copy_page-0001.jpg",
        issuer: "Coursera",
        date: "2024",
        category: "Security",
    },
    {
        id: 3,
        name: "Introduction to Modern AI",
        file: "/assetpdf/IntrotoModernAIUpdate20250910-30-xd0tvk.pdf",
        image: "/images/certificate/Certificate-of-Completion-Introduction-to-Information-Security_copy/IntrotoModernAIUpdate20250910-30-xd0tvk/hal_1.jpg",
        issuer: "Online Course",
        date: "2025",
        category: "AI/ML",
    },
    {
        id: 4,
        name: "IT Networking Webinar",
        file: "/assetpdf/Muhamad Raffi Pasha Sertifikat Webinar IT Networking 29 November 2025.pdf",
        image: "/images/certificate/Certificate-of-Completion-Introduction-to-Information-Security_copy/Muhamad Raffi Pasha Sertifikat Webinar IT Networking 29 November 2025/hal_1.jpg",
        issuer: "Webinar",
        date: "29 Nov 2025",
        category: "Networking",
    },
    {
        id: 5,
        name: "IT Infrastructure Webinar",
        file: "/assetpdf/Muhamad Raffi Pasha Sertifikat webinar 27 November 2025.pdf",
        image: "/images/certificate/Certificate-of-Completion-Introduction-to-Information-Security_copy/Muhamad Raffi Pasha Sertifikat webinar 27 November 2025/hal_1.jpg",
        issuer: "Webinar",
        date: "27 Nov 2025",
        category: "Infrastructure",
    },
    {
        id: 6,
        name: "Cloud Computing Webinar",
        file: "/assetpdf/Muhamad Raffi Pasha Sertifikat webinar 27 Oktober 2025.pdf",
        image: "/images/certificate/Certificate-of-Completion-Introduction-to-Information-Security_copy/Muhamad Raffi Pasha Sertifikat webinar 27 Oktober 2025/hal_1.jpg",
        issuer: "Webinar",
        date: "27 Oct 2025",
        category: "Cloud",
    },
    {
        id: 7,
        name: "System Administration Webinar",
        file: "/assetpdf/Muhamad Raffi Pasha Sertifikat webinar 29 Oktober 2025.pdf",
        image: "/images/certificate/Certificate-of-Completion-Introduction-to-Information-Security_copy/Muhamad Raffi Pasha Sertifikat webinar 29 Oktober 2025/hal_1.jpg",
        issuer: "Webinar",
        date: "29 Oct 2025",
        category: "SysAdmin",
    },
    {
        id: 8,
        name: "Jaringan Komputer Dasar",
        file: "/assetpdf/Muhamad-Raffi-Pasha-Jaringan-Dasar-Sertifikat-Jaringan-Komputer-Dasar-LMS-ID-Networkers_copy.pdf",
        image: "/images/certificate/Certificate-of-Completion-Introduction-to-Information-Security_copy/Muhamad-Raffi-Pasha-Jaringan-Dasar-Sertifikat-Jaringan-Komputer-Dasar-LMS-ID-Networkers_copy/hal_1.jpg",
        issuer: "ID Networkers",
        date: "2024",
        category: "Networking",
    },
    {
        id: 9,
        name: "Mikrotik Dasar",
        file: "/assetpdf/Muhamad-Raffi-Pasha-Mikrotik-Dasar-Sertifikat-Mikrotik-Dasar-LMS-ID-Networkers_copy.pdf",
        image: "/images/certificate/Certificate-of-Completion-Introduction-to-Information-Security_copy/Muhamad-Raffi-Pasha-Mikrotik-Dasar-Sertifikat-Mikrotik-Dasar-LMS-ID-Networkers_copy/hal_1.jpg",
        issuer: "ID Networkers",
        date: "2024",
        category: "Networking",
    },
    {
        id: 10,
        name: "Professional IT Course Certificate",
        file: "/assetpdf/sertifikat_course_653_5142944_011025203850_copy.pdf",
        image: "/images/certificate/Certificate-of-Completion-Introduction-to-Information-Security_copy/sertifikat_course_653_5142944_011025203850_copy/hal_1.jpg",
        issuer: "Online Course",
        date: "2025",
        category: "Professional",
    },
]

export function CertificatesSection() {
    const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [showAllModal, setShowAllModal] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const marqueeRef = useRef<HTMLDivElement>(null)

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

    // Duplicate certificates for seamless infinite scroll
    const duplicatedCerts = [...certificates, ...certificates, ...certificates]

    return (
        <section id="certificates" className="py-32 px-6 bg-black text-white border-t border-gray-900 overflow-hidden">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <p className="text-xs tracking-widest text-gray-600 font-mono mb-4">/ 04. CREDENTIALS</p>
                        <h2 className="text-5xl md:text-6xl font-black">
                            CERTIFICATES & <span className="text-blue-500">ACHIEVEMENTS</span>
                        </h2>
                        <p className="text-gray-400 mt-6 max-w-2xl">
                            Professional certifications and credentials earned through continuous learning and dedication to excellence.
                        </p>
                    </div>

                    {/* See All Button */}
                    <button
                        onClick={() => setShowAllModal(true)}
                        className="group flex items-center gap-3 px-6 py-3 border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 self-start md:self-auto"
                    >
                        <Grid3X3 className="size-5 text-blue-500" />
                        <span className="font-bold text-sm tracking-wide">SEE ALL</span>
                        <ExternalLink className="size-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </button>
                </div>

                {/* Infinite Scroll Marquee */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                    <div
                        ref={marqueeRef}
                        className="flex gap-6 overflow-hidden"
                    >
                        <div
                            className={`flex gap-6 ${isPaused ? 'animate-marquee-paused' : 'animate-marquee'}`}
                            style={{
                                width: 'max-content',
                            }}
                        >
                            {duplicatedCerts.map((cert, index) => (
                                <div
                                    key={`${cert.id}-${index}`}
                                    onClick={() => openCertificate(index % certificates.length)}
                                    className="group relative flex-shrink-0 w-[320px] border border-gray-800 bg-gray-900/30 hover:border-blue-500/50 hover:bg-gray-900/60 transition-all duration-500 cursor-pointer overflow-hidden"
                                >
                                    {/* Certificate Image Preview */}
                                    <div className="relative h-48 overflow-hidden bg-gray-950">
                                        <img
                                            src={cert.image}
                                            alt={cert.name}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

                                        {/* Category Badge */}
                                        <span className="absolute top-3 right-3 px-2 py-1 text-[10px] font-bold tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                            {cert.category}
                                        </span>
                                    </div>

                                    {/* Certificate Info */}
                                    <div className="p-5">
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="p-2 border border-gray-700 group-hover:border-blue-500/50 transition-colors">
                                                <Award className="size-4 text-blue-500" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-bold text-sm text-white group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                                                    {cert.name}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-gray-500 font-mono">{cert.issuer}</span>
                                            <span className="text-blue-500 font-bold">{cert.date}</span>
                                        </div>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-bold text-sm">
                                            <FileText className="size-4" />
                                            View Certificate
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Total Certificates", value: certificates.length.toString() },
                        { label: "Professional", value: certificates.filter(c => c.category === "Professional").length.toString() },
                        { label: "Networking", value: certificates.filter(c => c.category === "Networking").length.toString() },
                        { label: "Verified", value: "100%" },
                    ].map((stat, i) => (
                        <div key={i} className="p-4 border border-gray-800 bg-gray-900/20 text-center">
                            <div className="text-2xl md:text-3xl font-black text-blue-500">{stat.value}</div>
                            <div className="text-xs text-gray-500 mt-1 font-mono">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* See All Modal */}
            {showAllModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md overflow-y-auto p-4 md:p-8">
                    <div className="relative w-full max-w-7xl max-h-[95vh] flex flex-col bg-gray-950 border border-gray-800">
                        {/* Modal Header */}
                        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-800 bg-gray-950 z-10">
                            <div>
                                <h3 className="text-2xl font-black text-white">All Certificates</h3>
                                <p className="text-sm text-gray-500 mt-1">{certificates.length} credentials earned</p>
                            </div>
                            <button
                                onClick={() => setShowAllModal(false)}
                                className="p-3 hover:bg-gray-800 rounded-full transition-colors"
                            >
                                <X className="size-6 text-gray-400 hover:text-white" />
                            </button>
                        </div>

                        {/* Certificate Grid */}
                        <div className="flex-1 overflow-y-auto p-6">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {certificates.map((cert, index) => (
                                    <div
                                        key={cert.id}
                                        onClick={() => {
                                            setShowAllModal(false)
                                            openCertificate(index)
                                        }}
                                        className="group border border-gray-800 bg-gray-900/30 hover:border-blue-500/50 hover:bg-gray-900/60 transition-all duration-300 cursor-pointer overflow-hidden"
                                    >
                                        {/* Image */}
                                        <div className="relative h-36 overflow-hidden bg-gray-950">
                                            <img
                                                src={cert.image}
                                                alt={cert.name}
                                                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                                            <span className="absolute top-2 right-2 px-2 py-0.5 text-[9px] font-bold tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                                {cert.category}
                                            </span>
                                        </div>

                                        {/* Info */}
                                        <div className="p-4">
                                            <h4 className="font-bold text-sm text-white group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">
                                                {cert.name}
                                            </h4>
                                            <div className="flex items-center justify-between text-xs">
                                                <span className="text-gray-500">{cert.issuer}</span>
                                                <span className="text-blue-500 font-mono">{cert.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* PDF Viewer Modal */}
            {selectedCertificate !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md">
                    <div className={`relative bg-gray-950 border border-gray-800 ${isFullscreen ? 'w-full h-full' : 'w-[95%] max-w-6xl h-[90vh]'} flex flex-col`}>
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-800">
                            <div className="flex items-center gap-4">
                                <div className="p-2 border border-gray-700">
                                    <Award className="size-5 text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">{certificates[selectedCertificate].name}</h3>
                                    <p className="text-xs text-gray-500">{certificates[selectedCertificate].issuer} • {certificates[selectedCertificate].date}</p>
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
        </section>
    )
}
