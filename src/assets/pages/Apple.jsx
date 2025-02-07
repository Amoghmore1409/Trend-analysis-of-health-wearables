import React from 'react'
import Navbar from "../components/navbar/navbar.jsx"
import Boatbg from "../Images/Boat-bg.webp"
import product1 from "../Images/product-1.webp"
import product2 from "../Images/product-2.webp"
const Apple = () => {

  const products = [
    {
      name: "Apple Watch Series 9",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRNadA5gFk11ojm8rWfp8yed-7NgdnKFKd6n7TxAC0Up-teDoMw2RTvZP6CYaAOrpVwuhGOP6090dfdmrgOgo0Yjezp6CKw7KNMy8_XLpRvP7bYd4kKfdq68ud9Mp94E5y6nCnGTiE&usqp=CAc",
      description: "Advanced health tracking, ECG, and fitness tracking."
    },
    {
      name: "Apple Watch SE",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcShCrwtEMS-N8lsZYYxhgAiwbST8JYsHmIVqausWutytDuZXB_dCFxNlKd3eBqZCGiWCjRT6YjBiMh2ZUxJMkbSIIuLJ9s5Fxz2_3pxB2JGXr2m-qEESz9pXHxpLWSMDocUjEHP3d3mYPI&usqp=CAc",
      description: "Essential features with a budget-friendly price."
    },
    {
      name: "Apple Watch Ultra",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQRYITm4BHIFsrP9gdB45zkGbMvh5GQBpuNk7xSVlre-Io05yQEjv7peHKETnmwa7iIuc0eaEt9pdgF5R1U_ORh_QEhXeESfzJ1r8MzPDWJ-CYWu2009ZY0B_Vh-26Y2YFEAmGqJG0&usqp=CAc",
      description: "High-end design with extreme durability and features."
    }
  ];
  return (
    
    <div>
        <img src="https://www.apple.com/v/watch/bp/images/overview/consider_modals/fitness/modal_fitness_running__ef3wcl68m2s2_xlarge.jpg" alt='Boat' className='w-full mx-auto rounded shadow-lg'/>

        <div className="bg-gray-50 py-10 px-6 ">
      <div className="grid md:grid-cols-2 gap-4 max-w-3xl max-h-4xl mx-auto">
        {/* Left Section */}
        <div className="bg-ecra-dark text-white flex items-center justify-center p-6">
          <h2 className="text-xl md:text-xl font-semibold leading-relaxed text-center">
          Apple: Pioneering  <br /> Smartwatches and Innovation
          </h2>
        </div>

        {/* Right Section */}
        <div className="text-gray-700">
          <p className="mb-4">
          Apple Inc., a global leader in technology, is renowned for its cutting-edge innovations, including the Apple Watch, which has revolutionized the wearable technology market. The Apple Watch is not just a smartwatch but a comprehensive health and fitness companion
          </p>
          <p>
           
Apple Watches are innovative wearables designed for fitness, health tracking, and seamless integration with iPhones. They feature advanced sensors for heart rate monitoring, ECG, blood oxygen levels, and potentially groundbreaking technologies like blood pressure monitoring and MicroLED displays​
          </p>
        </div>
      </div>
    </div>
    <div className="bg-ecra-light py-10">
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
      <div className="bg-ecra-darkest py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-center mb-6">Brand Analysis</h2>
          <img
            src="src\assets\Images\Total Usage Analysis\Apple\Usage Analysis\sentiment_by_Age(Apple)[Usage Analysis].png" // Replace with your actual graph image
            alt="Income Graph"
            className="w-full rounded-lg shadow-md"
          />
          <p className="text-center text-gray-700 mt-4"></p>
        </div>
      </div>

      {/* Sales Division Section */}
      <div className="bg-ecra-darkest py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-center mb-6"></h2>
          <img
            src="src\assets\Images\Total Usage Analysis\Apple\Usage Analysis\sentiment_by_State(Apple)[Usage Analysis].png" // Replace with your actual pie chart image
            alt="Sales Division"
            className="w-full rounded-lg shadow-md"
          />
          <p className="text-center text-gray-700 mt-4"></p>
        </div>
      </div>
    </div>
  )
}

export default Apple