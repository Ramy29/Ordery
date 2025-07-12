import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Slider from 'react-slick';
import { cartcontext } from '../../Context/Cartcontext';
import { toast } from 'react-hot-toast';

export default function ProductDetails() {
  const { id, category } = useParams();
  const { addToCart } = useContext(cartcontext);

  const [productDetails, setProductDetails] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Slider configuration
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // Fetch main product details by ID
  async function getProductDetails(id) {
    try {
      const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
      setProductDetails(data.data);
    } catch {
      toast.error('Failed to load product details');
    }
  }

  // Fetch related products based on the category
  async function getRelatedProducts() {
    try {
      const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
      const related = data.data.filter(p => p.category.name === category);
      setRelatedProducts(related);
    } catch {
      toast.error('Failed to load related products');
    }
  }

  // Add product to cart
  async function handleAddToCart(productId) {
    try {
      const response = await addToCart(productId);
      if (response.status === 'success') {
        
      }
    } catch {
      toast.error('Failed to add product to cart');
    }
  }

  useEffect(() => {
    getProductDetails(id);
    getRelatedProducts();
  }, [id, category]);

  return (
    <>
      {/* Product Info */}
      <div className="container px-10 py-8 mx-auto md:flex md:flex-row items-center shadow-2xl mt-8 bg-white dark:bg-gray-900 dark:text-white">
        <div className="sm:w-full md:w-1/4">
          {productDetails?.images?.length > 1 ? (
            <Slider {...settings}>
              {productDetails.images.map((src, i) => (
                <img key={i} src={src} alt="" className="w-full rounded-lg" />
              ))}
            </Slider>
          ) : (
            <img src={productDetails.imageCover} alt="" className="w-full rounded-lg" />
          )}
        </div>

        <div className="sm:w-full md:w-3/4 pl-10 space-y-5">
          <h2 className="text-2xl font-semibold">{productDetails.title}</h2>
          <p>{productDetails.description}</p>
          <h4 className="font-semibold">{productDetails.category?.name}</h4>
          <div className="flex items-center gap-5">
            <h2 className="font-bold">{productDetails.price} EGP</h2>
            <p className="text-yellow-400">
              <i className="fa-solid fa-star"></i> {productDetails.ratingsAverage}
            </p>
          </div>
          <button
            onClick={() => handleAddToCart(productDetails.id)}
            className="w-full px-5 py-2 bg-green-600 hover:bg-green-800 duration-200 rounded-lg"
          >
            Add To Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      <h2 className="text-2xl text-center my-6 text-gray-700 dark:text-gray-300">
        Related Products
      </h2>
      <div className="container px-10 py-8 mx-auto flex flex-wrap gap-5">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="sm:w-1/2 lg:w-1/5 bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-lg px-4 py-6"
          >
            <Link to={`/productdetails/${product.id}/${product.category.name}`}>
              <img
                className="w-full h-40 object-cover rounded"
                src={product.imageCover}
                alt={product.title}
              />
              <h4 className="text-center text-lg font-bold mt-3">
                {product.category.name}
              </h4>
              <h6 className="text-center text-sm text-gray-500 dark:text-gray-300">
                {product.brand.name}
              </h6>
              <div className="flex justify-between items-center mt-3">
                <span>{product.price} EGP</span>
                <span className="text-yellow-400">
                  <i className="fa-solid fa-star"></i> {product.ratingsAverage}
                </span>
              </div>
            </Link>
            <button
              onClick={() => handleAddToCart(product.id)}
              className="w-full mt-4 px-5 py-2 bg-green-500 hover:bg-green-700 duration-200 rounded-lg"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}


