import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const hairCareData = [
  {
    plant: 'Bhringraj',
    benefits: 'Promotes hair growth, prevents hair fall, and improves scalp health.',
    image: '../Images/bhringraj.webp',
  },
  {
    plant: 'Amla',
    benefits: 'Strengthens hair, prevents premature graying, and enhances shine.',
    image: '../Images/amla.webp',
  },
  {
    plant: 'Neem',
    benefits: 'Fights dandruff, controls scalp infections, and promotes healthy hair.',
    image: '../Images/neem.jpg',
  },
  {
    plant: 'Brahmi',
    benefits: 'Calms the scalp, reduces hair fall, and improves hair texture.',
    image: './Images/brahmi.jpg',
  },
];

const Haircare = () => {
  return (
    <>
      <Navbar />
    <div className="min-h-screen bg-green-50 p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row bg-white shadow-lg
       rounded-lg p-6">
        {/* Left Column (Content) */}
        <div className="lg:w-1/2 pr-4">
          <h1 className="text-4xl font-bold mb-4 text-center lg:text-left">Ayurvedic Plants for Haircare</h1>
          <p className="text-lg mb-8 text-gray-700 text-center lg:text-left">
            Discover the natural benefits of Ayurvedic plants for your hair.
          </p>
          <div className="space-y-6">
            {hairCareData.map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md flex items-center">
                <img
                  src={item.image}
                  alt={item.plant}
                  className="w-24 h-24 object-cover rounded-full mr-4"
                />
                <div>
                  <h2 className="text-2xl font-semibold text-green-600">{item.plant}</h2>
                  <p className="text-gray-600 mt-2">{item.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right Column (Large Image) */}
        <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
          <img
            src="../Images/haircare.webp" // Replace with your large image path
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

export default Haircare;
