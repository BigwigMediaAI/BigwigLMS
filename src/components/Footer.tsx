import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="bg-gray-100 py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo and Contact Section */}
          <div className="space-y-7 md:w-1/4">
          <div className="flex items-center space-x-1 ml-5">
        <span className="text-red-500 text-2xl font-bold">B</span>
        <span className="text-blue-500 text-2xl font-bold">i</span>
        <span className="text-yellow-500 text-2xl font-bold">g</span>
        <span className="text-green-500 text-2xl font-bold">w</span>
        <span className="text-purple-500 text-2xl font-bold">i</span>
        <span className="text-pink-500 text-2xl font-bold">g</span>
        <span className="text-teal-500 text-2xl font-bold">LMS</span>

      </div>
            <div className='px-4'>
            <p className="text-md text-gray-600">+91-11 49 384 555</p>
            <a href="mailto:info@bigwigmedia.in" className="text-md text-gray-600">info@bigwigmedia.in</a>
            </div>
            <div className="flex space-x-4 mt-4 px-4">
              <a href="https://x.com/bigwig_media" target='blank' className="text-gray-500 hover:text-gray-800">
                <i className="fab fa-twitter fa-2xl"></i>
              </a>
              <a href="https://www.facebook.com/bigwigmedia.in/" target='blank' className="text-gray-500 hover:text-gray-800">
                <i className="fab fa-facebook fa-2xl"></i>
              </a>
              <a href="https://www.instagram.com/bigwigmedia/" target='blank' className="text-gray-500 hover:text-gray-800">
                <i className="fab fa-instagram fa-2xl"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCA0GIfKW7ORxUT6_mMnEEzQ" target='blank' className="text-gray-500 hover:text-gray-800">
                <i className="fab fa-youtube fa-2xl"></i>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:w-2/3">
  {/* Product Links */}
  <div>
    <h4 className="text-lg font-semibold text-gray-700">Products</h4>
    <ul className="mt-4 space-y-2">
      <li><a href="#" className="text-gray-600 hover:underline">Property Management System</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Real Estate CRM</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Listing Platform</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Agent Dashboard</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Virtual Tours</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Payment Gateway Integration</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Rental Management Software</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Real Estate Mobile App</a></li>
    </ul>
  </div>

  {/* Industry Links */}
  <div>
    <h4 className="text-lg font-semibold text-gray-700">Industries</h4>
    <ul className="mt-4 space-y-2">
      <li><a href="#" className="text-gray-600 hover:underline">Residential Real Estate</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Commercial Real Estate</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Real Estate Agencies</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Property Developers</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Property Investors</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Real Estate Brokers</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Luxury Real Estate</a></li>
    </ul>
  </div>

  {/* Community Links */}
  <div>
    <h4 className="text-lg font-semibold text-gray-700">Community</h4>
    <ul className="mt-4 space-y-2">
      <li><a href="#" className="text-gray-600 hover:underline">Real Estate Webinars</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Investors Forum</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Real Estate Blog</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Success Stories</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Featured Properties</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Real Estate News</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Agent Resources</a></li>
    </ul>
  </div>

  {/* Company Links */}
  <div>
    <h4 className="text-lg font-semibold text-gray-700">Company</h4>
    <ul className="mt-4 space-y-2">
      <li><a href="#" className="text-gray-600 hover:underline">About Us</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Our Partners</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Case Studies</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Contact Us</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Careers</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Press Releases</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Security & Compliance</a></li>
      <li><a href="#" className="text-gray-600 hover:underline">Privacy Policy</a></li>
    </ul>
  </div>
</div>

        </div>

        <div className="mt-8 text-center border-t pt-4">
          <p className="text-sm text-gray-600">
          All Rights Reserved © 2024 Bigwigmedia & Events Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
