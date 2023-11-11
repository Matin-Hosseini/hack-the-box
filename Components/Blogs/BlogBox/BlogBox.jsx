import "./BlogBox.css";

import { Link } from "react-router-dom";

import { BiChevronRight } from "react-icons/bi";

export default function BlogBox({ img, category, title }) {
  return (
    <Link to={"/"} className="blog-box">
      <div className="blog-box__img">
        <img src={`src/assets/images/home-page/blogs/${img}`} alt={title} />
      </div>
      <span className="blog-box__category">{category.toUpperCase()}</span>
      <h3 className="blog-box__title">
        {title}
        <div className="arrow-icon">
          <BiChevronRight />
        </div>
      </h3>
    </Link>
  );
}
