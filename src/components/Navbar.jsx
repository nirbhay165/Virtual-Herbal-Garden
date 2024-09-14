import React, { useContext, useEffect, useState } from "react";
import { FaRegUser, FaBars, FaTimes } from "react-icons/fa";
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const { user } = useContext(AuthContext);

  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setSticky(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`sticky top-0 z-50 ${isSticky ? 'bg-green-800' : 'bg-green-900'} shadow-md py-2 px-6 navbar flex justify-between items-center`}>
      <div className="navbar-start flex items-center">
        <Link to="/">
          <img
            src="./Images/logo.png"
            alt="Logo"
            className="h-20 w-auto rounded-full"
          />
        </Link>
      </div>

      <button
        onClick={toggleMenu}
        className="lg:hidden text-white text-3xl ml-auto"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Large screen navbar items */}
      <div className={`navbar-end hidden lg:flex lg:items-center lg:space-x-10 ml-auto`}>
        <nav className="flex items-center space-x-10">
          <Link
            to="/"
            onClick={handleClick}
            className="text-2xl font-semibold text-white hover:text-green-700 transition duration-300 hover:bg-gray-200 rounded-lg px-4 py-2"
          >
            Home
          </Link>
          <Link
            to="/health-wellness"
            onClick={handleClick}
            className="text-2xl font-semibold text-white hover:text-green-700 transition duration-300 hover:bg-gray-200 rounded-lg px-4 py-2"
          >
            Explore
          </Link>
          <Link
            to="/AboutUs"
            onClick={handleClick}
            className="text-2xl font-semibold text-white hover:text-green-700 transition duration-300 hover:bg-gray-200 rounded-lg px-4 py-2"
          >
            About
          </Link>
          <Link
            to="/ContactUS"
            onClick={handleClick}
            className="text-2xl font-semibold text-white hover:text-green-700 transition duration-300 hover:bg-gray-200 rounded-lg px-4 py-2"
          >
            Contact
          </Link>
          {/* Login button placed here for large screens */}
          {!user && (
            <button
              onClick={() =>
                document.getElementById("my_modal_5").showModal()
              }
              className="flex items-center gap-2 px-6 py-3 shadow-lg text-white text-2xl font-bold bg-gray500 tracking-widest hover:bg-black rounded-lg"
            >
              <FaRegUser className="text-white text-3xl" />
              <span>LOGIN</span>
              <span className="text-white text-3xl">&gt;</span>
            </button>
          )}
        </nav>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} fixed top-16 left-0 w-full bg-green-900 p-4 shadow-md z-40`}>
        <nav className="flex flex-col items-center space-y-4">
          <Link
            to="/"
            onClick={handleClick}
            className="text-2xl font-semibold text-white hover:text-green-700 transition duration-300 hover:bg-gray-200 rounded-lg px-4 py-2"
          >
            Home
          </Link>
          <Link
            to="/health-wellness"
            onClick={handleClick}
            className="text-2xl font-semibold text-white hover:text-green-700 transition duration-300 hover:bg-gray-200 rounded-lg px-4 py-2"
          >
            Explore
          </Link>
          <Link
            to="/AboutUs"
            onClick={handleClick}
            className="text-2xl font-semibold text-white hover:text-green-700 transition duration-300 hover:bg-gray-200 rounded-lg px-4 py-2"
          >
            About
          </Link>
          <Link
            to="/ContactUS"
            onClick={handleClick}
            className="text-2xl font-semibold text-white hover:text-green-700 transition duration-300 hover:bg-gray-200 rounded-lg px-4 py-2"
          >
            Contact
          </Link>
          {!user && (
            <button
              onClick={() =>
                document.getElementById("my_modal_5").showModal()
              }
              className="flex items-center gap-2 px-6 py-3 shadow-lg text-white text-2xl font-bold bg-gray500 tracking-widest hover:bg-black rounded-lg"
            >
              <FaRegUser className="text-white text-3xl" />
              <span>LOGIN</span>
              <span className="text-white text-3xl">&gt;</span>
            </button>
          )}
        </nav>
      </div>

      {/* Modal */}
      <Modal />
    </div>
  );
};

export default Navbar;
