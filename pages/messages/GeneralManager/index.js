import React from "react";
import Link from "next/link";
import Navbar from "../../../components/_App/Navbar";
import PageBanner from "../../../components/Common/PageBanner";

const GeneralManager = () => {
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
              <img src="/img/GeneralManager.jpg" alt="" />
            </div>
            <div className="col-lg-8">
              <div className="about-content">
                <p className="w-100">
                  In this auspicious moment I feel extremely delighted to
                  announce that Eureka Diagnostic & Medical Centre has Commend
                  14 (Fourteen) years of the medical service achieving with full
                  satisfactory last 5 (Five) years I have been serving as a
                  general manager is this medical centre and feel proud to give
                  better and genuine services to the passengers those who are
                  going to abroad. Eureka Diagnostic & Medical Centre has been
                  running a comprehensive computerized pathological laboratory
                  for full pathological tests and X-RAY for the chest with
                  modern X-RAY machine. I would like to thanks to our respective
                  Doctors, Marketing executive, officers, office staffs, for
                  sincere and responsibility of their works. So the Eureka
                  Diagnostic & Medical Centre has been giving the better Genuine
                  & prompt services for the abroad going passengers. I also
                  thanks to our respective clients those who are full
                  co-operative us for medical check-up for the abroad going
                  passengers, On behalf of Eureka Diagnostic & Medical Centre I
                  thank all the officers, office staffs, and respective clients
                  for their co-operation at all time. SHARIF UDDIN AHMED GENERAL
                  MANAGER
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralManager;
