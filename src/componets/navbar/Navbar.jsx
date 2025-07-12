import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { cartcontext } from '../../Context/Cartcontext';

export default function Navbar() {
  const { cartitems } = useContext(cartcontext);
  const { login, setlogin } = useContext(UserContext);
  const navigate = useNavigate();

  // Dark mode state
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Toggle dark mode
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const logout = () => {
    localStorage.removeItem('usertoken');
    setlogin(null);
    navigate('/login');
  };

  return (
    <nav className="bg-white border-b shadow-md dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://www.svgrepo.com/show/499962/music.svg"
            className="h-8 mr-2"
            alt="Ordery Logo"
          />
          <span className="text-xl font-bold dark:text-white">Ordery</span>
        </Link>

        {/* Links */}
        <ul className="flex flex-row space-x-6 font-medium text-gray-700 dark:text-gray-300 items-center">
          {login && (
            <>
              <li><NavLink to="/products" className="hover:text-purple-700 transition">Products</NavLink></li>
              <li><NavLink to="/cart" className="hover:text-purple-700 transition">
                {cartitems?.numOfCartItems || 0} <i className="fa-solid fa-cart-shopping"></i>
              </NavLink></li>
              <li><NavLink to="/brands" className="hover:text-purple-700 transition">Brands</NavLink></li>
              <li><NavLink to="/about_us" className="hover:text-purple-700 transition">Terms</NavLink></li>
            </>
          )}

          {!login && (
            <>
              <li><NavLink to="/regestration" className="hover:text-purple-700 transition">
                <i className="fa-solid fa-arrow-up"></i> Registration
              </NavLink></li>
              <li><NavLink to="/login" className="hover:text-purple-700 transition">
                <i className="fa-solid fa-right-to-bracket"></i> Login
              </NavLink></li>
            </>
          )}

          {login && (
            <li>
              <span onClick={logout} className="hover:text-purple-700 transition cursor-pointer">
                <i className="fa-solid fa-person"></i> Logout
              </span>
            </li>
          )}

          {/* 🌙 Light/Dark toggle */}
          <li>
            <button
              onClick={() => setIsDark(!isDark)}
              className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {isDark ? '☀️ Light' : '🌙 Dark'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

