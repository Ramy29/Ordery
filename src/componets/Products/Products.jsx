import React from 'react';
import CategorySlider from '../categoryslider/Categoryslider';
import Recentproducts from '../recentproducts/Recentproducts';

export default function Products() {
  return (
    <>
      {/* Page Header */}
      <div className="text-center py-10 bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-rose-600 dark:text-rose-400">
          🛍️ Products
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Browse by category and discover new arrivals
        </p>
      </div>

      {/* Category Slider */}
      <CategorySlider />

      {/* Recent Products */}
      <Recentproducts />
    </>
  );
}

