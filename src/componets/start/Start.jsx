import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Start() {
  const navigate = useNavigate();

  // Redirect after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/products');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition duration-300">
      <div className="text-center animate-bounce">
        <h2 className="text-5xl font-extrabold text-rose-600 dark:text-rose-400 drop-shadow-md">
          Welcome to <span className="text-green-600 dark:text-green-400">Ordery</span> 🌟
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
          Redirecting you to our awesome products...
        </p>
      </div>
    </div>
  );
}

