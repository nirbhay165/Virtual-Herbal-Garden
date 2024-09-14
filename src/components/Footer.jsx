import React from "react";
import AboutUs from "../pages/AboutUs";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="bg-green-900 text-white py-2 mt-4">
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
                <li>

              <Link
                to="/AboutUs"
                className="text-lg font-semibold mb-4 underline"
                > AboutUs </Link>
                </li>
                <li>

              <Link
                to="/explore_ayurveda"
                className="text-lg font-semibold mb-4 underline"
                > Explore Ayurveda</Link>
                </li>
                
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
                <div className="mt-6 flex space-x-4">
            <FaFacebook className="text-green-500 text-xl cursor-pointer hover:text-green-700" />
            <FaInstagram className="text-green-500 text-xl cursor-pointer hover:text-green-700" />
            <FaTwitter className="text-green-500 text-xl cursor-pointer hover:text-green-700" />
          </div>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
