import React from 'react'
import Navbar from "../components/navbar/navbar.jsx"
import Samsungbg from "../Images/Samsung.webp"
import product1 from "../Images/samsung1.jpg"
import product2 from "../Images/samsung2.webp"
import by_state from "../Images/Samsung2.png"
import by_age from "../Images/Samsung1.png"
const Samsung = () => {

  const products = [
    {
      name: "Samsung Galaxy Fit3",
      image: "https://m.media-amazon.com/images/I/61TJB03ROCL._SX679_.jpg", // Replace with the actual image URL
      description: "Smartwatch Model A",
    },
    {
      name: "Samsung Galaxy Watch 7",
      image: "https://http2.mlstatic.com/D_NQ_NP_864237-MLU78475864374_082024-O.webp", // Replace with the actual image URL
      description: "Smartwatch Model B",
    },
    {
      name: "Samsung Galaxy Watch 6",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZXPkQ5FznlawEG-3yLfsGlK-c-xdbFexwIAz1O1H9CYPybvTQyu_tcexvBI7w_5zovjs&usqp=CAU", // Replace with the actual image URL
      description: "Smartwatch Model C",
    },
  ];
  return (
    
    <div>
        <img src={Samsungbg} alt='Samsung' className='w-full mx-auto rounded shadow-lg'/>

        <div className="bg-gray-50 py-10 px-6 ">
      <div className="grid md:grid-cols-2 gap-4 max-w-3xl max-h-4xl mx-auto">
        {/* Left Section */}
        <div className="bg-primary-light text-white flex items-center justify-center p-6">
          <h2 className="text-xl md:text-xl font-semibold leading-relaxed text-center">
            A South Korean Brand <br /> leading the Smartwatch market in India
          </h2>
        </div>

        {/* Right Section */}
        <div className="text-gray-700">
          <p className="mb-4">
          Samsung Group is a South Korean multinational manufacturing conglomerate headquartered in 
          Samsung Digital City, Suwon South Korea. It comprises numerous affiliated businesses,
          most of them united under the Samsung brand. As of 2024, Samsung has the world's 5th highest brand value.


            </p>
          <p>
          The Samsung Galaxy Watch series is a line of smartwatches designed and produced by Samsung Electronics. 
          The line features various health, fitness, and fashion related features, 
          and is integrated with Samsung's other products under the Samsung Galaxy brand.
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
      <div className="bg-secondary-light py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-center mb-6">Sentiment Analysis</h2>
          <img
            src={by_state}// Replace with your actual graph image
            alt="Sentiment Distribution by State"
            className="w-full rounded-lg shadow-md"
          />
          <p className="text-center text-gray-700 mt-4"></p>
        </div>
      </div>

      {/* Sales Division Section */}
      <div className="bg-primary-light text-gray-950 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-center mb-6">Sentiment Distribution by Age</h2>
          <img
            src={by_age} // Replace with your actual pie chart image
            alt="Sentiment By Age"
            className="w-full rounded-lg shadow-md"
          />
          <p className="text-center text-gray-700 mt-4">Samsung Galaxy Watch Ultra review</p>
        </div>
      </div>
    </div>
  )
}

export default Samsung

    