import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    reason: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  // Form validation logic
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
      valid = false;
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    }
    if (!formData.subject) {
      newErrors.subject = 'Subject is required';
      valid = false;
    }
    if (!formData.reason) {
      newErrors.reason = 'Reason for contact is required';
      valid = false;
    }
    if (!formData.message) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        reason: '',
        message: ''
      });
    }
  };

  return (
    <>
    <Navbar />
    <div>
    <Box className="bg-green-50 p-6">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form Section */}
        <Paper elevation={3} className="bg-white p-6 rounded-lg shadow-lg border border-green-300 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
          <Typography variant="h5" className="text-green-800 mb-4 text-center">
            Contact Us
          </Typography>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-grey-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`mt-1 block w-full border ${errors.name ? 'border-red-500' : 'border-green-200'} rounded-md shadow-sm focus:border-green-200 focus:ring-green-200 sm:text-sm`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-green-200'} rounded-md shadow-sm focus:border-green-200 focus:ring-green-200 sm:text-sm`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`mt-1 block w-full border ${errors.phone ? 'border-red-500' : 'border-green-200'} rounded-md shadow-sm focus:border-green-200 focus:ring-green-200 sm:text-sm`}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className={`mt-1 block w-full border ${errors.subject ? 'border-red-500' : 'border-green-200'} rounded-md shadow-sm focus:border-green-200 focus:ring-green-200 sm:text-sm`}
              />
              {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                Reason for Contact <span className="text-red-500">*</span>
              </label>
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                className={`mt-1 block w-full border ${errors.reason ? 'border-red-500' : 'border-green-200'} rounded-md shadow-sm focus:border-green-200 focus:ring-green-200 sm:text-sm`}
              >
                <option value="">Select Reason</option>
                <option value="Inquiry">Inquiry</option>
                <option value="Feedback">Feedback</option>
                <option value="Support">Support</option>
              </select>
              {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`mt-1 block w-full border ${errors.message ? 'border-red-500' : 'border-green-200'} rounded-md shadow-sm focus:border-green-200 focus:ring-green-200 sm:text-sm`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </Paper>

        {/* Contact Information Section */}
        <Paper elevation={3} className="bg-white p-6 rounded-lg shadow-lg border border-green-300">
          <Typography variant="h6" className="text-xl font-bold text-green-800 mb-4">
            Get in Touch
          </Typography>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-green-500" />
              <span>(123) 456-7890</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-green-500" />
              <span>info@healthwellness.com ; support@herbalgarden.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-green-500" />
              <span>123 Health Street, Wellness City</span>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="mt-6 flex space-x-4">
            <FaFacebook className="text-green-500 text-xl cursor-pointer hover:text-green-700" />
            <FaInstagram className="text-green-500 text-xl cursor-pointer hover:text-green-700" />
            <FaTwitter className="text-green-500 text-xl cursor-pointer hover:text-green-700" />
          </div>

          {/* Google Maps Placeholder */}
          <div className="mt-6">
            <iframe
              className="w-full h-48 border-0 rounded-md"
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Nature+City"
              allowFullScreen
              title="Google Maps"
            ></iframe>
          </div>
        </Paper>
      </div>
    </Box>
    < Footer/>
    </div>
    </>
  );
};

export default ContactUs;
