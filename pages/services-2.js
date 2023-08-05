import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import Link from "next/link";

const Services2 = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services"
        imgClass="bg-3"
      />

      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Services</span>
            <h2>Our Healthcare Service</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services d-flex flex-column align-items-center justify-content-center gap-3">
                <img width={60} src="/img/microscope.png" alt="" />
                <h3>Pathology</h3>
                <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services d-flex flex-column align-items-center justify-content-center gap-3">
                <img width={60} src="/img/examination.png" alt="" />
                <h3>Physiology</h3>
                <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services d-flex flex-column align-items-center justify-content-center gap-3">
                <img width={60} src="/img/x-ray.png" alt="" />
                <h3>Radiology</h3>
                <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="first-facility-area mt-0 services-page-one">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="first-facility-item">
                <i className="flaticon-care"></i>
                <h3>Special Service</h3>
                <p>
                Customized care for exceptional patient experience.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="first-facility-item">
                <i className="flaticon-support"></i>
                <h3>Online Application</h3>
                <p>
                Effortless appointments at your fingertips.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="first-facility-item">
                <i className="flaticon-online-learning"></i>
                <h3>Get Result Online</h3>
                <p>
                Instant access to your diagnostic reports online.
                </p>
              </div>
            </div>
          </div>

          <div className="shape">
            <img src="/img/shape/shape1.png" alt="Image" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services2;
