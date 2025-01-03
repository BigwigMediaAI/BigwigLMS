import React, { useState } from "react";
import social from "../assets/Lead management.svg";
import ContactUs from "./Contact";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row items-center justify-between py-12 px-4 lg:px-24 mt-16"
    >
      {/* Left Section */}
      <div className="max-w-lg space-y-6 text-center lg:text-left">
        <h4 className="text-blue-500 font-semibold text-lg flex items-center justify-center lg:justify-start">
          Empowering Lead Management
          <span className="ml-1 text-blue-500">🚀</span>
        </h4>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Streamline Your Leads, Applications, & Conversion Processes <br /><span className="text-blue-500">Powered by AI</span>
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Bigwig LMS is your comprehensive solution for lead management. From
          capturing and tracking leads to nurturing and converting them, our
          AI-powered tools optimize your workflow and elevate efficiency.
        </p>
        
        <p className="text-gray-500 text-sm">Trusted by businesses worldwide</p>
        <button
          onClick={openModal}
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
        >
          Contact Us
        </button>
      </div>

      {/* Right Section */}
      <div className="mt-8 lg:mt-0 lg:ml-8 w-full lg:w-auto">
        <img
          src={social}
          alt="Lead Management Visualization"
          className="w-60 mx-auto md:w-full object-cover"
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-blue-500 hover:text-blue-700"
            >
              ✖
            </button>
            <ContactUs />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
