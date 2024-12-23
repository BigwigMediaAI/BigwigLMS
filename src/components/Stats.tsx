import { useEffect, useState } from "react";

interface AnimatedNumberProps {
  value: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // Animation duration in ms
    const increment = end / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setDisplayValue(Math.floor(start));
    }, 10);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{displayValue.toLocaleString()}</span>;
};

const StatsSection = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 px-5 text-center text-gray-800">
        Empowering Real Estate Growth Globally
      </h2>
      <div className="bg-[#0c1c40] shadow-lg py-8 px-5 max-w-6xl mx-auto rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5">

          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center">
            <p className="text-4xl font-bold text-teal-600">
              <AnimatedNumber value={1000000} /> <span className="text-2xl">+</span>
            </p>
            <p className="mt-2 text-lg text-white">
              Property listings managed annually
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center">
            <p className="text-4xl font-bold text-pink-600">
              <AnimatedNumber value={5000000} /> <span className="text-2xl">+</span>
            </p>
            <p className="mt-2 text-lg text-white">
              Leads generated annually through our platform
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center">
            <p className="text-4xl font-bold text-blue-600">
              <AnimatedNumber value={100000} /> <span className="text-2xl">+</span>
            </p>
            <p className="mt-2 text-lg text-white">
              Deals closed annually by agents
            </p>
          </div>
        </div>

        {/* Highlighted Stat */}
        <div className="mt-10 flex justify-center">
          <div className="bg-[#172850] text-white rounded-md p-6 md:p-12 shadow-md text-center">
            <p className="text-5xl font-bold">
              <AnimatedNumber value={5000} /> <span className="text-3xl">+</span>
            </p>
            <p className="mt-4 text-lg">
              Real estate agencies trust Bigwig Media for lead management
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
