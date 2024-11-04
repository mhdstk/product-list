// components/FilterComponent.tsx
"use client";

import React,{ useState } from 'react';

export default function FilterComponent() {
  // State for filters
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  // Options
  const categories = [
    "Laptops", "Mobile Phones", "Tablets", 
    "Accessories (Headphones, Chargers, Cases)",
    "Cameras", "Smart Home Devices", "Gaming Consoles"
  ];
  
  const brands = ["Apple", "Samsung", "Sony", "Dell", "HP", "Lenovo", "Huawei"];
  
  const priceRanges = [
    "Under AED 500", "AED 500-1000", "AED 1000-1500", "Above AED 1500"
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

  const handlePriceSelect = (price: string) => setSelectedPrice(price);

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
      {/* Filter Container */}
      <div className="lg:w-1/4 w-full bg-gray-100 p-4 rounded-lg shadow-lg">
        {/* Category Filter */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Category</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => handleCategorySelect(category)}
                  className={`block w-full text-left p-2 rounded ${
                    selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Brand Filter */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Brand</h2>
          <ul className="space-y-2">
            {brands.map((brand) => (
              <li key={brand}>
                <label className="flex items-center space-x-2">
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
          <h2 className="text-lg font-semibold mb-2">Price Range</h2>
          <ul className="space-y-2">
            {priceRanges.map((price) => (
              <li key={price}>
                <button
                  onClick={() => handlePriceSelect(price)}
                  className={`block w-full text-left p-2 rounded ${
                    selectedPrice === price ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {price}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content or Product Listing */}
      <div className="lg:w-3/4 w-full bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold">Product List</h2>
        <p className="text-gray-600 mt-2">Products will appear here based on selected filters.</p>
      </div>
    </div>
  );
}
