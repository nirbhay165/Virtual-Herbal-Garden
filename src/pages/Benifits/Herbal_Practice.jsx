import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const herbalData = [
  {
    plant: 'Cold and Flu',
    remedy: 'Ginger and Honey Tea',
    help:'Ginger has antiviral properties and can help soothe a sore throat, reduce congestion, and strengthen the immune system. Honey has antibacterial properties and can alleviate coughing.',
    preparation:'Boil a few slices of fresh ginger in water for 10 minutes. Add honey and lemon for taste.',
    image: '../Images/cold.jpg',
  },
  {
    plant: 'High Blood Pressure',
    remedy: ' Garlic',
    help:'Garlic contains allicin, which helps to lower blood pressure by relaxing blood vessels and improving circulation.',
    preparation:'Consume raw garlic or add it to your meals daily.',
    image: '../Images/BP.jpeg',
  },
  {
    plant: 'Diabetes',
    remedy: 'Fenugreek Seeds',
    help:'Fenugreek helps regulate blood sugar levels due to its soluble fiber content.',
    preparation:'Soak a tablespoon of fenugreek seeds in water overnight and drink the water in the morning on an empty stomach.',
    image: '../Images/diabetes.jpeg',
  },
  {
    plant: 'Joint Pain/Arthritis',
    remedy: 'Turmeric',
    help:'Turmeric contains curcumin, which has potent anti-inflammatory properties that can help relieve joint pain and stiffness.',
    preparation:'Consume turmeric in food, or make turmeric tea with a pinch of black pepper to enhance absorption.',
    image: '../Images/jointpain.jpeg',
  },
];

const HerbalPage = () => {
  return (
    <>
      <Navbar />
    <div className="min-h-screen bg-green-50 p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row bg-white shadow-lg
       rounded-lg p-6">
        {/* Left Column (Content) */}
        <div className="lg:w-1/2 pr-4">
          <h1 className="text-4xl font-bold mb-4 text-center lg:text-left">Ayurvedic Plants for Diseases</h1>
          <p className="text-lg mb-8 text-gray-700 text-center lg:text-left">
            Discover the natural benefits of Ayurvedic plants for your diseases.
          </p>
          <div className="space-y-6">
            {herbalData.map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md flex items-center">
                <img
                  src={item.image}
                  alt={item.plant}
                  className="w-24 h-24 object-cover rounded-full mr-4"
                />
                <div>
                  <h2 className="text-2xl font-semibold text-green-600">{item.plant}</h2>
                  <p className="text-gray-600 mt-2">Remedy: {item.remedy}</p>
                  <p className="text-gray-600 mt-2">Help: {item.help}</p>
                  <p className="text-gray-600 mt-2">Preparation: {item.preparation}</p>
              
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right Column (Large Image) */}
        <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
          <img
            src="../Images/herbalpractice.png" // Replace with your large image path
            alt="herbalpractice"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default HerbalPage;
