import React from 'react';
import Navbar from "../components/navbar/navbar.jsx";

const Google = () => {
  const products = [
    {
      name: "Google Pixel Watch 2",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSpyTu-hahYiB-mLtbHZtZGRDwghjkuXh9K_2m0goChANCwbax9h19MGFweiPUtx6vsxYXBKlZ7IcSYMv99XrjFP_UTQ-gz0xnNjXt1A9YPlXkcaJyINHQ-SZQ",
      description: "Advanced smartwatch with Fitbit integration, health tracking, and Wear OS by Google",
    },
    {
      name: "Google Pixel Watch LTE",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR4Uwoh2TMCkMHPYS5LhP6Ysl34c53LcdoXP974C9JLu5aFWALgjEeR--AnLheVz63D_gAM1N-twVVg1slR6luYsvcbL5l_",
      description: "LTE-enabled smartwatch with advanced health tracking and Google Assistant",
    },
    {
      name: "Google Pixel Watch Stainless Steel",
      image: "https://rukminim2.flixcart.com/image/1200/1200/xif0q/smartwatch/n/4/o/41-gg3hh-android-google-no-original-imah3wy6fzc7kadz.jpeg",
      description: "Premium design smartwatch with Fitbit health tracking and long battery life",
    },
  ];
  return (
    <div>
      <img
        src="https://i.pcmag.com/imagery/reviews/01nmXk05Lm8TWZU3lO9ABCW-1..v1665431066.jpg"
        alt='Google'
        className='w-full mx-auto rounded shadow-lg'
      />

      <div className="bg-gray-200 py-10 px-6">
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl max-h-4xl mx-auto">
          <div className="bg-gray-900 text-white flex items-center justify-center p-6">
            <h2 className="text-xl md:text-xl font-semibold leading-relaxed text-center">
              Google: Innovation <br />
              and Smart Technology
            </h2>
          </div>

          <div className="text-gray-700">
            <p className="mb-4">
              Google is a global technology leader, known for its advancements in AI, cloud computing, and consumer electronics.
              From smartphones to smart home devices, Google's ecosystem seamlessly integrates innovation with everyday life.
            </p>
            <p>
              Google's smart devices, like the Pixel series, Nest products, and Pixel Buds, offer cutting-edge features including
              AI-driven assistance, superior connectivity, and industry-leading design and performance.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-300 py-10">
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

      <div className="bg-gray-900 py-10 mt-10">
        <div className="max-w-4xl mx-auto px-4">
          <img
            src="src\assets\Images\Total Usage Analysis\Google\Usage Analysis\Overall_sentiment(Google)[Usage Analysis].png"
            alt="Income Graph"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="bg-gray-900 py-10 mt-10">
        <div className="max-w-4xl mx-auto px-4">
          <img
            src="src\assets\Images\Total Usage Analysis\Google\Usage Analysis\sentiment_by_state(Google)[Usage Analysis].png"
            alt="Sales Division"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Google;
