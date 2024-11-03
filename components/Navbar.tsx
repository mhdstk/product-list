// components/Navbar.tsx
import Link from 'next/link';
import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  navbar: { display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#333', color: '#fff' },
  logo: { fontWeight: 'bold', fontSize: '24px' },
  links: { display: 'flex', gap: '15px' }
};

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Product Logo</div>
      <div style={styles.links}>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
    </nav>
  );
}
