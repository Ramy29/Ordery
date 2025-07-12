import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Brands() {
  const [brands, setBrands] = useState([]);

  // Fetch brands from API on component mount
  async function getBrands() {
    try {
      const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/Brands');
      setBrands(data.data);
    } catch (error) {
      console.error('Failed to fetch brands:', error);
    }
  }

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <>
      {/* Page Title */}
      <h2 className="text-3xl text-center pt-10 font-bold my-6 text-rose-600">
        🏷️ Our Brands
      </h2>

      {/* Brands Grid */}
      <div className="flex flex-wrap justify-center gap-6 px-4 pb-16">
        {brands.map((brand) => (
          <div key={brand._id} className="w-80 sm:w-96">
            <article className="relative isolate flex flex-col justify-end h-72 rounded-2xl px-6 pb-8 pt-40 shadow-lg hover:scale-105 transition-transform duration-300">
              {/* Brand Image */}
              <img
                src={brand.image}
                alt={brand.name}
                className="absolute inset-0 h-full w-full object-cover rounded-2xl"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 rounded-2xl" />
              {/* Brand Name */}
              <h3 className="z-10 text-center text-2xl font-bold text-white">
                {brand.name}
              </h3>
            </article>
          </div>
        ))}
      </div>
    </>
  );
}
