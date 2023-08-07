import React, { useEffect, useState } from "react";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/_App/Footer";
import Link from "next/link";
import axios from "axios";

const HealthPackage = () => {
  const packageURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/package`;

  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get(packageURL)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Health Packages"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Health Packages"
        imgClass="bg-1"
      />
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="row text-center mx-auto">
            {data?.map((item) => (
              <div key={item?.id} className="col-sm-6 single-blog">
                <div className="blog-content d-flex flex-column align-items-center justify-content-between gap-2" style={{ cursor: "pointer" }}>
                  <h3>{item?.name}</h3>
                  <Link
                    href={`health-packages/${item?.id}`}
                    className="read-more"
                  >
                    <p>
                      {" "}
                      Read More <i className="bx bx-plus"></i>
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HealthPackage;
