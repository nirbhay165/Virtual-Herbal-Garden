import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Sample skincare data with images
const skincareData = [
  {
    plant: 'Aloe Vera',
    benefits: 'Soothes skin, provides hydration, and promotes healing.',
    image: '../Images/alovera.jpeg',
  },
  {
    plant: 'Turmeric',
    benefits: 'Reduces inflammation, brightens skin, and fights bacteria.',
    image: './Images/turmeric.jpg',
  },
  {
    plant: 'Neem',
    benefits: 'Cleanses skin, fights acne, and improves complexion.',
    image: '../Images/neem.jpg',
  },
  {
    plant: 'Tulsi (Holy Basil)',
    benefits: 'Purifies skin, reduces redness, and protects against pollutants.',
    image: '../Images/tulsi.jpg',
  },
];

const Skincare = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-green-50 p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row bg-white shadow-lg rounded-lg p-6">
        {/* Left Column (Content) */}
        <div className="lg:w-1/2 pr-4">
          <h1 className="text-4xl font-bold mb-4 text-center lg:text-left">Ayurvedic Plants for Skincare</h1>
          <p className="text-lg mb-8 text-gray-700 text-center lg:text-left">
            Discover the natural benefits of Ayurvedic plants for your skin.
          </p>
          <div className="space-y-6">
            {skincareData.map((item, index) => (
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
            src="../Images/skincare.avif" // Replace with your large image path
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

export default Skincare;
