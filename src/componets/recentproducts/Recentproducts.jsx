import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartcontext } from '../../Context/Cartcontext';
import { toast } from 'react-hot-toast';

export default function Recentproducts() {
  const [recentProducts, setRecentProducts] = useState([]);
  const { addToCart } = useContext(cartcontext);

  // Fetch all products from the API
  async function getProducts() {
    try {
      const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
      setRecentProducts(data.data);
    } catch {
      toast.error('Error loading products');
    }
  }

  // Handle adding a product to cart with toast feedback
  async function handleAddToCart(productId) {
    try {
      const res = await addToCart(productId);
      if (res.status === 'success') {
        
      }
    } catch {
      toast.error('Failed to add product');
    }
  }

  // Fetch products once on component mount
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="w-full px-6 py-10 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Recent Products
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {recentProducts.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-[48%] md:w-[30%] lg:w-[18%] bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-lg p-4 hover:scale-105 duration-200"
          >
            <Link to={`/productdetails/${product.id}/${product.category.name}`}>
              <img
                src={product.imageCover}
                alt={product.title}
                className="w-full h-40 object-cover rounded"
              />
              <h4 className="text-lg font-bold mt-3 text-center">
                {product.category.name}
              </h4>
              <p className="text-center text-sm text-gray-500 dark:text-gray-300">
                {product.brand.name}
              </p>
              <div className="flex justify-between items-center mt-2">
                <span>{product.price} EGP</span>
                <span className="text-yellow-400">
                  <i className="fa-solid fa-star"></i> {product.ratingsAverage}
                </span>
              </div>
            </Link>

            <button
              onClick={() => handleAddToCart(product.id)}
              className="w-full mt-4 px-5 py-2 bg-green-600 hover:bg-green-800 text-white rounded-lg duration-150"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


