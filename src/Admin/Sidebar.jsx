import React from 'react';
import { Link } from 'react-router-dom';

// Importing icons
import addProductIcon from '../assets/Product_Cart.svg'
import listProductIcon from '../assets/Product_list_icon.svg'; // Adjust path as needed

const Admin_Sidebar = () => {
  return (
    <div className="w-72 h-screen bg-green-900 text-white p-5 flex flex-col shadow-lg">
      <div className="flex items-center mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      
      <nav className="flex-1">
        <Link to="/add_product" className="block text-white hover:bg-gray-700 rounded-lg mb-2 transition-colors duration-300">
          <div className="flex items-center p-3">
            <img src={addProductIcon} alt="Add Product" className="w-8 h-8 mr-4" />
            <span className="text-lg">Add Product</span>
          </div>
        </Link>
        
        <Link to="/list_product" className="block text-gray-300 hover:bg-gray-700 rounded-lg transition-colors duration-300">
          <div className="flex items-center p-3">
            <img src={listProductIcon} alt="Product List" className="w-8 h-8 mr-4" />
            <span className="text-lg">Product List</span>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Admin_Sidebar;
