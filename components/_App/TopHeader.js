import React, { useEffect, useState } from "react";
import axios from "axios";

const TopHeader = () => {
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
      <div className="top-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10 col-md-10 col-8">
              <ul className="header-content-left d-sm-flex">
                <li>
                  <i className="bx bx-time"></i>
                  Mon-Fri 9AM-5PM
                </li>
                <li>
                  <a href="tel:+822456974" className="d-lg-flex align-items-center justify-content-start d-md-flex gap-2">
                    <div>
                      <i className="bx bx-phone-call"></i>
                      Call Us:
                    </div>
                    <span>{data?.mobile?.split(",")[0]}</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@info.com">
                    <i className="bx bxs-paper-plane"></i>
                    Email: info@eurekamedicalbd.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-2 col-4 text-end text-sm-center">
              {/* <ul className="header-content-right text-center gap-1">
                <li>
                  <a href="https://www.facebook.com/770650982987141?ref=embed_page" target="_blank">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@eurekamedical7315" target="_blank">
                    <i className="bx bxl-youtube"></i>
                  </a>
                </li>
              </ul> */}
              <img
              src="/img/award.png"
              alt=""
              style={{ objectFit: "contain", width: "120px", padding: "5px" }}
            />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
