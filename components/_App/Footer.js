import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const settingURL = `http://localhost:5000/api/settings`;
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
                  <img src="/img/logo.png" alt="Image" />
                </Link>

                <p>
                  Lorem ipsum dolor, sit amet earum consectetur adipisicing
                  elit. Cupiditate rerum quidem fugiat sapiente! Iusto quae
                  perspiciatis, repudiandae ipsam minus et ex, aliquid dolor
                  molestias, earum enim officiis porro obcaecati.
                </p>

                <div className="social-area">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebyoutubeook.com/"
                        target="_blank"
                      >
                        <i className="bx bxl-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
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
                  <li>
                    <Link href="#">Surgery & Radiology</Link>
                  </li>
                  <li>
                    <Link href="#">Children Care</Link>
                  </li>
                  <li>
                    <Link href="#">Orthopedics</Link>
                  </li>
                  <li>
                    <Link href="#">Nuclear Magnetic</Link>
                  </li>
                  <li>
                    <Link href="#">Eye Treatment</Link>
                  </li>
                  <li>
                    <Link href="#">X-Ray</Link>
                  </li>
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
                    <span>Mon-Tue:</span>
                    <span className="right">6:00 AM - 10:00 PM</span>
                  </li>
                  <li>
                    <span>Wed-Thu:</span>
                    <span className="right">6:00 AM - 10:00 PM</span>
                  </li>
                  <li>
                    <span>Fry:</span>
                    <span className="right">6:00 AM - 04:00 PM</span>
                  </li>
                  <li>
                    <span>Sun:</span>
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
            <p>
              Copyright {data?.copyright?.split(";")[1]}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
