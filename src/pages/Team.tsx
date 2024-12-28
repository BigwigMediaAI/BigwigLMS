import React from "react";
import ceo from "../assets/ceo.jpg"

const Team: React.FC = () => {
  // Sample data for team members


  return (
    <>
    <section className=" container mx-auto py-12 px-4 lg:px-8">
      <div className="max=w-6xl px-6 md:px-8 gap-8">
        {/* CEO Section */}
        <div className=" bg-gray-100 p-6 rounded-lg shadow-lg">
          <img
            src={ceo} // Replace with your CEO image
            alt="CEO"
            className="w-48 h-48 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-center">Vipul Dutta</h3>
          <p className="text-black font-semibold text-center my-3">Founder & CEO</p>
          <p className="text-gray-600 md:text-center text-justify">
          Make way for Bigwig Media, the superhero of the digital marketing world with a black belt in AI tech! Our mission? To catapult businesses like yours straight into the glitzy realm of online success. 
          </p>
          <h2 className="font-bold text-gray-700 mt-6 text-center text-2xl">About Bigwig Lead Management</h2>
<h2 className="text-gray-600 text-justify md:text-center mt-4">
  Supercharge your lead management journey effortlessly with Bigwig LMS, your AI-powered, all-in-one solution! Imagine seamlessly capturing leads, automating follow-ups, and tracking every opportunity like a pro. Say goodbye to manual chaos and hello to streamlined lead handling that drives conversions and builds relationships.
</h2>
<h2 className="text-gray-600 text-justify md:text-center mt-4">
  Engage with your prospects faster than ever, nurture them through smart automation, and gain actionable insights into their preferences and behaviors. Whether you're a growing startup or a thriving enterprise, Bigwig LMS adapts to your unique business needs and helps you achieve sales success.
</h2>
<h2 className="text-gray-600 text-justify md:text-center mt-4">
  We’ve got your back! With a team of 40+ lead management experts and cutting-edge tools, we're here to transform how you manage, prioritize, and close deals. Our platform ensures you never miss an opportunity and always stay ahead of the competition.
</h2>
<h2 className="text-gray-600 text-center mt-4 font-bold">
  Bigwig LMS: Your ultimate partner in turning leads into loyal customers.
</h2>
</div>
      </div>
    </section>
    </>
  );
};

export default Team;
