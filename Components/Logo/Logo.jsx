import { Link } from "react-router-dom";
import "./Logo.css";

export default function Logo() {
  return (
    <h2 className="logo">
      <Link to={"/"}>
        <img src="src/assets/images/logo/logo.svg" alt="" />
      </Link>
    </h2>
  );
}
