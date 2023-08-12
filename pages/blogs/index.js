import { blogs } from "../../data/data";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import SingleBlog from "../../components/Common/SingleBlog";
import Footer from '../../components/_App/Footer'

const Blogs = () => {
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Blogs"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        imgClass="bg-1"
      />
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
      <Footer />
    </>
  );
};

export default Blogs;
