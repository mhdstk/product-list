// app/layout.tsx

import React from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Everest City Mobiles',
  description: 'Mobiles Accessories and Sales'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className='grid place-content-center py-2 md:py-8'>
          <p className='text-[12px] md:text-[20px]'>&copy; 2024 Product Company. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
