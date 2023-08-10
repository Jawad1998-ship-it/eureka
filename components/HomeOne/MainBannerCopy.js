import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper";

const MainBanner = ({ headerRef }) => {
  const [isOpen, setOpen] = useState(false);
  const [heroGap, setHeroGap] = useState()

  useEffect(() => {
    setHeroGap(headerRef.current?.offsetHeight)
  }, [headerRef.current])

  console.log(headerRef)
  
  return (
    <div className="" style={{paddingTop: `${heroGap}px`}}>
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
                "url('/img/slideshow-one.jpg') no-repeat top / cover",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slider-inner"
            style={{
              background:
                "url('/img/slideshow-two.jpeg') no-repeat top / cover",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slider-inner"
            style={{
              background:
                "url('/img/slideshow-three.jpg') no-repeat top / cover",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slider-inner"
            style={{
              background:
                "url('/img/slideshow-four.jpeg') no-repeat top / cover",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slider-inner"
            style={{
              background:
                "url('/img/slideshow-five.jpg') no-repeat top / cover",
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainBanner;
