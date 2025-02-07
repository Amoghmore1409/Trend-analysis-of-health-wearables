import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative text-center py-16">
        <img src="src\assets\Images\wearable_trends.jpg" alt="Health Wearables" className="w-full h-96 object-cover opacity-60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-4xl font-bold">Revolutionizing Health with Wearables</h2>
          <p className="text-lg mt-2">Track your health with the latest smart wearables.</p>
          <Link to="/market-trend-analysis" className="mt-4 px-6 py-2 bg-blue-600 rounded hover:bg-blue-700">
            Explore Trends
          </Link>
        </div>
      </section>

      {/* Health Wearables Information Section */}
      <section className="py-12 px-8">
        <h3 className="text-3xl font-bold text-center mb-6">Top Health Wearables</h3>
        <div className="grid md:grid-cols-5 gap-8">
          {[
            { name: "Apple Watch", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRNadA5gFk11ojm8rWfp8yed-7NgdnKFKd6n7TxAC0Up-teDoMw2RTvZP6CYaAOrpVwuhGOP6090dfdmrgOgo0Yjezp6CKw7KNMy8_XLpRvP7bYd4kKfdq68ud9Mp94E5y6nCnGTiE&usqp=CAc", desc: "Advanced health tracking, ECG, and fitness tracking." },
            { name: "Fitbit Sense", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQX3DWEwvt9DpqRzS4htiM3qb9Wt8z9SnUzSLHQiL0V2w_GewA-pZCQn_CTuAwp2z7Ez_5dQjQ-LdFIKKZZT0loffTFvyYP2Aa9hFleSVNGJTgka8j1yLl6", desc: "Stress management, heart rate tracking, and sleep insights." },
            { name: "Garmin Venu", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSkC-iaLTg7Vri2pbeVqrBYctlvPk-_FLJkwwkMKppekJa7_ToScEqgdQEfcZ1HpYyR8ppfKuAPie7QdSAXpgvytxyOnK8mWPfjCgLWl8XDBO1zXBKRCEDDJ4nR&usqp=CAE", desc: "Detailed sports metrics and built-in GPS." },
            { name: "Samsung Galaxy Watch 5", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQEy0XUtHMJWMTjae64_xpVVQedQc0is1Q0A3IJ6_tTM-I4NgXf_CnO97m--Be01KE-xzTYPfyg4lOKjq7NOujzK17dHjeOJGYMWaztq4gzYYYssudWUTpS&usqp=CAE", desc: "Advanced bioactive sensor and seamless connectivity." },
            { name: "Amazfit GTR 4", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQSgqtAqx9tJaS34VHTN4JHWZZdL5q0MEPP20gVjbJX_PS1ET3eONqzCcDtmauCCnoWTM8jv5tpjAjPjrjzdp9CPMLco9u1vxvhPKeh0jRMIxZyptuwhUq-&usqp=CAE", desc: "GPS tracking, fitness monitoring, and long battery life." },
          ].map((device, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img src={device.img} alt={device.name} className="w-full h-48 object-cover rounded mb-4" />
              <h4 className="text-xl font-semibold">{device.name}</h4>
              <p className="text-gray-300">{device.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;