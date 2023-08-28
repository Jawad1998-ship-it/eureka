import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper";

const MainBanner = ({ headerRef }) => {
  const [isOpen, setOpen] = useState(false);
  const [heroGap, setHeroGap] = useState()

  useEffect(() => {
    if (window.innerWidth > 992) {
      setHeroGap(headerRef.current?.offsetHeight)
    }
  }, [headerRef.current])

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
                "url('/img/slider-one.jpg') no-repeat top / cover",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slider-inner"
            style={{
              background:
                "url('/img/slider-two.jpg') no-repeat top / cover",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slider-inner"
            style={{
              background:
                "url('/img/slider-three.jpg') no-repeat top / cover",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slider-inner"
            style={{
              background:
                "url('/img/slider-four.jpg') no-repeat top / cover",
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainBanner;
