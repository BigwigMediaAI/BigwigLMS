import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"; // Social Media Icons
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const handleScrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -70; // Adjust this value for the desired offset
      const yPosition =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };
  return (
    <div className="bg-gray-800 text-white py-16">
      <div className="md:w-11/12 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Branding Section */}
          <div className="md:col-span-1 ">
            <span className="text-red-500 text-2xl font-bold">B</span>
            <span className="text-blue-500 text-2xl font-bold">i</span>
            <span className="text-yellow-500 text-2xl font-bold">g</span>
            <span className="text-green-500 text-2xl font-bold">w</span>
            <span className="text-purple-500 text-2xl font-bold">i</span>
            <span className="text-pink-500 text-2xl font-bold">g</span>
            <span className="text-teal-500 text-2xl font-bold">LMS</span>
            <p className="text-gray-400">
              Empowering your lead management with cutting-edge tools and
              seamless automation. Turn prospects into loyal customers
              effortlessly.
            </p>
          </div>

          {/* Other Sections (Quick Links, Resources, Contact Info) */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleScrollToSection("home")}
                    className="text-gray-400 hover:text-white"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToSection("features")}
                    className="text-gray-400 hover:text-white"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToSection("about")}
                    className="text-gray-400 hover:text-white"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToSection("blog")}
                    className="text-gray-400 hover:text-white"
                  >
                    Blogs
                  </button>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleScrollToSection("case")}
                    className="text-gray-400 hover:text-white"
                  >
                    Case Studies
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToSection("faq")}
                    className="text-gray-400 hover:text-white"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Contact Info
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
                  info@bigwigmedia.in
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className=" px-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://www.facebook.com/bigwigmedia.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white transition"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.instagram.com/bigwigmedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white transition"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCA0GIfKW7ORxUT6_mMnEEzQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white transition"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://x.com/bigwig_media"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white transition"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>

          {/* Footer Links */}
          <div className="flex space-x-6 text-gray-400 text-sm"></div>

          {/* Footer Copy */}
          <p className="text-sm text-gray-300 mt-4 md:mt-0">
            © 2025 BigwigMedia.ae. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
