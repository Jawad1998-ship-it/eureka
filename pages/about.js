import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import FunFactStyleOne from "../components/Common/FunFactStyleOne";

const About = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
        imgClass="bg-1"
      />

      <div className="about-area about-page pb-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src="/img/about/about1.jpg" alt="Image" />

                <div className="shape-1">
                  <img src="/img/about/about-shape-1.png" alt="Image" />
                </div>

                <div className="shape-2">
                  <img src="/img/about/about-shape-2.png" alt="Image" />
                </div>

                <div className="shape-3">
                  <img src="/img/about/about-shape-3.png" alt="Image" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title">About Us</span>
                <h2>Eureka Diagnostic & Medical Center</h2>
                <p className="fw-bold">
                  We have been in operation since 1993. That means, for over 18
                  years, we have been able to provide our patients and referring
                  physicians with accurate, efficient and quality healthcare.
                  Our qualified radiologists and compassionate, certified
                  technologists understand the value of your time. We are
                  committed to the fastest turnaround on reports and access to
                  view patient files online for physician offices. At other area
                  imaging facilities, you may experience a delay in your
                  appointment time due to the emergency room and inpatients –
                  not at Eureka Diagnostic & Medical Centers. Here, you come
                  first with centralized, flexible scheduling. For your added
                  convenience, both of our locations offer convenient, surface
                  level parking for easy access in and out of our centers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-area two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title fs-2">Our Mission</span>
                <p className="fs-4">
                  Take leadership through integration of technology and
                  expertise with higher standards of diagnostic, efficient
                  delivery systems at affordable prices
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title fs-2">Our Vision</span>
                <p className="fs-4">
                  Creating higher standards in healthcare by focusing on
                  preventive medicine to achieve the ‘most preferred’ diagnostic
                  center status
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FunFactStyleOne />
      <Footer />
    </>
  );
};

export default About;
