import React from "react";
import { Link } from "react-router-dom";

const SalesAnalysis = () => {
  const graphData = [
    {
      src: "/images/sales-trend.png",
      title: "Sales Trend Over Time",
      description: "This graph shows the sales growth over the past year, highlighting peak seasons and trends.",
    },
    {
      src: "/images/revenue-chart.png",
      title: "Revenue Breakdown",
      description: "A breakdown of revenue sources, showing the contribution of different products and services.",
    },
    {
      src: "/images/customer-growth.png",
      title: "Customer Growth",
      description: "Customer acquisition trends over time, tracking new vs. returning customers.",
    },
  ];

  const brands = ["Boat", "Google", "Apple", "Fitbit", "Samsung", "Redmi", "Firebolt", "Garmin", "Boult",
    "Fossil",
    "Amazfit",];

  return (
    <div className="p-6 flex flex-col md:flex-row gap-8 bg-gray-900 text-white min-h-screen">
      {/* Main Sales Analysis Section */}
      <div className="md:w-3/4">
        <h1 className="text-3xl font-bold mb-4 text-center md:text-left text-blue-400">Sales Analysis</h1>
        <p className="text-gray-400 mb-6 text-center md:text-left">
          Explore the latest sales trends and revenue insights.
        </p>

        <div className="space-y-12">
          {graphData.map((graph, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-6 bg-gray-800 p-6 rounded-lg shadow-lg`}
            >
              {/* Graph Image */}
              <div className="w-full md:w-1/2">
                <img src={graph.src} alt={graph.title} className="rounded-lg shadow-lg w-full" />
              </div>

              {/* Graph Description */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl font-semibold text-blue-400">{graph.title}</h2>
                <p className="text-gray-300 mt-2">{graph.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right-Side Brand Analysis Section */}
      <div className="md:w-1/4 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-3 text-blue-400">More Detailed Brand Analysis</h2>
        <p className="text-gray-400 mb-4">Check out individual brand analysis for in-depth insights:</p>
        <ul className="space-y-2">
          {brands.map((brand, index) => (
            <li key={index} className="hover:bg-gray-700 p-2 rounded-md">
              <Link to={`/${brand.toLowerCase()}`} className="text-blue-400 hover:text-blue-300">
                {brand} Analysis →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SalesAnalysis;
