import React from 'react'
import Navbar from "../components/navbar/navbar.jsx"
import bg from "../Images/amazfitbg.webp"
import overall from "../Images/amazfit1.png"
import by_age from "../Images/amazfit2.png"
const Amazfit = () => {

  const products = [
    {
      name: "Amazfit Band 7 - Black",
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRjNals275VsSCAlnyxVvGbWfa_aBkoQ6MmHlg0GLNMIfqSffWDsDoy4vfKjYWBKZbPc9aWWGhd1WB-GNTNHtRun-fg_Gg2TWbh5Zxbcvo&usqp=CAE", // Replace with the actual image URL
      description: "Smartwatch Model A",
    },
    {
      name: "Amazfit GTS-2 Mini SmartWatch",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTLSfptd0MuGQIIxNFlMIecgIbzSxekzg7kpev9EPqLokn8zk3CeHnRBhyNpM7azUGY8iMjgflyeIjRDPHwh_ufn0E-caVmtw&usqp=CAE", // Replace with the actual image URL
      description: "Smartwatch Model B",
    },
    {
      name: "Amazfit Bip U 1.43 in HD Display Green Smart watch",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTiOzC1IdBXwrfMgouhT2-CRHxKS9chPuZPjjyX5KpVQJEAFrVEq75CKlhpku-cL8ERAAwkHEcvmDynovSSN6ebgkztAQJvNb95LrVM8Zft6GleNs64mA1kNg&usqp=CAE", // Replace with the actual image URL
      description: "Smartwatch Model C",
    },
  ];
  return (
    
    <div>
        <img src={bg} alt='Amazfit' className='w-full mx-auto rounded shadow-lg'/>

        <div className="bg-gray-50 py-10 px-6 ">
      <div className="grid md:grid-cols-2 gap-4 max-w-3xl max-h-4xl mx-auto">
        {/* Left Section */}
        <div className="bg-blue-500 text-white flex items-center justify-center p-6">
          <h2 className="text-xl md:text-xl font-semibold leading-relaxed text-center">
            A Leading Global Wearable Brand <br /> Focused on Health and Fitness
          </h2>
        </div>

        {/* Right Section */}
        <div className="text-gray-700">
          <p className="mb-4">
          Amazfit is powered by Zepp Health's proprietary health management platform that delivers 
          cloud-based 24/7 actionable insights and guidance to help users attain their wellness goals. 
          With outstanding craftsmanship, Amazfit smartwatches have won many design awards, including the 
          iF Design Award and the Red Dot Design Award.
          Launched in 2015, Amazfit is today embraced by millions of users. 
          Its products are available in more than 90 countries across the Americas, EMEA, and APAC regions.


            </p>
          <p>
          They have variety of Smartwatches, Fitness Bands, Rings and other accessories. They create dynamic and stylish technology products that promote self expression and positive self-image 
          by balancing style and performance to enhance every activity. 
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
          <h2 className="text-xl font-bold text-center mb-6">Usage analysis by Age</h2>
          <img
            src={by_age} // Replace with your actual pie chart image
            alt="Usage By Age"
            className="w-full rounded-lg shadow-md"
          />
          <p className="text-center text-gray-700 mt-4"></p>
        </div>
      </div>
    </div>
  )
}

export default Amazfit