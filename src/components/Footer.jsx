const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-blue-900 to-indigo-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Left: Logo and Company */}
        <div className="flex items-center space-x-4">
          <img src="/logo192.png" alt="ITBiz Logo" className="w-10 h-10 rounded-full" />
          <span className="text-2xl font-bold text-white tracking-wide">ITBiz Solutions</span>
        </div>

        {/* Right: Copyright */}
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} ITBiz Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
