import React from "react";
import Link from "next/link";

const NewsStyleOne = () => {
  return (
    <>
      <div className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">News</span>
            <h2>Our Latest News</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/blog-details" className="blog-thumbnail">
                  <img src="/img/blog-one.jpg" alt="Image" />
                </Link>

                <span>10 May 2020</span>
                <div className="blog-content">
                  <ul>
                    <li>
                      <Link href="#">Medical</Link>
                    </li>
                  </ul>

                  <Link href="/blog-details">
                    <h3>SPEECH AT STRATOSPHERE HOTEL & CASINO CONVENTION HALL IN LAS VEGAS USA 2014</h3>
                  </Link>

                  <Link href="/blog-details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/blog-details" className="blog-thumbnail">
                  <img src="/img/blog-two.jpg" alt="Image" />
                </Link>

                <span>11 May 2020</span>
                <div className="blog-content">
                  <ul>
                    <li>
                      <Link href="#">Treatment</Link>
                    </li>
                  </ul>

                  <Link href="/blog-details">
                    <h3>BEST QUALITY LEADERSHIP AWARD FROM DAVID BREDFORD OF EUROPEAN SOCIETY FOR QUALITY RESEARCH (ESQR)</h3>
                  </Link>

                  <Link href="/blog-details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/blog-details" className="blog-thumbnail">
                  <img src="/img/blog-three.jpg" alt="Image" />
                </Link>

                <span>13 May 2020</span>
                <div className="blog-content">
                  <ul>
                    <li>
                      <Link href="#">COVID-19</Link>
                    </li>
                  </ul>

                  <Link href="/blog-details">
                    <h3>NEWS ON ITTAFAK</h3>
                  </Link>

                  <Link href="/blog-details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsStyleOne;
