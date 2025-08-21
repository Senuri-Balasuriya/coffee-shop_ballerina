import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUsPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="pt-2 bg-coffee-texture min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20" data-aos="fade-up">
        <img
          src="dist\about1.jpg"
          alt="Coffee beans"
          className="w-full  max-h-[32rem] object-cover rounded-2xl shadow-lg mb-6"
        />
        <h1 className="text-5xl font-bold text-coffee mb-6">About Us</h1>
        <p className="text-lg max-w-2xl text-gray-700">
          Welcome to Coffee Shop! We are passionate about delivering the finest coffee experience. 
          Our journey started with a love for quality beans and a desire to create a cozy space for coffee lovers. 
          Enjoy our handpicked selection and warm atmosphere.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-brandDark py-16 px-6 text-center flex flex-col md:flex-row items-center gap-10" data-aos="fade-right">
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold text-coffee mb-6 text-white">Our Mission</h2>
          <p className="text-lg max-w-2xl text-white">
            Our mission is to bring people together over a cup of coffee, whether you're here to work, relax, 
            or catch up with friends. We source our beans ethically and roast them to perfection.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="dist\about2.jpg"
            alt="Coffee shop mission"
            className="w-full max-h-[36rem] object-cover rounded-2xl shadow-md"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#6f4e37] via-[#4e342e] to-[#3e2723] text-center" data-aos="fade-left">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-white">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 text-gray-100">
            <div className="p-6 rounded-xl bg-coffee shadow-md flex flex-col items-center" data-aos="zoom-in">
              <img
                src="https://images.unsplash.com/photo-1527169402691-a3f2a9936d6a"
                alt="Quality coffee"
                className="w-20 h-12 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p>We handpick the best beans and brew with care to ensure every sip is perfect.</p>
            </div>
            <div className="p-6 rounded-xl bg-coffee shadow-md flex flex-col items-center" data-aos="zoom-in" data-aos-delay="200">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                alt="Community"
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p>We believe coffee is more than a drink — it’s about connecting people together.</p>
            </div>
            <div className="p-6 rounded-xl bg-coffee shadow-md flex flex-col items-center" data-aos="zoom-in" data-aos-delay="400">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                alt="Sustainability"
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p>We are committed to ethical sourcing and eco-friendly practices for a better future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 px-6 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-coffee mb-4">Thank You for Being Part of Our Story!</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Whether you’re enjoying a quiet morning coffee, a study session, or meeting friends, 
          we’re grateful to share these moments with you. Cheers to many more!
        </p>
        
      </section>
    </div>
  );
};

export default AboutUsPage;
