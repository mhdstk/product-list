// pages/index.tsx
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Slider />
      <ProductList />
      <Footer />
    </div>
  );
}
