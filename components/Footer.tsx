// components/Footer.tsx
import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  footer: { textAlign: 'center', padding: '20px', backgroundColor: '#333', color: '#fff' }
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Product Company. All rights reserved.</p>
    </footer>
  );
}
