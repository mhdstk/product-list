// app/layout.tsx

import React from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
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
          <div className="flex items-center gap-2 mx-auto justify-center">
            <a href='' className="w-8 h-12 grid place-content-center">
              <FacebookIcon />
            </a>
            <p className='text-white'>|</p>
            <a href='https://www.instagram.com/everestcitymobile/?hl=en' className="w-8 h-12  grid place-content-center">
              <InstagramIcon />
            </a>
            <p className='text-white'>|</p>

            <a href='https://www.youtube.com/@ashkarmaliyekkal' className="w-8 h-12  grid place-content-center">
              <YouTubeIcon />
            </a>
            <p className='text-white'>|</p>

            <a href='https://www.tiktok.com/@everestcitymobiles?lang=en' className="w-8 h-12 bg-black  grid place-content-center">
              <MusicNoteIcon style={{color:'white'}}  />
            </a>
          </div>
          <p className='text-[12px] md:text-[20px]'>&copy; 2024 Product Company. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
