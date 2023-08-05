import React from "react";
import Link from "next/link";
import Navbar from "../../../components/_App/Navbar";
import PageBanner from "../../../components/Common/PageBanner";

const ManagingDirector = () => {
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
              <img src="/img/md.jpg" alt="" />
            </div>
            <div className="col-lg-8">
              <div className="about-content">
                <p className="w-100">
                  This is a great opportunity for me to publish a ”COMPANY
                  PROFILE” and pleased to Introduce Eureka Diagnostic and
                  medical Centre which has been established in the year 1993
                  which situated at one of the most convenient location at the
                  heart of the Dhaka City. Eureka Diagnostic and medical centre
                  has received the trade license from Dhaka Municipal
                  Corporation bearing No: 0400037, from director General of
                  health services gov’t of Bangladesh bearing license no 608,
                  from Bangladesh atomic energy commission (Radiation Control
                  Division) bearing license no. 1225/2006, and ISO-9001-2000
                  CERTIFICATE from moody international. Eureka Diagnostic and
                  medical center also entitle with the international center for
                  diarrhoeal disease research, Bangladesh (ICDDRB) for
                  incineration the wastage syringe in every weeks. Eureka
                  diagnostic and medical centre have been running with
                  comprehensive computerized pathological laboratory and modern
                  X-RAY machine since 1993 with full satisfactory medical
                  report. Lot of passengers left Bangladesh for abroad after
                  confirmation of medical report by the Eureka Diagnostic and
                  medical center. Eureka Diagnostic and medical centre is
                  endowed with the qualified Pathologist, Radiologist,
                  Technologies and Radiographer for the medical check-up with
                  full responsibility those who are going to abroad. We also
                  pleased to confirmed that, we have opportunity to give
                  transport facility for carrying passengers from anywhere as an
                  when required. Eureka Diagnostic and medical center is well
                  established with the qualified Doctors, Marketing officers,
                  skilled officers and staffs for ensure the better services and
                  assure all time reliable performance. Eureka Diagnostic and
                  medical center has been enlisted from the LIBYA embassy for
                  the final medical check-up to their LIBYA going passengers. I
                  also feel proud that, mobile court of Bangladesh gov’t visited
                  our medical centre last year’s and the running years and
                  checked by the respective magistrate all documents,
                  laboratory, X-RAY Unit, manpower and founds everything is
                  perfect. Respective magistrate also thanks me for our well
                  performance and perfect activates. I would like to express my
                  heart full thanks a gratitude to my valued clients,
                  distinguished patrons’, Doctors, officers, staffs and well
                  wishes whose Co-operations and support helped us to achieve
                  the Eureka Diagnostic and medical center. MOHMMED.ASHRAF UDDIN
                  RIZVI Proprietor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagingDirector;
