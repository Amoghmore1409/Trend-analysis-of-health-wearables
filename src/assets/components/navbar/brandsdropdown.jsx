import React, { useState } from "react";
import { Link } from "react-router-dom";

const BrandsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Brands Button */}
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 bg-gray-800 text-white font-medium rounded hover:bg-gray-700"
      >
        Brands
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-gray-900 text-white border border-gray-600 rounded shadow-lg z-10">
          <ul className="py-1">
            {[
              "Boat",
              "Google",
              "Apple",
              "Fitbit",
              "Samsung",
              "Redmi",
              "Firebolt",
              "Garmin",
              "Boult",
            ].map((brand, index) => (
              <li key={index} className="hover:bg-gray-700">
                <Link
                  to={`/${brand.toLowerCase()}`} // Adjust URL as needed
                  className="block px-4 py-2 text-sm text-gray-300 hover:text-white"
                >
                  {brand}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BrandsDropdown;
