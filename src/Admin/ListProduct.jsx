// src/components/ListProduct.js

import React, { useState } from "react";
import Admin_Navbar from "./Navbar";
import Admin_Sidebar from "./Sidebar";

// Example data for demonstration
const initialProducts = [
  {
    id: 1,
    name: "Product 1",
    old_price: "29.99",
    new_price: "19.99",
    category: "Women",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Product 2",
    old_price: "39.99",
    new_price: "29.99",
    category: "Men",
    image: "https://via.placeholder.com/100",
  },
  // Add more products as needed
];

const ListProduct = () => {
  const [products, setProducts] = useState(initialProducts);

  const remove_product = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <>
      <Admin_Navbar />
      <div className="flex h-screen">
        <Admin_Sidebar />
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md mb-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-cover rounded-lg mr-4"
              />
              <div className="flex-1">
                <p className="text-lg font-semibold mb-1">{product.name}</p>
                <p className="text-gray-700 mb-1">Old Price: ${product.old_price}</p>
                <p className="text-gray-700 mb-1">New Price: ${product.new_price}</p>
                <p className="text-gray-700 mb-1">Category: {product.category}</p>
              </div>
              <img
                onClick={() => remove_product(product.id)}
                className="w-6 h-6 cursor-pointer"
                src="https://via.placeholder.com/24/ff0000/ffffff?text=X"
                alt="Remove"
              />
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default ListProduct;
