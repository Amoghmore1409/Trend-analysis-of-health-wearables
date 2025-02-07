import React from 'react';
import Navbar from "../components/navbar/navbar.jsx";

const Fossil = () => {
  const products = [
    {
      name: "Fossil Gen 6 Smartwatch",
      image: "https://m.media-amazon.com/images/I/71Vqggkd8hL._AC_UF1000,1000_QL80_.jpg",
      description: "Touchscreen Smartwatch with Alexa Built-in, GPS, and Fast Charging",
    },
    {
      name: "Fossil Hybrid Smartwatch HR",
      image: "https://m.media-amazon.com/images/I/71EkA-XaZyL._AC_UF1000,1000_QL80_.jpg",
      description: "Smartwatch with Heart Rate, Activity Tracking, and Long Battery Life",
    },
    {
      name: "Fossil Men's Machine Chronograph Watch",
      image: "https://m.media-amazon.com/images/I/71RE2ca6YzL._AC_UF1000,1000_QL80_.jpg",
      description: "Stainless Steel Chronograph Watch with Water Resistance",
    },
  ];
  return (
    <div>
      <img
        src="https://wwd.com/wp-content/uploads/2019/03/fgge_fossil_microsite_010.jpg?w=1000&h=563&crop=1"
        alt='Fossil'
        className='w-full mx-auto rounded shadow-lg'
      />

      <div className="bg-blue-200 py-10 px-6">
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl max-h-4xl mx-auto">
          <div className="bg-blue-900 text-white flex items-center justify-center p-6">
            <h2 className="text-xl md:text-xl font-semibold leading-relaxed text-center">
              Fossil Watches: Timeless <br />
              Style and Smart Innovation
            </h2>
          </div>

          <div className="text-gray-700">
            <p className="mb-4">
              Founded in 1984, Fossil is an American brand known for its vintage-inspired timepieces and smartwatches.
              Combining timeless design with modern technology, Fossil offers stylish accessories that cater to both classic
              and tech-savvy individuals.
            </p>
            <p>
              Fossil smartwatches incorporate features like heart rate tracking, GPS, and smartphone connectivity, blending
              fashion with functionality. Their hybrid models offer a perfect balance between analog aesthetics and smart
              capabilities, making them a popular choice among fashion-conscious consumers.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-300 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">Best Selling Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:shadow-lg hover:scale-105"
              >
                <img src={product.image} alt={product.name} className="mx-auto h-60 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-900 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <img
            src="src\assets\Images\Total Usage Analysis\Fossil\Usage Analysis\sentiment_by_state(Fossil)[Usage Analysis].png"
            alt="Income Graph"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="bg-blue-900 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <img
            src="src\assets\Images\Total Usage Analysis\Fossil\Usage Analysis\overall_sentiment(Fossil)[Usage Analysis].png"
            alt="Sales Division"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Fossil;