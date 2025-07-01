const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-100 text-center"
    >
      <h2 className="text-4xl font-bold text-blue-800 mb-4">
        About Our Company
      </h2>
      <p className="max-w-3xl mx-auto text-gray-600 mb-12 px-4">
        We are a leading IT company in Bangladesh delivering reliable and secure
        technology solutions. From software development to digital
        transformation, our team ensures your business thrives.
      </p>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center text-left">
        {/* Left - Image */}
        <div>
          <img
            src="/blog_small_img3.jpg" // Replace with your image path
            alt="About ITBiz"
            className="rounded-2xl shadow-xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right - Text Content with gradient border */}
        <div
          className="rounded-2xl p-1 bg-gradient-to-r from-green-400 via-white to-green-400"
          style={{ boxShadow: "0 0 10px rgba(34,197,94,0.6)" }}
        >
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-2xl font-extrabold text-blue-700 mb-3">
              ITBiz Solutions Ltd.
            </h3>
            <p className="text-gray-700 mb-5 leading-relaxed">
              We specialize in providing innovative and scalable software
              solutions. Our team is dedicated to helping businesses thrive
              through customized digital solutions.
            </p>

            <div className="mb-5">
              <h4 className="text-xl font-semibold text-blue-600 mb-1">
                🎯 Our Mission
              </h4>
              <p className="text-gray-600">
                Empower businesses with cutting-edge digital tools and
                exceptional service that drive efficiency and sustainable
                growth.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-blue-600 mb-1">
                🚀 Our Vision
              </h4>
              <p className="text-gray-600">
                To be the most innovative and trusted IT partner in Bangladesh
                and across the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
