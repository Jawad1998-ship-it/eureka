import React, { useEffect, useState } from "react";
import axios from "axios";

const TopHeader = () => {
  const settingURL = `http://localhost:5000/api/settings`;
  const [data, setData] = useState({});

  const getData = () => {
    axios
      .get(settingURL)
      .then((response) => {
        const allData = response.data.data[0];
        console.log(allData);
        setData(allData);
        setVatId(allData.vat_type);
        // formData.append('name', data.name)
        // console.log(formData)
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
            <div className="col-lg-10 col-md-10 col-sm-6">
              <ul className="header-content-left">
                <li>
                  <i className="bx bx-time"></i>
                  Mon-Fri 9am-5pm
                </li>
                <li>
                  <a href="tel:+822456974" className="d-flex gap-2">
                    <div className="d-flex">
                      <i className="bx bx-phone-call"></i>
                      Call Us:
                    </div>
                    <span>{data?.mobile}</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@info.com">
                    <i className="bx bxs-paper-plane"></i>
                    Email: hello@info.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-2 col-sm-6">
              <ul className="header-content-right d-flex gap-1">
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
                  <a href="https://www.pinterest.com/" target="_blank">
                    <i className="bx bxl-pinterest-alt"></i>
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
      </div>
    </>
  );
};

export default TopHeader;
