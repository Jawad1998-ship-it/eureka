import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import ImagePopup from "./ImagePopup";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import SwiperCore, { Autoplay, Pagination } from "swiper"; // Import Swiper core and required modules

SwiperCore.use([Autoplay, Pagination]);

const OurWorks = () => {
  const [openImagePopup, setOpenImagePopup] = useState({
    open: false,
    src: "",
    caption: "",
  });

  return (
    <>
      <div className="our-work-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Certifications</span>
            <h2>Our Certifications & Licenses</h2>
            <p>
              Explore our credentials - Discover a wealth of certifications and
              licenses at Eureka Diagnostic Center, assuring you of our
              precision and reliability in diagnostics.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="our-work-slide"
          >
            <SwiperSlide
              onClick={() =>
                setOpenImagePopup((previous) => {
                  previous = {
                    ...previous,
                    open: true,
                    src: "/img/certificate-eight.jpg",
                    caption: "Incineration of Wastage Syringe",
                  };
                  return previous;
                })
              }
            >
              <div className="single-work">
                <img src="/img/certificate-eight.jpg" alt="Image" />

                <h6 className="work-title">
                  {/* <i className="flaticon-kidney"></i> */}
                  Incineration of Wastage Syringe
                </h6>

                <div className="work-content-wrap">
                  <div className="work-content">
                    <h3>Incineration of Wastage Syringe</h3>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>

                    <Link href="/service-details" className="read-more">
                      Details <i className="bx bx-plus"></i>
                    </Link> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              onClick={() =>
                setOpenImagePopup((previous) => {
                  previous = {
                    ...previous,
                    open: true,
                    src: "/img/certificate-one.jpg",
                    caption: "EsQRScanning",
                  };
                  return previous;
                })
              }
            >
              <div className="single-work">
                <img src="/img/certificate-one.jpg" alt="Image" />

                <h6 className="work-title">
                  {/* <i className="flaticon-kidney"></i> */}
                  EsQRScanning
                </h6>

                <div className="work-content-wrap">
                  <div className="work-content">
                    <h3>EsQRScanning</h3>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>

                    <Link href="/service-details" className="read-more">
                      Details <i className="bx bx-plus"></i>
                    </Link> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              onClick={() =>
                setOpenImagePopup((previous) => {
                  previous = {
                    ...previous,
                    open: true,
                    src: "/img/certificate-two.png",
                    caption: "Quality Certificate",
                  };
                  return previous;
                })
              }
            >
              <div className="single-work">
                <img src="/img/certificate-two.png" alt="Image" />

                <h6 className="work-title">
                  {/* <i className="flaticon-doll"></i> */}
                  Quality Certificate
                </h6>

                <div className="work-content-wrap">
                  <div className="work-content">
                    <h3>Quality Certificate</h3>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>

                    <Link href="/service-details" className="read-more">
                      Details <i className="bx bx-plus"></i>
                    </Link> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              onClick={() =>
                setOpenImagePopup((previous) => {
                  previous = {
                    ...previous,
                    open: true,
                    src: "/img/certificate-three.jpg",
                    caption: "ISO Certificate",
                  };
                  return previous;
                })
              }
            >
              <div className="single-work">
                <img src="/img/certificate-three.jpg" alt="Image" />

                <h6 className="work-title">
                  {/* <i className="flaticon-cardiology"></i> */}
                  ISO Certificate
                </h6>

                <div className="work-content-wrap">
                  <div className="work-content">
                    <h3>ISO Certificate</h3>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>

                    <Link href="/service-details" className="read-more">
                      Details <i className="bx bx-plus"></i>
                    </Link> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              onClick={() =>
                setOpenImagePopup((previous) => {
                  previous = {
                    ...previous,
                    open: true,
                    src: "/img/certificate-three.jpg",
                    caption: "Trade License",
                  };
                  return previous;
                })
              }
            >
              <div className="single-work">
                <img src="/img/certificate-four.jpg" alt="Image" />

                <h6 className="work-title">
                  {/* <i className="flaticon-cardiology"></i> */}
                  Trade License
                </h6>

                <div className="work-content-wrap">
                  <div className="work-content">
                    <h3>Trade License</h3>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>

                    <Link href="/service-details" className="read-more">
                      Details <i className="bx bx-plus"></i>
                    </Link> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              onClick={() =>
                setOpenImagePopup((previous) => {
                  previous = {
                    ...previous,
                    open: true,
                    src: "/img/certificate-five.jpg",
                    caption: "Pathological-License",
                  };
                  return previous;
                })
              }
            >
              <div className="single-work">
                <img src="/img/certificate-five.jpg" alt="Image" />

                <h6 className="work-title">
                  {/* <i className="flaticon-doll"></i> */}
                  Pathological-License
                </h6>

                <div className="work-content-wrap">
                  <div className="work-content">
                    <h3>Pathological-License</h3>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>

                    <Link href="/service-details" className="read-more">
                      Details <i className="bx bx-plus"></i>
                    </Link> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              onClick={() =>
                setOpenImagePopup((previous) => {
                  previous = {
                    ...previous,
                    open: true,
                    src: "/img/certificate-six.jpg",
                    caption: "Licence-for-X-Ray",
                  };
                  return previous;
                })
              }
            >
              <div className="single-work">
                <img src="/img/certificate-six.jpg" alt="Image" />

                <h6 className="work-title">
                  {/* <i className="flaticon-cardiology"></i> */}
                  Licence-for-X-Ray
                </h6>

                <div className="work-content-wrap">
                  <div className="work-content">
                    <h3>Licence-for-X-Ray</h3>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>

                    <Link href="/service-details" className="read-more">
                      Details <i className="bx bx-plus"></i>
                    </Link> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              onClick={() =>
                setOpenImagePopup((previous) => {
                  previous = {
                    ...previous,
                    open: true,
                    src: "/img/certificate-seven.jpg",
                    caption: "RCOS Certificate",
                  };
                  return previous;
                })
              }
            >
              <div className="single-work">
                <img src="/img/certificate-seven.jpg" alt="Image" />

                <h6 className="work-title">
                  {/* <i className="flaticon-cardiology"></i> */}
                  RCOS Certificate
                </h6>

                <div className="work-content-wrap">
                  <div className="work-content">
                    <h3>RCOS Certificate</h3>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>

                    <Link href="/service-details" className="read-more">
                      Details <i className="bx bx-plus"></i>
                    </Link> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {openImagePopup.open && (
            <ImagePopup
              imgDetails={openImagePopup}
              setOpenImagePopup={setOpenImagePopup}
            />
          )}
        </div>

        <div className="shape">
          <img src="/img/shape/work-shape.png" alt="Image" />
        </div>
      </div>
    </>
  );
};

export default OurWorks;
