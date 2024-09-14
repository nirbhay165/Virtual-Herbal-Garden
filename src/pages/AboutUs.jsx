import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-green-50 ">
      <header className="text-center mb-8 mt-4">
        <h1 className="text-4xl font-bold text-green-700">About Us</h1>
      </header>
      <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 ">
        <div className="text-center mb-6">
          <img
            src="./Images/logo.png" // Update with your image path
            alt="Herbal Garden"
            className="w-32 h-32 mx-auto rounded-full"
          />
        </div>
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Virtual Herbal Garden</h2>
        <p className="text-gray-700">
          We are excited to introduce our latest initiative: the Virtual Herbal Garden. This innovative platform is designed to offer an interactive, educational, and immersive experience, showcasing the diverse range of medicinal plants used in AYUSH (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy). 
        </p>
        <p className="text-gray-700 mb-4">
          Our Virtual Herbal Garden features:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Interactive 3D Models:</strong> Realistic 3D models of medicinal plants that users can rotate, zoom, and explore from different angles.</li>
          <li><strong>Detailed Information:</strong> Comprehensive details about each plant, including its botanical name, common names, habitat, medicinal uses, and methods of cultivation.</li>
          <li><strong>Multimedia Integration:</strong> High-quality images, videos, and audio descriptions to enhance the learning experience.</li>
          <li><strong>Search and Filter Options:</strong> Advanced search functionality to easily locate specific plants and filter them based on various criteria like medicinal uses, region, and type.</li>
          <li><strong>Virtual Tours:</strong> Guided virtual tours highlighting specific themes, such as plants for digestive health, immunity, skin care, etc.</li>
          <li><strong>User Interaction:</strong> Features that allow users to bookmark favorite plants, take notes, and share information on social media.</li>
        </ul>
        <p className="text-gray-700 mb-8">
          The Virtual Herbal Garden aims to make the knowledge of medicinal plants accessible to a wider audience, promoting awareness and understanding of traditional herbal practices. We are committed to providing a visually appealing, informative, and interactive experience that blends technology with traditional wisdom.
        </p>
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          At Herbal Garden, our mission is to empower individuals with knowledge and resources about the benefits of herbs. We are dedicated to bridging the gap between traditional herbal practices and modern wellness. Our goal is to inspire and educate through a comprehensive platform that highlights the rich history and practical uses of various herbs.
        </p>
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Story</h2>
        <p className="text-gray-700 mb-4">
          Founded by a group of passionate herbalists and wellness advocates, Herbal Garden began with a simple vision: to create a space where herbal knowledge could thrive. What started as a small project has grown into a thriving community, where we share insights, research, and personal experiences. Our journey reflects our commitment to fostering a deeper connection with nature and promoting holistic health through the power of herbs.
        </p>
      </section>
      <Footer />
    </div>
    </>
  );
};

export default AboutUs;