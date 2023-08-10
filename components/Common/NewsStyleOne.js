import React from "react";
import Link from "next/link";
import SingleBlog from "./SingleBlog";
import { blogs } from "../../data/data";

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
            {blogs.map((blog) => (
              <div key={blog.id} className="col-lg-4 col-md-6">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="our-new-work-area" style={{ overflow: "hidden" }}>
        <div className="marquee">
          <div className="slide-wrapper">
            <div className="slide">
              <img src="/img/flag.png" alt="Image 2" />
            </div>
            <div className="slide">
              <img src="/img/flag2.png" alt="Image 2" />
            </div>
            <div className="slide">
              <img src="/img/flag3.png" alt="Image 2" />
            </div>
            <div className="slide">
              <img src="/img/flag4.png" alt="Image 1" />
            </div>
            <div className="slide">
              <img src="/img/flag5.png" alt="Image 2" />
            </div>
            <div className="slide">
              <img src="/img/flag.png" alt="Image 2" />
            </div>
            <div className="slide">
              <img src="/img/flag2.png" alt="Image 2" />
            </div>
            <div className="slide">
              <img src="/img/flag3.png" alt="Image 2" />
            </div>
            <div className="slide">
              <img src="/img/flag4.png" alt="Image 1" />
            </div>
            <div className="slide">
              <img src="/img/flag5.png" alt="Image 2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsStyleOne;
