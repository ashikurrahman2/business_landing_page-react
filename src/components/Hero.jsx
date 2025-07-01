// src/components/Hero.jsx
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-900 to-blue-800 text-white py-28 overflow-hidden">
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-transparent opacity-80 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-sm uppercase tracking-widest text-blue-200 mb-3">
            Welcome to ITBiz
          </h1>
          <h2 className="text-5xl font-extrabold leading-snug mb-6 text-white drop-shadow">
            Accelerate Your Business with <span className="text-yellow-300">Smart IT Solutions</span>
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            We specialize in digital transformation, cloud services, and tailored software development that ensures real-world impact.
          </p>
          <a
            href="#contact"
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            Contact Us
          </a>
        </div>

        {/* Right Image */}
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
            alt="IT Professionals"
            className="rounded-2xl shadow-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
