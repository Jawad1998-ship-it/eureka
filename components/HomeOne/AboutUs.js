import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div className="about-area py-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* <div className="about-img">
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
              </div> */}
              <div className="about-img">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/rW7BbIdMqFQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                  <div className="shape-1">
                    <img src="/img/about/about-shape-1.png" alt="Image" height="100%" />
                  </div>

                  <div className="shape-2">
                    <img src="/img/about/about-shape-2.png" alt="Image" height="100%" />
                  </div>

                <div className="shape-3">
                  <img src="/img/about/about-shape-3.png" alt="Image" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                {/* <span className="top-title">About Us</span>
                <h2>We are trusted The Best Certificate Healthcare</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <ul>
                  <li>
                    <i className="flaticon-tick"></i>
                    Scientific skills for getting a better result
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>A good environment for work
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Professional doctors
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Digital laboratory
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Emergency services
                  </li>
                </ul>

                <Link href="/about" className="default-btn">
                  About Us
                </Link> */}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
