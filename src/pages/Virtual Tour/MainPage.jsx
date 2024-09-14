// src/components/PlantInfo.js

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Example plant data
const plantData = [
  {
    _id: '1',
    localname: 'Tulsi',
    plantDescription: 'A sacred plant in Hinduism known for its medicinal properties.',
    scientificName: 'Ocimum sanctum',
    homegrown: true,
    location: 'India',
    primaryImage: 'https://example.com/tulsi.jpg',
    threedModel: 'https://example.com/tulsi_model.glb',
    videoLink: 'https://example.com/tulsi_video.mp4',  // Added video link
    shlok: [
      {
        shlok: 'शिवाय विष्णवे नमः',
        shlok_meaning: 'Salutations to Lord Shiva and Lord Vishnu',
        resource: 'Bhagavad Gita'
      }
    ],
    healthBenefits: [
      {
        healthBenefit: 'Boosts immunity',
        howToUse: 'Consume as a tea or in food.'
      }
    ]
  },
  {
    _id: '1',
    localname: 'Tulsi',
    plantDescription: 'A sacred plant in Hinduism known for its medicinal properties.',
    scientificName: 'Ocimum sanctum',
    homegrown: true,
    location: 'India',
    primaryImage: 'https://example.com/tulsi.jpg',
    threedModel: 'https://example.com/tulsi_model.glb',
    videoLink: 'https://example.com/tulsi_video.mp4',  // Added video link
    shlok: [
      {
        shlok: 'शिवाय विष्णवे नमः',
        shlok_meaning: 'Salutations to Lord Shiva and Lord Vishnu',
        resource: 'Bhagavad Gita'
      }
    ],
    healthBenefits: [
      {
        healthBenefit: 'Boosts immunity',
        howToUse: 'Consume as a tea or in food.'
      }
    ]
  },
  {
    _id: '1',
    localname: 'Tulsi',
    plantDescription: 'A sacred plant in Hinduism known for its medicinal properties.',
    scientificName: 'Ocimum sanctum',
    homegrown: true,
    location: 'India',
    primaryImage: 'https://example.com/tulsi.jpg',
    threedModel: 'https://example.com/tulsi_model.glb',
    videoLink: 'https://example.com/tulsi_video.mp4',  // Added video link
    shlok: [
      {
        shlok: 'शिवाय विष्णवे नमः',
        shlok_meaning: 'Salutations to Lord Shiva and Lord Vishnu',
        resource: 'Bhagavad Gita'
      }
    ],
    healthBenefits: [
      {
        healthBenefit: 'Boosts immunity',
        howToUse: 'Consume as a tea or in food.'
      }
    ]
  },
];

const VirtualTour = () => {
  const [selectedPlant, setSelectedPlant] = useState(plantData[0]); // Default to the first plant

  const handlePlantChange = (event) => {
    const plantId = event.target.value;
    const plant = plantData.find(p => p._id === plantId);
    setSelectedPlant(plant);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row min-h-screen bg-green-50 p-4">
        <div className="flex-1 lg:w-1/2 p-4">
          <div className="mb-8">
            <label htmlFor="plant-select" className="block text-lg font-semibold mb-2 text-green-700">Select a Plant:</label>
            <select
              id="plant-select"
              onChange={handlePlantChange}
              className="border border-gray-300 rounded p-2 w-full"
            >
              {plantData.map(plant => (
                <option key={plant._id} value={plant._id}>
                  {plant.localname}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
            {selectedPlant.videoLink && (
              <div className="mb-4">
                <video controls className="w-full h-auto rounded-lg">
                  <source src={selectedPlant.videoLink} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            <h3 className="text-2xl font-semibold mb-2 text-green-700">{selectedPlant.localname}</h3>
            <p className="text-gray-600 mb-4">{selectedPlant.plantDescription}</p>
            <p className="text-gray-600 mb-4"><strong>Scientific Name:</strong> {selectedPlant.scientificName}</p>
            <p className="text-gray-600 mb-4"><strong>Homegrown:</strong> {selectedPlant.homegrown ? 'Yes' : 'No'}</p>
            <p className="text-gray-600 mb-4"><strong>Location:</strong> {selectedPlant.location}</p>
            {selectedPlant.shlok.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-green-600 mb-2">Shlokas:</h4>
                <ul className="list-disc ml-5 text-gray-700">
                  {selectedPlant.shlok.map((shlok, index) => (
                    <li key={index} className="mb-2">
                      <p><strong>Shlok:</strong> {shlok.shlok}</p>
                      <p><strong>Meaning:</strong> {shlok.shlok_meaning}</p>
                      <p><strong>Resource:</strong> {shlok.resource}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {selectedPlant.healthBenefits.length > 0 && (
              <div>
                <h4 className="text-xl font-semibold text-green-600 mb-2">Health Benefits:</h4>
                <ul className="list-disc ml-5 text-gray-700">
                  {selectedPlant.healthBenefits.map((benefit, index) => (
                    <li key={index} className="mb-2">
                      <p><strong>Benefit:</strong> {benefit.healthBenefit}</p>
                      <p><strong>How to Use:</strong> {benefit.howToUse}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 lg:w-1/2 p-4 flex items-center justify-center">
          <img
            className="w-full h-auto max-w-sm object-cover rounded-lg shadow-lg"
            src={selectedPlant.primaryImage}
            alt={selectedPlant.localname}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VirtualTour;
