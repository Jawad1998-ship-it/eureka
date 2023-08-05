import { useState } from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ImagePopup from "../components/HomeOne/ImagePopup";
import Footer from "../components/_App/Footer";

const Certifications = () => {
  const [openImagePopup, setOpenImagePopup] = useState({
    open: false,
    src: "",
    caption: "",
  });

  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Certifications"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Certifications"
        imgClass="bg-1"
      />
      <section className="pt-100 pb-70 certifications">
        <div className="container">
          <div className="row py-3">
            <div className="col-3">
              <div
                className="gallery-image"
                onClick={() =>
                  setOpenImagePopup((previous) => {
                    previous = {
                      ...previous,
                      open: true,
                      src: "/img/certificate-one.jpg",
                      caption: "",
                    };
                    return previous;
                  })
                }
              >
                <img src="/img/certificate-one.jpg" alt="" height="100%" />
              </div>
            </div>
            <div className="col-3">
              <div
                className="gallery-image"
                onClick={() =>
                  setOpenImagePopup((previous) => {
                    previous = {
                      ...previous,
                      open: true,
                      src: "/img/certificate-two.png",
                      caption: "",
                    };
                    return previous;
                  })
                }
              >
                <img src="/img/certificate-two.png" alt="" height="100%" />
              </div>
            </div>
            <div className="col-3">
              <div
                className="gallery-image"
                onClick={() =>
                  setOpenImagePopup((previous) => {
                    previous = {
                      ...previous,
                      open: true,
                      src: "/img/certificate-three.jpg",
                      caption: "",
                    };
                    return previous;
                  })
                }
              >
                <img src="/img/certificate-three.jpg" alt="" height="100%" />
              </div>
            </div>
            <div className="col-3">
              <div
                className="gallery-image"
                onClick={() =>
                  setOpenImagePopup((previous) => {
                    previous = {
                      ...previous,
                      open: true,
                      src: "/img/certificate-four.jpg",
                      caption: "",
                    };
                    return previous;
                  })
                }
              >
                <img src="/img/certificate-four.jpg" alt="" height="100%" />
              </div>
            </div>
            {openImagePopup?.open && <ImagePopup imgDetails={openImagePopup} />}
          </div>
          <div className="row py-2">
            <div className="col-3">
              <div
                className="gallery-image"
                onClick={() =>
                  setOpenImagePopup((previous) => {
                    previous = {
                      ...previous,
                      open: true,
                      src: "/img/certificate-five.jpg",
                      caption: "",
                    };
                    return previous;
                  })
                }
              >
                <img src="/img/certificate-five.jpg" alt="" height="100%" />
              </div>
            </div>
            <div className="col-3">
              <div
                className="gallery-image"
                onClick={() =>
                  setOpenImagePopup((previous) => {
                    previous = {
                      ...previous,
                      open: true,
                      src: "/img/certificate-six.jpg",
                      caption: "",
                    };
                    return previous;
                  })
                }
              >
                <img src="/img/certificate-six.jpg" alt="" height="100%" />
              </div>
            </div>
            <div className="col-3">
              <div
                className="gallery-image"
                onClick={() =>
                  setOpenImagePopup((previous) => {
                    previous = {
                      ...previous,
                      open: true,
                      src: "/img/certificate-seven.jpg",
                      caption: "",
                    };
                    return previous;
                  })
                }
              >
                <img src="/img/certificate-seven.jpg" alt="" height="100%" />
              </div>
            </div>
            <div className="col-3">
              {/* <div className="gallery-image">
              <img src="/img/certificate-four.jpg" alt="" height="100%" />
            </div> */}
            </div>
            {openImagePopup?.open && (
              <ImagePopup
                imgDetails={openImagePopup}
                setOpenImagePopup={setOpenImagePopup}
              />
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Certifications;
