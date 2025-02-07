import React from 'react'
import Navbar from "../components/navbar/navbar.jsx"

import product1 from "../Images/fireboltt1.webp"
import product2 from "../Images/fireboltt2.webp"
import by_state from "../Images/Fireboltt1.png"
import sentiment from "../Images/Fireboltt2.png"
const FireBoltt = () => {

  const products = [
    {
      name: "Ninja Call Pro Max",
      image: "https://www.fireboltt.com/cdn/shop/files/ninja-call-pro-max_400x.png?v=1687756591", // Replace with the actual image URL
      description: "Smartwatch Model A",
    },
    {
      name: "Ninja Call Pro Plus",
      image: "https://www.fireboltt.com/cdn/shop/products/ninja-call-pro-plus-black_1_400x.png?v=1669011715", // Replace with the actual image URL
      description: "Smartwatch Model B",
    },
    {
      name: "Brillia",
      image: "https://www.fireboltt.com/cdn/shop/files/brillia-black_1_400x.png?v=1715327162", // Replace with the actual image URL
      description: "Smartwatch Model C",
    },
  ];
  return (
    
    <div>
        <img src="https://www.fireboltt.com/cdn/shop/files/fireboltt-main.jpg?v=1670587906" alt='FireBoltt' className='w-full mx-auto rounded shadow-lg'/>

        <div className="bg-gray-50 py-10 px-6 ">
      <div className="grid md:grid-cols-2 gap-4 max-w-3xl max-h-4xl mx-auto">
        {/* Left Section */}
        <div className="bg-orange-950 text-white flex items-center justify-center p-6">
          <h2 className="text-xl md:text-xl font-semibold leading-relaxed text-center">
            India's No. 1 <br /> Smartwatch brand
          </h2>
        </div>

        {/* Right Section */}
        <div className="text-gray-700">
          <p className="mb-4">
          Fire-Boltt was born out of a passion to blend cutting-edge technology with a flair for fashion. 
          Over the years, FireBoltt has  grown into one of India's most loved wearable brands, setting new benchmarks 
          for innovation, design, and performance. 
            </p>
          <p>
          Fire-Boltt smartwatches are designed to support your fitness journey with features like 
          heart rate monitoring, sleep tracking, and multiple sports modes, including cycling, running, 
          and walking.  Beyond fitness, Fire-Boltt keeps you connected with smart notifications for 
          calls, texts, and alarms, while offering convenient controls for music and camera on the go.

          Fire-Boltt offers specialized designs for men and women. 
          Women can enjoy features like menstrual cycle tracking and daily activity monitoring, 
          while men benefit from sleek designs, IP68 water resistance, and Find My Phone functionality.
          </p>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 py-10">
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
                src={product.image} // Use the image URL from the array
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
      <div className="bg-red-200 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-center mb-6">Sentiment Distribution By State</h2>
          <img
            src={by_state} // Replace with your actual graph image
            alt="Sentiment by State"
            className="w-full rounded-lg shadow-md"
          />
          <p className="text-center text-gray-700 mt-4"></p>
        </div>
      </div>

      {/* Sales Division Section */}
      <div className="bg-red-100 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-center mb-6">Sentiment Analysis</h2>
          <img
            src={sentiment} // Replace with your actual pie chart image
            alt="Sentiment of Reviews"
            className="w-full rounded-lg shadow-md"
          />
          <p className="text-center text-gray-700 mt-4">No. of reviews (Positive, Negative and Neutral)</p>
        </div>
      </div>
    </div>
  )
}

export default FireBoltt

    