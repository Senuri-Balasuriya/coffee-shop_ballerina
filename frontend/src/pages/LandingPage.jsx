import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/landing/Hero';
import Services from '../components/landing/Services';
import Banner from '../components/landing/Banner';
import AppStore from '../components/landing/AppStore';
import Testimonials from '../components/landing/Testimonials';

const LandingPage = () => {
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
    <div className="pt-16">
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonials />
    </div>
  );
};

export default LandingPage;
