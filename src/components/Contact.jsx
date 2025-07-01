const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-4">Let’s Talk</h2>
      <p className="mb-12 text-gray-600 text-center max-w-2xl mx-auto">
        Have a project in mind or want to discuss your ideas? Feel free to reach out. We’re happy to hear from you!
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        {/* Left Side - Contact Info */}
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6 border-4 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Contact Information</h3>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-xl">📧</span>
              <div>
                <p className="font-semibold">Email</p>
                <p>info@itbiz.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-xl">📞</span>
              <div>
                <p className="font-semibold">Phone</p>
                <p>+880 1234 567890</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-xl">📍</span>
              <div>
                <p className="font-semibold">Address</p>
                <p>Banani, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="bg-white shadow-xl rounded-2xl p-8 space-y-6 border-4 border-green-500">
          {/* Name Input */}
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-600 text-xl">👤</span>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-600 text-xl">📧</span>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          {/* Message Input */}
          <div className="relative">
            <span className="absolute left-4 top-5 text-green-600 text-xl">💬</span>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full pl-12 pr-4 pt-4 pb-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 transition resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white font-bold py-3 rounded-full hover:from-green-700 hover:to-green-900 transition"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
