import React, { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";

const MainBanner = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setOpen(false)}
      />

      <div className="main-banner-area">
        <div className="arrows">
          <i className="bi bi-arrow-left fs-2"></i>
          <i className="bi bi-arrow-right fs-2"></i>
        </div>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <div className="banner-text">
                    <h1
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                    >
                      Welcome to Eureka Diagnostic Center
                    </h1>

                    {/* <p
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                    >
                      Your Path to Health & Wellness - At Eureka Diagnostic
                      Center, we are dedicated to providing you with exceptional
                      diagnostic services that prioritize your well-being. With
                      state-of-the-art technology and a team of experienced
                      professionals, we deliver accurate results and
                      personalized care. Trust us to be your partner on the
                      journey to a healthier, happier life.
                    </p> */}

                    <div
                      className="banner-btn d-flex gap-2 justify-sm-center"
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="1200"
                    >
                      <Link
                        href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/medical-verification`}
                        className="default-btn"
                      >
                        Medical Verification
                      </Link>

                      <Link
                        href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/signup`}
                        className="default-btn"
                      >
                        Patient Registration
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-12 pr-0">
                  <div className="banner-img-wrap">
                    <div
                      className="banner-img w-100 text-lg-end text-md-center"
                      data-aos="fade-up"
                      data-aos-delay="600"
                      data-aos-duration="1200"
                    >
                      <img
                        src="/img/banner.png"
                        alt="Image"
                        style={{
                          height: "800px",
                          width: "70%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div className="banner-shape">
                      <img src="/img/home-one/home-one-shape.png" alt="Image" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="first-facility-area">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-6">
                    <div
                      className="first-facility-item"
                      data-aos="fade-in"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-care"></i>
                      <h3>Special Service</h3>
                      <p>Customized care for exceptional patient experience.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div
                      className="first-facility-item"
                      data-aos="fade-in"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-support"></i>
                      <h3>Online Application</h3>
                      <p>Effortless appointments at your fingertips.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div
                      className="first-facility-item"
                      data-aos="fade-in"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-online-learning"></i>
                      <h3>Get Result Online</h3>
                      <p>Instant access to your diagnostic reports online.</p>
                    </div>
                  </div>
                </div>

                <div className="shape">
                  <img src="/img/shape/shape1.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
