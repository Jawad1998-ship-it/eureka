import React from "react";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";
import Link from "next/link";

const messages = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Messages"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Messages"
        imgClass="bg-3"
      />

      <div className="doctors-area-two ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Messages</span>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-doctors-two">
                <img src="/img/MD.jpg" alt="" />
                <Link
                  href="/messages/ManagingDirector"
                  className="w-100 text-center"
                >
                  See more...
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-doctors-two">
                <img src="/img/generalManager.jpg" alt="Image" />
                <Link
                  href="/messages/GeneralManager"
                  className="w-100 text-center"
                >
                  See more...
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-doctors-two">
                <img src="/img/dr-sadrul-amin.jpg" alt="Image" />
                <Link
                  href="/messages/Dr-Sadrul-Amin"
                  className="w-100 text-center"
                >
                  See more...
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-doctors-two">
                <img src="/img/gulam-mustafa.jpg" alt="Image" />
                <Link
                  href="/messages/Ghulam-Mustafa"
                  className="w-100 text-center"
                >
                  See more...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default messages;
