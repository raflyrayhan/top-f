"use client";
import Image from 'next/image';
import { useState } from 'react';

const businessCards = [
  {
    title: "Oil & Gas",
    image: "/oilngasicon.png",
    description: "Providing engineering and equipment solutions for the oil and gas industry."
  },
  {
    title: "Gas Transporter",
    image: "/gastransporticon.png",
    description: "Specialized in gas compression and transportation systems for energy distribution."
  },
  {
    title: "Petrochemical",
    image: "/petrochemicon.png",
    description: "Delivering systems and packages for refining and petrochemical processing."
  },
  {
    title: "EPC Contractor",
    image: "/epcicon.png",
    description: "Engineering, Procurement, and Construction services for industrial projects."
  },
  {
    title: "Power Plant",
    image: "/powerplanticon.png",
    description: "Supplying package equipment and engineering for power generation industries."
  },
  {
    title: "Fabricator",
    image: "/fabricatoricon.png",
    description: "In-house fabrication capabilities for skid packages, piping, and structural steel."
  }
];

export default function Home() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + businessCards.length) % businessCards.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % businessCards.length);
  };

  const visibleCards = [
    businessCards[startIndex],
    businessCards[(startIndex + 1) % businessCards.length],
    businessCards[(startIndex + 2) % businessCards.length]
  ];

  return (
    <>
      {/* Hero Section */}
      <main className="w-screen h-screen overflow-hidden relative m-0 p-0">
        <Image
          src="/hero.jpg"
          alt="Hero Background"
          fill
          priority
          className="absolute top-0 left-0 object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold uppercase">
            <strong>PT.</strong> <strong className='text-black'>REKAYASA</strong> <strong className='text-red-800'>ENERGI</strong> <strong className='text-gray-300'>BERSAMA</strong>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl">
            Indonesian Engineering Company delivering package solutions for oil & gas
            and energy sectors since 2018.
          </p>
          <a
            href="#about"
            className="mt-10 border border-white px-6 py-2 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition"
          >
            Learn More
          </a>
        </div>
      </main>

      {/* About Section */}
      <section className="w-full min-h-screen bg-white flex flex-col md:flex-row items-center justify-between px-8 py-16 gap-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/aboutprev.png"
            alt="about preview"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About <strong className='text-red-600'>REB</strong></h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            REB (Rekayasa Energi Bersama) is a proudly local Indonesian company, providing smart and reliable package solutions for the power and oil & gas industries since 2018. With passionate engineers and trusted tools, we bring your ideas to life — from design to delivery.
          </p>
          <br/>
          <a href="/about" className="mt-10 border border-black px-6 py-2 text-sm uppercase tracking-wider bg-red-600 hover:text-white font-bold transition border-r-2">
          More About Us
          </a>
        </div>
      </section>

      {/* Products & Services */}
      <section className="w-full bg-white py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-12">
          PRODUCTS & SERVICES
        </h2>

        <div className="flex items-center justify-center gap-6 px-4">
          <button onClick={handlePrev} className="rounded-full p-4 bg-red-500 text-white shadow-lg hover:bg-red-700">
            &#8592;
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch px-4">
            {visibleCards.map((item, index) => (
              <div key={index} className="flex flex-col h-full items-center text-center p-6 border rounded-lg shadow-md">
                <Image src={item.image} alt={item.title} width={120} height={120} className="mb-4 h-[120px] object-contain" />
                <h3 className="text-2xl font-bold text-red-700 mb-4">{item.title}</h3>
                <p className="text-gray-800 flex-1 mb-6">
                  {item.description}
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          <button onClick={handleNext} className="rounded-full p-4 bg-red-500 text-white shadow-lg hover:bg-red-700">
            &#8594;
          </button>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full bg-white py-3 flex items-center justify-center gap-8">
        <div className="w-full bg-white py-16 px-4 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Partners</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mb-8">
            We are proud to collaborate with industry-leading partners who share our
            commitment to engineering excellence, innovation, and integrity.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Image src="/qwp.png" alt="QWP Logo" width={150} height={50} className="object-contain" />
            <Image src="/stauper.png" alt="Stauper Logo" width={150} height={50} className="object-contain" />
            <Image src="/termochimica.png" alt="Termochimica Logo" width={150} height={50} className="object-contain" />
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-b from-[#f1e7e7b7] to-[#c1c1c18c] pt-8 pb-6 text-black border-t-[1px] border-black">
        <div className="max-w-7xl mx-9 px-9 grid grid-cols-1 md:grid-cols-4 gap-2 text-sm">
        
        {/* PRODUCTS + EXPERIENCE */}
        <div>
          <h3 className="text-lg font-bold text-red-600 mb-2">Products</h3>
          <ul className="space-y-1 text-black">
            <li>Integrated Steel</li>
            <li>Engineered Items</li>
            <li>Package Modular</li>
          </ul>
          <h3 className="text-lg font-bold text-red-600 mt-4 mb-2">Experience</h3>
          <ul className="space-y-1 text-black">
            <li>Closed Projects List</li>
            <li>Projects Gallery</li>
          </ul>
        </div>

        {/* PARTNERS */}
        <div>
          <h3 className="text-lg font-bold text-red-600 mb-2">Partners</h3>
          <ul className="space-y-1 text-black">
            <li>Integrated Steel Manufacturers</li>
            <li>OEM Manufacturers</li>
            <li>Supporting Services-Local</li>
            <li>Supporting Services-Global</li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="text-lg font-bold text-red-600 mb-2">About Us</h3>
          <ul className="space-y-1 text-black">
            <li>Quality & HSE</li>
            <li>Core Value</li>
            <li>Unique Profile</li>
            <li>Key Differentiators</li>
            <li>Our Strategy</li>
          </ul>
        </div>

        {/* CONTACT + LOGO */}
        <div className="text-right md:text-left">
          <div className="flex justify-end md:justify-start mb-2">
            <Image
              src="/REB Logo.png"
              alt="Reka Energi"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
          <h3 className="text-lg font-bold text-red-600 mb-2">Contact Us</h3>
          <ul className="space-y-1 text-black text-sm">
            <li><span className="font-semibold">P:</span> +6221 576 1725 (hunting)</li>
            <li><span className="font-semibold">F:</span> +6221 576 2581</li>
            <li><span className="font-semibold">Whatsapp:</span> +62811 1013 5360</li>
            <li><span className="font-semibold">E-mail:</span> sales@reka-energi.com</li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
}