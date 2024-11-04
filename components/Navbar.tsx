// components/Navbar.tsx
import Link from 'next/link';
import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  navbar: { display: 'flex', justifyContent: 'space-between', backgroundColor: 'rgb(229 231 235)', color: '#fff',alignItems:'center' },
  logo: { fontWeight: 'bold', fontSize: '24px' },
  links: { display: 'flex', gap: '15px' ,color:'#000'}
};

export default function Navbar() {
  return (
    <nav style={styles.navbar} className='p-[10px] md:p-[20px]'>
      <Link href="/" style={styles.logo}>
      <div className=''>
          <div className="w-[100px] h-[50px] md:w-32 md:h-[4rem] overflow-hidden">
            <img src='everestlogo.png' alt="logo"  className='w-full h-full block object-cover'/>
          </div>
      </div>
      </Link>
      <div style={styles.links}>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
    </nav>
  );
}
