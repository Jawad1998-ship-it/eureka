import React from "react";
import Link from "next/link";
import Navbar from "../../../components/_App/Navbar";
import PageBanner from "../../../components/Common/PageBanner";

const SadrulAmin = () => {
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
      <div className="about-area py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <img src="/img/dr-sadrul-amin.jpg" alt="" />
            </div>
            <div className="col-lg-8">
              <div className="about-content">
                <p className="w-100">
                  Eureka Diagnostic & Medical Centre have taken a good
                  initiative that they are going to publish a brochure about
                  their profile, activities & responsibilities. As the
                  radiologist of Eureka Diagnostic & Medical Centre for long. I
                  have an opportunity to observe their work and responsibilities
                  closely. However, despite limitations, their radiological and
                  laboratory procedures are being done with good quality
                  machines. Most of the laboratory workers are skilled enough
                  and dedicated, which is of fundamental need in order to ensure
                  fitness for the passengers going abroad. I would like to take
                  the opportunity to thanks the members of Eureka Diagnostic &
                  Medical Centre, as well as other supporters, for their hard
                  work and dedication. I look forward to their continued efforts
                  that will help to gibe better services for the abroad going
                  passengers. DR.MD.SADRUL AMIN Associate Professor Dept. of
                  Radiology & Imaging Bangladesh Sheikh Mojib Medical
                  University, Dhaka
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SadrulAmin;
