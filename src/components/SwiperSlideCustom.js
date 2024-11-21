"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import slider from "../api/Slider.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

const SwiperSlideCustom = () => {
  return (
    <Swiper
      spaceBetween={120}
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={3000}
      modules={[Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      style={{
        backgroundColor: "white",
        padding: "20px",
        display: "flex",
      }}
    >
      {slider.images.map((item, index) => (
        <SwiperSlide>
          <Image
            src={item.url}
            alt="Slide 1"
            height={item.width}
            width={item.height}
            key={index}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlideCustom;
