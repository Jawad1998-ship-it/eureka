import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper";

const MainBanner = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Swiper
      modules={[Autoplay, Navigation, EffectFade]}
      effect="fade"
      autoplay
      loop
      slidesPerView={1}
      navigation
    >
      <SwiperSlide>
        <div
          className="slider-inner"
          style={{
            background:
              "url('/img/slideshow-one.jpg') no-repeat center / cover",
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="slider-inner"
          style={{
            background:
              "url('/img/slideshow-two.jpeg') no-repeat center / cover",
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="slider-inner"
          style={{
            background:
              "url('/img/slideshow-three.jpg') no-repeat center / cover",
          }}
        ></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainBanner;
