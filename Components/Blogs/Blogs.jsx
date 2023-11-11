import "./Blogs.css";

import { Link } from "react-router-dom";

import { BiChevronRight } from "react-icons/bi";

//data
import blogs from "../../data/blogs";
import BlogBox from "./BlogBox/BlogBox";

export default function Blogs() {
  return (
    <div className="blogs container">
      <div className="blogs-header">
        <h3 className="blogs-header__title">Latest from our blog</h3>
        <Link
          to={"/blog/category/customer-storeis"}
          className="blogs-header__link">
          Read customer stories
          <BiChevronRight />
        </Link>
      </div>

      <div className="blogs-content">
        {blogs.map((blog) => (
          <BlogBox key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
}
