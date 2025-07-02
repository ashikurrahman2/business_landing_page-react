import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/it.jpg" alt="Logo" className="w-9 h-9" />
          <h1 className="text-xl font-extrabold text-blue-800 tracking-wide">Web Solutions</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <a 
            href="#get-started" 
            className="ml-4 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 pt-2 shadow">
          <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">About</a>
          <a href="#services" className="block py-2 text-gray-700 hover:text-blue-600">Services</a>
          <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
          <a
            href="#get-started"
            className="block w-full mt-2 bg-blue-600 text-white text-center py-2 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
