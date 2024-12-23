import React, { useEffect, useState, useRef } from "react";
import AboutUs from "../assets/ABOUT.png"

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div id="about">
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-50%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .slide-in {
            opacity: 0; /* Hidden before animation starts */
          }

          .animate {
            animation: slideIn 0.6s ease-in-out forwards;
          }

          .animated-delay {
            animation-delay: var(--animation-delay);
          }
        `}
      </style>
      <div  className="text-center text-2xl md:text-4xl font-semibold ">About Us</div>
      <div
        ref={sectionRef}
        className="flex flex-col gap-5 md:flex-row items-center p-4 px-10 md:px-20 bg-white py-8"
      >
        {/* Left Side (Text Section) */}
        <div className="md:w-1/2 w-full text-justify md:mr-8 mb-4 md:mb-0">
          <h1 className="text-md md:text-md">
            {[" Ever wondered what you'd get if you crossed a digital advertising agency with Artificial Intelligence & Machine learning technology? Well, stop racking your brain cells! The answer is BIGWIG MEDIA, an AI & ML infused, pow-bam-slammingly amazing digital advertising agency that's breaking the internet!"].map((text, index) => (
              <span
                key={index}
                className={`slide-in heading block ${isVisible ? "animate animated-delay" : ""}`}
                style={{ "--animation-delay": `${index * 0.2}s` } as React.CSSProperties}
              >
                {text}
              </span>
            ))}
          </h1>

          <p className="text-md md:text-md">
            {[
              "With AI and ML as our trusty sidekicks, we're transforming the online ad world, offering ground-breaking services that help businesses master the digital arena. Our special blend for success includes our very own AI tech, marketing prowess, dynamite creative skills, top-notch tech solutions, streamlined processes, and our Sherlock-Holmes-like understanding of analytics. We don't just partner with our clients to reach their goals. We're like the suave secret agent, always aiming to outperform and exceed expectations!","At Bigwig Media, we don't just click buttons and pull levers behind the screen! We're the mad scientists, the innovators, the trailblazers at the frontier of the digital marketing universe! "
            ].map((text, index) => (
              <span
                key={index}
                className={`slide-in subheading block ${isVisible ? "animate animated-delay" : ""}`}
                style={{ "--animation-delay": `${0.8 + index * 0.2}s` } as React.CSSProperties}
              >
                {text}
              </span>
            ))}
          </p>
        </div>

        {/* Right Side (Image Section) */}
        <div className="md:w-1/2 w-full">
          <img
            src={AboutUs}// Replace with your actual image URL
            alt="Illustration of social media automation features"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
