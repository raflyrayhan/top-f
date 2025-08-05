"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Spin Pack Filter Module",
    category: "Polymer Filtration",
    image: "/portfolio/spinpack.jpg",
    description:
      "Design and fabrication of spin pack filtration housing for a polyester plant. Delivered with full QA/QC documentation."
  },
  {
    title: "Pressure Vessel Skid",
    category: "Fabrication",
    image: "/portfolio/pressurevessel.jpg",
    description:
      "Custom-built ASME pressure vessel on skid-mounted frame for offshore application."
  },
  {
    title: "Basket Strainer Assembly",
    category: "Strainer System",
    image: "/portfolio/strainer.jpg",
    description:
      "Stainless steel strainer package fabricated for power plant cooling water system."
  },
  {
    title: "Tray Column Internals",
    category: "Process Equipment",
    image: "/portfolio/tray.jpg",
    description:
      "Fabrication and supply of sieve tray components and downcomers for a distillation column revamp."
  },
  {
    title: "Precision Nozzle Set",
    category: "Machined Parts",
    image: "/portfolio/precision.jpg",
    description:
      "High-precision machined nozzle and adaptors for melt pump system. Tolerances ±0.01mm."
  }
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Header with background */}
      <motion.div
        className="relative h-[300px] md:h-[220px] w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/aboutnew.jpg"
          alt="Portfolio Header"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/60 to-transparent z-10" />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white text-center mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Project Portfolio
          </motion.h1>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto py-20 px-6">
        <motion.p
          className="text-center text-gray-300 max-w-3xl mx-auto mb-14 text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Discover some of our featured works across filtration, fabrication, and engineered solutions. Each project highlights TOP-F’s commitment to quality, safety, and technical excellence.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#2a2a2a] rounded-xl overflow-hidden border border-[#3a3a3a] shadow-md"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-green-500 mb-2">{project.category}</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
