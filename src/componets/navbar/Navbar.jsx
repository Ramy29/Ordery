import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { cartcontext } from '../../Context/Cartcontext';

export default function Navbar() {
  // Access global states
  const { cartitems } = useContext(cartcontext);
  const { login, setlogin } = useContext(UserContext);
  const navigate = useNavigate();

  // Log out the user
  const logout = () => {
    localStorage.removeItem('usertoken');
    setlogin(null);
    navigate('/login');
  };

  return (
    <nav className="bg-white border-b shadow-md dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center py-3">
        {/* Logo and brand name */}
        <Link to="/" className="flex items-center">
          <img
            src="https://www.svgrepo.com/show/499962/music.svg"
            className="h-8 mr-2"
            alt="Ordery Logo"
          />
          <span className="text-xl font-bold dark:text-white">Ordery</span>
        </Link>

        {/* Navigation links (always visible) */}
        <ul className="flex flex-row space-x-6 font-medium text-gray-700 dark:text-gray-300">
          {/* Links shown only when user is logged in */}
          {login && (
            <>
              <li>
                <NavLink
                  to="/products"
                  className="hover:text-purple-700 transition"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cart"
                  className="hover:text-purple-700 transition"
                >
                  {cartitems?.numOfCartItems || 0}{' '}
                  <i className="fa-solid fa-cart-shopping"></i>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/brands"
                  className="hover:text-purple-700 transition"
                >
                  Brands
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about_us"
                  className="hover:text-purple-700 transition"
                >
                  Terms
                </NavLink>
              </li>
            </>
          )}

          {/* Show these links if NOT logged in */}
          {!login && (
            <>
              <li>
                <NavLink
                  to="/regestration"
                  className="hover:text-purple-700 transition"
                >
                  <i className="fa-solid fa-arrow-up"></i> Registration
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="hover:text-purple-700 transition"
                >
                  <i className="fa-solid fa-right-to-bracket"></i> Login
                </NavLink>
              </li>
            </>
          )}

          {/* Logout shown when user is logged in */}
          {login && (
            <li>
              <span
                onClick={logout}
                className="hover:text-purple-700 transition cursor-pointer"
              >
                <i className="fa-solid fa-person"></i> Logout
              </span>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
