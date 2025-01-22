import React from 'react'
import Navbar from "../components/navbar/navbar.jsx"
import Boatbg from "../Images/Boat-bg.webp"
import product1 from "../Images/product-1.webp"
import product2 from "../Images/product-2.webp"
const Boat = () => {

  const products = [
    {
      name: "Product 1",
      image: "https://m.media-amazon.com/images/I/61A9rFdBjtL._AC_UY327_FMwebp_QL65_.jpg", // Replace with the actual image URL
      description: "Smartwatch Model A",
    },
    {
      name: "Product 2",
      image: "https://m.media-amazon.com/images/I/71Iit7U1S+L._AC_UY327_FMwebp_QL65_.jpg", // Replace with the actual image URL
      description: "Smartwatch Model B",
    },
    {
      name: "Product 3",
      image: "https://m.media-amazon.com/images/I/710IzU5T3cL._AC_UY327_FMwebp_QL65_.jpg", // Replace with the actual image URL
      description: "Smartwatch Model C",
    },
  ];
  return (
    
    <div>
        <img src={Boatbg} alt='Boat' className='w-full mx-auto rounded shadow-lg'/>

        <div className="bg-gray-50 py-10 px-6 ">
      <div className="grid md:grid-cols-2 gap-4 max-w-3xl max-h-4xl mx-auto">
        {/* Left Section */}
        <div className="bg-orange-950 text-white flex items-center justify-center p-6">
          <h2 className="text-xl md:text-xl font-semibold leading-relaxed text-center">
            An Indian market brand with <br /> the global competitors
          </h2>
        </div>

        {/* Right Section */}
        <div className="text-gray-700">
          <p className="mb-4">
            BoAt, a Delhi-based brand, came into existence in the year 2016 that
            is focused on bridging the gap between Indians and premium audio
            products at a minimal price range.
          </p>
          <p>
            According to an IDC report, boAt is the 5th largest wearable brand
            across the globe fighting alongside tech giants like Apple Inc.,
            Xiaomi, Samsung, Fitbit. Despite the company’s primary concentration
            on Indian markets, it has benefited handsomely since the COVID-19
            outbreak.
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
          <h2 className="text-xl font-bold text-center mb-6">Brand Analysis</h2>
          <img
            src="https://img-cdn.thepublive.com/filters:format(webp)/entrackr/media/post_attachments/wp-content/uploads/2021/02/BoAt-graph-1.jpg" // Replace with your actual graph image
            alt="Income Graph"
            className="w-full rounded-lg shadow-md"
          />
          <p className="text-center text-gray-700 mt-4">Income Graph</p>
        </div>
      </div>

      {/* Sales Division Section */}
      <div className="bg-red-100 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-center mb-6">Sales Division</h2>
          <img
            src="https://img-cdn.thepublive.com/filters:format(webp)/entrackr/media/post_attachments/wp-content/uploads/2021/02/BoAt-Sales-1.jpg" // Replace with your actual pie chart image
            alt="Sales Division"
            className="w-full rounded-lg shadow-md"
          />
          <p className="text-center text-gray-700 mt-4">Breakup of Sales</p>
        </div>
      </div>
    </div>
  )
}

export default Boat
