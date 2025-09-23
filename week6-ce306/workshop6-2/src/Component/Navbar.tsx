import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          <div className="text-2xl font-bold text-pink-300">MySite</div>

          {/* เปลี่ยนเป็น text-black */}
          <div className="hidden md:flex space-x-8 text-black font-medium">
            <a href="#" className=" text-pink-300 hover:text-pink-400 transition">Home</a>
            <a href="#" className=" text-pink-300 hover:text-pink-400 transition">About</a>
            <a href="#" className=" text-pink-300 hover:text-pink-400 transition">Services</a>
            <a href="#" className=" text-pink-300 hover:text-pink-400 transition">Contact</a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none text-2xl"
              aria-label="Toggle Menu"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu เปลี่ยนเป็น text-black */}
      <div
        className={`md:hidden bg-white shadow-md px-6 py-4 space-y-3 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <a href="#" className="block text-pink-300 hover:text-pink-400">Home</a>
        <a href="#" className="block text-pink-300 hover:text-pink-400">About</a>
        <a href="#" className="block text-pink-300 hover:text-pink-400">Services</a>
        <a href="#" className="block text-pink-300 hover:text-pink-400">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
