import Link from "next/link";

const SingleBlog = ({ blog }) => {
  const { id, title, thumbnail } = blog;

  return (
    <div className="single-blog">
      <Link href={`/blogs/${id}`} className="blog-thumbnail">
        <img src={thumbnail} alt="Image" />
      </Link>

      <span>11 May 2020</span>
      <div className="blog-content">
        <ul>
          <li>
            <Link href="#">Treatment</Link>
          </li>
        </ul>

        <Link href={`/blogs/${id}`}>
          <h3>{title}</h3>
        </Link>

        <Link href={`/blogs/${id}`} className="read-more">
          Read More <i className="bx bx-plus"></i>
        </Link>
      </div>
    </div>
  );
};

export default SingleBlog;
