import React, { useContext, useEffect, useState } from 'react';
import { cartcontext } from '../../Context/Cartcontext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { getloggedcart, UpdateCount, removeProductFromCart } = useContext(cartcontext);
  const [cart, setCart] = useState(null);

  // Get cart items from API
  async function getCartItems() {
    try {
      const response = await getloggedcart();
      setCart(response.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  }

  // Update item quantity in cart
  async function updateCartItem(productId, count) {
    if (count > 0) {
      const response = await UpdateCount(productId, count);
      setCart(response.data);
    } else {
      removeProduct(productId);
    }
  }

  // Remove item from cart
  async function removeProduct(productId) {
    const response = await removeProductFromCart(productId);
    setCart(response.data);
  }

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <>
      {/* Title */}
      <h2 className="text-3xl text-center pt-10 text-green-600 font-bold">🛒 Shopping Cart</h2>

      {/* Checkout and Total */}
      {cart && (
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center px-6 mt-6">
          <span className="text-xl font-bold text-rose-600">
            Total: {cart.totalCartPrice} EGP
          </span>
          <Link
            to="/checkout"
            className="mt-4 md:mt-0 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded duration-200"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}

      {/* Cart Items */}
      <div className="px-4 py-6 max-w-4xl mx-auto">
        {cart?.products.map((item) => (
          <div key={item.product.id} className="flex flex-col md:flex-row border-b border-gray-300 py-6">
            {/* Product Image */}
            <img
              src={item.product.imageCover}
              alt={item.product.title}
              className="w-32 h-32 object-cover rounded-md"
            />

            {/* Product Details */}
            <div className="md:ml-6 mt-4 md:mt-0 flex flex-col justify-between flex-1">
              <h3 className="text-lg font-semibold text-gray-800">{item.product.title}</h3>

              {/* Quantity Control */}
              <div className="flex items-center mt-4 gap-4">
                <span className="text-sm text-gray-600">Quantity:</span>
                <div className="flex items-center border rounded overflow-hidden">
                  <button
                    onClick={() => updateCartItem(item.product.id, item.count + 1)}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700"
                  >
                    +
                  </button>
                  <span className="px-4 py-1">{item.count}</span>
                  <button
                    onClick={() => updateCartItem(item.product.id, item.count - 1)}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700"
                  >
                    -
                  </button>
                </div>

                {/* Price */}
                <span className="ml-auto text-sm font-bold text-green-700">{item.price} EGP</span>

                {/* Remove Button */}
                <button
                  onClick={() => removeProduct(item.product.id)}
                  className="text-red-500 hover:text-red-700 ml-6"
                >
                  <i className="fa-solid fa-trash mr-1"></i> Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

