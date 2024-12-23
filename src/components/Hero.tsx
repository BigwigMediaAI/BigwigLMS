import React from "react";
import social from "../assets/img-bulk-publishing.png"

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative flex flex-col lg:flex-row items-center justify-between py-12 px-4 lg:px-24 mt-16">
      {/* Left Section */}
      <div className="max-w-lg space-y-6 text-center lg:text-left">
  <h4 className="text-blue-500 font-semibold text-lg flex items-center justify-center lg:justify-start">
    Smarter Lead Management
    <span className="ml-1 text-blue-500">🚀</span>
  </h4>
  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
    Take Control of Your Leads with Ease
  </h1>
  <p className="text-gray-600 leading-relaxed">
    Simplify the way you manage, track, and nurture leads. From capturing new opportunities to sealing the deal, our powerful lead management tools help you stay ahead of the curve.
  </p>
  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center lg:justify-start">
    <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 transition">
      Get Started Today
    </button>
    <button className="border border-blue-600 text-blue-600 font-semibold py-3 px-6 rounded hover:bg-blue-100 transition">
      Request a Demo
    </button>
  </div>
  <p className="text-gray-500 text-sm">
    Trusted by teams worldwide | Free trial available
  </p>
</div>



      {/* Right Section */}
      <div className="mt-8 lg:mt-0 lg:ml-8 w-full lg:w-auto">
        <img
          src={social} // Replace with your actual image URL
          alt="Happy User"
          className="w-60 mx-auto md:w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
