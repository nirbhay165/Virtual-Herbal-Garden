// src/components/Navbar.js

import React from 'react';// Update the path as needed

const Admin_Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-green-900 text-white">
      <img src="./Images/logo.png " alt="Logo" className="h-10 w-auto" />
      <img src="./Images/logo.png " alt="Profile" className="h-10 w-10 rounded-full border border-gray-600" />
    </div>
  );
};

export default Admin_Navbar;
