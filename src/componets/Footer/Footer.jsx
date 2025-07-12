import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-green-200 dark:bg-gray-900 py-6 mt-16 text-center text-gray-900 dark:text-gray-100">
      <a href="#" className="text-2xl font-semibold hover:text-green-600 dark:hover:text-green-400">Ordery</a>

      <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
        © 2024-2025 Ordery. All Rights Reserved. Built with ❤️ by Ramy Esam
      </p>

      <ul className="flex justify-center space-x-6 mt-4">
        <li>
          <a
            href="https://www.facebook.com/ramy.esam.165?mibextid=ZbWKwL"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook-f text-xl"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ramy_e_14/profilecard/?igsh=MWR4ZWNzMjZja2owZw=="
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram text-xl"></i>
          </a>
        </li>
        <li>
          <a
            href="https://x.com/ramyesam701?t=DC2YTgNOVmW3Mjosv18dgA&s=09"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter text-xl"></i>
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/qr/TWECHU3HCNXFL1"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp text-xl"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

