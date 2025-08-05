"use client";
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';

const certificates = [
  {
    title: "ISO 9001:2015",
    description: "Quality Management System Certification for design, fabrication and maintenance of energy systems.",
    image: "/CERT 1.png",
    pdfUrl: "/pdfs/CERT 1.pdf",
  },
  {
    title: "ISO 14001:2015",
    description: "Environmental Management System for fabrication and energy project handling.",
    image: "/CERT 2.png",
    pdfUrl: "/pdfs/CERT 2.pdf",
  },
  {
    title: "OHSAS 18001:2007",
    description: "Occupational Health and Safety standard for safe working procedures.",
    image: "/CERT 3.png",
    pdfUrl: "/pdfs/CERT 3.pdf",
  },
  {
    title: "ASME U-Stamp",
    description: "Certification for Pressure Vessel design and manufacturing in accordance with ASME Boiler Code.",
    image: "/CERT 4.png",
    pdfUrl: "/pdfs/CERT 4.pdf",
  },
];


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 }
  })
};

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <main className="w-screen h-screen overflow-hidden relative">
        <Image
          src="/aboutnew.jpg"
          alt="Hero Background"
          fill
          priority
          className="absolute top-0 left-0 object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-6"
          >
            <Image
              src="/favicon.png"
              alt="TOP-F Logo"
              width={310}
              height={310}
              className="mx-auto drop-shadow-lg"
            />
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-white"
          >
            PT. TECHNO ORBIT PARTICLE FILTRATION
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            TOP-F is a specialist in Filtration and Fabrication, serving Oil & Gas, Petrochemical, Polymer, Mining, Power Plant, Steel Mill, Drilling, and more.
          </motion.p>
        </div>
      </main>

      {/* ABOUT SECTION */}
      <section id="about" className="w-full min-h-screen bg-[#ffffff] flex flex-col md:flex-row overflow-hidden">
        <div className="relative w-full md:w-1/2 h-[300px] md:h-auto md:min-h-screen after:content-[''] after:absolute after:top-0 after:right-0 after:w-1/3 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent">
          <Image
            src="/weldingabout.jpeg"
            alt="About TOP-F"
            fill
            className="object-cover object-center w-full h-full"
            priority
          />
        </div>


        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-12 bg-[#ffffff]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] leading-tight mb-6">
            Best Quality & <br />Delivery
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base md:text-lg text-[#333] leading-relaxed mb-8">
            PT. <strong className="text-[#387f1a]">Techno Orbit Particle Filtration (TOP-F)</strong> is an engineering company committed to delivering advanced filtration and fabrication solutions. Since 2018, we have supported the oil & gas, petrochemical, and energy sectors with high-quality products and dedicated service — from engineering design to fabrication and delivery.
          </motion.p>
          <motion.a>
          </motion.a>
        </motion.div>
      </section>

      {/* PRODUCT SECTION */}
     <section className="w-full bg-[#1a1a1a] py-20 px-6">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Legal Certification
      </motion.h2>
      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10 text-base md:text-lg"> Our operations and services are backed by internationally recognized certifications, ensuring quality, safety, and compliance in every project we deliver. </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {certificates.map((item, index) => (
          <motion.a
            key={index}
            href={item.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            variants={fadeUp}
            className="relative bg-[#1a1a1a] text-white px-6 pt-8 pb-6 border border-[#2d2d2d] before:absolute before:top-2 before:left-2 before:w-full before:h-full before:bg-[#333333] before:-z-10 flex flex-col min-h-[380px] transition hover:border-green-500 hover:shadow-lg cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
              className="mb-5 h-[300px] object-contain mx-auto"
            />
            <h3 className="text-xl font-semibold mb-4 text-center">{item.title}</h3>
            <p className="text-sm text-gray-300 text-center leading-relaxed flex-1">
              {item.description}
            </p>
          </motion.a>
        ))}
      </motion.div>
    </section>


 <footer className="bg-[#f5f5f5dd] text-black pt-12 pb-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Company */}
        <div className="col-span-1">
          <Image
            src="/favicon.png"
            alt="TOP-F Logo"
            width={80}
            height={80}
            className="mb-4"
          />
          <p className="text-sm text-black leading-relaxed">
            PT Techno Orbit Particle Filtration <br />
            Specialist in Filtration and Fabrication
          </p>
        </div>

        {/* Page Links */}
        <div>
          <h4 className="text-lg text-black font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-black">
            <li><Link href="/" className="hover:text-[#387f1a]">Home</Link></li>
            <li><a href="#about" className="hover:text-[#387f1a]">About</a></li>
            <li><a href="#products" className="hover:text-[#387f1a]">Products</a></li>
            <li><Link href="/#partners" className="hover:text-[#387f1a]">Partners</Link></li>
            <li><Link href="/#contact" className="hover:text-[#387f1a]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="md:col-span-2">
          <h4 className="text-lg font-semibold mb-4 text-black">Contact Details</h4>
          <p className="text-sm text-black leading-relaxed">
            <p className="text-bold text-black">Warehouse</p>
            Jl. Jababeka IV E Blok.V No.78Q, Jababeka 1, Cikarang Utara <br />
            Bekasi, 17534 Indonesia <br /><br />
            <p className="text-bold text-black">Office</p>
            Office Park Karawaci Ruko Pinangsia Selatan Blok F/72<br/>Tangerang, Banten 15138
            <br/><br/>
            <strong>Phone:</strong> +62 21 89109606 <br />
            <strong>Fax:</strong> +62 21 89109607 <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:marketing@top-f.co.id" className="hover:underline">
              marketing@top-f.co.id
            </a>
          </p>
        </div>
      </div>
    </footer>

    </>
  );
}
