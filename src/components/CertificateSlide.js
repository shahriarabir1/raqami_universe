"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import images from "../api/Certificate.json";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
const CertificateSlide = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={120}
        // loop={true}
        // autoplay={{
        //   delay: 0,
        //   disableOnInteraction: false,
        // }}
        // speed={3000}
        modules={[Pagination]}
        // spaceBetween={120}
        pagination={{
          clickable: true,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          background: "linear-gradient(180deg, #FFFDED 0%, #FFFDF1 100%)",
          paddingTop: "120px",
          paddingLeft: "120px",
          paddingBottom: "120px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {images.images.map((item, index) => (
          <SwiperSlide>
            <Image
              src={item?.url}
              alt="Slide 1"
              height={item?.height}
              width={item?.width}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CertificateSlide;
