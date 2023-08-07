import axios from "axios";
import React, { useEffect, useState } from "react";

const ContactInfo = () => {
  const settingURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/settings`;
  const [data, setData] = useState({});

  const getData = () => {
    axios
      .get(settingURL)
      .then((response) => {
        const allData = response.data.data[0];
        console.log(allData);
        setData(allData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="contact-info-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 p-0">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>Bangladesh</h3>
                <p>{data?.address}</p>
              </div>
            </div>
            <div className="col-lg-9 p-0">
              <div className="single-contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.453177196228!2d90.41344061137949!3d23.73121387859468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b858b015052b%3A0x72d30115327560e7!2sEureka%20Diagnostic%20And%20Medical%20Center!5e0!3m2!1sen!2sbd!4v1691233727217!5m2!1sen!2sbd"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
