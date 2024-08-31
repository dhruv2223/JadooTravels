import React, { useState } from "react";
import jadoo from "../assets/Jadoo.png";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src={jadoo} alt="Jadoo Logo" className="h-8" />
      </div>

      <div className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Destinations
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Hotels
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Flights
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Bookings
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Login
        </a>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded">
          Sign up
        </button>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          EN
        </a>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50"
          style={{ zIndex: 50 }}
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Destinations
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Hotels
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Flights
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Bookings
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Login
            </a>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded">
              Sign up
            </button>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              EN
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
