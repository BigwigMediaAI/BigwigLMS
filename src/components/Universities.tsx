import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LayoutComponent: React.FC = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 600, easing: "ease-in-out" });
  }, []);

  return (
    <div className="overflow-x-hidden bg-black">
      <div className="w-full md:w-11/12 mx-auto flex flex-col md:flex-row items-center px-4 py-10 md:py-12">
        {/* Left Side (Text Section) */}
        <div className="md:w-1/2 w-full text-left mb-4 md:mb-0">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-8 text-white">
            <span data-aos="fade-right" data-aos-delay="200" className="block">
              Empowering Real Estate Professionals
            </span>
            <span data-aos="fade-right" data-aos-delay="400" className="block">
              with a Cutting-Edge Lead Management System
            </span>
            <span data-aos="fade-right" data-aos-delay="600" className="block">
              Designed to Streamline and Revolutionize Sales.
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300">
            <span data-aos="fade-right" data-aos-delay="800" className="block">
              Built with a deep understanding of the challenges
            </span>
            <span data-aos="fade-right" data-aos-delay="1000" className="block">
              and opportunities in the real estate market,
            </span>
            <span data-aos="fade-right" data-aos-delay="1200" className="block">
              delivering powerful tools to accelerate growth.
            </span>
          </p>
        </div>

        {/* Right Side (Image Section) */}
        <div
          className="md:w-1/2 w-full"
          data-aos="zoom-in-left"
          data-aos-delay="500"
        >
          <img
            src="https://www.sell.do/assets/selldo_v3/overview-rect-40f02ce8cab3b93b45ba44226b6c67b6.svg"
            alt="Overview of Sell.Do Real Estate CRM Features"
            className="w-full h-auto max-w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LayoutComponent;
