"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[100vh] w-full bg-black">
        <Image
          src="/aboutbg.jpg"
          alt="About Hero"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute w-full h-[30vh] bg-white/80 top-1/3 z-5" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
          <h1 className="text-6xl md:text-[4rem] font-bold text-black mb-4">About Us</h1>
          <Image src="/REB Logo.png" alt="logoreb" width={180} height={180} />
        </div>
      </section>

      {/* Company Profile Split Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
            PT. Rekayasa Energi Bersama
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Founded in 2018, PT. Rekayasa Energi Bersama (REB) is an Indonesian engineering
            company specializing in package systems for oil & gas, energy, and petrochemical sectors.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We provide smart, reliable, and innovative solutions — from design to fabrication — tailored
            to meet clients’ requirements with a commitment to quality, HSE, and on-time delivery. consists of many experience discipline engineer such as Process, Mechanical, IEC Engineer and Drafters, that have experiences in packages design and building.
          </p>
          <br/>
          <p className="text-gray-700 text-lg leading-relaxed">
            We also invests on some license software which commonly used in package design like HYSYS, PV Elite, Solid Edge, AutoCAD, VPID, InstruCalc and many more software.
          </p>
        </div>
        <div className="w-full h-[300px] relative">
          <Image
            src="/about-engineering.jpg"
            alt="Engineering Illustration"
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Integrity", desc: "We act with honesty and transparency in all our dealings." },
              { title: "Innovation", desc: "We embrace continuous improvement in every project." },
              { title: "Commitment", desc: "We stay true to our promises and strive for excellence." },
            ].map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <h4 className="text-xl font-semibold text-red-700 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-700 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to collaborate with REB?
        </h2>
        <p className="mb-6 text-lg">Explore our projects or get in touch with our professional team.</p>
        <a
          href="/contact"
          className="inline-block bg-white text-red-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </>
  );
}
