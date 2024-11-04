// components/FilterComponent.tsx
"use client";

import React,{ useState } from 'react';
import ProductList from '../ProductList'
export default function MainSection() {
  // State for filters
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<any | null>(null);

  // Options
  const categories = [
    "Laptops", "Mobile Phones", "Tablets", 
    "Accessories (Headphones, Chargers, Cases)",
    "Cameras", "Smart Home Devices", "Gaming Consoles"
  ];
  
  const brands = ["Apple", "Samsung", "Sony", "Dell", "HP", "Lenovo", "Huawei"];
  
  const priceRanges = [
   { id:1,label:"Under AED 500",min:0,max:500},{ id:2,label:"AED 500-1000",min:500,max:1000},{id:3,label: "AED 1000-1500",min:1000,max:1500},{id:4,label: "Above AED 1500",min:1500,max:999999}
  ];

  // Handlers for selection
  const handleCategorySelect = (category: string) => setSelectedCategory(category);
  
  const handleBrandToggle = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handlePriceSelect = (price: any) => setSelectedPrice(price);

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 text-black">
    {/* Filter Container */}
    <div className="lg:w-1/4 w-full bg-gray-100 p-4 rounded-lg shadow-lg">
      {/* Category Filter */}
      <div className="mb-4">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Category</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => handleCategorySelect(category)}
                className={`block w-full text-left p-2 rounded ${
                  selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                } text-sm md:text-base`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
  
      {/* Brand Filter */}
      <div className="mb-4">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Brand</h2>
        <ul className="space-y-2">
          {brands.map((brand) => (
            <li key={brand}>
              <label className="flex items-center space-x-2 text-sm md:text-base">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandToggle(brand)}
                  className="form-checkbox text-blue-500"
                />
                <span>{brand}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
  
      {/* Price Range Filter */}
      <div>
        <h2 className="text-lg md:text-xl font-semibold mb-2">Price Range</h2>
        <ul className="space-y-2">
          {priceRanges.map((price) => (
            <li key={price.id}>
              <button
                onClick={() => handlePriceSelect(price)}
                className={`block w-full text-left p-2 rounded ${
                  selectedPrice?.id === price.id ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                } text-sm md:text-base`}
              >
                {price.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  
    {/* Content or Product Listing */}
    <div className="lg:w-3/4 w-full bg-white p-4 rounded-lg shadow-lg">
      <ProductList selectedCategory={selectedCategory} selectedBrands={selectedBrands} selectedPrice={selectedPrice} />
    </div>
  </div>
  
  );
}
