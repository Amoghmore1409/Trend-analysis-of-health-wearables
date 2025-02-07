import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white font-bold">
      <div className="text-xl font-semibold">
  <Link to="/home" className="hover:text-yellow-500 text-yellow-600 flex items-center">
    FitBuzz
  </Link>
</div>

      {/* Links */}
      <ul className="flex space-x-6 items-center">
        {/* Analysis Dropdown */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown("analysis")}
            className="hover:text-gray-400"
          >
            Analysis
          </button>

          {openDropdown === "analysis" && (
            <div className="absolute mt-2 w-48 bg-gray-900 text-white border border-gray-600 rounded shadow-lg z-10">
              <ul className="py-1">
                {[
                  "Sales Analysis",
                  "Usage Analysis",
                  "Sentimental Analysis",
                  "Market Trend Analysis",
                ].map((analysis, index) => (
                  <li
                    key={index}
                    className={`hover:bg-gray-700 ${
                      index !== 0 ? "border-t border-gray-600" : ""
                    }`}
                  >
                    <Link
                      to={`/${analysis.toLowerCase().replace(/ /g, "-")}`}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white"
                      onClick={() => toggleDropdown(null)}
                    >
                      {analysis}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>

        {/* Brands Dropdown */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown("brands")}
            className="hover:text-gray-400"
          >
            Brands
          </button>

          {openDropdown === "brands" && (
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
                  "Boult",
                  "Fossil",
                  "Amazfit",
                ].map((brand, index) => (
                  <li
                    key={index}
                    className={`hover:bg-gray-700 ${
                      index !== 0 ? "border-t border-gray-600" : ""
                    }`}
                  >
                    <Link
                      to={`/${brand.toLowerCase()}`}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white"
                      onClick={() => toggleDropdown(null)}
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