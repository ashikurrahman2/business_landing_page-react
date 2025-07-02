const Services = () => {
  const services = [
    {
      title: 'Web Development',
      desc: 'Modern, responsive, and SEO-friendly websites crafted with performance in mind.',
      icon: '🌐',
      borderColor: 'border-blue-500',
    },
    {
      title: 'Mobile Apps',
      desc: 'Cross-platform mobile applications with stunning UI and smooth UX.',
      icon: '📱',
      borderColor: 'border-green-500',
    },
    {
      title: 'Cyber Security',
      desc: 'Protect your business with enterprise-grade security solutions.',
      icon: '🛡️',
      borderColor: 'border-purple-500',
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-white via-blue-50 to-white text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl p-6 sm:p-8 text-left shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 border-4 ${service.borderColor}`}
          >
            <div className="text-3xl sm:text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
