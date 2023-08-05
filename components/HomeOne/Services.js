import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="services-area bg pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Services</span>
            <h2>Comprehensive Diagnostic Services</h2>
            <p>
              Your Health, Our Priority - Discover cutting-edge diagnostics at
              Eureka Diagnostic Center. Our precise results and dedicated care
              ensure your well-being and peace of mind.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-services">
                <span className="flaticon-man"></span>
                <h3>Pathology Department</h3>
                <p>
                  Accurate analysis, rapid results. Trust our pathology services
                  for precise diagnoses you can rely on.
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-services">
                <span className="flaticon-liver"></span>
                <h3>Radiography Department</h3>
                <p>
                  Advanced imaging solutions. Our radiography department
                  delivers clear insights for better healthcare decisions.
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-services">
                <span className="flaticon-kidney"></span>
                <h3>Physical Department</h3>
                <p>
                  Comprehensive care, expert guidance. Experience tailored
                  treatments and therapies in our physical department.
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
