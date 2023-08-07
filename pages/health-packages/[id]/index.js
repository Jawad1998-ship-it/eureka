import React, { useEffect, useState } from "react";
import Navbar from "../../../components/_App/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Subscribe from "../../../components/Common/Subscribe";
import Footer from "../../../components/_App/Footer";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const Package = () => {
  const packageURL = `http://localhost:5000/api/package`;

  const [data, setData] = useState();
  const [investigation, setInvestigation] = useState([]);
  const router = useRouter();
  const { id } = router.query; // Access the value of "id" from the URL

  const fetchData = () => {
    console.log(id);
    axios
      .get(`${packageURL}/${id}`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => console.log(err));
  };
  console.log(id);

  useEffect(() => {
    if (router.isReady) {
      fetchData();
    }
  }, [router.isReady]);

  useEffect(() => {
    const dataArray = data?.investigationNames.split(", ");
    setInvestigation(dataArray);
  }, [data]);


  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Package"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Health Packages"
        imgClass="bg-1"
      />
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="row text-center mx-auto">
            <div className="col-sm-12">
              <div className="d-flex flex-column align-items-start justify-content-center gap-2">
                <h2>{data?.name}</h2>
                <ul className="text-start fw-bold fs-5">
                  <h3>Investigation Names:</h3>
                  <ul>
                    {investigation &&
                      investigation?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                  </ul>
                  {/* <li>Delivery Time: {data?.delivery_time}</li>
                  <li>Discounted Price: {data?.discounted_price}</li>
                  <li>Price: {data?.price}</li> */}
                </ul>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Package;
