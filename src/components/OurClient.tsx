import React from "react";
import Slider from "react-slick";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9uRhrFEy92ZT2kK8pocRv1zkP6TUXUoKr21BDz60xcs4kOtuRdk-vF0MuEVQbJRsKdA&usqp=CAU",
  "https://pmdindia.in/api/u/serverImg/Sugam%20Group%20(1).jpg",
  "https://i.pinimg.com/736x/60/0e/bb/600ebb84b3a15bb5c086b9873be5b2a7.jpg",
  "https://1000logos.net/wp-content/uploads/2021/05/Hallmark-logo.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTotQAqu-hz_UJjFe1Ct3umM7jpmauuB_VkKQ&s",
  "https://logowik.com/content/uploads/images/paradigm7416.jpg",
  "https://cdn.prod.website-files.com/6128d68a91ec1144618a169a/655ca74d4414aabe398ad683_Saarathi_black_orange_tm.svg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxKtGVNyB6hUJK-WvWQyKY_76gg0pp-oIPw&s"
];

const Clients: React.FC = () => {
    const settings = {
      infinite: true, // Loop infinitely
      speed: 3000, // Speed of slide transition (in ms)
      slidesToShow: 5, // Number of visible slides
      slidesToScroll: 1, // Number of slides to scroll at a time
      autoplay: true, // Enable automatic sliding
      autoplaySpeed: 0, // Continuous autoplay with no delay
      cssEase: "linear",
      arrows: false,
      onHover:false,
      responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ] // Smooth animation
    };
  
    return (
      <div className="w-full mx-auto  bg-white  ">
        <div>
        <h1 className="text-2xl md:text-3xl font-semibold px-5 text-center text-gray-800">Our Clients</h1>
        </div>
        
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={image}
                alt={`logo-${index}`}
                className="w-36 h-36 object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default Clients;
  