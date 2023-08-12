import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div className="about-area py-130">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-4 d-md-flex flex-md-column">
              <div className="about-img">
                <iframe
                  height="280"
                  src="https://www.youtube.com/embed/rW7BbIdMqFQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ width: "100%" }}
                ></iframe>

                <div className="shape-1">
                  <img
                    src="/img/about/about-shape-1.png"
                    alt="Image"
                    height="100%"
                  />
                </div>

                <div className="shape-2">
                  <img
                    src="/img/about/about-shape-2.png"
                    alt="Image"
                    height="100%"
                  />
                </div>

                <div className="shape-3">
                  <img src="/img/about/about-shape-3.png" alt="Image" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex flex-column gap-3 align-items-center justify-content-center">
              <div className="about-content">
                Medicine is the branch of health science and the sector of
                public life concerned with maintaining or restoring human health
                through the study, diagnosis, treatment and possible prevention
                of disease and injury. It is both an area of knowledge a science
                of body systems, their diseases and treatment and the applied
                practice of that knowledge.
              </div>
              <Link className="text-end w-50" href="/about">
                Read More...
              </Link>
              <Link target="_blank" href="https://eurekamedicalbd.com:2096/">
                <img
                  src="/img/Web-Mail.jpg"
                  width="200px"
                  height="200px"
                  style={{ objectFit: "contain" }}
                  alt=""
                />
              </Link>
            </div>
            {/* <div className="col-lg-3">
              <div className="about-content">
                <p>
                  Eureka Diagnostic & Medical Center, have been operation since
                  1993. That means, for over 18 years, we have been able to
                  provide our patients and referring physicians with accurate,
                  efficient and quality healthcare. Our qualified radiologists
                  and compassionate, certified technologists understand the
                  value of your time. We are committed to the fastest turnaround
                  on reports and access to view patient files online for
                  physician offices. At other area imaging facilities, you may
                  experience a delay in your appointment time due to the
                  emergency room and inpatients – not at Eureka Diagnostic &
                  Medical Centers. Here, you come first with centralized,
                  flexible scheduling. For your added convenience, both of our
                  locations offer convenient, surface level parking for easy
                  access in and out of our centers.
                </p>
              </div>
            </div> */}
            <div className="col-lg-4 d-flex flex-column gap-3">
              <div className="about-registration mt-2">
                <Link href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/signup`}>
                  <img
                    src="/img/Registration.png"
                    style={{ cursor: "pointer", width: "100%"}}
                    alt=""
                  />
                </Link>
              </div>
              <div className="d-flex gap-3 justify-content-center">
                <Link href="/contact/">
                  <img
                    style={{ cursor: "pointer" }}
                    src="/img/company-profile.jpg"
                    alt=""
                  />
                </Link>
                <Link href="/contact/">
                  <img
                    style={{ cursor: "pointer" }}
                    src="/img/guideline.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
