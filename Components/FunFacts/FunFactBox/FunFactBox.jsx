import "./FunFactBox.css";

import { Link } from "react-router-dom";

export default function FunFactBox({ title, caption, link, to }) {
  return (
    <Link to={to} className="funfact-box">
      <h3 className="funfact-box__title">{title}</h3>
      <p className="funfact-box__caption">{caption}</p>
      <span className="funfact-box__link">{link}</span>
    </Link>
  );
}
