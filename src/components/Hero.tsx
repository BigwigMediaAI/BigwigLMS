import React, { useEffect } from "react";
import social from "../assets/Lead management.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row items-center justify-between pt-24 py-12 px-4 md:px-14 bg-black"
      data-aos="fade-up"
    >
      {/* Left Section */}
      <div className="w-11/12 mx-auto mb-10 space-y-6 text-center lg:text-left">
        <h4 className="text-blue-500 font-semibold text-lg flex items-center justify-center lg:justify-start">
          Empowering Lead Management
          <span className="ml-1 text-blue-500">🚀</span>
        </h4>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug">
          Streamline Your Leads, Applications, & Conversion Processes <br />
          <span className="text-blue-500">Powered by AI</span>
        </h1>
        <p className="text-gray-300 leading-relaxed">
          Bigwig LMS is your comprehensive solution for lead management. From
          capturing and tracking leads to nurturing and converting them, our
          AI-powered tools optimize your workflow and elevate efficiency.
        </p>

        <p className="text-gray-300 text-sm">Trusted by businesses worldwide</p>
        <a href="/contact">
          <button className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
            Contact Us
          </button>
        </a>
      </div>

      {/* Right Section */}
      <div className="mt-8 lg:mt-0 lg:ml-8 w-full lg:w-auto">
        <img
          src={social}
          alt="Lead Management Visualization"
          className="w-full mx-auto md:w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
