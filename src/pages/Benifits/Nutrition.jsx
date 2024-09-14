import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const plants = [
  {
    name: "Basil",
    image: "./Images/tulsi.jpg",
    description: "Basil is packed with antioxidants and has anti-inflammatory properties. It's great for digestion and has a pleasant aroma."
  },
  {
    name: "Mint",
    image: "./Images/mint.jpeg",
    description: "Mint aids in digestion and is also good for respiratory health. It can be used fresh or dried in various recipes."
  },
  {
    name: "Parsley",
    image: "./Images/parsley.jpeg",
    description: "Parsley is rich in vitamins A, C, and K. It supports bone health and can improve overall digestion."
  },
  {
    name: "Kale",
    image: "./Images/Kale.webp",
    description: "Parsley is rich in vitamins A, C, and K. It supports bone health and can improve overall digestion."
  },
];

const Nutrition = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-green-50 p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row bg-white shadow-lg
       rounded-lg p-6">
        {/* Left Column (Content) */}
        <div className="lg:w-1/2 pr-4">
          <h1 className="text-4xl font-bold mb-4 text-center lg:text-left">Ayurvedic Plants for Nutrition</h1>
          <p className="text-lg mb-8 text-gray-700 text-center lg:text-left">
            Discover the natural benefits of Ayurvedic plants for your nutrients in body.
          </p>
          <div className="space-y-6">
            {plants.map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md flex items-center">
                <img
                  src={item.image}
                  alt={item.plant}
                  className="w-24 h-24 object-cover rounded-full mr-4"
                />
                <div>
                  <h2 className="text-2xl font-semibold text-green-600">{item.name}</h2>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Right Side - Gig Image */}
      <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
          <img
            src="./Images/plantnution.jpeg" // Replace with your large image path
            alt="Skincare"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default Nutrition;
