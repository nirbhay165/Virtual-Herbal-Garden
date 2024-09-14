import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Explore from "./Explore.jsx";

const HealthWellnessPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  const slides = [
    {
      image: "./Images/top.jpg",
    },
    // Add more slides as needed
  ];

  const brands = [
    { name: "Skin Care", logo: "./Images/skincare.avif",route:"/skincare" },
    { name: "Hair Care", logo: "./Images/haircare.webp",route:"/haircare" },
    { name: "Diseases", logo: "./Images/herbalpractice.png",route:"/herbal_practice"},
    { name: "Nutrition", logo: "./Images/plantnution.jpeg",route:"/nutrition" },
    { name: "Fitness", logo: "./Images/yoga.webp" ,route:"/fitness"},
  ];

  const ingredients = [
    { name: "Amla", image: "./Images/amla.webp", route: "/virtual_tour" },
   { name: "Tulsi", image: "./Images/tulsi.jpg", route: "/virtual_tour" },
   { name: "Neem", image: "./Images/neem.jpg", route: "/virtual_tour" },
   { name: "Aloe Vera", image: "./Images/alovera.jpeg", route: "/virtual_tour" }, 
   ];

  return (
    <>
    <Navbar />
    <div className="bg-green-50 ">
      {/* Header */}
      {/* <div className="navbar flex justify-between items-center p-4">
          <div className="navbar-start">
            <Link to="/">
              <img src="./Images/logo.png" alt="Logo" className="h-20 w-auto rounded-full" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <nav className="space-x-10 items-center">
              <Link
                to="/"
                className="text-2xl font-semibold text-green-800 hover:text-green-300 transition duration-300 hover:bg-gray-200 rounded-lg px-4 py-2"
              >
                Home
              </Link>
              <Link
                to="/health-wellness"
                className="text-2xl font-semibold text-green-800 hover:text-green-300 transition duration-300 hover:bg-gray-200 rounded-lg px-4 py-2"
              >
                Explore
              </Link>
              <Link
                to="/AboutUs"
                className="text-2xl font-semibold text-green-800 hover:text-green-300transition duration-300 hover:bg-gray-200 rounded-lg px-4 py-2"
              >
                About Us
              </Link>
              <Link
                to="/ContactUS"
                className="text-2xl font-semibold text-green-800 hover:text-green-300 transition duration-300 hover:bg-gray-200 rounded-lg px-4 py-2"
              >
                Contact
              </Link>
            </nav>
          </div>
      </div> */}
      

{/* to use thisssssssssssssssssssssssssssss */}
      {/* Hero Slider */}
      {/* <div className="relative h-96 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src="./Images/quote.jpg"
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl mb-6">{slide.description}</p>
              </div>
            </div>
          </div>
        ))} */}
        {/* <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === 0 ? slides.length - 1 : prev - 1
            )
          }
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === slides.length - 1 ? 0 : prev + 1
            )
          }
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        >
          <ChevronRight size={24} />
        </button> */}
      {/* </div> */}

      {/* Brands Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3 py-5">
  <h2 className="text-3xl font-bold text-center mb-8"></h2>
  <div className="flex flex-wrap justify-center gap-4 lg:gap-7">
    {brands.map((brand, index) => (
      <div key={index} className="text-center flex flex-col items-center">
        <img
          src={brand.logo}
          alt={brand.name}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto mb-2 rounded-full hover:scale-105 transform transition-transform duration-300"
        />
        <button className="bg-green-800 text-white px-4 py-1 rounded-full hover:bg-green-200 transition duration-300" onClick={() => navigate(brand.route)}>
          {brand.name}
        </button>
      </div>
    ))}
  </div>
</div>



      {/* New Text Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl uppercase tracking-wide text-gray-500 mb-2">
            FUTURE OF HERBAL WISDOM
          </h2>
          <h1 className="text-4xl font-bold text-amber-600 mb-8">
            EXPLORE THE WORLD OF HEALTH & WELLNESS
          </h1>
          <p className="text-gray-700 mb-8">
            In today's fast-paced world, staying healthy is a challenge. It
            requires eating the right foods, finding balance, and nurturing both
            body and mind. Our mission is to make this journey easier by
            offering a wealth of knowledge about medicinal plants through our
            Virtual Herbal Garden.
          </p>
          <p className="text-gray-700 mb-12">
            Our platform is built on a foundation of extensive research into
            traditional herbal practices. We bring together the best of nature's
            remedies, offering detailed information and interactive experiences
            that help you discover the healing power of plants. This is what
            inspires us to keep expanding our garden and sharing it with you
            every day.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-amber-600">
            <div>
              <h3 className="text-4xl font-bold mb-2">150+</h3>
              <p className="text-sm uppercase">Medicinal Plants Catalogued</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">100+</h3>
              <p className="text-sm uppercase">
                TRADITIONAL HERBAL REMEDIES EXPLAINED
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">15+</h3>
              <p className="text-sm uppercase">
                Learn about 15+ yoga poses that align with Ayurvedic principles.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">20+</h3>
              <p className="text-sm uppercase">
                {" "}
                Nutritional Recipes for Wellness
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ayurveda Section */}
      <div
        className="relative bg-cover bg-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <div className="bg-white bg-opacity-90 p-12 max-w-2xl shadow-lg">
            <h3 className="text-gray-600 uppercase text-2xl mb-4 text-center">
              WHAT WE DO
            </h3>
            <h2 className="text-3xl font-light text-amber-600 mb-6 text-center">
              Ancient Ayurveda met modern science. And together they went and
              built a legacy.
            </h2>
            <p className="text-gray-700 mb-8 text-center">
              Gathering the choicest, natural ingredients is important. But you
              also need to know how to blend them to create a quality health
              product. That's why we rely on the traditional knowledge of
              Ayurveda and the expertise of modern-day science. And quite
              honestly, it's the very foundation of everything we've built ever
              since.
            </p>
            <div className="text-center">
              <button className="border border-amber-600 text-amber-600 px-6 py-2 hover:bg-amber-600 hover:text-white transition duration-300"> <Link
                to="/explore_ayurveda"
                onClick={handleClick}
                className="text-lg font-semibold mb-4"
                > Explore Ayurveda </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Ingredients Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-center mb-8 text-black">
          What's on the inside is what matters the most.
        </h2>
        <div className="px-4 sm:px-6 lg:px-3 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
            {ingredients.map((ingredients, index) => (
              <div
                key={index}
                className="text-center bg-base-100 shadow-lg rounded-lg overflow-hidden"
              >
                <figure className="flex justify-center items-center p-4 cursor-pointer">
                  <img
                    src={ingredients.image}
                    alt={ingredients.name}
                    className="w-48 h-48 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-1"
                    onClick={() => (window.location.href = "/#")}
                  />
                </figure>

                <div className="card-body items-center text-center px-4 py-4">
                  <h2 className="text-xl font-bold mb-2">{ingredients.name}</h2>
                  <div className="card-actions">
                  <button className="btn bg-green-900 text-white hover:bg-green-300 hover:text-green-900 hover:scale-105 transform transition-transform duration-300" onClick={() => navigate(ingredients.route)}>More Info</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
< Footer />
      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>123 Health Street, Wellness City</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@healthwellness.com support@herbalgarden.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
                <li>About Us</li>
                <li>Ayurvedic Practices</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
    </>
  );
};

export default HealthWellnessPage;
