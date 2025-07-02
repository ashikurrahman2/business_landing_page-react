const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-blue-900 to-indigo-900 text-gray-300 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-center md:text-left">
        {/* Left: Logo and Company */}
        <div className="flex items-center justify-center md:justify-start space-x-3">
          <img src="/it.jpg" alt="ITBiz Logo" className="w-10 h-10 rounded-full" />
          <span className="text-xl sm:text-2xl font-bold text-white tracking-wide">Web Solutions</span>
        </div>

        {/* Right: Copyright */}
        <div className="text-gray-400 text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Web Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
