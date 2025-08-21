import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Coffee Enthusiast",
      image: "/male-avatar.png",
      rating: 5,
      comment: "The best coffee I've ever tasted! The atmosphere is cozy and the service is exceptional. Highly recommended!",
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Developer",
      image: "/male-avatar.png",
      rating: 5,
      comment: "Perfect place for coding sessions. Great coffee, fast WiFi, and friendly staff. My go-to spot!",
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Student",
      image: "/male-avatar.png",
      rating: 5,
      comment: "Amazing coffee and pastries! The delivery is always on time and the coffee stays hot. Love it!",
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
            What Our Customers Say
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what our valued customers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.comment}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-brandDark">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
