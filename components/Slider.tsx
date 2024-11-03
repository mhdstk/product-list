// components/Slider.tsx
"use client";

import { useState, CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  slider: { display: 'flex', alignItems: 'center', position: 'relative', width: '100%', height: '300px', overflow: 'hidden' },
  button: { fontSize: '24px', background: 'none', border: 'none', color: '#333', cursor: 'pointer', padding: '0 15px' },
  image: { width: '100%', height: '100%', objectFit: 'cover' }
};

export default function Slider() {
  const [index, setIndex] = useState(0);
  const images: string[] = ['slide1.png', 'slide2.png', 'slide3.png'];

  const nextSlide = () => setIndex((index + 1) % images.length);
  const prevSlide = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div style={styles.slider}>
      <button onClick={prevSlide} style={styles.button}>‹</button>
      <img src={images[index]} alt={`Slide ${index}`} style={styles.image} />
      <button onClick={nextSlide} style={styles.button}>›</button>
    </div>
  );
}
