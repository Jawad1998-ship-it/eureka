import { useState } from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ImagePopup from "../components/HomeOne/ImagePopup";
import Footer from "../components/_App/Footer";

const PhotoGallery = () => {
  const [openImagePopup, setOpenImagePopup] = useState({
    open: false,
    src: "",
    caption: "",
  });

  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Photo Gallery"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Photo Gallery"
        imgClass="bg-1"
      />
      <section className="pt-100 pb-70 photo-gallery">
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
                      src: "/img/photo-gallery-one.jpg",
                      caption: "",
                    };
                    return previous;
                  })
                }
              >
                <img src="/img/photo-gallery-one.jpg" alt="" height="100%" />
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
                      src: "/img/photo-gallery-two.jpg",
                      caption: "",
                    };
                    return previous;
                  })
                }
              >
                <img src="/img/photo-gallery-two.jpg" alt="" height="100%" />
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
                      src: "/img/photo-gallery-three.jpg",
                      caption: "",
                    };
                    return previous;
                  })
                }
              >
                <img src="/img/photo-gallery-three.jpg" alt="" height="100%" />
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
                      src: "/img/photo-gallery-four.jpg",
                      caption: "",
                    };
                    return previous;
                  })
                }
              >
                <img src="/img/photo-gallery-four.jpg" alt="" height="100%" />
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
                      src: "/img/photo-gallery-five.jpg",
                      caption: "",
                    };
                    return previous;
                  })
                }
              >
                <img src="/img/photo-gallery-five.jpg" alt="" height="100%" />
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
                      src: "/img/photo-gallery-six.jpg",
                      caption: "",
                    };
                    return previous;
                  })
                }
              >
                <img src="/img/photo-gallery-six.jpg" alt="" height="100%" />
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
                      src: "/img/photo-gallery-seven.jpg",
                      caption: "",
                    };
                    return previous;
                  })
                }
              >
                <img src="/img/photo-gallery-seven.jpg" alt="" height="100%" />
              </div>
            </div>
            <div className="col-3">
              {/* <div className="gallery-image">
              <img src="/img/photo-gallery-four.jpg" alt="" height="100%" />
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

export default PhotoGallery;
