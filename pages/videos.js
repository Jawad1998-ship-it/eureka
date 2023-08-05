import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import Link from "next/link";

const Videos = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Videos"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Videos"
        imgClass="bg-3"
      />
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Videos</span>
            <h2>Video Description</h2>
          </div>
          <div className="row gap-2 w-100">
            <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center">
              <iframe
                width="550"
                height="320"
                src="https://www.youtube.com/embed/e0AAswffrFI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                width="550"
                height="320"
                src="https://www.youtube.com/embed/rW7BbIdMqFQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                width="550"
                height="320"
                src="https://www.youtube.com/embed/e2yZ2f3uEmM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Videos;
