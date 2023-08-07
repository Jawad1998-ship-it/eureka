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

                <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="bx bx-share-alt"></i>
                    </span>
                    <a href="#">Share</a>
                  </div>

                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <a href="#" target="_blank">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="bx bxl-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="bx bxl-pinterest-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="post-navigation">
                  <div className="navigation-links">
                    <div className="nav-previous">
                      <a href="#">
                        <i className="bx bx-left-arrow-alt"></i> Prev Post
                      </a>
                    </div>

                    <div className="nav-next">
                      <a href="#">
                        Next Post <i className="bx bx-right-arrow-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* <div className="comments-area">
                  <h3 className="comments-title">2 Comments:</h3>

                  <ol className="comment-list">
                    <li className="comment">
                      <div className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <img
                              src="/img/blog-details/comment-img-1.jpg"
                              className="avatar"
                              alt="image"
                            />
                            <b className="fn">John Jones</b>
                            <span className="says">says:</span>
                          </div>

                          <div className="comment-metadata">
                            <a href="#">
                              <span>April 24, 2020 at 10:59 am</span>
                            </a>
                          </div>
                        </footer>

                        <div className="comment-content">
                          <p>
                            Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type.
                          </p>
                        </div>

                        <div className="reply">
                          <a href="#" className="comment-reply-link">
                            Reply
                          </a>
                        </div>
                      </div>

                      <ol className="children">
                        <li className="comment">
                          <div className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <img
                                  src="/img/blog-details/comment-img-2.jpg"
                                  className="avatar"
                                  alt="image"
                                />
                                <b className="fn">Steven Smith</b>
                                <span className="says">says:</span>
                              </div>

                              <div className="comment-metadata">
                                <a href="#">
                                  <span>April 24, 2020 at 10:59 am</span>
                                </a>
                              </div>
                            </footer>

                            <div className="comment-content">
                              <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim
                              </p>
                            </div>

                            <div className="reply">
                              <Link href="#" className="comment-reply-link">
                                Reply
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>

                    <li className="comment">
                      <div className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <img
                              src="/img/blog-details/comment-img-3.jpg"
                              className="avatar"
                              alt="image"
                            />
                            <b className="fn">John Doe</b>
                            <span className="says">says:</span>
                          </div>

                          <div className="comment-metadata">
                            <a href="#">
                              <span>April 24, 2020 at 10:59 am</span>
                            </a>
                          </div>
                        </footer>

                        <div className="comment-content">
                          <p>
                            Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type.
                          </p>
                        </div>

                        <div className="reply">
                          <Link href="#" className="comment-reply-link">
                            Reply
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ol>

                  <div className="comment-respond">
                    <h3 className="comment-reply-title">Leave a Reply</h3>

                    <form className="comment-form">
                      <p className="comment-notes">
                        <span id="email-notes">
                          Your email address will not be published.
                        </span>
                        Required fields are marked
                        <span className="required">*</span>
                      </p>
                      <p className="comment-form-author">
                        <label>
                          Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="author"
                          name="author"
                          required="required"
                        />
                      </p>
                      <p className="comment-form-email">
                        <label>
                          Email <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required="required"
                        />
                      </p>
                      <p className="comment-form-url">
                        <label>Website</label>
                        <input type="url" id="url" name="url" />
                      </p>
                      <p className="comment-form-comment">
                        <label>Comment</label>
                        <textarea
                          name="comment"
                          id="comment"
                          cols="45"
                          rows="5"
                          required="required"
                        ></textarea>
                      </p>
                      <p className="form-submit">
                        <input
                          type="submit"
                          name="submit"
                          id="submit"
                          className="submit"
                          value="Post A Comment"
                        />
                      </p>
                    </form>
                  </div>
                </div> */}
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-12">
              <div className="blog-right-sidebar">
                <BlogSidebar id={id} />
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogGrid;
