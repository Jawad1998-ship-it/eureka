import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const settingURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/settings`;
  const [data, setData] = useState({});

  const getData = () => {
    axios
      .get(settingURL)
      .then((response) => {
        const allData = response.data.data[0];
        setData(allData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <footer className="footer-top-area f-bg pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-delay="100"
                data-aos-duration="1200"
              >
                <Link href="/">
                  <img
                    src="/img/edmc-logo.jpeg"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "contain",
                    }}
                    alt="Image"
                  />
                </Link>

                <p>
                  Eureka Diagnostic & Medical Center, have been operation since
                  1993. That means, for over 18 years, we have been able to
                  provide our patients and referring physicians with accurate,
                  efficient and quality healthcare.
                </p>

                <div className="social-area">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/770650982987141?ref=embed_page"
                        target="_blank"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/" target="_blank">
                        <i className="bx bxl-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="1200"
              >
                <h3>Departments</h3>
                <ul>
                  <li>Pathology</li>
                  <li>Physiology</li>
                  <li>Radiology</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-widget open-time"
                data-aos="fade-in"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <h3>Opening Hours</h3>
                <ul>
                  <li>
                    <span>Saturday-Thrusday:</span>
                    <span className="right">9:00 AM - 6:00 PM</span>
                  </li>
                  <li>
                    <span>Friday:</span>
                    <span className="right">Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget contact"
                data-aos="fade-in"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                <h3>Get In Touch</h3>
                <ul>
                  <li>
                    <a href="tel:+822456974">
                      <i className="bx bx-phone-call"></i>
                      <span>Hotline:</span>
                      Phone: +88-02-9569676
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@corf.com">
                      <i className="bx bx-envelope"></i>
                      <span>Email:</span>
                      info@eurekamedicalbd.com
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-location-plus"></i>
                    <span>Address:</span>
                    41/5 Purana Palton, Box Culvert Road (1st floor) Dhaka-1000,
                    Bangladesh
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom-area">
        <div className="container">
          <div className="copy-right">
            <p>Copyright {data?.copyright?.split(";")[1]}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
