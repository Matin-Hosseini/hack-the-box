import "./Testimonial.css";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TestimonialBox from "./TestimonialBox/TestimonialBox";
import { useRef } from "react";

export default function Testimonial() {
  return (
    <div className="testimonials container">
      <div className="section-header">
        <h3 className="section-header__title">
          Loved by hackers.
          <br />
          Trusted by enterprises.
        </h3>
        <div className="section-header__buttons">
          <button className="section-header__prev-btn">
            <BiSolidChevronLeft />
          </button>
          <button className="section-header__next-btn">
            <BiSolidChevronRight />
          </button>
        </div>
      </div>

      <div className="testimonials-slider">
        <Swiper
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            992: {
              slidesPerView: 2.3,
            },
          }}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".section-header__next-btn",
            prevEl: ".section-header__prev-btn",
          }}
          pagination={{ clickable: true }}>
          <SwiperSlide>
            <TestimonialBox />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialBox />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialBox />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialBox />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
