import React, { useContext, useEffect, useState } from 'react';
import { cartcontext } from '../../Context/Cartcontext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Cart() {
  const { getloggedcart, UpdateCount, removeProductFromCart } = useContext(cartcontext);
  const [cart, setCart] = useState(null);

  // Fetch cart on load
  useEffect(() => {
    fetchCart();
  }, []);

  // Get cart items from API
  async function fetchCart() {
    try {
      const res = await getloggedcart();
      setCart(res.data);
    } catch (err) {
      toast.error("Failed to load your cart");
    }
  }

  // Update product quantity
  async function updateQuantity(productId, count) {
    if (count < 1) {
      removeItem(productId);
      return;
    }

    try {
      const res = await UpdateCount(productId, count);
      toast.success("Quantity updated");
      setCart(res.data);
    } catch {
      toast.error("Failed to update quantity");
    }
  }

  // Remove product from cart
  async function removeItem(productId) {
    try {
      const res = await removeProductFromCart(productId);
      toast.success("Item removed");
      setCart(res.data);
    } catch {
      toast.error("Failed to remove item");
    }
  }

  return (
    <div className="container mx-auto px-6 py-8 dark:bg-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold text-center text-green-600 dark:text-green-400 mb-8">
        🛒 Your Cart
      </h2>

      {cart && cart.products.length > 0 ? (
        <>
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <span className="text-xl font-semibold text-rose-600 dark:text-rose-400">
              Total: {cart.totalCartPrice} EGP
            </span>
            <Link
              to="/checkout"
              className="bg-green-600 hover:bg-green-800 text-white font-medium px-6 py-2 rounded transition"
            >
              Proceed to Checkout
            </Link>
          </div>

          <div className="space-y-6">
            {cart.products.map(({ product, count, price }) => (
              <div
                key={product.id}
                className="flex flex-col md:flex-row items-center gap-4 border border-gray-200 dark:border-gray-700 rounded-lg p-4"
              >
                <img
                  src={product.imageCover}
                  alt={product.title}
                  className="w-28 h-28 object-cover rounded-lg"
                />

                <div className="flex-1 space-y-2 w-full">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm">Qty:</span>
                      <div className="flex items-center border rounded overflow-hidden">
                        <button
                          onClick={() => updateQuantity(product.id, count + 1)}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          +
                        </button>
                        <span className="px-4 py-1">{count}</span>
                        <button
                          onClick={() => updateQuantity(product.id, count - 1)}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          -
                        </button>
                      </div>
                    </div>

                    <span className="font-bold text-green-700 dark:text-green-400">{price} EGP</span>

                    <button
                      onClick={() => removeItem(product.id)}
                      className="text-red-500 hover:text-red-700 dark:hover:text-red-400"
                    >
                      <i className="fa-solid fa-trash mr-1"></i> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <h3 className="text-center text-lg text-gray-600 dark:text-gray-400 mt-10">
          Your cart is empty 😔
        </h3>
      )}
    </div>
  );
}


