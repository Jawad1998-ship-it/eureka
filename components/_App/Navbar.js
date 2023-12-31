import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import TopHeader from "./TopHeader";
import axios from "axios";

const Navbar = ({ headerRef }) => {
  // Add active class
  const settingURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/settings`;

  const [currentPath, setCurrentPath] = useState("");
  const [data, setData] = useState({});

  const router = useRouter();

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

  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    getData();
    setCurrentPath(router.asPath);
  }, [router]);

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header ref={headerRef} className="header-area fixed-top">
        <TopHeader />

        <div
          className="nav-area bg-dark bg-gradient
"
        >
          <div id="navbar" className="navbar-area d-flex">
            {/* <img
              src="/img/award.png"
              alt=""
              style={{ objectFit: "contain", width: "200px", padding: "5px" }}
            /> */}
            <div className="main-nav">
              <nav className="navbar navbar-expand-md navbar-light">
                <div className="container d-flex align-items-center gap-2">
                  <div className="d-none d-lg-block">
                    <Link href="/" className="navbar-brand">
                      <img
                        src="/img/logo.png"
                        style={{
                          height: "38px",
                          objectFit: "contain",
                        }}
                        alt="logo"
                      />
                    </Link>
                  </div>

                  <button
                    onClick={toggleNavbar}
                    className={classTwo}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </button>

                  <div className={classOne} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto d-flex align-items-center">
                      <li className="nav-item">
                        <Link
                          href="/"
                          // onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Home
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Company <i className="bx bx-plus"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/about"
                              className={`nav-link ${
                                currentPath == "/about/" && "active"
                              }`}
                            >
                              About
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/messages"
                              className={`nav-link ${
                                currentPath == "/messages/" && "active"
                              }`}
                            >
                              Messages
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="certifications"
                              // onClick={(e) => e.preventDefault()}
                              className="nav-link"
                            >
                              Certifications{" "}
                              {/* <i className="bx bx-plus"></i> */}
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/health-packages"
                          className={`nav-link ${
                            currentPath == "/health-packages/" && "active"
                          }`}
                        >
                          Health Packages
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/services"
                          // onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Services {/* <i className="bx bx-plus"></i> */}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Media <i className="bx bx-plus"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/videos"
                              className={`nav-link ${
                                currentPath == "/videos/" && "active"
                              }`}
                            >
                              Videos
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="photo-gallery"
                              // onClick={(e) => e.preventDefault()}
                              className="nav-link"
                            >
                              Photo Gallery{" "}
                              {/* <i className="bx bx-plus"></i> */}
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/contact/"
                          className={`nav-link ${
                            currentPath == "/contact/" && "active"
                          }`}
                        >
                          Contact
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/medical-verification`}
                        >
                          {" "}
                          <button className="default-btn">
                            Medical Verification
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
