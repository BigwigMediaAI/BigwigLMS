import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const features = [
    { name: "Lead Capture", id: "Lead-Capture" },
    { name: "Lead Management", id: "Lead-Management" },
    { name: "Lead Assignment", id: "Lead-Assignment" },
    { name: "Follow-Up and Nurturing", id: "Follow-Up" },
    { name: "Analytics and Reporting", id: "Analytics" },
    { name: "Integration with CRM and Marketing Tools", id: "Integration" },
    { name: "Automated Notifications", id: "Automated" },
    { name: "Document Management & E-signatures", id: "Document" },
    { name: "Task & Workflow Automation", id: "Task" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (id: any) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70; // Adjust this value for the desired offset
      const yPosition =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
    setIsDropdownOpen(false); // Close dropdown after clicking
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black shadow-md shadow-gray-400" : "bg-black"
      }`}
    >
      <div className="flex items-center justify-between p-4 md:px-10 relative">
        <div className="flex items-center space-x-1 ml-5">
          <a href="/">
            <span className="text-red-500 text-2xl font-bold">B</span>
            <span className="text-blue-500 text-2xl font-bold">i</span>
            <span className="text-yellow-500 text-2xl font-bold">g</span>
            <span className="text-green-500 text-2xl font-bold">w</span>
            <span className="text-purple-500 text-2xl font-bold">i</span>
            <span className="text-pink-500 text-2xl font-bold">g</span>
            <span className="text-teal-500 text-2xl font-bold">LMS</span>
          </a>
        </div>

        <button
          className="md:hidden text-white hover:text-gray-300 focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <div className="hidden font-bold text-md md:flex gap-8 space-x-6 text-white">
          <button
            onClick={() => handleScrollToSection("home")}
            className="hover:text-gray-300"
          >
            Home
          </button>
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            {/* Features Button with Dropdown Icon */}
            <button className="hover:text-gray-300 flex items-center">
              Features
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 ml-1 transition-transform duration-200"
                style={{
                  transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-[-100px] bg-gray-900 shadow-lg rounded-lg p-4 grid grid-cols-3 gap-4 w-[600px] h-[300px] z-50">
                {features.map((feature, index) => (
                  <button
                    key={index}
                    onClick={() => handleScrollToSection(feature.id)}
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    {feature.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={() => handleScrollToSection("about")}
            className="hover:text-gray-300"
          >
            About Us
          </button>
          <button
            onClick={() => handleScrollToSection("blog")}
            className="hover:text-gray-300"
          >
            Blogs
          </button>
          <button
            onClick={() => handleScrollToSection("faq")}
            className="hover:text-gray-300"
          >
            FAQ
          </button>
          <button
            onClick={() => window.open("/team", "_blank")}
            className="hover:text-gray-300"
          >
            Team
          </button>
        </div>

        <div className="md:block hidden">
          <button
            onClick={() => navigate("/contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Overlay for Darkening/Blur Effect */}
      {isOpen && (
        <div className="fixed inset-0 top-20 right-0 bg-black bg-opacity-70 z-40" /> // z-40 ensures overlay is behind the dropdown
      )}

      {isOpen && (
        <div className="absolute text-lg top-14 right-0 bg-white shadow-lg rounded-md p-4 flex flex-col space-y-4 z-50 h-[40vh] w-full max-w-md">
          <button
            onClick={() => handleScrollToSection("home")}
            className="hover:text-gray-300"
          >
            Home
          </button>
          <button
            onClick={() => handleScrollToSection("features")}
            className="hover:text-gray-300"
          >
            Features
          </button>
          <button
            onClick={() => handleScrollToSection("about")}
            className="hover:text-gray-300"
          >
            About Us
          </button>
          <button
            onClick={() => handleScrollToSection("blog")}
            className="hover:text-gray-300"
          >
            Blogs
          </button>
          <button
            onClick={() => handleScrollToSection("faq")}
            className="hover:text-gray-300"
          >
            FAQ
          </button>
          <button
            onClick={() => window.open("/team", "_blank")}
            className="hover:text-gray-300"
          >
            Team
          </button>
          <a href="/contact">
            <button className="w-1/2 mx-auto block text-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg focus:outline-none text-lg sm:text-xl shadow-md">
              Contact Us
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}

export default Nav;
