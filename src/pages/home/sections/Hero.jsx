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
    title: "Introducing the Multipurpose Fan",
    description:
      "Designed by Prosper Mensah, this fan combines cooling, lighting, and sound for ultimate convenience.",
    image: Battery5,
  },
  {
    id: 2,
    title: "Solving Traditional Fan Limitations",
    description:
      "Traditional fans lack lighting and audio, limiting use in dark or off-grid areas.",
    image: Battery4,
  },
  {
    id: 3,
    title: "A Reliable, Multi-Functional Solution",
    description:
      "Solar-powered and rechargeable, this fan provides cooling, lighting, and audio anywhere.",
    image: Battery6,
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full h-screen relative bg-white overflow-hidden"
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
              className="w-full h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center text-center transition-all duration-1000"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${slide.image})`,
                backgroundSize: "cover",
              }}
            >
              {/* Gradient Overlay for Better Text Visibility */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Text Content */}
              <div className="relative z-10 container mx-auto px-4 text-white">
                <h2 className="text-3xl md:text-6xl font-bold mb-6">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev !text-white after:!text-2xl hover:scale-110 transition-transform duration-300"></div>
        <div className="swiper-button-next !text-white after:!text-2xl hover:scale-110 transition-transform duration-300"></div>
      </Swiper>
    </section>
  );
}
