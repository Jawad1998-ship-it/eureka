import React, { useState, useEffect } from "react";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/_App/Footer";
import Link from "next/link";
import BlogSidebar from "../../components/Blog/BlogSidebar";
import { useRouter } from "next/router";
import { blogs } from "../../data/data";

const BlogGrid = () => {
  const [blog, setBlog] = useState({});

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    if (id) {
      const blog = blogs.find((blog) => blog.id === parseInt(id));

      setBlog((previous) => ({ ...previous, ...blog }));
    }
  }, [id]);

  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
        imgClass="bg-3"
      />

      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img src={blog.thumbnail} alt="image" />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span> <a href="#">May 19, 2020</a>
                      </li>
                      <li>
                        <span>Posted By:</span> <a href="#">John Anderson</a>
                      </li>
                    </ul>
                  </div>

                  <h3>{blog.title}</h3>

                  <p>{blog.content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogGrid;
