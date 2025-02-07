import React from 'react'
import Navbar from "../components/navbar/navbar.jsx"
import bg from "../Images/boult.webp"
import overall from "../Images/boult1.png"
import by_state from "../Images/boult2.png"
const Boult = () => {

  const products = [
    {
      name: "Cosmic R",
      image: "https://cdn.shopify.com/s/files/1/0548/8849/7221/files/Group_12754.png?v=1714985847", // Replace with the actual image URL
      description: "Smartwatch Model A",
    },
    {
      name: "Forge",
      image: "https://cdn.shopify.com/s/files/1/0548/8849/7221/files/Group_12734.png?v=1714981884", // Replace with the actual image URL
      description: "Smartwatch Model B",
    },
    {
      name: "Crown R Pro 2",
      image: "https://cdn.shopify.com/s/files/1/0548/8849/7221/files/Group_12850.jpg?v=1732879082", // Replace with the actual image URL
      description: "Smartwatch Model C",
    },
  ];
  return (
    
    <div>
        <img src={bg} alt='Boult' className='w-full mx-auto rounded shadow-lg'/>

        <div className="bg-gray-50 py-10 px-6 ">
      <div className="grid md:grid-cols-2 gap-4 max-w-3xl max-h-4xl mx-auto">
        {/* Left Section */}
        <div className="bg-secondary-color2 text-white flex items-center justify-center p-6">
          <h2 className="text-xl md:text-xl font-semibold leading-relaxed text-center">
            India's No. 1 rated <br /> Audio Brand
          </h2>
        </div>

        {/* Right Section */}
        <div className="text-gray-700">
          <p className="mb-4">
          Boult is India's No. 1 rated audio brand as per the CMR Audio Report 2024.
          The company was started in 2017 by Varun Gupta.
          Although it is a small company, it designs, develops and manufactures products from very beginning

            </p>
          <p>
          Boult offers a diverse range of consumer tech products, 
          including Earbuds, Neckbands, Headphones, Speakers, and Smartwatches. 
          The advanced UI/UX features in Smartwatches enhance everyday life. The focus on meticulous Color, Material, 
          and Finish (CMF) choices elevate both aesthetics and functionality.
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
      <div className="bg-secondary-color3 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-center mb-6">Sentiment Analysis</h2>
          <img
            src={overall}// Replace with your actual graph image
            alt="No .of reviews"
            className="w-full rounded-lg shadow-md"
          />
          <p className="text-center text-gray-700 mt-4"></p>
        </div>
      </div>

      {/* Sales Division Section */}
      <div className="bg-primary-color2 text-gray-950 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-center mb-6">Usage analysis by Number of Reviews from each State</h2>
          <img
            src={by_state} // Replace with your actual pie chart image
            alt="Usage By State"
            className="w-full rounded-lg shadow-md"
          />
          <p className="text-center text-gray-700 mt-4"></p>
        </div>
      </div>
    </div>
  )
}

export default Boult