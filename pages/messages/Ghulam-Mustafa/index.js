import React from "react";
import Link from "next/link";
import Navbar from "../../../components/_App/Navbar";
import PageBanner from "../../../components/Common/PageBanner";

const GhulamMustafa = () => {
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
              <img src="/img/gulam-mustafa.jpg" alt="" />
            </div>
            <div className="col-lg-8">
              <div className="about-content">
                <p className="w-100">
                  I am pleased learn that Eureka Diagnostic & Medical Centre
                  will bring out a brochure on their professional. With the
                  upward trend of the export of manpower from Bangladesh,
                  importance of accurate and proper medical check-up of the
                  would be migrants at reasonable cost has become very essential
                  and important. I hope that Eureka Diagnostic & Medical Centre
                  will dedicate itself to develop professionalism and to extend
                  quality medical check-up service to the outgoing workers at
                  affordable and reasonable expenses. I wish them success in
                  their pursuit for professional excellence. GULAM MUSTAFA
                  President, BAIRA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GhulamMustafa;
