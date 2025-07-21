'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Project = {
  title: string;
  year: string;
  location: string;
  endUser: string;
  client: string;
  images: string[];
  scope: string[];
};

const projects: Project[] = [
  {
    title: 'WET CALIBRATION 2 unit 16” ANSI 600#',
    year: '2017',
    location: 'Randu Blatung, Cepu, Central Java',
    endUser: 'PT. Indonesia Power',
    client: 'PT. Sumber Petrindo Perkasa',
    images: ['/wetcalibration1.png', '/wetcalibration2.png'],
    scope: [
      'USM Dismantling and Packing',
      'Delivery of USM to and from VOSS Calibration Laboratory at Belgium',
      'Organize Client and Government Officer for calibration witness',
      'Provide Calibration Report'
    ]
  },
  {
    title: 'EPC Gas Metering Station, Siberida',
    year: '2017',
    location: 'Siberida',
    endUser: 'PT. Transportasi Gas Indonesia',
    client: 'PT. Yuan Sejati',
    images: ['/epcgas1.png', '/epcgas2.png'],
    scope: [
      'Bid Stage Engineering Backup and Support during Proposal Preparation',
      'Topography and Soil Investigation Service',
      'Provide PMT personnel for engineering',
      'Perform Project Multi Discipline Detail Engineering work',
      'Commissioning Back Up'
    ]
  },
  {
    title: 'RS JARGAS MUSI RAWAS',
    year: '2018',
    location: 'Palembang',
    endUser: 'PT. PERTAGAS',
    client: 'PT. Yuan Sejati',
    images: ['/rsmusi1.jpg', '/rsmusi2.png', '/rsmusi3.png', '/rsmusi4.png'],
    scope: [
      'Bid Stage Engineering Backup and Support during Proposal Preparation',
      'Provide PMT Personnel for Engineering',
      'Perform Project Multi Discipline Detail Engineering work',
      'Commissioning Back Up'
    ]
  },
  {
    title: 'RS JARGAS DELI SERDANG',
    year: '2018',
    location: 'Deli Serdang',
    endUser: 'PT. PERTAGAS',
    client: 'PT. Yuan Sejati',
    images: ['/jargasdeli1.png', '/jargasdeli2.png', '/jargasdeli3.png', '/jargasdeli4.png'],
    scope: [
      'Bid Stage Engineering Backup and Support during proposal preparation',
      'Provide PMT personnel for engineering',
      'Perform Project Multi Discipline Detail Engineering work',
      'Commissioning Back up'
    ]
  },
  {
    title: 'MRS JARGAS Palembang',
    year: '2018',
    location: 'Palembang',
    endUser: 'PT. PERTAGAS',
    client: 'PT. Yuan Sejati',
    images: ['/mrsjargas1.png', '/mrsjargas2.png', '/mrsjargas3.png', '/mrsjargas4.png'],
    scope: [
      'Bid Stage Engineering Backup and Support during proposal preparation',
      'Provide PMT personnel for engineering',
      'Perform Project Multi Discipline Detail Engineering work',
      'Commissioning Back up'
    ]
  }
];

export default function ExperienceCard() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [currentIndexes, setCurrentIndexes] = useState<number[]>(projects.map(() => 0));
  const [modalImage, setModalImage] = useState<string | null>(null);

  const toggleExpanded = (index: number) =>
    setExpanded((prev) => (prev === index ? null : index));

  const nextImage = (index: number) => {
    setCurrentIndexes((prev) => {
      const updated = [...prev];
      updated[index] = (updated[index] + 1) % projects[index].images.length;
      return updated;
    });
  };

  const prevImage = (index: number) => {
    setCurrentIndexes((prev) => {
      const updated = [...prev];
      updated[index] =
        updated[index] === 0
          ? projects[index].images.length - 1
          : updated[index] - 1;
      return updated;
    });
  };

  return (
    <>
      <section className="relative h-[70vh] w-full bg-gradient-to-r from-white to-red-700">
        <div className="absolute inset-0 flex items-center justify-between px-12 text-white z-10">
          <div>
             <br/>
            <Image src="/REB Logo.png" alt="logo" width={150} height={150} />
            <h1 className="text-4xl md:text-6xl font-bold"><strong className='text-red-700'>Projects</strong> <strong className='text-5xl text-black'>&</strong> <strong className='text-gray-500'>Experience</strong></h1>
            <p className="text-lg mt-2 text-black">Selected Highlights from Our Work</p>
          </div>
        </div>
      </section>

      <div className="w-full min-h-screen bg-gray-50 px-4 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg shadow-lg bg-white overflow-hidden"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.images[currentIndexes[idx]]}
                  alt={project.title}
                  fill
                  className="object-cover cursor-pointer"
                  onClick={() => setModalImage(project.images[currentIndexes[idx]])}
                />
                <button onClick={() => prevImage(idx)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-red-700/80 px-4 py-1 rounded">‹</button>
                <button onClick={() => nextImage(idx)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-700/80 px-4 py-1 rounded">›</button>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-1">{project.title}</h2>
                <p className="text-sm text-gray-500 mb-1">{project.location}</p>
                <p className="text-sm text-gray-500">{project.endUser}</p>
                <p className="text-sm text-gray-400">{project.year}</p>
                <button
                  onClick={() => toggleExpanded(idx)}
                  className="text-sm text-blue-600 mt-2 hover:underline"
                >
                  {expanded === idx ? 'Tutup Detail' : 'Lihat Detail'}
                </button>
                {expanded === idx && (
                  <div className="mt-4 text-sm text-gray-700">
                    <p><strong>Client:</strong> {project.client}</p>
                    <p className="mt-2 font-semibold">Scope of Work:</p>
                    <ul className="list-disc list-inside">
                      {project.scope.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {modalImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setModalImage(null)}
          >
            <div className="relative max-w-3xl w-full">
              <Image
                src={modalImage}
                alt="Preview"
                width={1000}
                height={600}
                className="object-contain rounded shadow-lg mx-auto"
              />
              <button
                className="absolute top-2 right-4 text-white text-3xl"
                onClick={() => setModalImage(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
