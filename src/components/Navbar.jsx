const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo192.png" alt="Logo" className="w-8 h-8" />
          <h1 className="text-xl font-extrabold text-blue-800 tracking-wide">ITBiz</h1>
        </div>

        <div className="flex items-center space-x-6 text-gray-700 font-medium flex-grow justify-end">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>

          <div className="ml-6">
            <a 
              href="#get-started" 
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
