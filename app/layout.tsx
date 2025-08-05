import '@/styles/globals.css'
import Navbar from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata = {
  title: 'TOP Filtration',
  description: 'PT. Techno Orbit Particle Filtration (TOP-F) is a specialist in advanced filtration and fabrication for Oil & Gas, Petrochemical, and Energy sectors. Discover our high-performance filters, strainers, and engineered solutions designed for extreme conditions.',
}

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
