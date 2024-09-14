// src/components/AddProduct.js

import React, { useState } from 'react';
import Admin_Navbar from './Navbar';
import Admin_Sidebar from './Sidebar';

const AddProduct = () => {
  const [productDetails, setProductDetails] = useState({
    name: '',
    old_price: '',
    new_price: '',
    category: 'women',
  });
  const [image, setImage] = useState(null);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductDetails({
      ...productDetails,
      [name]: value,
    });
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const Add_Product = () => {
    // Your logic to add the product
    console.log('Product added:', productDetails);
  };

  return (
    <>
      <Admin_Navbar />
      <div className="flex">
        <Admin_Sidebar />
        <div className="flex-1 p-6 bg-gray-100">
          <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Product Title</label>
              <input
                id="name"
                value={productDetails.name}
                onChange={changeHandler}
                type="text"
                name="name"
                placeholder="Type here"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="old_price" className="block text-sm font-semibold mb-2">Price</label>
              <input
                id="old_price"
                value={productDetails.old_price}
                onChange={changeHandler}
                type="text"
                name="old_price"
                placeholder="Type here"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="new_price" className="block text-sm font-semibold mb-2">Offer Price</label>
              <input
                id="new_price"
                value={productDetails.new_price}
                onChange={changeHandler}
                type="text"
                name="new_price"
                placeholder="Type here"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-semibold mb-2">Product Category</label>
              <select
                id="category"
                value={productDetails.category}
                onChange={changeHandler}
                name="category"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm"
              >
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kid</option>
              </select>
            </div>

            <div className="mb-4 flex items-center">
              <label htmlFor="file-input" className="cursor-pointer">
                <img
                  src={image ? URL.createObjectURL(image) : 'https://via.placeholder.com/150'}
                  alt="Product Thumbnail"
                  className="w-32 h-32 object-cover rounded-lg border border-gray-300"
                />
              </label>
              <input
                onChange={imageHandler}
                type="file"
                name="image"
                id="file-input"
                hidden
              />
            </div>

            <button
              onClick={Add_Product}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
