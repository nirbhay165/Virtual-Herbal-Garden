import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Book, Info } from "lucide-react";
import { AuthContext } from "../../contexts/AuthProvider";
import Navbar from "../../components/Navbar";

const LandingPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleBeginExploration = () => {
    navigate("./"); // Adjusted path
  };

  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="relative min-h-screen text-green-900">
      {/* Navbar */}
      <Navbar />

      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="./Images/herbal.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen bg-black bg-opacity-30 text-white pt-20"> {/* Adjust pt to ensure content is below navbar */}
        {/* Main Content */}
        <main className="container mx-auto px-4 py-2"> {/* Increased padding-top */}
          {/* Landing Page Section */}
          <section className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 text-black">
              Discover the World of Medicinal Plants
            </h2>
            <p className="text-xl mb-8 text-white">
              Explore our interactive 3D garden and learn about the healing
              power of nature
            </p>
          </section>

          {/* Feature Section */}
          <section className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-green-300 bg-opacity-20 backdrop-blur-lg p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center text-black">
                <Search className="h-6 w-6 mr-2" />
                Explore in 3D
              </h3>
              <p className="text-white">
                Navigate through our beautifully rendered 3D garden. Select and
                interact with plants to learn more about their properties and
                uses.
              </p>
            </div>
            <div className="bg-green-300 bg-opacity-20 backdrop-blur-lg p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center text-black">
                <Book className="h-6 w-6 mr-2" />
                Comprehensive Information
              </h3>
              <p className="text-white">
                Access detailed information about each plant, including its
                medicinal uses, cultivation tips, and historical significance.
              </p>
            </div>
          </section>

          {/* Get Started Section */}
          <section className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 text-black">
              Get Started with Your Herbal Journey
            </h2>
            <p className="text-xl mb-8 text-white">
              Choose how you'd like to explore our virtual herbal garden
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-300 bg-opacity-20 backdrop-blur-lg rounded-lg p-6 text-left">
                <h2 className="text-2xl font-semibold mb-2 flex items-center text-black">
                  <Search className="w-6 h-6 mr-2" />
                  Take a Virtual Tour
                </h2>
                <p className="mb-4">
                  Immerse yourself in a guided experience through our 3D garden.
                  Learn about key medicinal plants and their properties.
                </p>
                <ol className="list-decimal list-inside space-y-2 mb-4">
                  <li>Experience 360° views of our virtual garden</li>
                  <li>Learn about key plants through interactive hotspots</li>
                  <li>Discover the history and uses of medicinal herbs</li>
                  <li>Complete the tour to unlock special features</li>
                </ol>
                <Link to="/virtual_tour" onClick={handleClick}>
                  <button className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Start Virtual Tour
                  </button>
                </Link>
              </div>
              <div className="bg-green-300 bg-opacity-20 backdrop-blur-lg rounded-lg p-6 text-left">
                <h2 className="text-2xl font-semibold mb-2 flex items-center text-black">
                  <Book className="w-6 h-6 mr-2" />
                  Start Exploring Your Virtual Garden
                </h2>
                <p className="mb-4">
                  Dive right into our comprehensive database of your own medicinal
                  plants. Search, filter, and learn at your own pace also with links.
                </p>
                <ol className="list-decimal list-inside space-y-2 mb-4">
                  <li>Access our full catalog of medicinal plants</li>
                  <li>Use advanced search and filter options</li>
                  <li>Read detailed information on each plant</li>
                  <li>Buy your favourute plants.</li>
                </ol>
                <Link to="/health-wellness" onClick={handleClick}>
                  <button className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Begin Exploration to your own Garden
                  </button>
                </Link>
              </div>
            </div>
          </section>

          {/* Did You Know Section */}
          <section className="text-center">
            <div className="bg-green-300 bg-opacity-20 backdrop-blur-lg rounded-lg p-4 inline-block">
              <h3 className="text-2xl font-semibold mb-2 flex items-center justify-center text-black">
                <Info className="h-6 w-6 mr-2 text-black" />
                Did You Know?
              </h3>
              <p className="text-lg">
                "Over 80% of the world's population relies on traditional
                plant-based medicines for primary healthcare."
              </p>
            </div>
          </section>
        </main>
        {/* Footer */}
        <footer className="bg-green-800 bg-opacity-50 text-white p-4 mt-12">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Virtual Herbal Garden. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
