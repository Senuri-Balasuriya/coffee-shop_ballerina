import React from 'react';
import { FaCoffee, FaTruck, FaClock, FaStar } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Premium Coffee",
      description: "We source the finest coffee beans from around the world to ensure the best quality and taste.",
      icon: FaCoffee,
    },
    {
      id: 2,
      title: "Fast Delivery",
      description: "Quick and reliable delivery service to bring your favorite coffee right to your doorstep.",
      icon: FaTruck,
    },
    {
      id: 3,
      title: "24/7 Service",
      description: "We're always here to serve you, whether it's early morning or late night.",
      icon: FaClock,
    },
    {
      id: 4,
      title: "Best Quality",
      description: "Committed to providing the highest quality coffee and exceptional customer service.",
      icon: FaStar,
    },
  ];

  return (
    <div className="py-16 bg-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2
            data-aos="fade-up"
            className="text-4xl font-bold text-brandDark mb-4"
          >
            Our Services
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-600 max-w-2xl mx-auto"
          >
            We provide exceptional coffee experiences with premium quality ingredients and outstanding service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="bg-gradient-to-r from-primary to-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-brandDark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
