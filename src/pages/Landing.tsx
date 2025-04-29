import FAQ from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";
import StatsSection from "../components/Stats";
import LayoutComponent from "../components/Universities";
import Clients from "../components/OurClient";
import Blog from "../components/Blog";
import TestimonialSection from "../components/Testimonial";

function Landing() {
  return (
    <div id="home" className="bg-black">
      <Nav />
      <Hero />

      <LayoutComponent />
      <Clients />
      <StatsSection />
      <Features />
      <TestimonialSection />
      <Blog />
      <AboutUs />
      <FAQ />
      <Footer />
      {/* Scroll and Contact Us Buttons */}
    </div>
  );
}

export default Landing;
