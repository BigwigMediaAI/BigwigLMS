import Slider from "react-slick";

// Testimonial Section Component
const TestimonialSection = () => {
    const testimonials = [
        {
          name: "John Doe",
          role: "Marketing Manager",
          company: "TechCorp",
          text: "This platform has completely transformed our social media strategy! The analytics and content scheduling are game-changers.",
          image: "https://randomuser.me/api/portraits/men/1.jpg", // Random image 1
        },
        {
          name: "Jane Smith",
          role: "Social Media Expert",
          company: "BrandCo",
          text: "I love the ease of managing multiple accounts in one place. The reporting feature is also incredibly helpful!",
          image: "https://randomuser.me/api/portraits/men/7.jpg", // Random image 2
        },
        {
          name: "Mark Johnson",
          role: "Content Strategist",
          company: "Creative Solutions",
          text: "The hashtag suggestions and automated posting features have significantly boosted our engagement. Highly recommend!",
          image: "https://lh3.googleusercontent.com/a-/ALV-UjWRzI2Z1MO95VkHQowijTU1kEv8xcL2IXZ6yCkmA5dnjTDzWbMr=w54-h54-p-rp-mo-br100", // Random image 3
        },
        {
          name: "Sara Lee",
          role: "Community Manager",
          company: "Innovative Group",
          text: "The social listening feature is a game-changer for us. We can now track all mentions and stay ahead of the conversation.",
          image: "https://randomuser.me/api/portraits/women/2.jpg", // Random image 4
        },
      ];
      

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    onHover:false
  };

  return (
    <section id="case" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">
          What Our Partners Are Saying
        </h2>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-24 h-24 object-cover"
                />
              </div>
              <p className="text-lg italic text-gray-600 mb-4">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
