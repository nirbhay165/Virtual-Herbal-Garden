import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const fitnessData = [
  {
    plant: 'Ginger',
    benefits: 'Ginger is renowned for its anti-inflammatory properties and ability to aid in digestion. It can help reduce muscle soreness and improve exercise recovery. Add fresh ginger to your smoothies or teas to enhance your fitness regimen.',
    image: '../Images/ginger.jpeg',
  },
  {
    plant: 'Turmeric',
    benefits: 'Turmeric contains curcumin, a powerful compound with anti-inflammatory and antioxidant effects. Its excellent for joint health and can enhance recovery from intense workouts. Incorporate turmeric into your diet with curries or golden milk.',
    image: '../Images/turmeric.jpg',
  },
  {
    plant: 'Peppermint',
    benefits: 'Peppermint is known for its ability to boost energy and improve focus. It can help alleviate headaches and digestive discomfort. Enjoy peppermint tea before workouts or use it as a flavoring in your water.',
    image: '../Images/peppermint.jpeg',
  },
  {
    plant: 'Lemon Balm',
    benefits: 'Lemon balm has calming properties that can reduce stress and anxiety, making it easier to stay motivated with your fitness goals. It also aids in digestion and can be enjoyed in teas or as a fresh herb in salads.',
    image: './Images/lemon_balm.jpeg',
  },
];

const FitnessPage = () => {
  return (
    <>
      <Navbar />
    <div className="min-h-screen bg-green-50 p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row bg-white shadow-lg
       rounded-lg p-6">
        {/* Left Column (Content) */}
        <div className="lg:w-1/2 pr-4">
          <h1 className="text-4xl font-bold mb-4 text-center lg:text-left">Ayurvedic Plants for Fitness</h1>
          <p className="text-lg mb-8 text-gray-700 text-center lg:text-left">
            Discover the natural benefits of Ayurvedic plants for your fitness.
          </p>
          <div className="space-y-6">
            {fitnessData.map((item, index) => (
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
            src="../Images/yoga.webp" // Replace with your large image path
            alt="Fitness"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default FitnessPage;
