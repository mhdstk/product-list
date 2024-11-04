// components/Slider.tsx
"use client";

import { useState, useEffect, CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  slider: { display: 'flex', alignItems: 'center', position: 'relative', width: '100%', height: '380px', overflow: 'hidden' },
  button: { fontSize: '24px', background: 'none', border: 'none', color: '#333', cursor: 'pointer', padding: '0 15px' },
  image: { width: '100%', height: '100%', objectFit: 'cover' }
};

export default function Slider() {
  const [index, setIndex] = useState(0);
  const images: string[] = ['slider1.jpg', 'slide2.jpg', 'Slider3.jpg'];

  const nextSlide = () => setIndex((index + 1) % images.length);
  const prevSlide = () => setIndex((index - 1 + images.length) % images.length);

  // Set up auto-scroll
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [index]); // Adding `index` to the dependency array ensures smooth scrolling

  return (
    <div style={styles.slider}>
      <button onClick={prevSlide} style={styles.button}>‹</button>
      <img src={images[index]} alt={`Slide ${index}`} style={styles.image} />
      <button onClick={nextSlide} style={styles.button}>›</button>
    </div>
  );
}
