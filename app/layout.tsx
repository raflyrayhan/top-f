import '@/styles/globals.css'
import Navbar from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Rekayasa Energi Bersama',
  description: 'PT. Rekayasa Energi Bersama is an integrated engineering company providing complete package solutions for the oil & gas, energy, and infrastructure sectors since 2018. We specialize in design, fabrication, and procurement with a strong commitment to quality and innovation.',
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
