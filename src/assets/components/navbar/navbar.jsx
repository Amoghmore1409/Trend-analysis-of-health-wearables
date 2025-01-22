import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white">
      {/* Brand */}
      <div className="text-lg font-semibold">
        <span>Brand name and logo</span>
      </div>

      {/* Links */}
      <ul className="flex space-x-6 items-center">
        <li>
          <Link to="/analysis" className="hover:text-gray-400">
            Analysis
          </Link>
        </li>
        
        {/* Brands Dropdown */}
        <li className="relative">
          <button
            onClick={toggleDropdown}
            className="hover:text-gray-400"
          >
            Brands
          </button>
          
          {/* Dropdown Menu */}
          {isDropdownOpen && (
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
                      onClick={toggleDropdown}
                    >
                      {brand}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>

        <li>
          <Link to="/resources" className="hover:text-gray-400">
            Resources
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
        </li>
      </ul>

      {/* Log In Button */}
      <div>
        <Link
          to="/login"
          className="px-4 py-2 bg-yellow-600 text-black font-medium rounded hover:bg-yellow-500"
        >
          Log in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;