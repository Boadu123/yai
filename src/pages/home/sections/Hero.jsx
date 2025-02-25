import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Battery5 from "../../../images/battery5.png";
import Battery4 from "../../../images/battery4.png";
import Battery6 from "../../../images/battery6.png";

const slides = [
  {
    id: 1,
    title: "Affordable Battery-Powered Motorcycles",
    description:
      "Revolutionizing transportation with cost-effective, battery-powered motorcycles designed to reduce fuel dependency and operating costs.",
    image: Battery5,
  },
  {
    id: 2,
    title: "Real-Time Performance Monitoring",
    description:
      "Stay ahead with live tracking and performance analytics, ensuring optimal battery usage and efficient ride management.",
    image: Battery4,
  },
  {
    id: 3,
    title: "Sustainable and Eco-Friendly Mobility",
    description:
      "Our electric motorcycles provide a cleaner, greener alternative to traditional fuel-powered bikes, promoting environmental sustainability.",
    image: Battery6,
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full h-[90vh] relative bg-white overflow-hidden"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} bg-white/70 hover:bg-white transition-all duration-300"></span>`;
          },
        }}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        className="h-full relative"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-[90vh] bg-cover bg-center bg-no-repeat relative flex items-center justify-center text-center transition-all duration-1000"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

              <div className="container mx-auto px-4 relative z-20 transform transition-all duration-1000">
                <h2
                  className="text-white text-3xl md:text-6xl font-bold mb-6 opacity-0 translate-y-8 animate-slideUp"
                  style={{
                    animation: "slideUp 0.8s ease-out forwards",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {slide.title}
                </h2>
                <p
                  className="text-white/90 text-lg md:text-2xl max-w-3xl mx-auto mb-8 opacity-0 translate-y-8 animate-slideUp"
                  style={{
                    animation: "slideUp 0.8s ease-out 0.2s forwards",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {slide.description}
                </p>
                {/* <button 
                  className="px-8 py-4 bg-blue-600 text-white text-lg rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 opacity-0 translate-y-8 animate-slideUp"
                  style={{
                    animation: 'slideUp 0.8s ease-out 0.4s forwards',
                  }}
                >
                  Learn More
                </button> */}
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev !text-white after:!text-2xl hover:scale-110 transition-transform duration-300"></div>
        <div className="swiper-button-next !text-white after:!text-2xl hover:scale-110 transition-transform duration-300"></div>
      </Swiper>

      <style>
        {`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(2rem);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            margin: 0 6px !important;
          }

          .swiper-button-prev,
          .swiper-button-next {
            width: 50px !important;
            height: 50px !important;
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          .swiper-button-prev:hover,
          .swiper-button-next:hover {
            background-color: rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
    </section>
  );
}
