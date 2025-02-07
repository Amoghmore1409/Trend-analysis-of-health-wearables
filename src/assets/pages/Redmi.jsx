import React from 'react'
import Navbar from "../components/navbar/navbar.jsx"
import bg from "../Images/redmibg.webp"
import overall from "../Images/redmi1.png"
import by_occupation from "../Images/redmi2.png"
const Redmi = () => {

  const products = [
    {
      name: "Redmi Watch 5",
      image: "https://i03.appmifile.com/672_item_in/27/08/2024/95145e9498f9e7009dcd6b8e1a78e3fb.png?thumb=1&w=1000&f=webp&q=85", // Replace with the actual image URL
      description: "Smartwatch Model A",
    },
    {
      name: "Redmi Watch 5 Lite",
      image: "https://i03.appmifile.com/706_item_in/24/09/2024/9b1c0a7d6be9eaf7bea0e49784da2d11.png?thumb=1&w=1000&f=webp&q=85", // Replace with the actual image URL
      description: "Smartwatch Model B",
    },
    {
      name: "Redmi Watch 3 Active",
      image: "https://i03.appmifile.com/196_item_in/06/08/2024/4ac5f1c102eda8d7ad94bb80e62f5ca0.png?thumb=1&w=440&f=webp&q=85", // Replace with the actual image URL
      description: "Smartwatch Model C",
    },
  ];
  return (
    
    <div>
        <img src={bg} alt='Redmi' className='w-full mx-auto rounded shadow-lg'/>

        <div className="bg-gray-50 py-10 px-6 ">
      <div className="grid md:grid-cols-2 gap-4 max-w-3xl max-h-4xl mx-auto">
        {/* Left Section */}
        <div className="bg-gray-800 text-white flex items-center justify-center p-6">
          <h2 className="text-xl md:text-xl font-semibold leading-relaxed text-center">
            One of the Affordable and  <br /> convenient Brand
          </h2>
        </div>

        {/* Right Section */}
        <div className="text-gray-700">
          <p className="mb-4">
          Redmi is a subsidiary brand owned by the Chinese electronics company Xiaomi. 
          It was first launched in July 2013 as a budget smartphone line, and became a 
          separate sub-brand of Xiaomi in 2019, to takeover entry-level and mid-range devices 
          originally produced by Xiaomi brand, while Xiaomi itself produces upper-range and flagship Xiaomi 
          (formerly Mi) phones.


            </p>
          <p>
          Mainly Known for their smartphones, they have a variety of smartwatches, straps, earphones,etc. They create sleep and activity tracking, heart rate monitoring, with GPS, 
          by choosing from 200+ watch faces, 4 color straps and 3 options for watch cases that
          lets you play with 2400+ customized combinations, one for every style you choose to pick.
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
      <div className="bg-primary-color5 py-10 mt-10">
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
      <div className="bg-primary-color4 text-gray-950 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-center mb-6">Usage analysis by Occupation</h2>
          <img
            src={by_occupation} // Replace with your actual pie chart image
            alt="Usage By Age"
            className="w-full rounded-lg shadow-md"
          />
          <p className="text-center text-gray-700 mt-4"></p>
        </div>
      </div>
    </div>
  )
}

export default Redmi

    