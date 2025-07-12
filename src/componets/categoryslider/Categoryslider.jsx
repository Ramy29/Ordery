import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

export default function CategorySlider() {
  const [categories, setCategories] = useState([]);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  // Fetch categories from API
  async function fetchCategories() {
    try {
      const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
      setCategories(data.data);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="my-10 px-4">
      <h2 className="text-2xl font-bold text-center text-green-700 dark:text-green-400 mb-6">
        🧭 Shop by Category
      </h2>
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category._id} className="px-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <img
                src={category.image}
                alt={category.name}
                className="h-48 w-full object-cover rounded-t-lg"
              />
              <div className="text-center py-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                {category.name}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

