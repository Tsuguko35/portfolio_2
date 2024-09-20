import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../../styles/projectoverviewpage/projectcarousel.css";

// import required modules
import { Autoplay } from "swiper/modules";

function ProjectCarousel({ images, project }) {
  if (!images || images.length === 0) {
    return null;
  }
  return (
    <div className="project__carousel">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        spaceBetween={20}
        pagination={true}
        autoplay={{
          delay: 0, // No delay between transitions
          disableOnInteraction: false,
        }}
        speed={5000}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${project}-image${index}`}>
            <img src={image} alt={`${project}-image${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectCarousel;
