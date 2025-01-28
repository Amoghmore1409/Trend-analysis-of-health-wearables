import React from 'react'
import Navbar from "../components/navbar/navbar.jsx"
import Boatbg from "../Images/Boat-bg.webp"
import product1 from "../Images/product-1.webp"
import product2 from "../Images/product-2.webp"
const Garmin = () => {

  const products = [
    {
      name: "Garmin Forerunner 165",
      image: "https://m.media-amazon.com/images/I/61m+fKy7wzL._AC_UY327_FMwebp_QL65_.jpg", // Replace with the actual image URL
      description: " Running Smartwatch with GPS, Colorful AMOLED Display, Training Metrics and Recovery Insights",
    },
    {
      name: "Garmin Venu Sq 2 ",
      image: "https://m.media-amazon.com/images/I/71Q4F70cosL._AC_UY327_FMwebp_QL65_.jpg", // Replace with the actual image URL
      description: "GPS Smartwatch, All-Day Health Monitoring, Long-Lasting Battery Life, AMOLED Display, Slate and Shadow Gray",
    },
    {
      name: "GARMIN Forerunner 55",
      image: "https://m.media-amazon.com/images/I/71DXg-PdEsL._AC_UY327_FMwebp_QL65_.jpg", // Replace with the actual image URL
      description: "GPS Running Watch with Daily Suggested Workouts, Up to 2 Weeks of Battery Life (Black)",
    },
  ];
  return (
    
    <div>
        <img src="https://res.garmin.com/homepage/67733/US-ONLY/67733-1-D-US-ONLY.jpg" alt='Boat' className='w-full mx-auto rounded shadow-lg'/>

        <div className="bg-orange-250 py-10 px-6 ">
      <div className="grid md:grid-cols-2 gap-4 max-w-3xl max-h-4xl mx-auto">
        {/* Left Section */}
        <div className="bg-green-dark text-white flex items-center justify-center p-6">
          <h2 className="text-xl md:text-xl font-semibold leading-relaxed text-center">
          Garmin Watches: Precision <br /> 
          and Durability for Athletes<br/>
          and Adventurers
          </h2>
        </div>

        {/* Right Section */}
        <div className="text-gray-700">
          <p className="mb-4">
          Garmin is a global leader in GPS technology, founded in 1989 and headquartered in Schaffhausen, Switzerland. The company designs and manufactures a wide range of products, including fitness and outdoor devices, automotive navigation systems, marine electronics, and aviation solutions.
          </p>
          <p>
            
Garmin's smartwatches are renowned for their precision and robust functionality, making them ideal for athletes, adventurers, and fitness enthusiasts. Popular models like the Fenix series offer GPS tracking, heart rate monitoring, sleep tracking, and more, along with long battery life and rugged designs built to withstand extreme conditions
          </p>
        </div>
      </div>
    </div>
    <div className="bg-green-light py-10">
      {/* Best Selling Products Section */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          Best Selling Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:shadow-lg hover:scale-105"
            >
              <img
                src={product.image } // Use the image URL from the array
                alt={product.name}
                className="mx-auto h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* Income Graph Section */}
      <div className="bg-green-700 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <img
            src="https://www.statista.com/graphic/1/217903/net-sales-in-the-aviation-segment-of-garmin-since-2008.jpg" // Replace with your actual graph image
            alt="Income Graph"
            className="w-full rounded-lg shadow-md"
          />
          
        </div>
      </div>

      {/* Sales Division Section */}
      <div className="bg-green-700 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4">
          
          <img
            src="https://www.bicycleretailer.com/sites/default/files/styles/article_primary_image/public/images/article/Screen%20Shot%202016-07-28%20at%2010.42.52%20AM.png?itok=ba9bEaeY" // Replace with your actual pie chart image
            alt="Sales Division"
            className="w-full rounded-lg shadow-md"
          />
          
        </div>
      </div>
    </div>
  )
}

export default Garmin
