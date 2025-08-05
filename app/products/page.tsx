"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const productData = [
    {
        group: "Fabricated Items",
        description:
            "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.",
        image:"/fabricateditems.png",
        items:["Fabricated Item 1", "Fabricated Item 2", "Fabricated Item 3", "Fabricated Item 4", "Fabricated Item 5"],
    },
  {
    group: "Screen Filter & Gasket",
    description:
        "TOP-F provides a complete set of elements used in spin pack filtration — a critical step in the production of synthetic fibers (spinning). Our filtration and gasket components are designed to improve and innovate your process, serving applications such as synthetic fibers (PET, PA, PP & Carbon), films (PP, PET, PC, PS, PVBH, PE), non-wovens, PET bottles, extrusion, polycarbonate, and technical polymers of the latest generation. Also suitable for rubbers, silicones, resins, paints, and hot melts.",
    image: "/Screen&Gasket.png",
    items: ["Round Gasket", "Halfmoon Gasket Aluminum", "Inlet Gasket Aluminum", "Oblong Gasket Copper", "Square Filter", "Round Filter", "Donut Filter", "Oblong Filter", "Halfmoon Filter"]
  },
  {
    group: "Candle Filter",
    description:
      "TOP-F Candle Filters are precision-engineered filtration elements designed for high-efficiency removal of contaminants in liquid and gas processes. Commonly used in polymer production, chemical processing, and high-pressure filtration systems, our candle filters offer excellent dirt-holding capacity, long service life, and easy maintenance. They are ideal for ensuring consistent product quality in continuous operation environments.",
    image: "/products/fabrication.png",
    items: ["Cylinder Filter", "Hydraulic oil filter", "Filter COmpressor", "Filter Flow Water", "Chiller oil filter"],
  },
  {
    group: "Bucket Strainer",
    description:
      "TOP-F Strainers are robust mechanical filters designed to remove solid particles from liquids and gases, protecting downstream equipment and improving overall system performance. Available in various configurations such as basket, cone, Y-type, and T-type, our strainers are suitable for applications in petrochemical plants, water treatment, power generation, and general industrial processes. Built from high-grade stainless steel and customizable to client specifications, they ensure reliable operation even in harsh environments.",
    image: "/products/polymer.png",
    items: ["Screen Changer", "Pelletizer Blade", "Melt Pump"],
  },
  {
    group: "Tray & Accesories",
    description:
      "TOP-F supplies a wide range of column internals including trays and accessories designed to optimize mass transfer efficiency in distillation, absorption, and stripping processes. Our product range includes sieve trays, valve trays, bubble cap trays, downcomers, and support structures — all engineered to meet ASME and industry standards. With a focus on durability, hydraulic performance, and ease of installation, these components are widely used in oil & gas refineries, petrochemical plants, and chemical processing units.",
    image: "/products/polymer.png",
    items: ["Trays", "Titanium SBN", "Trays-Distributor", "Packing Ring", "Accessories Trays"],
  },
  {
    group: "Precision Parts",
    description:
      "TOP-F delivers high-precision engineered parts tailored for demanding industrial applications that require tight tolerances and superior surface finish. Our precision components — including nozzles, adaptors, connectors, and threaded elements — are manufactured using CNC machining and high-grade materials to ensure dimensional accuracy and mechanical integrity. These parts are widely used in polymer extrusion, instrumentation, chemical processing, and OEM assemblies where reliability and consistency are critical.",
    image: "/products/polymer.png",
    items: ["Burner Trip-Mat.C276", "Mix Feed-UNS 6600", "PTFE/Teflon-SBN", "Titanium SBN"],
  }
];

export default function ProductPage() {
  const [selectedGroup, setSelectedGroup] = useState(productData[0]);

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white">
      <motion.div
        className="relative h-[300px] md:h-[210px] w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/aboutnewone.jpg"
          alt="Product Header"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/60 to-transparent z-10" />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white text-center mt-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Products
          </motion.h1>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <motion.div
            className="bg-[#2a2a2a] rounded-lg p-6 space-y-4 w-full md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {productData.map((group, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedGroup(group)}
                className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 font-medium ${
                  selectedGroup.group === group.group
                    ? "bg-[#267e16] text-white"
                    : "bg-[#444] text-gray-200 hover:bg-[#555]"
                }`}
              >
                {group.group}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedGroup.group}
              className="flex-1 bg-[#ececec] rounded-lg p-6 flex flex-col lg:flex-row gap-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-black mb-2">
                  {selectedGroup.group}
                </h2>
                <p className="text-sm text-gray-800 mb-4 text-justify">
                  {selectedGroup.description}
                </p>
                <ul className="space-y-2 text-lg text-white">
                  {selectedGroup.items.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#2b2b2b] px-4 py-2 rounded-md border border-[#444]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 flex items-center justify-center ">
                <Image
                  src={selectedGroup.image}
                  alt={selectedGroup.group}
                  width={300}
                  height={300}
                  className="rounded-lg object-contain"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}